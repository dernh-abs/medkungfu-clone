// Inverse patch generation — enables Undo.
//
// For each op (in reverse order) produce the op that undoes it:
//   add     -> remove
//   remove  -> add (with the original value)
//   replace -> replace (with the original value)
//   move    -> move (swap from/path)
//   copy    -> remove
//   test    -> test (no-op)
//   get     -> get (read-only, no inverse needed)

import type { JsonPatchOperation } from "./patch-types";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

/** Navigate a JSON Pointer path on a plain (non-draft) document. */
function getValueByPointer(doc: unknown, pointer: string): unknown {
  const parts = pointer.split("/").filter(Boolean);
  let cur: unknown = doc;
  for (const part of parts) {
    if (Array.isArray(cur)) {
      cur = cur[Number(part)];
    } else if (cur && typeof cur === "object") {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return cur;
}

export function generateInverse(
  ops: JsonPatchOperation[],
  doc: UnifiedContentDocument
): JsonPatchOperation[] {
  return ops
    .slice()
    .reverse()
    .map((op): JsonPatchOperation => {
      switch (op.op) {
        case "add":
          return { op: "remove", path: op.path };
        case "remove":
          return { op: "add", path: op.path, value: getValueByPointer(doc, op.path) };
        case "replace":
          return { op: "replace", path: op.path, value: getValueByPointer(doc, op.path) };
        case "move":
          return { op: "move", from: op.path, path: op.from ?? "" };
        case "copy":
          return { op: "remove", path: op.path };
        case "test":
          return op;
        case "_get":
          // No inverse for a read-only op; keep it as-is.
          return op;
        default: {
          const _exhaustive: never = op;
          void _exhaustive;
          return op;
        }
      }
    });
}
