// J-2 helper: Heuristic auto-fill for translation _meta labels.
//
// Strategy per key:
//   1. If zh translation exists (short text ≤ 16 chars):  label = zh_text
//   2. Else if en translation exists (short text ≤ 24 chars): label = en_text
//   3. Else: label = "zh前10字..."  (take zh prefix for long descriptions)
//
// It only overwrites entries whose label starts with "待补全:".
// Existing manual labels are preserved untouched.
//
// Type hints refined (overwrites only when guess was generic "string" and we
// detect strong patterns):
//   - image URLs → "image"
//   - URL-only strings → "url"
//   - email / phone patterns → "string" (unchanged)
//   - multi-sentence zh → "textarea"
//
// Persistence: reads/writes src/lib/i18n/translation-meta.json (COMMITTED),
// using the in-code TRANSLATIONS dict as the ground truth for leaf key set.
//
// Run:  npx tsx scripts/auto-fill-translation-meta.ts

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

type Meta = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

type Leaf = { path: string[]; value: unknown };

function collectLeaves(obj: Meta, trail: string[] = []): Leaf[] {
  const out: Leaf[] = [];
  for (const [k, v] of Object.entries(obj)) {
    if (k === "_meta") continue;
    if (isRecord(v)) out.push(...collectLeaves(v, [...trail, k]));
    else out.push({ path: [...trail, k], value: v });
  }
  return out;
}

function getAt(root: Meta, pathArr: string[]): unknown {
  let cur: unknown = root;
  for (const k of pathArr) {
    if (isRecord(cur)) cur = cur[k];
    else return undefined;
  }
  return cur;
}

function setAt(root: Meta, pathArr: string[], value: unknown): void {
  let cur: Meta = root;
  for (let i = 0; i < pathArr.length - 1; i++) {
    const k = pathArr[i];
    if (!isRecord(cur[k])) cur[k] = {};
    cur = cur[k] as Meta;
  }
  cur[pathArr[pathArr.length - 1]] = value;
}

function guessLabel(zhVal: unknown, enVal: unknown): string {
  const zhStr = typeof zhVal === "string" ? zhVal : "";
  const enStr = typeof enVal === "string" ? enVal : "";
  if (zhStr) {
    const short = zhStr.replace(/\s+/g, " ").trim();
    if (short.length <= 16) return short;
    // long zh: take a prefix
    const prefix = short.slice(0, 14).trim();
    return prefix + (short.length > 14 ? "…" : "");
  }
  if (enStr) {
    const short = enStr.replace(/\s+/g, " ").trim();
    if (short.length <= 24) return short;
    return short.slice(0, 22).trim() + "…";
  }
  return "";
}

function refineType(
  current: string | undefined,
  zhVal: unknown,
  enVal: unknown
): string {
  const zh = typeof zhVal === "string" ? zhVal : "";
  const en = typeof enVal === "string" ? enVal : "";
  const sample = (zh || en).trim();

  if (/^https?:\/\//i.test(sample) && /\.(png|jpe?g|gif|webp|svg|avif)(\?|#|$)/i.test(sample))
    return "image";
  if (/^https?:\/\//i.test(sample)) return "url";
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sample)) return "string";
  if (sample.length > 120 || sample.includes("\n") || /[。！？.!?]/.test(sample) && sample.length > 60)
    return "textarea";
  return current ?? "string";
}

function refineMaxLength(
  current: number | undefined,
  zhVal: unknown,
  enVal: unknown
): number {
  const zh = typeof zhVal === "string" ? zhVal : "";
  const en = typeof enVal === "string" ? enVal : "";
  const base = Math.max(zh.length, en.length);
  const suggested = Math.max(20, Math.ceil(base * 1.8) + 30);
  return current ?? suggested;
}

async function readMetaFile(): Promise<{ en: Meta; zh: Meta }> {
  try {
    const raw = await fsAsync.readFile(META_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      en: isRecord(parsed?.en) ? (parsed.en as Meta) : {},
      zh: isRecord(parsed?.zh) ? (parsed.zh as Meta) : {},
    };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return { en: {}, zh: {} };
    throw err;
  }
}

async function main() {
  // Ground truth leaf keys + zh values come from TRANSLATIONS source.
  const enSource = (TRANSLATIONS.en?.translation ?? {}) as Meta;
  const zhSource = (TRANSLATIONS.zh?.translation ?? {}) as Meta;
  const enLeaves = collectLeaves(enSource);

  const zhMap = new Map<string, unknown>();
  for (const leaf of collectLeaves(zhSource)) zhMap.set(leaf.path.join("."), leaf.value);

  const committed = await readMetaFile();
  const enMeta: Meta = JSON.parse(JSON.stringify(committed.en ?? {}));
  const zhMeta: Meta = JSON.parse(JSON.stringify(committed.zh ?? {}));

  let touched = 0;
  let zhUpdated = 0;
  let enUpdated = 0;

  // We iterate enLeaves (both langs share same key structure — 341 keys aligned).
  for (const enLeaf of enLeaves) {
    const key = enLeaf.path.join(".");
    const zhVal = zhMap.get(key);
    const enVal = enLeaf.value;

    const enEntry = getAt(enMeta, enLeaf.path) as Meta | undefined;
    if (enEntry) {
      let changed = false;
      if (
        typeof enEntry.label === "string" &&
        enEntry.label.startsWith("待补全:")
      ) {
        const hint = guessLabel(zhVal, enVal);
        if (hint) {
          enEntry.label = hint;
          changed = true;
        }
      }
      const newType = refineType(enEntry.type as string | undefined, zhVal, enVal);
      if (newType !== (enEntry.type ?? "string")) {
        enEntry.type = newType;
        changed = true;
      }
      const newLen = refineMaxLength(enEntry.maxLength as number | undefined, zhVal, enVal);
      if (enEntry.maxLength === undefined || newLen > (enEntry.maxLength as number)) {
        enEntry.maxLength = newLen;
        changed = true;
      }
      if (changed) {
        setAt(enMeta, enLeaf.path, enEntry);
        enUpdated++;
      }
    }

    const zhEntry = getAt(zhMeta, enLeaf.path) as Meta | undefined;
    if (zhEntry) {
      let changed = false;
      if (
        typeof zhEntry.label === "string" &&
        zhEntry.label.startsWith("待补全:")
      ) {
        const hint = guessLabel(zhVal, enVal);
        if (hint) {
          zhEntry.label = hint;
          changed = true;
        }
      }
      const newType = refineType(zhEntry.type as string | undefined, zhVal, enVal);
      if (newType !== (zhEntry.type ?? "string")) {
        zhEntry.type = newType;
        changed = true;
      }
      const newLen = refineMaxLength(zhEntry.maxLength as number | undefined, zhVal, enVal);
      if (zhEntry.maxLength === undefined || newLen > (zhEntry.maxLength as number)) {
        zhEntry.maxLength = newLen;
        changed = true;
      }
      if (changed) {
        setAt(zhMeta, enLeaf.path, zhEntry);
        zhUpdated++;
      }
    }

    touched++;
  }

  await fsAsync.mkdir(path.dirname(META_FILE), { recursive: true });
  await fsAsync.writeFile(
    META_FILE,
    JSON.stringify({ en: enMeta, zh: zhMeta }, null, 2) + "\n",
    "utf-8"
  );

  console.log(
    `[auto-fill-translation-meta] OK: scanned=${touched}; en entries updated=${enUpdated}; zh entries updated=${zhUpdated}`
  );
}

main().catch((err) => {
  console.error("[auto-fill-translation-meta] FAILED:", err);
  process.exit(1);
});
