// J-3: CI checker for translation _meta completeness.
//
// Source of truth:
//   - Leaf key set + zh/en values come from the in-code TRANSLATIONS module
//     (src/lib/i18n/translations.ts).
//   - Committed metadata under test: src/lib/i18n/translation-meta.json
//     structure { en: nestedMeta, zh: nestedMeta }.
//
// Checks:
//   1. Every TRANSLATIONS.en leaf has a matching committed metadata entry.
//   2. Every TRANSLATIONS.zh leaf has a matching committed metadata entry.
//   3. Every metadata entry has non-empty `label`, valid `type` ∈ string|textarea|image|url|number,
//      and numeric `maxLength` > 0.
//   4. No metadata.label still starts with the placeholder "待补全:".
//   5. (Warning, not error) Orphan metadata entries — present in committed meta
//      but missing from TRANSLATIONS body — are reported so the maintainer can prune.
//
// Exit code: non-zero on any error-level failure (1-4). Warnings only → 0.
//
// Run:  npx tsx scripts/check-i18n-meta.ts

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

const VALID_TYPES = new Set(["string", "textarea", "image", "url", "number"]);

type Meta = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

type Leaf = { pathArr: string[]; dotPath: string; value: unknown };

function collectLeaves(
  obj: Meta,
  skipKey = "_meta",
  trail: string[] = []
): Leaf[] {
  const out: Leaf[] = [];
  for (const [k, v] of Object.entries(obj)) {
    if (k === skipKey) continue;
    const next = [...trail, k];
    if (isRecord(v)) out.push(...collectLeaves(v, skipKey, next));
    else out.push({ pathArr: next, dotPath: next.join("."), value: v });
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

interface Report {
  errors: string[];
  warnings: string[];
}

function checkLang(
  lang: "en" | "zh",
  body: Meta,
  meta: Meta,
  out: Report
): void {
  const leaves = collectLeaves(body);
  const metaLeaves = collectLeaves(meta); // descend fully, no _meta to skip here

  // 1. Every body leaf must have a meta entry
  for (const leaf of leaves) {
    const entry = getAt(meta, leaf.pathArr);
    if (entry === undefined) {
      out.errors.push(
        `[${lang}] MISSING _meta entry for key "${leaf.dotPath}" — run scripts/gen-translation-meta.ts`
      );
      continue;
    }
    if (!isRecord(entry)) {
      out.errors.push(
        `[${lang}] _meta."${leaf.dotPath}" must be an object, got ${typeof entry}`
      );
      continue;
    }

    const label = (entry as Meta).label;
    const type = (entry as Meta).type;
    const maxLen = (entry as Meta).maxLength;

    if (typeof label !== "string" || label.trim() === "") {
      out.errors.push(`[${lang}] _meta."${leaf.dotPath}".label must be a non-empty string`);
    } else if (label.startsWith("待补全:")) {
      out.errors.push(
        `[${lang}] _meta."${leaf.dotPath}".label still has placeholder "${label}" — fill it in manually or run scripts/auto-fill-translation-meta.ts`
      );
    }

    if (typeof type !== "string" || !VALID_TYPES.has(type)) {
      out.errors.push(
        `[${lang}] _meta."${leaf.dotPath}".type must be one of ${Array.from(VALID_TYPES).join("|")}, got ${String(type)}`
      );
    }

    if (typeof maxLen !== "number" || !(maxLen > 0) || !Number.isFinite(maxLen)) {
      out.errors.push(
        `[${lang}] _meta."${leaf.dotPath}".maxLength must be a positive finite number, got ${String(maxLen)}`
      );
    }
  }

  // 5. Orphan warnings (meta present, body missing)
  const bodyKeys = new Set(leaves.map((l) => l.dotPath));
  for (const ml of metaLeaves) {
    // If a parent path is not an object, we walked through to some nested primitive;
    // valid meta entries are leaf objects {label,type,maxLength}. We identify an orphan
    // by the parent of the leaf being a meta entry object. Instead, orphan = any meta
    // leaf whose key set has no corresponding body leaf key with same prefix path that lives in bodyKeys.
    // Simpler: any meta leaf whose own dotPath does NOT map to a body leaf AND the parent object wasn't seen.
    // We iterate parent paths: the maximal ancestor such that the meta object at that ancestor is a valid meta entry with label/type/maxLength.
    const walkParent = (arr: string[]): string | null => {
      for (let i = arr.length; i >= 0; i--) {
        const candidate = arr.slice(0, i);
        const at = getAt(meta, candidate);
        if (
          isRecord(at) &&
          typeof (at as Meta).label === "string" &&
          typeof (at as Meta).type === "string" &&
          typeof (at as Meta).maxLength === "number"
        ) {
          return candidate.join(".");
        }
      }
      return null;
    };
    const entryKey = walkParent(ml.pathArr);
    if (entryKey && !bodyKeys.has(entryKey)) {
      out.warnings.push(
        `[${lang}] ORPHAN _meta entry for "${entryKey}" — not found among translations leaves; consider removing or adding translations key`
      );
    }
    // Only report once per entryKey
    if (entryKey) break;
  }
}

async function main() {
  let metaRaw: string;
  try {
    metaRaw = await fsAsync.readFile(META_FILE, "utf-8");
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "ENOENT") {
      console.error(
        `[check:i18n-meta] ERROR: committed translation-meta file not found at "${META_FILE}". Run "npm run gen:i18n-meta" first.`
      );
      process.exit(1);
    }
    throw err;
  }

  const metaFile = JSON.parse(metaRaw) as { en?: Meta; zh?: Meta };
  const enBody: Meta = (TRANSLATIONS.en?.translation ?? {}) as Meta;
  const zhBody: Meta = (TRANSLATIONS.zh?.translation ?? {}) as Meta;

  const report: Report = { errors: [], warnings: [] };

  if (!isRecord(metaFile.en)) {
    report.errors.push("translation-meta.json: top-level `en` must be an object");
  } else {
    checkLang("en", enBody, metaFile.en, report);
  }

  if (!isRecord(metaFile.zh)) {
    report.errors.push("translation-meta.json: top-level `zh` must be an object");
  } else {
    checkLang("zh", zhBody, metaFile.zh, report);
  }

  // Deduplicate warnings (orphan check may emit dupes)
  const uniqWarn = Array.from(new Set(report.warnings));

  if (uniqWarn.length) {
    console.log(`[check:i18n-meta] Warnings (${uniqWarn.length}):`);
    for (const w of uniqWarn) console.log("  - " + w);
  }

  if (report.errors.length) {
    console.error(
      `[check:i18n-meta] FAILED with ${report.errors.length} error(s):`
    );
    for (const e of report.errors) console.error("  ✗ " + e);
    process.exit(1);
  }

  console.log(
    `[check:i18n-meta] OK: no errors${uniqWarn.length ? ` (${uniqWarn.length} warning(s), see above)` : ""}`
  );
}

main().catch((err) => {
  console.error("[check:i18n-meta] CRASHED:", err);
  process.exit(1);
});
