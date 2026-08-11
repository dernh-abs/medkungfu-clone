// Backwards-compatibility adapter — the safety net for the staged migration.
//
// During Stage D the components switch from importing TRANSLATIONS directly to
// reading through ContentRuntime. If ContentRuntime is not yet initialised
// (e.g. `.content/` has not been seeded, or we are running in an environment
// without fs access), this adapter falls back to the original TRANSLATIONS /
// RU imports so the site keeps rendering identically.
//
// The fallback is intentionally synchronous and side-effect free.

import { TRANSLATIONS, type SupportedLanguage } from "@/lib/i18n/translations";
import { RU } from "@/lib/i18n/ru";
import type { Translations } from "./content-schema";

function lookup(obj: unknown, key: string): string | undefined {
  const value = (obj as Record<string, unknown>)[key];
  return typeof value === "string" ? value : undefined;
}

/** Resolve a dotted path ("nav.home") against a translation dict. */
export function resolve(translation: Record<string, unknown>, p: string): string | undefined {
  const parts = p.split(".");
  let cur: unknown = translation;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}

/**
 * Translation function identical in behaviour to the original LanguageProvider
 * `t()`: en/zh resolve dotted keys against the nested dict; ru resolves the
 * English text first then looks it up in the flat RU map. Falls back to the
 * English value, then to the raw key.
 */
export function compatTranslate(
  lang: SupportedLanguage,
  translations: Translations | null,
  key: string
): string {
  // Prefer UCD translations when available.
  const enDict = translations?.en ?? (TRANSLATIONS.en?.translation as Record<string, unknown>);
  const enText = lookup(enDict, key) ?? resolve(enDict, key) ?? key;

  if (lang === "ru") {
    const ruMap = translations?.ru ?? RU;
    const v = ruMap[enText];
    return typeof v === "string" ? v : enText;
  }

  const dict = translations?.[lang] ?? (TRANSLATIONS[lang]?.translation as Record<string, unknown>);
  if (dict) {
    const direct = lookup(dict, key);
    if (direct !== undefined) return direct;
    const nested = resolve(dict, key);
    if (nested !== undefined) return nested;
  }
  return enText;
}

/** Build the fallback Translations object straight from the original modules. */
export function fallbackTranslations(): Translations {
  return {
    en: TRANSLATIONS.en?.translation ?? {},
    zh: TRANSLATIONS.zh?.translation ?? {},
    ru: RU,
  };
}
