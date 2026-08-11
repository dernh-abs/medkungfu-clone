// Studio API — POST /api/studio/draft
//
// Draft operations: save, load, list, discard.
//
// Body: { action: "save" | "load" | "list" | "discard", page?, draftId?, document?, puckData? }
// Save:   { action: "save", page, document, puckData?, draftId? }
//         → if draftId exists, update; otherwise create new
// Load:   { action: "load", draftId } or { action: "load", page } (loads active draft)
// List:   { action: "list", page?, status? }
// Discard:{ action: "discard", draftId }

import { NextRequest, NextResponse } from "next/server";

import {
  saveDraft,
  updateDraft,
  getDraft,
  getActiveDraft,
  listDrafts,
  discardDraft,
  type DraftStatus,
} from "@/lib/executor/draft-store";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

interface DraftRequestBody {
  action: "save" | "load" | "list" | "discard";
  page?: string;
  draftId?: string;
  document?: UnifiedContentDocument;
  puckData?: unknown;
  status?: DraftStatus;
  author?: string;
}

export async function POST(request: NextRequest) {
  let body: DraftRequestBody;
  try {
    body = (await request.json()) as DraftRequestBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  switch (body.action) {
    case "save": {
      if (!body.page || !body.document) {
        return NextResponse.json(
          { success: false, error: "Missing 'page' or 'document'" },
          { status: 400 }
        );
      }

      // Update existing draft or create new one.
      if (body.draftId) {
        const updated = await updateDraft(body.draftId, {
          document: body.document,
          puckData: body.puckData,
        });
        if (!updated) {
          return NextResponse.json(
            { success: false, error: "Draft not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({ success: true, draftId: updated.id, status: updated.status });
      }

      const entry = await saveDraft({
        page: body.page,
        document: body.document,
        puckData: body.puckData,
        author: body.author,
      });
      return NextResponse.json({ success: true, draftId: entry.id, status: entry.status });
    }

    case "load": {
      if (body.draftId) {
        const draft = await getDraft(body.draftId);
        if (!draft) {
          return NextResponse.json(
            { success: false, error: "Draft not found" },
            { status: 404 }
          );
        }
        return NextResponse.json({ success: true, exists: true, draft });
      }

      if (body.page) {
        const draft = await getActiveDraft(body.page);
        if (!draft) {
          return NextResponse.json({ success: true, exists: false });
        }
        return NextResponse.json({ success: true, exists: true, draft });
      }

      return NextResponse.json(
        { success: false, error: "Missing 'draftId' or 'page'" },
        { status: 400 }
      );
    }

    case "list": {
      const drafts = await listDrafts({
        page: body.page,
        status: body.status,
      });
      return NextResponse.json({ success: true, drafts, count: drafts.length });
    }

    case "discard": {
      if (!body.draftId) {
        return NextResponse.json(
          { success: false, error: "Missing 'draftId'" },
          { status: 400 }
        );
      }
      const deleted = await discardDraft(body.draftId);
      if (!deleted) {
        return NextResponse.json(
          { success: false, error: "Draft not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true });
    }

    default:
      return NextResponse.json(
        { success: false, error: `Unknown action: ${body.action}` },
        { status: 400 }
      );
  }
}

/** GET — list drafts for a page (convenience endpoint). */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? undefined;
  const status = searchParams.get("status") as DraftStatus | null;

  const drafts = await listDrafts({
    page: page ?? undefined,
    status: status ?? undefined,
  });
  return NextResponse.json({ success: true, drafts, count: drafts.length });
}
