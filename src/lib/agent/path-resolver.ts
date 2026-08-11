// Path resolver — maps natural-language keywords to UCD JSON Pointer paths.
//
// The rule matcher and LLM parser both produce Intents whose `target` is a
// human-friendly key (e.g. "hero.title", "nav.home"). The plan generator needs
// the actual JSON Pointer into the UCD (e.g. "/translations/en/hero/title").
// This module bridges that gap with a lookup table + fuzzy matching.
//
// Two resolution modes:
//   1. Translation keys: "hero.title" -> "/translations/{lang}/hero/title"
//   2. Section data:     "hero.image" -> "/pages/home/sections/hero/image"

import type { SupportedLanguage } from "@/lib/i18n/translations";

/** A resolved UCD path, tagged so the plan generator knows how to apply it. */
export interface ResolvedPath {
  /** Full JSON Pointer, e.g. "/translations/en/hero/title". */
  pointer: string;
  /** Which physical file backs this path (for the loader). */
  physicalFile: string;
  kind: "translation" | "section-data" | "navigation" | "meta";
}

/**
 * The canonical home-page section ids. Kept in sync with seed-data.ts and
 * content-schema.ts HomeSectionId. Used to detect when a target like "hero"
 * refers to a section rather than a translation key.
 */
export const HOME_SECTION_IDS = [
  "hero",
  "cityStrip",
  "services",
  "trustStats",
  "ourPromise",
  "medicalProjects",
  "serviceProcess",
  "patientStories",
  "featuredFaq",
  "cta",
] as const;

const SECTION_FIELD_ALIASES: Record<string, string> = {
  // hero
  "hero.image": "image",
  "hero.imageAlt": "imageAlt",
  "hero.explore": "ctaLinks/explore",
  "hero.book": "ctaLinks/book",
  // services
  "services.link": "linkHref",
  // medicalProjects
  "medicalProjects.link": "linkHref",
  // featuredFaq
  "featuredFaq.link": "linkHref",
};

/**
 * Resolve a human-friendly target string to a UCD JSON Pointer.
 *
 * @param target  e.g. "hero.title", "hero.image", "nav.home", "patientStories"
 * @param lang    language for translation-key targets
 * @param page    page id (default "home") for section-data targets
 */
export function resolveTarget(
  target: string,
  lang: SupportedLanguage,
  page: string = "home"
): ResolvedPath | null {
  const t = target.trim();

  // 1. Navigation keys: nav.home, nav.projects, ...
  if (t.startsWith("nav.")) {
    // Navigation labels live in translations under the "nav" namespace.
    return {
      pointer: `/translations/${lang}/${t}`,
      physicalFile: "translations.json",
      kind: "translation",
    };
  }

  // 2. Section-data field aliases: "hero.image" -> section field
  if (SECTION_FIELD_ALIASES[t]) {
    const sectionId = t.split(".")[0];
    const field = SECTION_FIELD_ALIASES[t];
    return {
      pointer: `/pages/${page}/sections/${sectionId}/${field}`,
      physicalFile: `pages/${page}.json`,
      kind: "section-data",
    };
  }

  // 3. Bare section id: "hero" -> the whole section object
  if ((HOME_SECTION_IDS as readonly string[]).includes(t)) {
    return {
      pointer: `/pages/${page}/sections/${t}`,
      physicalFile: `pages/${page}.json`,
      kind: "section-data",
    };
  }

  // 4. Translation key with a dot path: "hero.title", "services.processPhase1"
  //    These resolve into the translations.{lang} nested dict.
  if (t.includes(".")) {
    return {
      pointer: `/translations/${lang}/${t.replace(/\./g, "/")}`,
      physicalFile: "translations.json",
      kind: "translation",
    };
  }

  // 5. Fallback: treat as a top-level translation key.
  return {
    pointer: `/translations/${lang}/${t}`,
    physicalFile: "translations.json",
    kind: "translation",
  };
}

/**
 * Resolve a translation key for ALL languages — used by update_text when no
 * specific lang is given (default behaviour: update en + zh).
 */
export function resolveTranslationAllLangs(
  target: string,
  langs: SupportedLanguage[] = ["en", "zh"]
): ResolvedPath[] {
  return langs.map((l) => resolveTarget(target, l)!).filter(Boolean);
}

/**
 * Fuzzy match a section name from a natural-language fragment.
 * e.g. "患者故事" -> "patientStories", "服务" -> "services"
 *
 * Used by the LLM parser when the command references a section by a
 * human-readable name rather than its id.
 */
const SECTION_NAME_ALIASES: Record<string, string> = {
  // English aliases
  hero: "hero",
  banner: "hero",
  services: "services",
  "patient stories": "patientStories",
  stories: "patientStories",
  projects: "medicalProjects",
  "medical projects": "medicalProjects",
  faq: "featuredFaq",
  "featured faq": "featuredFaq",
  cta: "cta",
  "call to action": "cta",
  process: "serviceProcess",
  "service process": "serviceProcess",
  promise: "ourPromise",
  "our promise": "ourPromise",
  trust: "trustStats",
  "trust stats": "trustStats",
  cities: "cityStrip",
  "city strip": "cityStrip",
};

export function fuzzyResolveSection(name: string): string | null {
  const key = name.trim().toLowerCase();
  if ((HOME_SECTION_IDS as readonly string[]).includes(key)) return key;
  return SECTION_NAME_ALIASES[key] ?? null;
}
