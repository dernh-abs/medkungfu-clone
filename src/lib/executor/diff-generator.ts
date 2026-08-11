// Diff generator — produces a JSON Patch (RFC 6902) describing the difference
// between two UCD states. Uses fast-json-patch's `compare()` (read-only; we do
// NOT use its mutable applyPatch — the executor uses Immer instead).

import { compare } from "fast-json-patch";

import type { JsonPatchOperation } from "./patch-types";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

/** Generate the patch ops that transform `before` into `after`. */
export function generateDiff(
  before: UnifiedContentDocument,
  after: UnifiedContentDocument
): JsonPatchOperation[] {
  return compare(before, after) as JsonPatchOperation[];
}
