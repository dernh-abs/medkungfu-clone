// On-demand loader for the physically-split UCD files.
//
// The UCD is stored as multiple JSON files under `.content/`:
//   .content/translations.json   -> { en, zh, ru }
//   .content/pages/home.json     -> HomePageData
//   .content/navigation.json     -> Navigation
//   .content/meta.json           -> ContentMeta
//   .content/translation-cache.json -> TranslationCache
//
// ContentRuntime loads only the physical file a JSON Pointer path needs, so
// editing one page never blocks another. All access goes through the Node fs
// API on the server and a fetch-free in-memory cache on the client.

import { promises as fs } from "node:fs";
import path from "node:path";

import type {
  UnifiedContentDocument,
  Translations,
  HomePageData,
  Navigation,
  ContentMeta,
} from "./content-schema";
import { pathToPhysicalFile } from "./content-schema";

export const CONTENT_DIR = ".content";

/** In-memory cache of parsed physical files (keyed by relative file path). */
type AnyJson = Record<string, unknown>;
const cache = new Map<string, unknown>();

function abs(rel: string): string {
  return path.join(process.cwd(), CONTENT_DIR, rel);
}

async function readJsonFile<T>(rel: string): Promise<T | null> {
  if (cache.has(rel)) return cache.get(rel) as T;
  try {
    const raw = await fs.readFile(abs(rel), "utf-8");
    const parsed = JSON.parse(raw) as T;
    cache.set(rel, parsed);
    return parsed;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

/** Load only the physical file backing a JSON Pointer path prefix. */
export async function loadByPath<T = unknown>(jsonPointerPath: string): Promise<T | null> {
  const rel = pathToPhysicalFile(jsonPointerPath);
  return readJsonFile<T>(rel);
}

export async function loadTranslations(): Promise<Translations | null> {
  return readJsonFile<Translations>("translations.json");
}

export async function loadHomePage(): Promise<HomePageData | null> {
  return readJsonFile<HomePageData>("pages/home.json");
}

export async function loadNavigation(): Promise<Navigation | null> {
  return readJsonFile<Navigation>("navigation.json");
}

export async function loadMeta(): Promise<ContentMeta | null> {
  return readJsonFile<ContentMeta>("meta.json");
}

/** Load and aggregate every physical file into one virtual UCD. */
export async function loadFullDocument(): Promise<UnifiedContentDocument | null> {
  const [translations, home, navigation, meta] = await Promise.all([
    loadTranslations(),
    loadHomePage(),
    loadNavigation(),
    loadMeta(),
  ]);
  if (!translations || !home || !navigation || !meta) return null;
  return {
    translations,
    pages: { home },
    navigation,
    meta,
  } as UnifiedContentDocument;
}

/** Invalidate the in-memory cache (after a write). */
export function invalidateCache(rel?: string): void {
  if (rel) cache.delete(rel);
  else cache.clear();
}

/** Synchronous cache peek used by SSR / compat-adapter fallback. */
export function peekCached<T = AnyJson>(rel: string): T | null {
  return (cache.get(rel) as T) ?? null;
}

/** Check whether `.content/` exists (i.e. seed has run). */
export async function contentExists(): Promise<boolean> {
  try {
    await fs.access(abs("meta.json"));
    return true;
  } catch {
    return false;
  }
}
