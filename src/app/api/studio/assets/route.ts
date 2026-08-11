// Studio API — GET /api/studio/assets
//
// Lists all uploaded image assets (newest first) for the "choose from
// library" UI in ImageUploader. Returns entries from the index.json file
// maintained by asset-store.ts.

import { NextResponse } from "next/server";

import { listAssets } from "@/lib/studio/asset-store";

export const runtime = "nodejs";

export async function GET() {
  try {
    const assets = await listAssets();
    return NextResponse.json({ success: true, assets });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to list assets";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
