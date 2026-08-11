// The executor — the single content write egress.
//
// Validates a patch, applies it to the UCD via Immer `produce` (only the
// modified paths are copied; unmodified subtrees share references), writes the
// result atomically through the ContentStore interface, appends a version
// entry, and notifies subscribers.

import { produce } from "immer";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type {
  PatchPackage,
  JsonPatchOperation,
  ExecutorResult,
} from "./patch-types";
import type { ContentStore } from "@/lib/contracts/content-store";
import type { VersionStore, VersionEntry } from "@/lib/contracts/version-store";
import { serializeToFiles } from "./serialize";
import { commitDocument, notifySubscribers } from "./content-runtime";

/** Light-weight RFC 6902 op application directly on an Immer draft. */
export function applyOpToDraft(draft: unknown, op: JsonPatchOperation): void {
  const parts = op.path.split("/").filter(Boolean);
  switch (op.op) {
    case "replace": {
      const parent = navigate(draft, parts.slice(0, -1));
      setKey(parent, parts[parts.length - 1], op.value);
      break;
    }
    case "add": {
      const parent = navigate(draft, parts.slice(0, -1));
      const lastKey = parts[parts.length - 1];
      if (Array.isArray(parent)) {
        parent.splice(toIndex(lastKey), 0, op.value);
      } else {
        setKey(parent, lastKey, op.value);
      }
      break;
    }
    case "remove": {
      const parent = navigate(draft, parts.slice(0, -1));
      const lastKey = parts[parts.length - 1];
      if (Array.isArray(parent)) {
        parent.splice(toIndex(lastKey), 1);
      } else {
        delete (parent as Record<string, unknown>)[lastKey];
      }
      break;
    }
    case "move": {
      if (!op.from) throw new Error(`move op missing 'from' at ${op.path}`);
      const fromParts = op.from.split("/").filter(Boolean);
      const value = navigate(draft, fromParts);
      applyOpToDraft(draft, { op: "remove", path: op.from });
      applyOpToDraft(draft, { op: "add", path: op.path, value });
      break;
    }
    case "copy": {
      if (!op.from) throw new Error(`copy op missing 'from' at ${op.path}`);
      const fromParts = op.from.split("/").filter(Boolean);
      const value = navigate(draft, fromParts);
      applyOpToDraft(draft, { op: "add", path: op.path, value });
      break;
    }
    case "test": {
      const value = navigate(draft, parts);
      if (!deepEqual(value, op.value)) {
        throw new Error(`test failed at ${op.path}`);
      }
      break;
    }
    case "_get": {
      // RFC 6902 has no "get" op; fast-json-patch extends the type with it for
      // read-only evaluation. The executor is write-only, so reject it.
      throw new Error(`Unsupported 'get' op at ${op.path}`);
    }
    default: {
      const _exhaustive: never = op;
      void _exhaustive;
    }
  }
}

function navigate(obj: unknown, parts: string[]): Record<string, unknown> | unknown[] {
  let cur: unknown = obj;
  for (const part of parts) {
    if (Array.isArray(cur)) {
      cur = cur[toIndex(part)];
    } else if (cur && typeof cur === "object") {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      throw new Error(`Cannot navigate to ${part} (parent is not an object/array)`);
    }
  }
  return cur as Record<string, unknown> | unknown[];
}

function setKey(parent: unknown, key: string, value: unknown): void {
  if (Array.isArray(parent)) {
    parent[toIndex(key)] = value;
  } else if (parent && typeof parent === "object") {
    (parent as Record<string, unknown>)[key] = value;
  } else {
    throw new Error(`Cannot set ${key} on non-object`);
  }
}

function toIndex(key: string): number {
  const n = Number(key);
  if (!Number.isInteger(n) || n < 0) throw new Error(`Invalid array index: ${key}`);
  return n;
}

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export interface ExecuteDeps {
  contentStore: ContentStore;
  versionStore: VersionStore;
}

/**
 * Apply a validated patch package. Validation is performed by the caller
 * (validator.ts) before calling execute(); execute() re-runs a dry apply
 * inside Immer to guarantee no throws.
 */
export async function execute(
  patch: PatchPackage,
  currentDoc: UnifiedContentDocument,
  deps: ExecuteDeps
): Promise<ExecutorResult> {
  let newDocument: UnifiedContentDocument;
  try {
    newDocument = produce(currentDoc, (draft: UnifiedContentDocument) => {
      for (const op of patch.operations) {
        applyOpToDraft(draft, op);
      }
      draft.meta.version = currentDoc.meta.version + 1;
      draft.meta.lastModified = new Date().toISOString();
    });
  } catch (err) {
    return {
      success: false,
      newVersion: currentDoc.meta.version,
      appliedOps: [],
      error: `Apply failed: ${(err as Error).message}`,
    };
  }

  const writeBuffer = serializeToFiles(newDocument);
  try {
    await deps.contentStore.writeAtomic(writeBuffer, currentDoc);
  } catch (err) {
    return {
      success: false,
      newVersion: currentDoc.meta.version,
      appliedOps: [],
      error: (err as Error).message,
    };
  }

  const entry: VersionEntry = {
    version: newDocument.meta.version,
    patch,
    document: newDocument,
    parentVersion: currentDoc.meta.version,
    timestamp: new Date().toISOString(),
  };
  await deps.versionStore.append(entry);

  // Update the in-memory runtime + notify React subscribers.
  commitDocument(newDocument);
  notifySubscribers();

  return {
    success: true,
    newVersion: newDocument.meta.version,
    appliedOps: patch.operations,
  };
}
