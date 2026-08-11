// Studio API — POST /api/studio/upload
//
// Receives a multipart/form-data upload with a single `file` field (image),
// saves it to public/uploads/studio/YYYYMM/<hash>.<ext>, and returns the
// public URL plus metadata.
//
// Limits:
//   - 5MB max file size (after any client-side compression)
//   - Allowed MIME: image/jpeg, image/png, image/webp, image/svg+xml
//
// The client (ImageUploader) compresses images before uploading via
// browser-image-compression, so the server usually receives an already
// optimized file. Server-side validation still enforces the hard limit.

import { NextRequest, NextResponse } from "next/server";

import { saveAsset } from "@/lib/studio/asset-store";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { success: false, error: "No file provided. Expected multipart field 'file'." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const { url, entry } = await saveAsset(buffer, file.name, file.type);

    return NextResponse.json({
      success: true,
      url,
      asset: {
        url: entry.url,
        originalName: entry.originalName,
        size: entry.size,
        mimeType: entry.mimeType,
        uploadedAt: entry.uploadedAt,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed";
    // Validation errors (bad type / too large) → 400; unexpected → 500
    const isValidation =
      message.includes("Unsupported file type") || message.includes("too large");
    return NextResponse.json(
      { success: false, error: message },
      { status: isValidation ? 400 : 500 }
    );
  }
}
