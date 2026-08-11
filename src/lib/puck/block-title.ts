// Shared block-title resolver for the Studio outline and right-side panel.
//
// - Home-page components (hero, services, ...): resolve the first translation
//   key that actually has a value, so the outline shows "Hero · 主标题文本"
//   instead of a meaningless "Hero".
// - `pageSection`: purely self-contained — read `props.title` directly (no
//   i18n translation keys; bilingual support is a future upgrade).

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import { getSectionTranslationKeys } from "./section-translation-map";

/** Fallback display label when no translation value can be resolved. */
const FALLBACK_LABELS: Record<string, string> = {
  hero: "Hero",
  cityStrip: "City Strip",
  services: "Services",
  trustStats: "Trust Stats",
  ourPromise: "Our Promise",
  medicalProjects: "Medical Projects",
  serviceProcess: "Service Process",
  patientStories: "Patient Stories",
  featuredFaq: "Featured FAQ",
  cta: "CTA",
  pageSection: "Page Section",
};

export function resolveBlockLabel(type: string): string {
  return FALLBACK_LABELS[type] ?? type;
}

/** Resolve a dotted translation key against a (possibly nested) dict. */
function resolveNested(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return "";
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : "";
}

/** Resolve the human-readable title for a canvas block. */
export function resolveBlockTitle(
  type: string,
  props: Record<string, unknown>,
  ucd: UnifiedContentDocument | null
): string {
  if (type === "pageSection") {
    const title = typeof props.title === "string" ? props.title.trim() : "";
    if (title) return title;
    const kind = typeof props.kind === "string" ? props.kind : "";
    return kind ? `Section (${kind})` : "Section";
  }

  const keys = getSectionTranslationKeys(type, props);
  const en = ucd?.translations?.en;
  const zh = ucd?.translations?.zh;
  for (const key of keys) {
    const v = resolveNested(en, key) || resolveNested(zh, key);
    if (v.trim()) return v;
  }
  return resolveBlockLabel(type);
}
