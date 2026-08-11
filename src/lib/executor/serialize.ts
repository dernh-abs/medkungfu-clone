// Serialisation helpers — split a virtual UCD into the physical `.content/`
// file tree (and re-assemble). Used by the executor + LocalContentStore.

import type { UnifiedContentDocument } from "@/lib/content/content-schema";

/** Split a UCD into { "translations.json": "...", "pages/home.json": "...", ... }. */
export function serializeToFiles(doc: UnifiedContentDocument): Map<string, string> {
  const buffers = new Map<string, string>();
  buffers.set("translations.json", JSON.stringify(doc.translations, null, 2));
  for (const [pageKey, pageData] of Object.entries(doc.pages)) {
    buffers.set(`pages/${pageKey}.json`, JSON.stringify(pageData, null, 2));
  }
  buffers.set("navigation.json", JSON.stringify(doc.navigation, null, 2));
  buffers.set("meta.json", JSON.stringify(doc.meta, null, 2));
  return buffers;
}
