// Unified Content Document (UCD) schema.
//
// The UCD is the single logical content model that the executor mutates via
// RFC 6902 JSON Patch. Physically it is split across several JSON files under
// `.content/` (translations.json, pages/<page>.json, navigation.json,
// meta.json). `pathToPhysicalFile` maps a JSON Pointer path prefix to the
// physical file that backs it, so the loader can load only the slice a given
// patch operation touches.
//
// Keep this file dependency-free so it can be imported by both the seed script
// (Node) and runtime (browser/edge) code.

/* ------------------------------------------------------------------ */
/* Translations                                                       */
/* ------------------------------------------------------------------ */

export type SupportedLanguage = "en" | "zh" | "ru";

/** Flat key -> string map per language. Keys are stable content keys. */
export type TranslationMap = Record<string, unknown>;

export interface Translations {
  en: TranslationMap;
  zh: TranslationMap;
  ru: TranslationMap;
}

/* ------------------------------------------------------------------ */
/* Shared primitives                                                  */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  href: string;
}

export interface IconItem {
  icon: string;
}

/* ------------------------------------------------------------------ */
/* Home page sections                                                 */
/* ------------------------------------------------------------------ */

export interface HeroSection {
  statKeys: string[];
  image: string;
  imageAlt: string;
  ctaLinks: { explore: string; book: string };
}

export interface CityStripSection {
  heading: string;
  cities: { name: string; dimmed: boolean }[];
}

export interface ServicesSection {
  items: { icon: string; titleKey: string; descKey: string }[];
  linkHref: string;
  viewAllKey: string;
}

export interface TrustStatsSection {
  items: { icon: string; key: string }[];
}

export interface OurPromiseSection {
  headingKey: string;
  items: { icon: string; titleKey: string; descKey: string }[];
}

export interface MedicalProjectsSection {
  heading: string;
  items: { icon: string; titleKey: string; subtitle: string }[];
  linkHref: string;
}

export interface ServiceProcessSection {
  headingKey: string;
  items: {
    icon: string;
    number: string;
    titleKey: string;
    progress: number;
  }[];
}

export interface PatientStoriesSection {
  heading: string;
  items: { quote: string; image: string; name: string }[];
}

export interface FeaturedFaqSection {
  heading: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
  items: { question: string; answer: string; href: string }[];
}

export interface CtaSection {
  interestOptions: { value: string; label: string }[];
  messagePlaceholder: string;
}

/** Discriminated section union — every section lives under `sections.<id>`. */
export type HomeSectionId =
  | "hero"
  | "cityStrip"
  | "services"
  | "trustStats"
  | "ourPromise"
  | "medicalProjects"
  | "serviceProcess"
  | "patientStories"
  | "featuredFaq"
  | "cta";

export interface HomePageSections {
  hero: HeroSection;
  cityStrip: CityStripSection;
  services: ServicesSection;
  trustStats: TrustStatsSection;
  ourPromise: OurPromiseSection;
  medicalProjects: MedicalProjectsSection;
  serviceProcess: ServiceProcessSection;
  patientStories: PatientStoriesSection;
  featuredFaq: FeaturedFaqSection;
  cta: CtaSection;
}

export interface HomePageData {
  /** Render order of section ids. */
  order: HomeSectionId[];
  sections: HomePageSections;
}

/* ------------------------------------------------------------------ */
/* Pages (extensible)                                                 */
/* ------------------------------------------------------------------ */

export interface PagesContent {
  home: HomePageData;
  // future: about, services, hospitals, stories, faq, contact, ...
  [page: string]: unknown;
}

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export interface Navigation {
  main: NavItem[];
  footer: {
    quickLinks: NavItem[];
    supportLinks: NavItem[];
  };
}

/* ------------------------------------------------------------------ */
/* Meta + top-level UCD                                               */
/* ------------------------------------------------------------------ */

export interface ContentMeta {
  version: number;
  lastModified: string;
  siteKey: string;
  /** Schema version of the UCD itself, for future migrations. */
  schemaVersion: number;
}

export interface UnifiedContentDocument {
  translations: Translations;
  pages: PagesContent;
  navigation: Navigation;
  meta: ContentMeta;
}

/* ------------------------------------------------------------------ */
/* Path routing                                                       */
/* ------------------------------------------------------------------ */

/**
 * Map a JSON Pointer-style path (e.g. "/pages/home/sections/hero/image")
 * to the physical `.content/` file that backs it.
 *
 * Routing rules:
 *   /translations/*      -> translations.json
 *   /pages/<page>/*      -> pages/<page>.json
 *   /navigation/*        -> navigation.json
 *   /meta/*              -> meta.json
 *   (default)            -> translations.json
 */
export function pathToPhysicalFile(path: string): string {
  const p = path.startsWith("/") ? path.slice(1) : path;
  if (p.startsWith("translations")) return "translations.json";
  if (p.startsWith("pages")) {
    const segs = p.split("/");
    const page = segs[1] ?? "home";
    return `pages/${page}.json`;
  }
  if (p.startsWith("navigation")) return "navigation.json";
  if (p.startsWith("meta")) return "meta.json";
  return "translations.json";
}
