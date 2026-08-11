// JSON Patch (RFC 6902) operation and patch-package types.
//
// Both entries (Agent API + Studio) produce PatchPackage objects that the
// single executor applies. We use `fast-json-patch`'s Operation type for
// interoperability with its `compare()` diff generator.

import type { Operation } from "fast-json-patch";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export type JsonPatchOperation = Operation;

export type PatchSource = "agent" | "studio";

export interface PatchMetadata {
  intent?: string;
  author?: string;
  timestamp: string;
  description: string;
}

export interface PatchPackage {
  id: string;
  source: PatchSource;
  operations: JsonPatchOperation[];
  metadata: PatchMetadata;
  /** Version the patch was authored against (optimistic lock). */
  baseVersion?: number;
}

export interface ValidationError {
  rule: string;
  message: string;
  path?: string;
}

export interface ValidationWarning {
  rule: string;
  message: string;
  path?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  preview: UnifiedContentDocument;
}

export interface ExecutorResult {
  success: boolean;
  newVersion: number;
  appliedOps: JsonPatchOperation[];
  error?: string;
}
