// PublishWorkflow — state machine for the draft → review → publish pipeline.
//
// State transitions:
//   editing → draft     : saveDraft()
//   draft    → review    : submitForReview()
//   review   → published : publish()  (via executor, creates new UCD version)
//   review   → draft     : rejectReview() or withdrawReview()
//   draft    → editing   : discardDraft()
//
// publish() computes a diff between the draft document and the current
// live UCD, then submits that diff as a JSON Patch through the single
// executor — guaranteeing the version chain stays consistent.

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { PatchPackage } from "@/lib/executor/patch-types";
import { generateDiff } from "@/lib/executor/diff-generator";
import { execute } from "@/lib/executor/executor";
import { createContentStore, createVersionStore } from "@/lib/contracts/factory";
import {
  getDraft,
  updateDraft,
  discardDraft,
  type DraftEntry,
  type DraftStatus,
} from "./draft-store";

export type { DraftStatus, DraftEntry } from "./draft-store";

/** Transition: draft → review. */
export async function submitForReview(
  draftId: string,
  author?: string
): Promise<DraftEntry | null> {
  const draft = await getDraft(draftId);
  if (!draft) return null;
  if (draft.status !== "draft") {
    throw new Error(`Cannot submit: draft status is '${draft.status}', expected 'draft'`);
  }
  return updateDraft(draftId, {
    status: "review",
    submittedAt: new Date().toISOString(),
    author: author ?? draft.author,
  });
}

/** Transition: review → draft (rejected with optional note). */
export async function rejectReview(
  draftId: string,
  note?: string
): Promise<DraftEntry | null> {
  const draft = await getDraft(draftId);
  if (!draft) return null;
  if (draft.status !== "review") {
    throw new Error(`Cannot reject: draft status is '${draft.status}', expected 'review'`);
  }
  return updateDraft(draftId, {
    status: "draft",
    reviewNote: note,
  });
}

/** Transition: review → draft (withdrawn by author). */
export async function withdrawReview(draftId: string): Promise<DraftEntry | null> {
  const draft = await getDraft(draftId);
  if (!draft) return null;
  if (draft.status !== "review") {
    throw new Error(`Cannot withdraw: draft status is '${draft.status}', expected 'review'`);
  }
  return updateDraft(draftId, { status: "draft" });
}

/** Transition: review → published. Publishes the draft via the executor. */
export async function publish(
  draftId: string,
  currentDoc: UnifiedContentDocument
): Promise<{ draft: DraftEntry; newVersion: number }> {
  const draft = await getDraft(draftId);
  if (!draft) throw new Error("Draft not found");
  if (draft.status !== "review") {
    throw new Error(`Cannot publish: draft status is '${draft.status}', expected 'review'`);
  }

  // Compute diff from current live UCD → draft document.
  const operations = generateDiff(currentDoc, draft.document);

  if (operations.length === 0) {
    // No changes to publish — just mark as published.
    const updated = await updateDraft(draftId, {
      status: "published",
      publishedAt: new Date().toISOString(),
      publishedVersion: currentDoc.meta.version,
    });
    return { draft: updated!, newVersion: currentDoc.meta.version };
  }

  // Submit the diff as a JSON Patch through the single executor.
  const patch: PatchPackage = {
    id: crypto.randomUUID(),
    source: "studio",
    operations,
    metadata: {
      timestamp: new Date().toISOString(),
      description: `Publish draft ${draftId.slice(0, 8)}`,
      intent: "publish",
    },
    baseVersion: currentDoc.meta.version,
  };

  const contentStore = createContentStore();
  const versionStore = createVersionStore();
  const result = await execute(patch, currentDoc, { contentStore, versionStore });

  if (!result.success) {
    throw new Error(result.error ?? "Executor failed to apply publish patch");
  }

  const updated = await updateDraft(draftId, {
    status: "published",
    publishedAt: new Date().toISOString(),
    publishedVersion: result.newVersion,
  });

  return { draft: updated!, newVersion: result.newVersion };
}

/** Transition: draft → editing (discard the draft entirely). */
export async function discardDraftEntry(draftId: string): Promise<boolean> {
  const draft = await getDraft(draftId);
  if (!draft) return false;
  if (draft.status === "published") {
    throw new Error("Cannot discard a published draft");
  }
  return discardDraft(draftId);
}

/** Validate that a status transition is allowed. */
export function canTransition(from: DraftStatus, to: DraftStatus): boolean {
  const allowed: Record<DraftStatus, DraftStatus[]> = {
    editing: ["draft"],
    draft: ["review", "editing"],
    review: ["published", "draft"],
    published: [],
  };
  return allowed[from]?.includes(to) ?? false;
}
