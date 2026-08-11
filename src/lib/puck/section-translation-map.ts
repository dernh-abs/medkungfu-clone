// Section → translation key mapping.
//
// The Puck right-side panel (TranslationEditor) needs to know which
// translation keys belong to the currently selected section so it can
// render EN/ZH edit fields for them.
//
// Translation keys are resolved in two ways:
//   1. Static namespaces  — e.g. `hero` section owns the `hero.*` namespace.
//   2. Dynamic key refs   — extracted from the section's own props at runtime
//      (fields like `headingKey`, or list items containing `titleKey` /
//      `descKey`). These let the editor follow whatever keys the section
//      currently references.

import translationMeta from "@/lib/i18n/translation-meta.json";

type MetaRoot = typeof translationMeta;

/** Section type → translation namespaces (prefixes in translation-meta.json). */
export const SECTION_NAMESPACES: Record<string, string[]> = {
  hero: ["hero"],
  trustStats: ["trust"],
  ourPromise: ["values"],
  medicalProjects: ["projects"],
  serviceProcess: ["process"],
  cta: ["cta"],
};

/** Section type → explicit translation keys (not covered by namespaces). */
export const SECTION_EXPLICIT_KEYS: Record<string, string[]> = {
  ourPromise: [
    "home.ourPromise",
    "home.valueDescDirect",
    "home.valueDescSpeed",
    "home.valueDescCustom",
    "home.valueDescTransparent",
  ],
  services: [
    "home.service1Title",
    "home.service1Desc",
    "home.service2Title",
    "home.service2Desc",
    "home.service3Title",
    "home.service3Desc",
    "home.service4Title",
    "home.service4Desc",
    "home.service5Title",
    "home.service5Desc",
    "home.service6Title",
    "home.service6Desc",
    "home.viewAllServices",
    "home.learnMore",
    "home.howWeHelp",
    "home.howWeHelpDesc",
  ],
};

/** Metadata for a single translation key. */
export interface TranslationKeyMeta {
  label: string;
  type: string;
  maxLength?: number;
}

/** Walk a nested object by dotted path and return the sub-object. */
function resolveNamespace(obj: unknown, namespace: string): Record<string, unknown> | null {
  const parts = namespace.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return null;
    cur = (cur as Record<string, unknown>)[part];
  }
  if (cur == null || typeof cur !== "object") return null;
  return cur as Record<string, unknown>;
}

/** Collect all leaf keys (those with a `label` metadata field) under a namespace. */
function collectKeysFromNamespace(metaEn: unknown, namespace: string): string[] {
  const ns = resolveNamespace(metaEn, namespace);
  if (!ns) return [];
  const keys: string[] = [];
  for (const k of Object.keys(ns)) {
    const v = ns[k];
    if (v != null && typeof v === "object" && "label" in (v as object)) {
      keys.push(`${namespace}.${k}`);
    }
  }
  return keys;
}

/** Extract translation key references from section props dynamically. */
export function extractKeyRefsFromProps(props: Record<string, unknown>): string[] {
  const keys: string[] = [];
  const seen = new Set<string>();

  const add = (k: string) => {
    if (k && k.includes(".") && !seen.has(k)) {
      seen.add(k);
      keys.push(k);
    }
  };

  // Direct key reference fields (field name ends with "Key").
  for (const [k, v] of Object.entries(props)) {
    if (k.endsWith("Key") && typeof v === "string") {
      add(v);
    }
  }

  // List fields (JSON strings) — items may contain *Key or "key" fields.
  for (const [, v] of Object.entries(props)) {
    if (typeof v !== "string" || !v.startsWith("[")) continue;
    try {
      const arr = JSON.parse(v);
      if (!Array.isArray(arr)) continue;
      for (const item of arr) {
        if (typeof item !== "object" || item === null) continue;
        for (const [ik, iv] of Object.entries(item as Record<string, unknown>)) {
          if ((ik.endsWith("Key") || ik === "key") && typeof iv === "string") {
            add(iv);
          }
        }
      }
    } catch {
      // Not JSON — skip.
    }
  }

  return keys;
}

/** Look up metadata for a translation key from translation-meta.json. */
export function getTranslationKeyMeta(key: string): TranslationKeyMeta | null {
  const metaEn = (translationMeta as MetaRoot).en;
  const parts = key.split(".");
  let cur: unknown = metaEn;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return null;
    cur = (cur as Record<string, unknown>)[part];
  }
  if (cur != null && typeof cur === "object" && "label" in (cur as object)) {
    const m = cur as { label: string; type?: string; maxLength?: number };
    return {
      label: m.label,
      type: m.type ?? "string",
      maxLength: m.maxLength,
    };
  }
  return null;
}

/**
 * Compute the full list of translation keys that belong to a given section.
 * Merges: static namespaces + explicit keys + dynamic key refs from props.
 * Deduplicates and preserves insertion order.
 */
export function getSectionTranslationKeys(
  sectionType: string,
  sectionProps: Record<string, unknown>
): string[] {
  const keys: string[] = [];
  const seen = new Set<string>();

  const add = (k: string) => {
    if (k && !seen.has(k)) {
      seen.add(k);
      keys.push(k);
    }
  };

  // 1. Static namespaces.
  const namespaces = SECTION_NAMESPACES[sectionType] ?? [];
  const metaEn = (translationMeta as MetaRoot).en;
  for (const ns of namespaces) {
    for (const k of collectKeysFromNamespace(metaEn, ns)) {
      add(k);
    }
  }

  // 2. Explicit keys.
  for (const k of SECTION_EXPLICIT_KEYS[sectionType] ?? []) {
    add(k);
  }

  // 3. Dynamic key refs from section props.
  for (const k of extractKeyRefsFromProps(sectionProps)) {
    add(k);
  }

  return keys;
}
