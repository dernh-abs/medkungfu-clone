// Build-time seed script — generates the `.content/` directory from the
// i18n TRANSLATIONS/RU modules + the manually-maintained seed-data module.
//
// Run via `npm run seed` (predev/prebuild hooks invoke it automatically).
// `npm run lint:content` runs with --validate-only to skip file generation
// and just scan components for unmapped hardcoded data.
//
// Idempotent: re-running preserves the existing version/lastModified in
// meta.json so seeding does not reset version history.

import { promises as fsAsync } from "node:fs";
import fsSync from "node:fs";
import path from "node:path";

import { TRANSLATIONS } from "../src/lib/i18n/translations";
import { RU } from "../src/lib/i18n/ru";
import { HOME_PAGE_SEED, NAVIGATION_SEED, SITE_KEY } from "../src/lib/content/seed-data";
import type {
  UnifiedContentDocument,
  Translations,
} from "../src/lib/content/content-schema";

const CONTENT_DIR = path.join(process.cwd(), ".content");
const EXTRACTION_MAP_FILE = path.join(
  process.cwd(),
  "src",
  "lib",
  "content",
  "extraction-map.json"
);

const validateOnly = process.argv.includes("--validate-only");

async function writeJson(rel: string, data: unknown): Promise<void> {
  const full = path.join(CONTENT_DIR, rel);
  await fsAsync.mkdir(path.dirname(full), { recursive: true });
  await fsAsync.writeFile(full, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

async function readIfExists(full: string): Promise<string | null> {
  try {
    return await fsAsync.readFile(full, "utf-8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

async function buildTranslations(): Promise<Translations> {
  type MetaRecord = Record<string, unknown>;
  const isRecord = (v: unknown): v is MetaRecord =>
    typeof v === "object" && v !== null && !Array.isArray(v);

  const base: Translations = {
    en: (TRANSLATIONS.en?.translation ?? {}) as MetaRecord,
    zh: (TRANSLATIONS.zh?.translation ?? {}) as MetaRecord,
    ru: RU as MetaRecord,
  };

  // Attach hand-authored `_meta` subtrees from the COMMITTED source file
  // `src/lib/i18n/translation-meta.json` so the runtime-consumed
  // `.content/translations.json` carries label/type/maxLength for every key.
  // Keeping metadata in the committed JSON (not the generated .content/)
  // means edits survive re-seeds and .gitignore keeps excluding `.content/`.
  const metaPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "i18n",
    "translation-meta.json"
  );
  const metaRaw = await readIfExists(metaPath);
  if (metaRaw) {
    try {
      const parsed = JSON.parse(metaRaw) as Partial<Record<"en" | "zh", unknown>>;
      for (const lang of ["en", "zh"] as const) {
        const langMeta = parsed[lang];
        if (isRecord(langMeta)) {
          (base[lang] as MetaRecord)._meta = langMeta;
        }
      }
    } catch {
      // translation-meta.json malformed; seed without _meta — CI will catch.
    }
  }
  return base;
}

async function buildMeta(): Promise<UnifiedContentDocument["meta"]> {
  const existing = await readIfExists(path.join(CONTENT_DIR, "meta.json"));
  if (existing) {
    try {
      const parsed = JSON.parse(existing) as UnifiedContentDocument["meta"];
      // Preserve version + lastModified across re-seeds.
      return { ...parsed, siteKey: SITE_KEY };
    } catch {
      // fall through to fresh meta
    }
  }
  return {
    siteKey: SITE_KEY,
    version: 1,
    lastModified: new Date().toISOString(),
    schemaVersion: 1,
  };
}

async function writeExtractionMap(): Promise<void> {
  const map = {
    _comment:
      "Auto-generated from src/lib/content/seed-data.ts by scripts/seed-ucd.ts. " +
      "Edit seed-data.ts and re-run `npm run seed`.",
    pages: { home: HOME_PAGE_SEED },
    navigation: NAVIGATION_SEED,
  };
  await fsAsync.mkdir(path.dirname(EXTRACTION_MAP_FILE), { recursive: true });
  await fsAsync.writeFile(EXTRACTION_MAP_FILE, JSON.stringify(map, null, 2) + "\n", "utf-8");
}

// --- Hardcoded-data scanner (validation) -----------------------------------

const CONTENT_ATTR_WHITELIST = new Set([
  "alt", "title", "aria-label", "href", "src", "placeholder", "content",
]);

interface UnmappedItem {
  file: string;
  line: number;
  pattern: string;
}

function scanForUnmappedHardcodedData(): UnmappedItem[] {
  const results: UnmappedItem[] = [];
  const root = path.join(
    process.cwd(),
    "src",
    "components",
    "sites",
    "www-medkungfu-com-363c9bc1",
    "root-8a5edab2"
  );
  let files: string[];
  try {
    files = fsSync.readdirSync(root);
  } catch {
    return results;
  }
  for (const f of files) {
    const file = path.join(root, f);
    if (!file.endsWith(".tsx")) continue;
    const source = fsSync.readFileSync(file, "utf-8");
    for (const attr of CONTENT_ATTR_WHITELIST) {
      const pattern = new RegExp(`${attr}\\s*=\\s*["']([^"']+)["']`, "g");
      let m: RegExpExecArray | null;
      while ((m = pattern.exec(source)) !== null) {
        const value = m[1];
        // Skip internal anchors and pure asset paths already in seed-data.
        if (value.startsWith("#")) continue;
        results.push({
          file: f,
          line: source.slice(0, m.index).split("\n").length,
          pattern: `${attr}="${value.slice(0, 60)}"`,
        });
      }
    }
  }
  return results;
}

async function validateExtractionMap(): Promise<void> {
  const unmapped = scanForUnmappedHardcodedData();
  if (unmapped.length > 0) {
    console.warn(`\n[seed-ucd] ${unmapped.length} hardcoded content attribute(s) found:`);
    for (const item of unmapped) {
      console.warn(`  ${item.file}:${item.line} - ${item.pattern}`);
    }
    console.warn(
      "These are candidate UCD entries. Ensure they are covered in seed-data.ts or intentionally left in-component.\n"
    );
  } else {
    console.log("[seed-ucd] No unmapped hardcoded content attributes found.");
  }
}

async function main(): Promise<void> {
  if (validateOnly) {
    console.log("[seed-ucd] --validate-only: scanning components for unmapped hardcoded data...");
    await validateExtractionMap();
    return;
  }

  console.log("[seed-ucd] Generating .content/ ...");
  const translations = await buildTranslations();
  const meta = await buildMeta();

  await writeJson("translations.json", translations);
  await writeJson("pages/home.json", HOME_PAGE_SEED);
  await writeJson("navigation.json", NAVIGATION_SEED);
  await writeJson("meta.json", meta);
  await writeExtractionMap();

  console.log("[seed-ucd] Wrote:");
  console.log("  .content/translations.json");
  console.log("  .content/pages/home.json");
  console.log("  .content/navigation.json");
  console.log("  .content/meta.json");
  console.log("  src/lib/content/extraction-map.json");

  await validateExtractionMap();
  console.log("[seed-ucd] Done.");
}

main().catch((err) => {
  console.error("[seed-ucd] FAILED:", err);
  process.exit(1);
});
