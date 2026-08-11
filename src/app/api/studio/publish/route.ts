// Studio API — POST /api/studio/publish
//
// Direct publish: takes a draftId, validates the draft is in "review" status,
// then publishes it via the executor (generates a new UCD version).
//
// This is a thin wrapper around the review "approve" action, exposed as a
// separate endpoint for clarity in the Studio toolbar.
//
// Body: { draftId: string }

import { NextRequest, NextResponse } from "next/server";

import { publish } from "@/lib/executor/publish-workflow";
import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

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

interface PublishRequestBody {
  draftId: string;
}

export async function POST(request: NextRequest) {
  let body: PublishRequestBody;
  try {
    body = (await request.json()) as PublishRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  if (!body.draftId) {
    return NextResponse.json(
      { success: false, error: "Missing 'draftId'" },
      { status: 400 }
    );
  }

  try {
    const currentDoc = await ensureDocumentLoaded();
    const { draft, newVersion } = await publish(body.draftId, currentDoc);
    return NextResponse.json({
      success: true,
      status: draft.status,
      draftId: draft.id,
      newVersion,
    });
  } catch (err) {
    const message = (err as Error).message;
    const isStateError = message.includes("expected 'review'");
    return NextResponse.json(
      { success: false, error: message },
      { status: isStateError ? 422 : 500 }
    );
  }
}
