// Studio API — POST /api/studio/review
//
// Review operations: submit, approve, reject, withdraw.
//
// Body: { action, draftId, note?, author? }
//   submit   → draft → review
//   approve  → review → published (calls executor via publish())
//   reject   → review → draft
//   withdraw → review → draft

import { NextRequest, NextResponse } from "next/server";

import {
  submitForReview,
  rejectReview,
  withdrawReview,
  publish,
} from "@/lib/executor/publish-workflow";
import { getDraft } from "@/lib/executor/draft-store";
import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

interface ReviewRequestBody {
  action: "submit" | "approve" | "reject" | "withdraw";
  draftId: string;
  note?: string;
  author?: string;
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
  let body: ReviewRequestBody;
  try {
    body = (await request.json()) as ReviewRequestBody;
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

  switch (body.action) {
    case "submit": {
      try {
        const draft = await submitForReview(body.draftId, body.author);
        if (!draft) {
          return NextResponse.json(
            { success: false, error: "Draft not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({ success: true, status: draft.status, draftId: draft.id });
      } catch (err) {
        return NextResponse.json(
          { success: false, error: (err as Error).message },
          { status: 422 }
        );
      }
    }

    case "approve": {
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
        return NextResponse.json(
          { success: false, error: (err as Error).message },
          { status: 422 }
        );
      }
    }

    case "reject": {
      try {
        const draft = await rejectReview(body.draftId, body.note);
        if (!draft) {
          return NextResponse.json(
            { success: false, error: "Draft not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({
          success: true,
          status: draft.status,
          draftId: draft.id,
          note: body.note,
        });
      } catch (err) {
        return NextResponse.json(
          { success: false, error: (err as Error).message },
          { status: 422 }
        );
      }
    }

    case "withdraw": {
      try {
        const draft = await withdrawReview(body.draftId);
        if (!draft) {
          return NextResponse.json(
            { success: false, error: "Draft not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({ success: true, status: draft.status, draftId: draft.id });
      } catch (err) {
        return NextResponse.json(
          { success: false, error: (err as Error).message },
          { status: 422 }
        );
      }
    }

    default:
      return NextResponse.json(
        { success: false, error: `Unknown action: ${body.action}` },
        { status: 400 }
      );
  }
}
