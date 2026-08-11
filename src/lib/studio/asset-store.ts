// Studio asset library — manages uploaded image files and their metadata.
//
// Files are stored under public/uploads/studio/YYYYMM/<hash>.<ext> so they
// are served directly by Next.js as static assets. A JSON index file at
// public/uploads/studio/index.json records metadata (url, size, uploadedAt,
// thumb) for the "choose from library" UI.
//
// All operations are atomic-ish: we read the index, mutate, write back. For
// a single-editor Studio scenario this is sufficient; concurrent writers
// could lose entries, but the actual files on disk are never lost.

import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const UPLOAD_ROOT = path.join(process.cwd(), "public", "uploads", "studio");
const INDEX_FILE = path.join(UPLOAD_ROOT, "index.json");

export interface AssetEntry {
  /** Public URL path served by Next.js, e.g. /uploads/studio/202608/abc.jpg */
  url: string;
  /** Original filename from the client upload. */
  originalName: string;
  /** File size in bytes (after compression if applied). */
  size: number;
  /** MIME type. */
  mimeType: string;
  /** ISO timestamp of upload. */
  uploadedAt: string;
  /** Relative path on disk for deletion/inspection, e.g. 202608/abc.jpg */
  relativePath: string;
}

interface AssetIndex {
  entries: AssetEntry[];
}

const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

/** Ensure the upload root and a YYYYMM subdir exist, return the subdir name. */
async function ensureMonthDir(): Promise<string> {
  const now = new Date();
  const month = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
  const dir = path.join(UPLOAD_ROOT, month);
  await fs.mkdir(dir, { recursive: true });
  return month;
}

/** Read the index file, returning an empty index if it doesn't exist yet. */
async function readIndex(): Promise<AssetIndex> {
  try {
    const raw = await fs.readFile(INDEX_FILE, "utf-8");
    return JSON.parse(raw) as AssetIndex;
  } catch {
    return { entries: [] };
  }
}

/** Write the index file atomically (write to tmp then rename). */
async function writeIndex(index: AssetIndex): Promise<void> {
  await fs.mkdir(UPLOAD_ROOT, { recursive: true });
  const tmp = `${INDEX_FILE}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(index, null, 2), "utf-8");
  await fs.rename(tmp, INDEX_FILE);
}

/**
 * Save an uploaded image buffer to disk and record it in the index.
 *
 * @returns The public URL of the saved asset.
 * @throws if MIME type is not allowed or size exceeds the limit.
 */
export async function saveAsset(
  buffer: Buffer,
  originalName: string,
  mimeType: string
): Promise<{ url: string; entry: AssetEntry }> {
  if (!ALLOWED_MIME.has(mimeType)) {
    throw new Error(`Unsupported file type: ${mimeType}. Allowed: jpg, png, webp, svg.`);
  }
  if (buffer.byteLength > MAX_SIZE_BYTES) {
    throw new Error(
      `File too large: ${(buffer.byteLength / 1024 / 1024).toFixed(1)}MB. Limit is 5MB.`
    );
  }

  const month = await ensureMonthDir();
  const hash = crypto.createHash("sha256").update(buffer).digest("hex").slice(0, 16);
  const ext =
    mimeType === "image/jpeg"
      ? "jpg"
      : mimeType === "image/png"
        ? "png"
        : mimeType === "image/webp"
          ? "webp"
          : "svg";
  const fileName = `${hash}.${ext}`;
  const relativePath = `${month}/${fileName}`;
  const absPath = path.join(UPLOAD_ROOT, relativePath);

  // If the same hash already exists on disk, skip the write.
  try {
    await fs.access(absPath);
  } catch {
    await fs.writeFile(absPath, buffer);
  }

  const url = `/uploads/studio/${relativePath}`;
  const entry: AssetEntry = {
    url,
    originalName,
    size: buffer.byteLength,
    mimeType,
    uploadedAt: new Date().toISOString(),
    relativePath,
  };

  const index = await readIndex();
  // De-duplicate by URL (same hash → same URL).
  if (!index.entries.some((e) => e.url === url)) {
    index.entries.push(entry);
    await writeIndex(index);
  }

  return { url, entry };
}

/** List all uploaded assets, newest first. */
export async function listAssets(): Promise<AssetEntry[]> {
  const index = await readIndex();
  return [...index.entries].sort((a, b) =>
    b.uploadedAt.localeCompare(a.uploadedAt)
  );
}
