import { produce } from "immer";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type {
  JsonPatchOperation,
  ValidationResult,
  ValidationError,
  ValidationWarning,
} from "@/lib/executor/patch-types";
import { applyOpToDraft } from "@/lib/executor/executor";

const WRITABLE_ROOTS = ["/translations/", "/pages/", "/navigation/"];

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

function isWritable(pointer: string): boolean {
  return WRITABLE_ROOTS.some((root) => pointer.startsWith(root));
}

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

export function validate(
  operations: JsonPatchOperation[],
  currentDoc: UnifiedContentDocument
): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  for (const op of operations) {
    if (!isWritable(op.path)) {
      errors.push({
        rule: "path-whitelist",
        message: `Path not writable: ${op.path} (only /translations, /pages, /navigation are editable)`,
        path: op.path,
      });
      continue;
    }

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
        if (existing === undefined) {
          errors.push({
            rule: "path-existence",
            message: `replace target does not exist: ${op.path}`,
            path: op.path,
          });
        }
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
        if (REQUIRED_FIELDS.has(op.path)) {
          errors.push({
            rule: "required-field",
            message: `Cannot remove required field: ${op.path}`,
            path: op.path,
          });
        }
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
        const parent = getValueByPointer(currentDoc, op.path.split("/").slice(0, -1).join("/"));
        if (Array.isArray(parent)) {
          const idxStr = op.path.split("/").pop() ?? "";
          const idx = Number(idxStr);
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
      preview: currentDoc,
    };
  }

  return { valid: errors.length === 0, errors, warnings, preview };
}
