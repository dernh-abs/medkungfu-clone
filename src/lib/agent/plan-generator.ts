import type { SupportedLanguage } from "@/lib/i18n/translations";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { JsonPatchOperation } from "@/lib/executor/patch-types";
import type { Intent } from "./types";
import { resolveTarget, resolveTranslationAllLangs, fuzzyResolveSection } from "./path-resolver";
import { translate } from "./translate-service";

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
      return planAddSection(intent, currentDoc);
    case "duplicate_section":
      return planDuplicateSection(intent, currentDoc);
    case "remove_section":
      return planRemoveSection(intent);
    case "update_image":
      return planUpdateImage(intent);
    case "update_link":
      return planUpdateLink(intent);
    case "bulk_update": {
      const ops: JsonPatchOperation[] = [];
      for (const sub of intent.operations) {
        ops.push(...(await generatePlan(sub, currentDoc)));
      }
      return ops;
    }
    case "undo":
    case "redo":
    case "query":
      return [];
    default: {
      const _exhaustive: never = intent;
      void _exhaustive;
      return [];
    }
  }
}

function planUpdateText(
  intent: Extract<Intent, { type: "update_text" }>
): JsonPatchOperation[] {
  if (intent.lang) {
    const resolved = resolveTarget(intent.target, intent.lang);
    if (!resolved) {
      throw new Error(`Cannot resolve target: ${intent.target}`);
    }
    return [{ op: "replace", path: resolved.pointer, value: intent.value }];
  }
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

  let finalOrder: string[];
  if (
    intent.newOrder.length === 3 &&
    ["前面", "后面", "之前", "之后", "前", "后"].includes(intent.newOrder[2])
  ) {
    finalOrder = applyRelativeMove(currentOrder, intent.newOrder);
  } else {
    finalOrder = intent.newOrder;
  }

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
  intent: Extract<Intent, { type: "add_section" }>,
  currentDoc?: UnifiedContentDocument
): JsonPatchOperation[] {
  const sectionId = fuzzyResolveSection(intent.sectionType) ?? intent.sectionType;
  const section = createDefaultSection(sectionId);
  const ops: JsonPatchOperation[] = [
    { op: "add", path: `/pages/${intent.page}/sections/${sectionId}`, value: section },
  ];

  if (typeof intent.position === "object") {
    const { anchor, side } = intent.position;
    const pageData = currentDoc?.pages?.[intent.page] as
      | { order?: string[] }
      | undefined;
    const order = pageData?.order ? [...pageData.order] : [];
    const without = order.filter((s) => s !== sectionId);
    if (side === "end") {
      without.push(sectionId);
    } else if (side === "start") {
      without.unshift(sectionId);
    } else {
      const anchorId = fuzzyResolveSection(anchor) ?? anchor;
      const idx = without.indexOf(anchorId);
      if (idx === -1) {
        without.push(sectionId);
      } else {
        const insertAt = side === "before" ? idx : idx + 1;
        without.splice(insertAt, 0, sectionId);
      }
    }
    ops.push({
      op: "replace",
      path: `/pages/${intent.page}/order`,
      value: without,
    });
  }

  return ops;
}

function planDuplicateSection(
  intent: Extract<Intent, { type: "duplicate_section" }>,
  currentDoc?: UnifiedContentDocument
): JsonPatchOperation[] {
  const srcId = fuzzyResolveSection(intent.sectionId) ?? intent.sectionId;
  let newId = intent.newSectionId;
  if (!newId) {
    const pageData = currentDoc?.pages?.[intent.page] as
      | { sections?: Record<string, unknown>; order?: string[] }
      | undefined;
    const existingSections = new Set<string>([
      ...Object.keys(pageData?.sections ?? {}),
      ...(pageData?.order ?? []),
    ]);
    for (let i = 2; i <= 99; i += 1) {
      const candidate = `${srcId}${i}`;
      if (!existingSections.has(candidate)) {
        newId = candidate;
        break;
      }
    }
    if (!newId) throw new Error(`Cannot generate a new id for duplicate of ${srcId}`);
  }

  const pageData = currentDoc?.pages?.[intent.page] as
    | { sections?: Record<string, Record<string, unknown>>; order?: string[] }
    | undefined;
  const srcSection = pageData?.sections?.[srcId];
  if (!srcSection) {
    throw new Error(`Cannot duplicate section: source ${srcId} not found in sections`);
  }
  const cloned = JSON.parse(JSON.stringify(srcSection));

  const ops: JsonPatchOperation[] = [
    { op: "add", path: `/pages/${intent.page}/sections/${newId}`, value: cloned },
  ];
  const order = pageData?.order ? [...pageData.order] : [];
  const srcIdx = order.indexOf(srcId);
  if (srcIdx === -1) {
    order.push(newId);
  } else {
    order.splice(srcIdx + 1, 0, newId);
  }
  ops.push({
    op: "replace",
    path: `/pages/${intent.page}/order`,
    value: order,
  });
  return ops;
}

function planRemoveSection(
  intent: Extract<Intent, { type: "remove_section" }>,
  currentDoc?: UnifiedContentDocument
): JsonPatchOperation[] {
  const sectionId = fuzzyResolveSection(intent.sectionId) ?? intent.sectionId;
  const ops: JsonPatchOperation[] = [
    { op: "remove", path: `/pages/${intent.page}/sections/${sectionId}` },
  ];
  const pageData = currentDoc?.pages?.[intent.page] as
    | { order?: string[] }
    | undefined;
  const order = pageData?.order;
  if (order && order.includes(sectionId)) {
    const next = order.filter((s) => s !== sectionId);
    ops.push({
      op: "replace",
      path: `/pages/${intent.page}/order`,
      value: next,
    });
  }
  return ops;
}

function planUpdateImage(
  intent: Extract<Intent, { type: "update_image" }>
): JsonPatchOperation[] {
  const ops: JsonPatchOperation[] = [
    { op: "replace", path: intent.target, value: intent.newSrc },
  ];
  if (intent.alt) {
    const altPath = intent.target.replace(/\/image$/, "/imageAlt");
    ops.push({ op: "replace", path: altPath, value: intent.alt });
  }
  return ops;
}

function planUpdateLink(
  intent: Extract<Intent, { type: "update_link" }>
): JsonPatchOperation[] {
  const resolved = resolveTarget(intent.target, "en");
  if (!resolved) {
    throw new Error(`Cannot resolve link target: ${intent.target}`);
  }
  return [{ op: "replace", path: resolved.pointer, value: intent.newHref }];
}

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

function createDefaultSection(sectionId: string): Record<string, unknown> {
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
