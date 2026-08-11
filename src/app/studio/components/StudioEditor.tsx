"use client";

// StudioEditor — main orchestrator for the WYSIWYG Studio editor.
//
// Data flow:
//   1. On mount, fetches UCD from /api/studio/document?page=X
//   2. Also checks for an active draft via /api/studio/draft?page=X
//   3. Keeps originalDoc (server state) and a draft (editable copy)
//   4. User edits (PropertyPanel, EditorCanvas) modify the draft
//   5. generateDiff(originalDoc, draft) computes pending JSON Patch ops
//   6. On Save, POSTs the ops to /api/studio/patch (direct version commit)
//   7. On Save Draft, POSTs full UCD to /api/studio/draft (draft box)
//   8. On Submit Review, POSTs to /api/studio/review (draft → review)
//   9. On Publish, POSTs to /api/studio/publish (review → published via executor)
//  10. Undo/Redo calls /api/studio/undo with action:"undo"|"redo"
//  11. On 409 Conflict, shows "document has changed — please reload"
//
// Workflow states: editing → draft → review → published

import { useCallback, useEffect, useMemo, useState } from "react";
import { produce } from "immer";

import type { JsonPatchOperation } from "@/lib/executor/patch-types";
import type { HomePageData } from "@/lib/content/content-schema";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { DraftStatus } from "@/lib/executor/draft-store";
import { generateDiff } from "@/lib/executor/diff-generator";

import { Toolbar } from "./Toolbar";
import { EditorCanvas } from "./EditorCanvas";
import { PropertyPanel } from "./PropertyPanel";
import { PatchPreview } from "./PatchPreview";
import { VersionHistory } from "./VersionHistory";
import { ComponentLibrary } from "./ComponentLibrary";
import { StatusBar } from "./StatusBar";
import { DraftStatus as DraftStatusBanner } from "./DraftStatus";

interface StudioEditorProps {
  page: string;
}

interface DocumentResponse {
  success: boolean;
  document?: UnifiedContentDocument;
  version?: number;
  error?: string;
}

interface DraftLoadResponse {
  success: boolean;
  exists: boolean;
  draft?: {
    id: string;
    status: DraftStatus;
    document: UnifiedContentDocument;
    submittedAt?: string;
    reviewNote?: string;
  };
}

export function StudioEditor({ page }: StudioEditorProps) {
  const [originalDoc, setOriginalDoc] = useState<UnifiedContentDocument | null>(null);
  const [draft, setDraft] = useState<HomePageData | null>(null);
  const [version, setVersion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [conflict, setConflict] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [lastSavedOps, setLastSavedOps] = useState<JsonPatchOperation[]>([]);
  const [redoStack, setRedoStack] = useState<number[]>([]);

  // Workflow state
  const [draftStatus, setDraftStatus] = useState<DraftStatus | "none">("none");
  const [draftId, setDraftId] = useState<string | null>(null);
  const [draftSubmittedAt, setDraftSubmittedAt] = useState<string | null>(null);
  const [draftReviewNote, setDraftReviewNote] = useState<string | null>(null);
  const [lastActionTime, setLastActionTime] = useState<string | null>(null);

  // Fetch the document + check for active draft on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      setConflict(false);
      try {
        // 1. Load the live document.
        const res = await fetch(`/api/studio/document?page=${encodeURIComponent(page)}`);
        const data: DocumentResponse = await res.json();
        if (cancelled) return;
        if (!data.success || !data.document) {
          setError(data.error ?? "Failed to load document");
          setLoading(false);
          return;
        }
        setOriginalDoc(data.document);
        setDraft(data.document.pages[page] as HomePageData);
        setVersion(data.version ?? data.document.meta.version);
        setRedoStack([]);

        // 2. Check for an active draft for this page.
        const draftRes = await fetch("/api/studio/draft", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "load", page }),
        });
        const draftData: DraftLoadResponse = await draftRes.json();
        if (cancelled) return;
        if (draftData.success && draftData.exists && draftData.draft) {
          // Load draft document instead of live.
          setDraft(draftData.draft.document.pages[page] as HomePageData);
          setOriginalDoc(draftData.draft.document); // diff base is the draft's snapshot
          setDraftStatus(draftData.draft.status);
          setDraftId(draftData.draft.id);
          setDraftSubmittedAt(draftData.draft.submittedAt ?? null);
          setDraftReviewNote(draftData.draft.reviewNote ?? null);
        } else {
          setDraftStatus("editing");
        }
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [page]);

  // Compute pending operations (diff between original and draft).
  const pendingOps: JsonPatchOperation[] = useMemo(() => {
    if (!originalDoc || !draft) return [];
    const draftDoc: UnifiedContentDocument = {
      ...originalDoc,
      pages: { ...originalDoc.pages, [page]: draft },
    };
    return generateDiff(originalDoc, draftDoc);
  }, [originalDoc, draft, page]);

  const hasPendingChanges = pendingOps.length > 0;

  // Update a field in the draft at a dot-notation path.
  const updateField = useCallback(
    (sectionId: string, fieldPath: string, value: unknown) => {
      setDraft((prev) => {
        if (!prev) return prev;
        return produce(prev, (d) => {
          const parts = fieldPath.split(".");
          let cur: unknown = d.sections[sectionId as keyof typeof d.sections];
          for (let i = 0; i < parts.length - 1; i++) {
            cur = (cur as Record<string, unknown>)[parts[i]];
          }
          (cur as Record<string, unknown>)[parts[parts.length - 1]] = value;
        });
      });
    },
    []
  );

  // Reorder sections: update the order array.
  const reorderSections = useCallback((newOrder: string[]) => {
    setDraft((prev) => {
      if (!prev) return prev;
      return produce(prev, (d) => {
        d.order = newOrder as HomePageData["order"];
      });
    });
  }, []);

  // Delete a section: remove from order + sections.
  const deleteSection = useCallback((sectionId: string) => {
    setDraft((prev) => {
      if (!prev) return prev;
      return produce(prev, (d) => {
        d.order = d.order.filter((id) => id !== sectionId) as HomePageData["order"];
        delete (d.sections as Record<string, unknown>)[sectionId];
      });
    });
    setSelectedSection((prev) => (prev === sectionId ? null : prev));
  }, []);

  // --- Shared helper: refresh document + update version ---
  const refreshDocument = useCallback(async (): Promise<void> => {
    const docRes = await fetch(`/api/studio/document?page=${encodeURIComponent(page)}`);
    const docData: DocumentResponse = await docRes.json();
    if (docData.success && docData.document) {
      setOriginalDoc(docData.document);
      setDraft(docData.document.pages[page] as HomePageData);
      setVersion(docData.version ?? docData.document.meta.version);
    }
  }, [page]);

  /** Handle 409 conflict response from any mutation endpoint. */
  const handleConflictResponse = useCallback((data: { conflict?: boolean; expectedVersion?: number; actualVersion?: number; error?: string }) => {
    if (data.conflict) {
      setConflict(true);
      setError(
        data.error ??
        `版本冲突：文档已被更新到 v${data.actualVersion ?? "?"}，请刷新后重试。`
      );
      return true;
    }
    return false;
  }, []);

  /** Helper: build full UCD from current draft state. */
  const buildFullUcd = useCallback((): UnifiedContentDocument | null => {
    if (!originalDoc || !draft) return null;
    return { ...originalDoc, pages: { ...originalDoc.pages, [page]: draft } };
  }, [originalDoc, draft, page]);

  // --- Save (direct patch, creates new version) ---
  const handleSave = useCallback(async () => {
    if (!hasPendingChanges || !originalDoc) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/patch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          operations: pendingOps,
          description: "Studio edit",
        }),
      });
      const data = await res.json();
      if (!data.success) {
        if (!handleConflictResponse(data)) {
          setError(data.error ?? "Save failed");
        }
        return;
      }
      setLastSavedOps(pendingOps);
      setVersion(data.newVersion);
      setConflict(false);
      setRedoStack([]);
      setLastActionTime(new Date().toLocaleTimeString());
      await refreshDocument();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [hasPendingChanges, originalDoc, pendingOps, handleConflictResponse, refreshDocument]);

  // --- Save Draft (saves to draft box, no version change) ---
  const handleSaveDraft = useCallback(async () => {
    const fullUcd = buildFullUcd();
    if (!fullUcd) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save",
          page,
          document: fullUcd,
          draftId: draftId ?? undefined,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error ?? "Save draft failed");
        return;
      }
      setDraftId(data.draftId);
      setDraftStatus(data.status ?? "draft");
      setLastActionTime(new Date().toLocaleTimeString());
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [buildFullUcd, page, draftId]);

  // --- Submit Review (draft → review) ---
  const handleSubmitReview = useCallback(async () => {
    if (!draftId) {
      // Save first, then submit.
      await handleSaveDraft();
    }
    const idToUse = draftId;
    if (!idToUse) {
      setError("Cannot submit review: no draft to submit");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit", draftId: idToUse }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error ?? "Submit review failed");
        return;
      }
      setDraftStatus(data.status ?? "review");
      setLastActionTime(new Date().toLocaleTimeString());
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [draftId, handleSaveDraft]);

  // --- Publish (review → published via executor) ---
  const handlePublish = useCallback(async () => {
    if (!draftId) {
      setError("Cannot publish: no draft in review");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftId }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error ?? "Publish failed");
        return;
      }
      setDraftStatus("published");
      setVersion(data.newVersion ?? version);
      setRedoStack([]);
      setLastActionTime(new Date().toLocaleTimeString());
      // Refresh to get the newly published version.
      await refreshDocument();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [draftId, version, refreshDocument]);

  // Undo: call the undo API, then refresh; push undoneVersion onto redoStack.
  const handleUndo = useCallback(async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/undo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "undo" }),
      });
      const data = await res.json();
      if (!data.success) {
        if (!handleConflictResponse(data)) {
          setError(data.error ?? "Undo failed");
        }
        return;
      }
      setVersion(data.newVersion);
      setConflict(false);
      setRedoStack((stack) => [...stack, data.undoneVersion as number]);
      setLastActionTime(new Date().toLocaleTimeString());
      await refreshDocument();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [handleConflictResponse, refreshDocument]);

  // Redo: call /api/studio/undo with action:"redo" and the version popped from the stack.
  const handleRedo = useCallback(async () => {
    if (redoStack.length === 0) return;
    const target = redoStack[redoStack.length - 1];
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/undo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "redo", version: target }),
      });
      const data = await res.json();
      if (!data.success) {
        if (!handleConflictResponse(data)) {
          setError(data.error ?? "Redo failed");
        }
        return;
      }
      setVersion(data.newVersion);
      setConflict(false);
      setRedoStack((stack) => stack.slice(0, -1));
      setLastActionTime(new Date().toLocaleTimeString());
      await refreshDocument();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [redoStack, handleConflictResponse, refreshDocument]);

  // Discard: reset draft to original.
  const handleDiscard = useCallback(() => {
    if (!originalDoc) return;
    setDraft(originalDoc.pages[page] as HomePageData);
  }, [originalDoc, page]);

  // Rollback: delegate to /api/studio/rollback and clear redoStack.
  const handleRollback = useCallback(async (targetVersion: number) => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/rollback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetVersion }),
      });
      const data = await res.json();
      if (!data.success) {
        if (!handleConflictResponse(data)) {
          setError(data.error ?? `Rollback to v${targetVersion} failed`);
        }
        return;
      }
      setVersion(data.newVersion);
      setConflict(false);
      setRedoStack([]);
      setShowVersionHistory(false);
      setLastActionTime(new Date().toLocaleTimeString());
      await refreshDocument();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [handleConflictResponse, refreshDocument]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Loading document…</p>
      </div>
    );
  }

  if (error && !draft) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">{error}</p>
          <p className="text-gray-500 text-sm">
            Run <code className="bg-gray-200 px-1 rounded">npm run seed</code> to
            initialize the UCD.
          </p>
        </div>
      </div>
    );
  }

  if (!draft) return null;

  return (
    <>
      <Toolbar
        page={page}
        version={version}
        hasPendingChanges={hasPendingChanges}
        saving={saving}
        redoCount={redoStack.length}
        draftStatus={draftStatus}
        onSave={handleSave}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onDiscard={handleDiscard}
        onToggleHistory={() => setShowVersionHistory((v) => !v)}
        onSaveDraft={handleSaveDraft}
        onSubmitReview={handleSubmitReview}
        onPublish={handlePublish}
      />
      <DraftStatusBanner
        status={draftStatus}
        draftId={draftId}
        submittedAt={draftSubmittedAt}
        reviewNote={draftReviewNote}
      />
      {error && (
        <div className={`px-4 py-2 text-sm border-b ${
          conflict
            ? "bg-amber-50 text-amber-800 border-amber-200"
            : "bg-red-50 text-red-700 border-red-200"
        }`}>
          {error}
          {conflict && (
            <button
              type="button"
              onClick={refreshDocument}
              className="ml-3 px-2 py-0.5 text-xs font-medium rounded bg-amber-100 hover:bg-amber-200 text-amber-900"
            >
              Reload document
            </button>
          )}
        </div>
      )}
      <div className="flex-1 flex overflow-hidden">
        <ComponentLibrary />
        <EditorCanvas
          page={page}
          draft={draft}
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
          onReorder={reorderSections}
          onDeleteSection={deleteSection}
        />
        <PropertyPanel
          sectionId={selectedSection}
          sectionData={selectedSection ? draft.sections[selectedSection as keyof typeof draft.sections] : null}
          onUpdate={updateField}
        />
      </div>
      <PatchPreview
        pendingOps={pendingOps}
        lastSavedOps={lastSavedOps}
      />
      <StatusBar
        pendingChanges={pendingOps.length}
        draftStatus={draftStatus}
        version={version}
        lastActionTime={lastActionTime}
      />
      {showVersionHistory && (
        <VersionHistory
          onClose={() => setShowVersionHistory(false)}
          currentVersion={version}
          onRollback={handleRollback}
        />
      )}
    </>
  );
}
