// Stage 0: Deterministic rule matcher — the LLM front cache.
//
// Catches ~80% of structured edit commands (e.g. "把 hero 标题改成 XXX") with
// regex/keyword rules so they never hit the LLM. Returns null when no rule
// matches, signalling the caller to fall back to LLM parsing (stage 1).
//
// Every rule's `extract` returns an `Intent` (defined in types.ts) or null if
// the match is ambiguous. Rules share the same Intent type as the LLM parser,
// so downstream plan-generation is identical regardless of source.

import type { SupportedLanguage } from "@/lib/i18n/translations";
import type { Intent } from "./types";

interface Rule {
  /** Unique id for debugging / coverage analytics. */
  id: string;
  pattern: RegExp;
  extract: (match: RegExpMatchArray) => Intent | null;
}

const LANG_MAP: Record<string, SupportedLanguage> = {
  英文: "en",
  英文翻译: "en",
  en: "en",
  english: "en",
  中文: "zh",
  中文翻译: "zh",
  zh: "zh",
  俄语: "ru",
  俄语翻译: "ru",
  ru: "ru",
  russian: "ru",
};

/** Keywords that mean "hero" in casual Chinese commands. */
const HERO_ALIASES = new Set(["hero", "大标题", "主标题", "首屏", "banner"]);

function isHeroAlias(s: string): boolean {
  return HERO_ALIASES.has(s.toLowerCase());
}

const RULES: Rule[] = [
  // ── Language-specific text update ──────────────────────────────────────
  // "把 hero.title 的俄语改成 Добро пожаловать"
  // "将 hero 标题的英文改为 Welcome"
  // Lets ENABLE_LLM=false handle lang-tagged text edits.
  {
    id: "update_text.lang",
    pattern:
      /(?:把|将|让)\s*([\w.]+)\s*(?:标题|文本|内容)?\s*的\s*(英文|中文|俄语|英文翻译|中文翻译|俄语翻译|en|zh|ru|english|russian)\s*(?:改成|修改为|改为|换成|更改为)\s*["""']?(.+?)["""']?\s*$/i,
    extract: (m) => {
      const lang = LANG_MAP[m[2].toLowerCase()] ?? LANG_MAP[m[2]];
      if (!lang) return null;
      const target = m[1].includes("hero") && isHeroAlias(m[1]) ? "hero.title" : m[1].trim();
      return { type: "update_text", target, value: m[3].trim(), lang };
    },
  },

  // ── Generic text update (no language) ──────────────────────────────────
  // "把 hero 标题改成 XXX" / "将首页大标题修改为 XXX"
  {
    id: "update_text",
    pattern:
      /(?:把|将|让)\s*(?:首页\s*)?(hero|大标题|主标题|标题|[\w.]+)\s*(?:标题|文本|内容)?\s*(?:改成|修改为|改为|换成|更改为)\s*["""']?(.+?)["""']?\s*$/i,
    extract: (m) => {
      const raw = m[1].trim();
      const target = isHeroAlias(raw) ? "hero.title" : raw;
      return { type: "update_text", target, value: m[2].trim() };
    },
  },

  // ── Image replacement ──────────────────────────────────────────────────
  // "把 hero 图片换成 /path/to/img.jpg"
  {
    id: "update_image",
    pattern:
      /(?:把|将)\s*(hero\s*)?(?:首页\s*)?(图片|背景图|封面图|image)\s*(?:换成|改为|修改为|更改为)\s*(.+?)\s*$/i,
    extract: (m) => ({
      type: "update_image",
      target: m[1] ? "/pages/home/sections/hero/image" : m[2],
      newSrc: m[3].trim(),
    }),
  },

  // ── Link update ────────────────────────────────────────────────────────
  // "把 hero 探索链接改成 /new-path"
  {
    id: "update_link",
    pattern:
      /(?:把|将)\s*([\w.]+)\s*(?:链接|地址|href|链接地址)\s*(?:改成|修改为|改为|换成|更改为)\s*(.+?)\s*$/i,
    extract: (m) => ({
      type: "update_link",
      target: m[1].trim(),
      newHref: m[2].trim(),
    }),
  },

  // ── Remove section ─────────────────────────────────────────────────────
  // "删除 patientStories 区段" / "移除 hero"
  {
    id: "remove_section",
    pattern: /(?:删除|移除|去掉)\s*(\w+)\s*区段?/i,
    extract: (m) => ({
      type: "remove_section",
      page: "home",
      sectionId: m[1].trim(),
    }),
  },

  // ── Reorder sections ───────────────────────────────────────────────────
  // "把 patientStories 移到 services 前面" / "将 hero 移到 cta 后面"
  {
    id: "reorder_sections.relative",
    pattern:
      /(?:把|将)\s*(\w+)\s*移(?:动)?到\s*(\w+)\s*(前面|后面|之前|之后|前|后)/i,
    extract: (m) => ({
      // The plan-generator resolves relative moves into an absolute newOrder
      // by reading the current page section order from the UCD.
      type: "reorder_sections",
      page: "home",
      // Encode the relative intent as a two-element newOrder for the planner
      // to expand: [movedSection, anchorSection, position].
      // The planner rewrites this into a full newOrder before patching.
      newOrder: [m[1].trim(), m[2].trim(), m[3].trim()],
    }),
  },
];

/**
 * Try every rule in priority order. Returns the first matching Intent, or null
 * if no rule matches (caller should fall back to LLM).
 */
export function matchRule(command: string): Intent | null {
  for (const rule of RULES) {
    const m = command.match(rule.pattern);
    if (m) {
      const intent = rule.extract(m);
      if (intent) return intent;
    }
  }
  return null;
}

/** Exposed for tests / coverage tooling. */
export const _RULES = RULES;
