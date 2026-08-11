// Studio API — GET /api/studio/document
//
// Returns the current UCD document. Loads from .content/ on first access.
// Query param ?page=home returns only that page's data (for efficiency).

import { NextRequest, NextResponse } from "next/server";

import { getDocument, commitDocument } from "@/lib/executor/content-runtime";
import { loadFullDocument } from "@/lib/content/content-loader";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  let doc = getDocument();
  if (!doc) {
    const loaded = await loadFullDocument();
    if (!loaded) {
      return NextResponse.json(
        { success: false, error: "UCD not initialized. Run `npm run seed` first." },
        { status: 500 }
      );
    }
    commitDocument(loaded);
    doc = loaded;
  }

  if (page) {
    const pageData = doc.pages[page];
    if (!pageData) {
      return NextResponse.json(
        { success: false, error: `Page '${page}' not found` },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      page,
      data: pageData,
      version: doc.meta.version,
    });
  }

  return NextResponse.json({
    success: true,
    document: doc as UnifiedContentDocument,
    version: doc.meta.version,
  });
}
