// Stage 2: Plan generator — converts a structured Intent into an RFC 6902
// JSON Patch operation sequence.
//
// Each Intent type maps to one or more `JsonPatchOperation`s. The path
// resolver turns human-friendly targets ("hero.title") into UCD JSON Pointers
// ("/translations/en/hero/title").
//
// Multi-language sync: `update_text` without a `lang` field updates both en
// and zh by default. A `translate` intent calls translate-service and patches
// the target language only.

import type { SupportedLanguage } from "@/lib/i18n/translations";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { JsonPatchOperation } from "@/lib/executor/patch-types";
import type { Intent } from "./types";
import { resolveTarget, resolveTranslationAllLangs, fuzzyResolveSection } from "./path-resolver";
import { translate } from "./translate-service";

/**
 * Generate the JSON Patch operations for an Intent.
 *
 * @param intent     the parsed intent
 * @param currentDoc the current UCD (needed for translate + reorder)
 * @returns          ordered list of patch operations
 */
export async function generatePlan(
  intent: Intent,
  currentDoc?: UnifiedContentDocument
): Promise<JsonPatchOperation[]> {
  switch (intent.type) {
    case "update_text":
      return planUpdateText(intent);

    case "translate":
      return await planTranslate(intent, currentDoc);

    case "reorder_sections":
      return planReorderSections(intent, currentDoc);

    case "add_section":
      return planAddSection(intent);

    case "remove_section":
      return planRemoveSection(intent);

    case "update_image":
      return planUpdateImage(intent);

    case "update_link":
      return planUpdateLink(intent);

    case "bulk_update": {
      // Flatten: recursively plan each sub-intent, preserve order.
      const ops: JsonPatchOperation[] = [];
      for (const sub of intent.operations) {
        ops.push(...(await generatePlan(sub, currentDoc)));
      }
      return ops;
    }

    default: {
      const _exhaustive: never = intent;
      void _exhaustive;
      return [];
    }
  }
}

/* -------------------------------------------------------------------------- */
/* Per-intent planners                                                        */
/* -------------------------------------------------------------------------- */

function planUpdateText(
  intent: Extract<Intent, { type: "update_text" }>
): JsonPatchOperation[] {
  if (intent.lang) {
    // Single-language update
    const resolved = resolveTarget(intent.target, intent.lang);
    if (!resolved) {
      throw new Error(`Cannot resolve target: ${intent.target}`);
    }
    return [{ op: "replace", path: resolved.pointer, value: intent.value }];
  }
  // Default: update en + zh (ru is translated separately)
  const resolved = resolveTranslationAllLangs(intent.target, ["en", "zh"]);
  return resolved.map((r) => ({
    op: "replace" as const,
    path: r.pointer,
    value: intent.value,
  }));
}

async function planTranslate(
  intent: Extract<Intent, { type: "translate" }>,
  currentDoc?: UnifiedContentDocument
): Promise<JsonPatchOperation[]> {
  if (!currentDoc) {
    throw new Error("translate intent requires currentDoc to read source text");
  }
  const sourceLang = intent.sourceLang ?? "en";
  // Read the source text from the UCD
  const sourceText = readTranslationValue(currentDoc, intent.source, sourceLang);
  if (sourceText == null) {
    throw new Error(`Source key not found in UCD: ${intent.source} (${sourceLang})`);
  }

  const result = await translate(sourceText, intent.targetLang, sourceLang);
  if (!result.success) {
    throw new Error(`Translation failed: ${result.error}\n${result.suggestion}`);
  }

  const resolved = resolveTarget(intent.source, intent.targetLang);
  if (!resolved) {
    throw new Error(`Cannot resolve target: ${intent.source}`);
  }
  return [{ op: "replace", path: resolved.pointer, value: result.translatedText }];
}

function planReorderSections(
  intent: Extract<Intent, { type: "reorder_sections" }>,
  currentDoc?: UnifiedContentDocument
): JsonPatchOperation[] {
  if (!currentDoc) {
    throw new Error("reorder_sections intent requires currentDoc");
  }

  const pageData = currentDoc.pages[intent.page] as
    | { order?: string[] }
    | undefined;
  const currentOrder: string[] = pageData?.order ?? [];
  if (currentOrder.length === 0) {
    throw new Error(`No section order found for page: ${intent.page}`);
  }

  // Two forms of newOrder:
  //   1. Absolute: newOrder is the full desired order -> replace /pages/{p}/order
  //   2. Relative (from rule-matcher): [movedSection, anchorSection, position]
  //      where position ∈ {前面, 后面, 之前, 之后, 前, 后}
  let finalOrder: string[];
  if (
    intent.newOrder.length === 3 &&
    ["前面", "后面", "之前", "之后", "前", "后"].includes(intent.newOrder[2])
  ) {
    finalOrder = applyRelativeMove(currentOrder, intent.newOrder);
  } else {
    finalOrder = intent.newOrder;
  }

  // Validate: finalOrder must be a permutation of currentOrder
  const currentSet = new Set(currentOrder);
  const finalSet = new Set(finalOrder);
  if (currentSet.size !== finalSet.size || ![...currentSet].every((s) => finalSet.has(s))) {
    throw new Error(
      `reorder_sections: newOrder must be a permutation of current sections. ` +
        `Current: [${currentOrder.join(", ")}], Requested: [${finalOrder.join(", ")}]`
    );
  }

  return [{ op: "replace", path: `/pages/${intent.page}/order`, value: finalOrder }];
}

function applyRelativeMove(
  currentOrder: string[],
  relative: string[]
): string[] {
  const [moved, anchor, posWord] = relative;
  const movedId = fuzzyResolveSection(moved) ?? moved;
  const anchorId = fuzzyResolveSection(anchor) ?? anchor;

  if (!currentOrder.includes(movedId)) {
    throw new Error(`Section not found in current order: ${movedId}`);
  }
  if (!currentOrder.includes(anchorId)) {
    throw new Error(`Anchor section not found: ${anchorId}`);
  }

  const without = currentOrder.filter((s) => s !== movedId);
  const anchorIdx = without.indexOf(anchorId);
  const insertBefore = posWord === "前面" || posWord === "之前" || posWord === "前";
  const insertAt = insertBefore ? anchorIdx : anchorIdx + 1;
  without.splice(insertAt, 0, movedId);
  return without;
}

function planAddSection(
  intent: Extract<Intent, { type: "add_section" }>
): JsonPatchOperation[] {
  const sectionId = fuzzyResolveSection(intent.sectionType) ?? intent.sectionType;
  const section = createDefaultSection(sectionId);
  return [
    { op: "add", path: `/pages/${intent.page}/sections/${sectionId}`, value: section },
  ];
}

function planRemoveSection(
  intent: Extract<Intent, { type: "remove_section" }>
): JsonPatchOperation[] {
  const sectionId = fuzzyResolveSection(intent.sectionId) ?? intent.sectionId;
  return [{ op: "remove", path: `/pages/${intent.page}/sections/${sectionId}` }];
}

function planUpdateImage(
  intent: Extract<Intent, { type: "update_image" }>
): JsonPatchOperation[] {
  const ops: JsonPatchOperation[] = [
    { op: "replace", path: intent.target, value: intent.newSrc },
  ];
  if (intent.alt) {
    // Derive the alt field path from the image path (sibling field).
    const altPath = intent.target.replace(/\/image$/, "/imageAlt");
    ops.push({ op: "replace", path: altPath, value: intent.alt });
  }
  return ops;
}

function planUpdateLink(
  intent: Extract<Intent, { type: "update_link" }>
): JsonPatchOperation[] {
  // `target` may be a section id + link hint, e.g. "hero.explore" or a raw
  // path. resolveTarget handles both.
  const resolved = resolveTarget(intent.target, "en");
  if (!resolved) {
    throw new Error(`Cannot resolve link target: ${intent.target}`);
  }
  return [{ op: "replace", path: resolved.pointer, value: intent.newHref }];
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Read a dotted translation key from the UCD (e.g. "hero.title" from en). */
function readTranslationValue(
  doc: UnifiedContentDocument,
  key: string,
  lang: SupportedLanguage
): string | null {
  const dict = doc.translations[lang] as Record<string, unknown>;
  const parts = key.split(".");
  let cur: unknown = dict;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return null;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : null;
}

/** Minimal default section factory — enough to satisfy the schema. */
function createDefaultSection(sectionId: string): Record<string, unknown> {
  // Every section has at least a heading or items array; the caller can edit
  // afterwards via the Studio editor. We return a sparse placeholder.
  switch (sectionId) {
    case "hero":
      return { statKeys: [], image: "", imageAlt: "", ctaLinks: { explore: "/", book: "/" } };
    case "cityStrip":
      return { heading: "", cities: [] };
    case "services":
      return { items: [], linkHref: "/", viewAllKey: "" };
    case "trustStats":
      return { items: [] };
    case "ourPromise":
      return { headingKey: "", items: [] };
    case "medicalProjects":
      return { heading: "", items: [], linkHref: "/" };
    case "serviceProcess":
      return { headingKey: "", items: [] };
    case "patientStories":
      return { heading: "", items: [] };
    case "featuredFaq":
      return { heading: "", subtitle: "", linkText: "", linkHref: "/", items: [] };
    case "cta":
      return { interestOptions: [], messagePlaceholder: "" };
    default:
      return {};
  }
}
