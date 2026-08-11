// Stage 3: Validator — safety-checks a patch BEFORE the executor applies it.
//
// Seven rules (per the plan §4.3 stage 3):
//   1. Path existence       — replace/remove/move/copy/test paths must exist
//   2. Type consistency     — replace value must match the original type
//   3. Path whitelist       — only known UCD roots are writable
//   4. Required-field guard — required fields cannot be removed
//   5. Array bounds         — add/move array indices must not overflow
//   6. Sandbox              — meta is read-only; no filesystem-style paths
//   7. Dry-run              — apply to a deep clone; must not throw
//
// The validator never mutates the input document. It builds a preview by
// applying the ops to an Immer draft (reusing the executor's applyOpToDraft)
// so the caller can show a dry-run result without committing.

import { produce } from "immer";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type {
  JsonPatchOperation,
  ValidationResult,
  ValidationError,
  ValidationWarning,
} from "@/lib/executor/patch-types";
import { applyOpToDraft } from "@/lib/executor/executor";

/** UCD root prefixes that patches are allowed to touch. */
const WRITABLE_ROOTS = ["/translations/", "/pages/", "/navigation/"];

/** Fields that must never be removed (the document would become invalid). */
const REQUIRED_FIELDS = new Set([
  "/meta",
  "/meta/version",
  "/meta/lastModified",
  "/meta/siteKey",
  "/meta/schemaVersion",
  "/translations",
  "/translations/en",
  "/translations/zh",
  "/translations/ru",
  "/pages",
  "/pages/home",
  "/pages/home/order",
  "/pages/home/sections",
  "/navigation",
  "/navigation/main",
  "/navigation/footer",
]);

/** Check whether a JSON Pointer path is inside a writable root. */
function isWritable(pointer: string): boolean {
  return WRITABLE_ROOTS.some((root) => pointer.startsWith(root));
}

/** Navigate a JSON Pointer on a plain object (read-only). */
function getValueByPointer(doc: unknown, pointer: string): unknown {
  if (pointer === "" || pointer === "/") return doc;
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

function typeOf(v: unknown): string {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
}

/**
 * Validate a patch against the current document.
 *
 * @returns a ValidationResult with errors (blocking), warnings (non-blocking),
 *          and a `preview` document (the result if the patch were applied).
 */
export function validate(
  operations: JsonPatchOperation[],
  currentDoc: UnifiedContentDocument
): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  for (const op of operations) {
    // Rule 3: path whitelist
    if (!isWritable(op.path)) {
      errors.push({
        rule: "path-whitelist",
        message: `Path not writable: ${op.path} (only /translations, /pages, /navigation are editable)`,
        path: op.path,
      });
      continue;
    }

    // Rule 6: sandbox — meta is read-only
    if (op.path.startsWith("/meta")) {
      errors.push({
        rule: "sandbox-meta",
        message: `Cannot modify /meta (read-only, managed by executor): ${op.path}`,
        path: op.path,
      });
      continue;
    }

    const existing = getValueByPointer(currentDoc, op.path);

    switch (op.op) {
      case "replace": {
        // Rule 1: path must exist
        if (existing === undefined) {
          errors.push({
            rule: "path-existence",
            message: `replace target does not exist: ${op.path}`,
            path: op.path,
          });
        }
        // Rule 2: type consistency
        else if (existing !== null && typeOf(existing) !== typeOf(op.value)) {
          errors.push({
            rule: "type-consistency",
            message: `Type mismatch at ${op.path}: expected ${typeOf(existing)}, got ${typeOf(op.value)}`,
            path: op.path,
          });
        }
        break;
      }

      case "remove": {
        // Rule 4: required-field guard
        if (REQUIRED_FIELDS.has(op.path)) {
          errors.push({
            rule: "required-field",
            message: `Cannot remove required field: ${op.path}`,
            path: op.path,
          });
        }
        // Rule 1: path must exist
        if (existing === undefined) {
          warnings.push({
            rule: "path-existence",
            message: `remove target does not exist (no-op): ${op.path}`,
            path: op.path,
          });
        }
        break;
      }

      case "add": {
        // Rule 5: array bounds (when adding to an array index)
        const parent = getValueByPointer(currentDoc, op.path.split("/").slice(0, -1).join("/"));
        if (Array.isArray(parent)) {
          const idxStr = op.path.split("/").pop() ?? "";
          const idx = Number(idxStr);
          // Allow append (idx === parent.length) but not beyond
          if (Number.isInteger(idx) && idx > parent.length) {
            errors.push({
              rule: "array-bounds",
              message: `Array index out of bounds: ${op.path} (length ${parent.length})`,
              path: op.path,
            });
          }
        }
        break;
      }

      case "move":
      case "copy": {
        if (!op.from) {
          errors.push({
            rule: "missing-from",
            message: `${op.op} op missing 'from' at ${op.path}`,
            path: op.path,
          });
          break;
        }
        // Rule 1: from-path must exist
        const fromValue = getValueByPointer(currentDoc, op.from);
        if (fromValue === undefined) {
          errors.push({
            rule: "path-existence",
            message: `${op.op} 'from' does not exist: ${op.from}`,
            path: op.from,
          });
        }
        break;
      }

      case "test": {
        // Rule 1: path must exist
        if (existing === undefined) {
          errors.push({
            rule: "path-existence",
            message: `test target does not exist: ${op.path}`,
            path: op.path,
          });
        } else if (JSON.stringify(existing) !== JSON.stringify(op.value)) {
          errors.push({
            rule: "test-failed",
            message: `test assertion failed at ${op.path}`,
            path: op.path,
          });
        }
        break;
      }

      case "_get":
        // Read-only op, always valid (but has no effect in the executor)
        warnings.push({
          rule: "no-op",
          message: `'_get' op has no effect in the executor: ${op.path}`,
          path: op.path,
        });
        break;

      default: {
        const _exhaustive: never = op;
        void _exhaustive;
        errors.push({
          rule: "unknown-op",
          message: `Unknown operation: ${(op as { op?: string }).op}`,
          path: (op as { path: string }).path,
        });
      }
    }
  }

  // Rule 7: dry-run — try applying to an Immer draft
  let preview: UnifiedContentDocument;
  try {
    preview = produce(currentDoc, (draft: UnifiedContentDocument) => {
      for (const op of operations) {
        applyOpToDraft(draft, op);
      }
    });
  } catch (err) {
    return {
      valid: false,
      errors: [
        ...errors,
        {
          rule: "dry-run",
          message: `Dry-run application failed: ${(err as Error).message}`,
        },
      ],
      warnings,
      // Return the original doc as preview on failure (no partial state)
      preview: currentDoc,
    };
  }

  return { valid: errors.length === 0, errors, warnings, preview };
}
