// DraftStore — persistent draft storage for the Studio editor workflow.
//
// Drafts are stored as individual JSON files under `.content/drafts/`.
// Each draft captures a full UCD snapshot plus workflow metadata.
//
// Lifecycle: editing → draft → review → published
// A "published" draft is kept for audit history but no longer editable.

import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";

const DRAFTS_DIR = path.join(process.cwd(), ".content", "drafts");

export type DraftStatus = "editing" | "draft" | "review" | "published";

export interface DraftEntry {
  id: string;
  page: string;
  status: DraftStatus;
  document: UnifiedContentDocument;
  /** Puck native data format (typed as unknown until Puck is installed in batch 2). */
  puckData?: unknown;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
  publishedAt?: string;
  publishedVersion?: number;
  author?: string;
  reviewNote?: string;
}

function draftFile(id: string): string {
  return path.join(DRAFTS_DIR, `${id}.json`);
}

async function ensureDir(): Promise<void> {
  await fs.mkdir(DRAFTS_DIR, { recursive: true });
}

/** Create a new draft entry (status = "draft"). */
export async function saveDraft(params: {
  page: string;
  document: UnifiedContentDocument;
  puckData?: unknown;
  author?: string;
}): Promise<DraftEntry> {
  await ensureDir();
  const now = new Date().toISOString();
  const entry: DraftEntry = {
    id: randomUUID(),
    page: params.page,
    status: "draft",
    document: params.document,
    puckData: params.puckData,
    createdAt: now,
    updatedAt: now,
    author: params.author,
  };
  await fs.writeFile(draftFile(entry.id), JSON.stringify(entry, null, 2), "utf-8");
  return entry;
}

/** Update an existing draft (replaces document + puckData, bumps updatedAt). */
export async function updateDraft(
  id: string,
  updates: {
    document?: UnifiedContentDocument;
    puckData?: unknown;
    status?: DraftStatus;
    submittedAt?: string;
    publishedAt?: string;
    publishedVersion?: number;
    reviewNote?: string;
    author?: string;
  }
): Promise<DraftEntry | null> {
  const existing = await getDraft(id);
  if (!existing) return null;
  const updated: DraftEntry = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(draftFile(id), JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}

/** Load a single draft by ID. */
export async function getDraft(id: string): Promise<DraftEntry | null> {
  try {
    const raw = await fs.readFile(draftFile(id), "utf-8");
    return JSON.parse(raw) as DraftEntry;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

/** List all drafts, optionally filtered by page and/or status. */
export async function listDrafts(params?: {
  page?: string;
  status?: DraftStatus;
}): Promise<DraftEntry[]> {
  try {
    const files = await fs.readdir(DRAFTS_DIR);
    const entries: DraftEntry[] = [];
    for (const f of files) {
      if (!f.endsWith(".json")) continue;
      try {
        const raw = await fs.readFile(path.join(DRAFTS_DIR, f), "utf-8");
        const entry = JSON.parse(raw) as DraftEntry;
        if (params?.page && entry.page !== params.page) continue;
        if (params?.status && entry.status !== params.status) continue;
        entries.push(entry);
      } catch {
        // skip corrupt files
      }
    }
    entries.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    return entries;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

/** Get the most recent active draft for a page (status draft or review). */
export async function getActiveDraft(page: string): Promise<DraftEntry | null> {
  const drafts = await listDrafts({ page });
  return drafts.find((d) => d.status === "draft" || d.status === "review") ?? null;
}

/** Delete a draft by ID. */
export async function discardDraft(id: string): Promise<boolean> {
  try {
    await fs.unlink(draftFile(id));
    return true;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return false;
    throw err;
  }
}
