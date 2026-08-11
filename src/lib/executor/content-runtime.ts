// ContentRuntime — the bridge between the UCD and React.
//
// Holds an in-memory copy of the UCD and exposes:
//   - translate(lang, key)        compatible with the original t()
//   - getSectionData(page, id)    for components to fetch their section data
//   - getDocument()               the current virtual UCD
//   - setDocument(doc)            replace the document (after a patch)
//   - subscribe/notify            React useSyncExternalStore glue
//
// When the document is null (e.g. `.content/` not yet loaded on the client),
// translate() falls back to the compat-adapter which reads the original
// TRANSLATIONS/RU modules — guaranteeing identical rendering during the
// staged migration (zero-invasive compatibility).

import type { SupportedLanguage } from "@/lib/i18n/translations";
import type {
  UnifiedContentDocument,
  Translations,
} from "@/lib/content/content-schema";
import { compatTranslate, fallbackTranslations } from "@/lib/content/compat-adapter";
import { subscribe, notifySubscribers } from "./notify";

type Listener = () => void;

let doc: UnifiedContentDocument | null = null;

/** Replace the in-memory document and notify all subscribers. */
export function setDocument(next: UnifiedContentDocument | null): void {
  doc = next;
  notifySubscribers();
}

/** Current virtual UCD (null until loaded). */
export function getDocument(): UnifiedContentDocument | null {
  return doc;
}

/** Translation function identical in behaviour to the original t(). */
export function translate(lang: SupportedLanguage, key: string): string {
  const translations: Translations | null = doc?.translations ?? null;
  return compatTranslate(lang, translations, key);
}

/** Fetch a section's data for a page (e.g. getSectionData("home", "hero")). */
export function getSectionData(page: string, sectionId: string): unknown {
  const pageData = doc?.pages?.[page as keyof typeof doc.pages];
  if (!pageData) return null;
  const sections = (pageData as { sections?: Record<string, unknown> }).sections;
  return sections?.[sectionId] ?? null;
}

/** Fetch the ordered section ids for a page. */
export function getSectionOrder(page: string): string[] {
  const pageData = doc?.pages?.[page as keyof typeof doc.pages];
  if (!pageData) return [];
  return (pageData as { order?: string[] }).order ?? [];
}

/** Translation dict for a language (UCD or fallback). */
export function getTranslations(lang: SupportedLanguage): Record<string, unknown> {
  if (doc?.translations) {
    if (lang === "ru") return doc.translations.ru as Record<string, unknown>;
    return doc.translations[lang] as Record<string, unknown>;
  }
  return fallbackTranslations()[lang] as Record<string, unknown>;
}

/** React useSyncExternalStore subscription. */
export function subscribeRuntime(listener: Listener): () => void {
  return subscribe(listener);
}

/** Snapshot for useSyncExternalStore (referential identity preserved). */
let snapshotVersion = 0;
export function getSnapshot(): number {
  return snapshotVersion;
}

// Bump the snapshot version whenever the document changes so
// useSyncExternalStore re-renders. setDocument calls notify which triggers
// listeners; we also bump the version here.
const _origSetDocument = setDocument;
export function _bumpSnapshot(): void {
  snapshotVersion++;
}
// Re-export setDocument that also bumps the snapshot.
export function commitDocument(next: UnifiedContentDocument | null): void {
  _origSetDocument(next);
  _bumpSnapshot();
}

// Re-export notify for the executor path that updates in place.
export { notifySubscribers } from "./notify";
