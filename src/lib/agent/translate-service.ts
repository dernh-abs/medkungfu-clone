// Translate service — three-tier fallback for cross-language translation.
//
// Tier 1: Local translation cache hit (`.content/translation-cache.json`)
//         — zero-cost, works with ENABLE_LLM=false
// Tier 2: LLM translation (ENABLE_LLM=true) — writes result back to cache
// Tier 3: If LLM is disabled and cache misses, return an error with a
//         suggestion to use the deterministic command format instead.
//
// The cache is keyed by `{sourceLang}:{targetLang}:{hash(sourceText)}` so the
// same English string translated to Russian once is reused on every subsequent
// "translate to ru" command.

import { promises as fs } from "node:fs";
import path from "node:path";

import type { SupportedLanguage } from "@/lib/i18n/translations";
import { translateWithLLM } from "./llm-client";
import { CONTENT_DIR } from "@/lib/content/content-loader";

export type TranslateResult =
  | { success: true; translatedText: string; source: "cache" | "llm" }
  | { success: false; error: string; suggestion: string };

interface CacheEntry {
  text: string;
  cachedAt: string;
}

interface TranslationCache {
  [sourceLang: string]: {
    [targetLang: string]: {
      [textHash: string]: CacheEntry;
    };
  };
}

const CACHE_FILE = path.join(process.cwd(), CONTENT_DIR, "translation-cache.json");

const LANG_NAMES: Record<SupportedLanguage, string> = {
  en: "英文",
  zh: "中文",
  ru: "俄语",
};

/** Simple non-crypto hash (djb2) — cache keys need not be secure. */
function hash(text: string): string {
  let h = 5381;
  for (let i = 0; i < text.length; i++) {
    h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(36);
}

async function loadCache(): Promise<TranslationCache> {
  try {
    const raw = await fs.readFile(CACHE_FILE, "utf-8");
    return JSON.parse(raw) as TranslationCache;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw err;
  }
}

async function writeCache(cache: TranslationCache): Promise<void> {
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
}

/**
 * Translate `text` from sourceLang to targetLang.
 * Falls back gracefully when LLM is disabled.
 */
export async function translate(
  text: string,
  targetLang: SupportedLanguage,
  sourceLang: SupportedLanguage = "en"
): Promise<TranslateResult> {
  // Tier 1: cache lookup
  const cache = await loadCache();
  const cached = cache?.[sourceLang]?.[targetLang]?.[hash(text)]?.text;
  if (cached) {
    return { success: true, translatedText: cached, source: "cache" };
  }

  // Tier 2/3: LLM (or error if disabled)
  try {
    const translated = await translateWithLLM(text, sourceLang, targetLang);
    // Write back to cache for future reuse
    if (!cache[sourceLang]) cache[sourceLang] = {};
    if (!cache[sourceLang][targetLang]) cache[sourceLang][targetLang] = {};
    cache[sourceLang][targetLang][hash(text)] = {
      text: translated,
      cachedAt: new Date().toISOString(),
    };
    await writeCache(cache);
    return { success: true, translatedText: translated, source: "llm" };
  } catch (err) {
    // LLM disabled or request failed
    return {
      success: false,
      error: (err as Error).message,
      suggestion: `或者使用确定性指令格式：把 <目标> 的${LANG_NAMES[targetLang]}改成 <翻译后的文本>`,
    };
  }
}

/** Invalidate the cache (used by tests / admin tooling). */
export async function clearCache(): Promise<void> {
  try {
    await fs.unlink(CACHE_FILE);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
  }
}
