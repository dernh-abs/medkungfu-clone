// Studio API — POST /api/studio/rollback
//
// Stage F — arbitrary version rollback.
//
// Given { targetVersion: N } where N < current.version, reconstructs the
// document at version N by reading its stored snapshot, computes the diff
// from currentDoc → targetSnapshot using generateDiff(), and submits that
// diff as a "studio" patch through the single executor.
//
// Using generateDiff() (instead of replaying inverse patches) is simpler:
// it produces a single atomic patch set regardless of how many versions
// were skipped. The new version record correctly shows source:"studio"
// with description "Rollback to v{N}".

import { NextRequest, NextResponse } from "next/server";

import { execute } from "@/lib/executor/executor";
import { generateDiff } from "@/lib/executor/diff-generator";
import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import { createContentStore, createVersionStore } from "@/lib/contracts/factory";
import type { PatchPackage } from "@/lib/executor/patch-types";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

interface RollbackRequestBody {
  targetVersion: number;
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
  let body: RollbackRequestBody;
  try {
    body = (await request.json()) as RollbackRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { targetVersion } = body;
  if (!Number.isInteger(targetVersion) || targetVersion < 1) {
    return NextResponse.json(
      { success: false, error: "Invalid 'targetVersion': expected integer >= 1" },
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

  if (targetVersion >= currentDoc.meta.version) {
    return NextResponse.json(
      {
        success: false,
        error:
          `Cannot rollback to v${targetVersion}: must be below current v${currentDoc.meta.version}`,
      },
      { status: 400 }
    );
  }

  const versionStore = createVersionStore();
  const targetEntry = await versionStore.get(targetVersion);
  if (!targetEntry) {
    return NextResponse.json(
      { success: false, error: `Version ${targetVersion} not found` },
      { status: 404 }
    );
  }

  const targetDoc = targetEntry.document as UnifiedContentDocument;
  const operations = generateDiff(currentDoc, targetDoc);

  if (operations.length === 0) {
    return NextResponse.json({
      success: true,
      rollback: false,
      reason: "Document already matches target version",
      newVersion: currentDoc.meta.version,
      targetVersion,
    });
  }

  const patch: PatchPackage = {
    id: crypto.randomUUID(),
    source: "studio",
    operations,
    metadata: {
      timestamp: new Date().toISOString(),
      description: `Rollback to v${targetVersion}`,
      intent: "rollback",
    },
    baseVersion: currentDoc.meta.version,
  };

  const contentStore = createContentStore();
  const result = await execute(patch, currentDoc, { contentStore, versionStore });

  if (!result.success) {
    const status = result.conflict ? 409 : 500;
    return NextResponse.json(
      {
        success: false,
        conflict: result.conflict,
        expectedVersion: result.expectedVersion,
        actualVersion: result.actualVersion,
        error: result.error,
      },
      { status }
    );
  }

  return NextResponse.json({
    success: true,
    rollback: true,
    newVersion: result.newVersion,
    targetVersion,
    opsCount: result.appliedOps.length,
  });
}
