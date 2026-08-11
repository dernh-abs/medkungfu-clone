// Studio API — POST /api/studio/patch
//
// Entry 2's server-side egress: receives a JSON Patch operation sequence
// from the Studio editor, wraps it in a PatchPackage (source: "studio"),
// and hands it to the single executor.
//
// Request:  { operations: JsonPatchOperation[], description?: string, dryRun?: boolean }
// Success:  { success: true, newVersion, appliedOps }
// Dry-run:  { success: true, dryRun: true, preview }
// Error:    { success: false, error }

import { NextRequest, NextResponse } from "next/server";

import { execute } from "@/lib/executor/executor";
import { validate } from "@/lib/agent/validator";
import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import { createContentStore, createVersionStore } from "@/lib/contracts/factory";
import type { PatchPackage, JsonPatchOperation } from "@/lib/executor/patch-types";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

interface PatchRequestBody {
  operations: JsonPatchOperation[];
  description?: string;
  dryRun?: boolean;
}

async function ensureDocumentLoaded(): Promise<UnifiedContentDocument> {
  let current = getDocument();
  if (!current) {
    const loaded = await loadFullDocument();
    if (!loaded) {
      throw new Error("UCD not initialized. Run `npm run seed` first.");
    }
    commitDocument(loaded);
    current = loaded;
  }
  return current;
}

export async function POST(request: NextRequest) {
  let body: PatchRequestBody;
  try {
    body = (await request.json()) as PatchRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { operations, description, dryRun } = body;
  if (!Array.isArray(operations) || operations.length === 0) {
    return NextResponse.json(
      { success: false, error: "Missing or empty 'operations' array" },
      { status: 400 }
    );
  }

  let currentDoc: UnifiedContentDocument;
  try {
    currentDoc = await ensureDocumentLoaded();
  } catch (err) {
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }

  // Validate the patch before execution.
  const validation = validate(operations, currentDoc);
  if (!validation.valid) {
    return NextResponse.json(
      {
        success: false,
        stage: "validation",
        errors: validation.errors,
        warnings: validation.warnings,
      },
      { status: 422 }
    );
  }

  if (dryRun) {
    return NextResponse.json({
      success: true,
      dryRun: true,
      preview: validation.preview,
      warnings: validation.warnings,
    });
  }

  const patch: PatchPackage = {
    id: crypto.randomUUID(),
    source: "studio",
    operations,
    metadata: {
      timestamp: new Date().toISOString(),
      description: description ?? "Studio edit",
    },
    baseVersion: currentDoc.meta.version,
  };

  const contentStore = createContentStore();
  const versionStore = createVersionStore();

  const result = await execute(patch, currentDoc, { contentStore, versionStore });

  if (!result.success) {
    if (result.conflict) {
      return NextResponse.json(
        {
          success: false,
          stage: "conflict",
          conflict: true,
          expectedVersion: result.expectedVersion,
          actualVersion: result.actualVersion,
          error: result.error,
        },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    newVersion: result.newVersion,
    appliedOps: result.appliedOps,
  });
}
