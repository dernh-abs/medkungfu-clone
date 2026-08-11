// J-1: Scan TRANSLATIONS.en / TRANSLATIONS.zh nested leaf keys,
// generate (or update) a `_meta` skeleton stored in
//   src/lib/i18n/translation-meta.json  (COMMITTED, not runtime-generated)
//
// For every leaf key `foo.bar.baz` we create under:
//   en.foo.bar.baz     (inside translation-meta.json, which represents {en,zh} _meta subtrees)
//   zh.foo.bar.baz
//
// Skeleton entry fields (all overridden by existing values):
//   label:      string — Chinese display name in the right-side edit panel.
//               Prefilled with "待补全: <path>" if missing.
//   type:       "string" | "textarea" | "image" | "url" | "number" — best guess
//               from value content (presence of "http" → url, long text → textarea).
//   maxLength:  number — suggested upper bound (English char count × 1.5 + 20).
//
// Idempotent: existing fields in the meta JSON are preserved. Only newly-found
// keys get a skeleton entry. Orphan keys (missing from current translations
// but still in translation-meta.json) are left untouched — the CI script (J-3)
// will report them.
//
// NOTE: This script writes to `src/lib/i18n/translation-meta.json` (committed).
// The runtime file `.content/translations.json` is produced by `scripts/seed-ucd.ts`,
// which reads the committed meta and merges it atop the TRANSLATIONS body.
//
// Run:  npx tsx scripts/gen-translation-meta.ts

import { promises as fsAsync } from "node:fs";
import path from "node:path";
import { TRANSLATIONS } from "../src/lib/i18n/translations";

const META_FILE = path.join(
  process.cwd(),
  "src",
  "lib",
  "i18n",
  "translation-meta.json"
);

type TranslationMetaType = "string" | "textarea" | "image" | "url" | "number";

interface TranslationMetaEntry {
  label: string;
  type: TranslationMetaType;
  maxLength: number;
}

type MetaRecord = Record<string, unknown>;

// ---- Helpers ---------------------------------------------------------------

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Flatten a nested object into dot-path → leaf value. Skip the `_meta` subtree. */
function flattenLeaves(
  obj: Record<string, unknown>,
  prefix = ""
): Array<[string, string | number]> {
  const out: Array<[string, string | number]> = [];
  for (const [key, val] of Object.entries(obj)) {
    if (key === "_meta") continue; // never descend into _meta
    const full = prefix ? `${prefix}.${key}` : key;
    if (isRecord(val)) {
      out.push(...flattenLeaves(val, full));
    } else if (typeof val === "string") {
      out.push([full, val]);
    } else if (typeof val === "number") {
      out.push([full, val]);
    }
  }
  return out;
}

/** Split "foo.bar.baz" → ["foo","bar","baz"] then build nested record. */
function assignNested(root: MetaRecord, path: string, value: unknown): void {
  const keys = path.split(".");
  let cur: Record<string, unknown> = root;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const next = cur[k];
    if (!isRecord(next)) {
      cur[k] = {};
    }
    cur = cur[k] as Record<string, unknown>;
  }
  cur[keys[keys.length - 1]] = value;
}

/** Get nested value or undefined. */
function getNested(root: MetaRecord, path: string): unknown {
  const keys = path.split(".");
  let cur: unknown = root;
  for (const k of keys) {
    if (isRecord(cur)) cur = cur[k];
    else return undefined;
  }
  return cur;
}

function guessType(val: string | number): TranslationMetaType {
  if (typeof val === "number") return "number";
  const lower = val.trim();
  if (!lower) return "string";
  if (/^https?:\/\//i.test(lower)) {
    // image URLs carry extensions — otherwise treat as URL
    if (/\.(png|jpe?g|gif|webp|svg|avif)(\?|#|$)/i.test(lower)) return "image";
    return "url";
  }
  // Long text with newlines or > 120 chars → textarea
  if (lower.includes("\n") || lower.length > 120) return "textarea";
  return "string";
}

function guessMaxLength(val: string | number): number {
  const base = typeof val === "number" ? String(val).length : val.length;
  return Math.max(20, Math.ceil(base * 1.5) + 20);
}

// ---- Main ------------------------------------------------------------------

async function readMetaFile(): Promise<{ en: MetaRecord; zh: MetaRecord }> {
  try {
    const raw = await fsAsync.readFile(META_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      en: isRecord(parsed?.en) ? (parsed.en as MetaRecord) : {},
      zh: isRecord(parsed?.zh) ? (parsed.zh as MetaRecord) : {},
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return { en: {}, zh: {} };
    }
    throw err;
  }
}

async function writeMetaFile(data: { en: MetaRecord; zh: MetaRecord }): Promise<void> {
  await fsAsync.mkdir(path.dirname(META_FILE), { recursive: true });
  await fsAsync.writeFile(META_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

function buildMetaForLang(
  existingMeta: MetaRecord | undefined,
  langLeaves: Array<[string, string | number]>,
  langFlag: "en" | "zh"
): MetaRecord {
  const result: MetaRecord = existingMeta && isRecord(existingMeta)
    ? JSON.parse(JSON.stringify(existingMeta))
    : {};

  for (const [dotPath, value] of langLeaves) {
    const existing = getNested(result, dotPath) as Partial<TranslationMetaEntry> | undefined;
    const skeleton: TranslationMetaEntry = {
      label: existing?.label ?? `待补全: ${dotPath}`,
      type: existing?.type ?? guessType(value),
      maxLength: existing?.maxLength ?? guessMaxLength(value),
    };
    assignNested(result, dotPath, skeleton);
    void langFlag; // both langs use same heuristic; kept for future lang-aware logic
  }
  return result;
}

async function main() {
  const enSource = (TRANSLATIONS.en?.translation ?? {}) as Record<string, unknown>;
  const zhSource = (TRANSLATIONS.zh?.translation ?? {}) as Record<string, unknown>;
  const enLeaves = flattenLeaves(enSource);
  const zhLeaves = flattenLeaves(zhSource);

  const existing = await readMetaFile();
  const newEnMeta = buildMetaForLang(existing.en, enLeaves, "en");
  const newZhMeta = buildMetaForLang(existing.zh, zhLeaves, "zh");
  await writeMetaFile({ en: newEnMeta, zh: newZhMeta });

  const enCount = enLeaves.length;
  const zhCount = zhLeaves.length;

  console.log(
    `[gen-translation-meta] OK: en leaves=${enCount}; zh leaves=${zhCount}`
  );
  console.log(
    `[gen-translation-meta] Written ${path.relative(process.cwd(), META_FILE)}`
  );
}

main().catch((err) => {
  console.error("[gen-translation-meta] FAILED:", err);
  process.exit(1);
});
