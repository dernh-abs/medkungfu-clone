// Studio API — POST /api/studio/undo
//
// Undo/Redo via inverse patches.
//
// Undo:  { action: "undo" }
//   - Reads the latest version entry, generates its inverse patch,
//     and applies it through the executor (producing a new version).
// Redo:  { action: "redo", version: N }
//   - Re-applies the patch that was undone (identified by version N).
//
// Both operations go through the single executor so the version chain
// and ContentRuntime stay consistent.

import { NextRequest, NextResponse } from "next/server";

import { execute } from "@/lib/executor/executor";
import { generateInverse } from "@/lib/executor/inverse-patch";
import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import { createContentStore, createVersionStore } from "@/lib/contracts/factory";
import type { PatchPackage } from "@/lib/executor/patch-types";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

interface UndoRequestBody {
  action: "undo" | "redo";
  /** For redo: the version number whose patch was undone. */
  version?: number;
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
  let body: UndoRequestBody;
  try {
    body = (await request.json()) as UndoRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { action, version } = body;
  if (action !== "undo" && action !== "redo") {
    return NextResponse.json(
      { success: false, error: "Invalid 'action'; expected 'undo' or 'redo'" },
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

  const versionStore = createVersionStore();

  if (action === "undo") {
    // Undo the latest version: generate inverse of its patch.
    const latest = await versionStore.latest();
    if (!latest || latest.version === 1) {
      return NextResponse.json(
        { success: false, error: "Nothing to undo (already at initial version)" },
        { status: 422 }
      );
    }

    // The inverse is computed against the document state BEFORE the patch
    // was applied, which is the parent version. But generateInverse needs
    // the document at the patch's application point (the parent). We use
    // the parent version's stored document.
    const parentEntry = await versionStore.get(latest.parentVersion);
    if (!parentEntry) {
      return NextResponse.json(
        { success: false, error: "Parent version not found in store" },
        { status: 500 }
      );
    }

    const inverseOps = generateInverse(latest.patch.operations, parentEntry.document as UnifiedContentDocument);

    const patch: PatchPackage = {
      id: crypto.randomUUID(),
      source: "studio",
      operations: inverseOps,
      metadata: {
        timestamp: new Date().toISOString(),
        description: `Undo: ${latest.patch.metadata.description}`,
        intent: "undo",
      },
      baseVersion: currentDoc.meta.version,
    };

    const contentStore = createContentStore();
    const result = await execute(patch, currentDoc, { contentStore, versionStore });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      action: "undo",
      newVersion: result.newVersion,
      undoneVersion: latest.version,
    });
  }

  // Redo: re-apply the patch that was previously undone.
  if (!version) {
    return NextResponse.json(
      { success: false, error: "Redo requires 'version' field" },
      { status: 400 }
    );
  }

  const entry = await versionStore.get(version);
  if (!entry) {
    return NextResponse.json(
      { success: false, error: `Version ${version} not found` },
      { status: 404 }
    );
  }

  const patch: PatchPackage = {
    id: crypto.randomUUID(),
    source: "studio",
    operations: entry.patch.operations,
    metadata: {
      timestamp: new Date().toISOString(),
      description: `Redo: ${entry.patch.metadata.description}`,
      intent: "redo",
    },
    baseVersion: currentDoc.meta.version,
  };

  const contentStore = createContentStore();
  const result = await execute(patch, currentDoc, { contentStore, versionStore });

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    action: "redo",
    newVersion: result.newVersion,
    redoneVersion: version,
  });
}
