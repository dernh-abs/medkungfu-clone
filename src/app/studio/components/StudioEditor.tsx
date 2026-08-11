"use client";

// StudioEditor — the main orchestrator for the WYSIWYG Studio editor.
//
// Data flow:
//   1. On mount, fetches the UCD document from /api/studio/document?page=X
//   2. Keeps an originalDoc (server state) and a draft (editable copy)
//   3. User edits (PropertyPanel, EditorCanvas) modify the draft
//   4. generateDiff(originalDoc, draft) computes pending JSON Patch ops
//   5. On Save, POSTs the ops to /api/studio/patch
//   6. Undo/Redo calls /api/studio/undo directly
//
// The draft is a deep clone of the page data. Edits use Immer produce()
// for immutable updates so React re-renders correctly.

import { useCallback, useEffect, useMemo, useState } from "react";
import { produce } from "immer";

import type { JsonPatchOperation } from "@/lib/executor/patch-types";
import type { HomePageData } from "@/lib/content/content-schema";
import { generateDiff } from "@/lib/executor/diff-generator";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

import { Toolbar } from "./Toolbar";
import { EditorCanvas } from "./EditorCanvas";
import { PropertyPanel } from "./PropertyPanel";
import { PatchPreview } from "./PatchPreview";
import { VersionHistory } from "./VersionHistory";
import { ComponentLibrary } from "./ComponentLibrary";

interface StudioEditorProps {
  page: string;
}

interface DocumentResponse {
  success: boolean;
  document?: UnifiedContentDocument;
  version?: number;
  error?: string;
}

export function StudioEditor({ page }: StudioEditorProps) {
  const [originalDoc, setOriginalDoc] = useState<UnifiedContentDocument | null>(null);
  const [draft, setDraft] = useState<HomePageData | null>(null);
  const [version, setVersion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [lastSavedOps, setLastSavedOps] = useState<JsonPatchOperation[]>([]);

  // Fetch the document on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
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
        setVersion(data.version ?? 0);
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

  // Save: submit pending operations to the executor.
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
        setError(data.error ?? "Save failed");
        return;
      }
      setLastSavedOps(pendingOps);
      setVersion(data.newVersion);
      // Refresh the document from the server to stay in sync.
      const docRes = await fetch(`/api/studio/document?page=${encodeURIComponent(page)}`);
      const docData: DocumentResponse = await docRes.json();
      if (docData.success && docData.document) {
        setOriginalDoc(docData.document);
        setDraft(docData.document.pages[page] as HomePageData);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [hasPendingChanges, originalDoc, pendingOps, page]);

  // Undo: call the undo API, then refresh.
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
        setError(data.error ?? "Undo failed");
        return;
      }
      setVersion(data.newVersion);
      const docRes = await fetch(`/api/studio/document?page=${encodeURIComponent(page)}`);
      const docData: DocumentResponse = await docRes.json();
      if (docData.success && docData.document) {
        setOriginalDoc(docData.document);
        setDraft(docData.document.pages[page] as HomePageData);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [page]);

  // Discard: reset draft to original.
  const handleDiscard = useCallback(() => {
    if (!originalDoc) return;
    setDraft(originalDoc.pages[page] as HomePageData);
  }, [originalDoc, page]);

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
        onSave={handleSave}
        onUndo={handleUndo}
        onDiscard={handleDiscard}
        onToggleHistory={() => setShowVersionHistory((v) => !v)}
      />
      {error && (
        <div className="px-4 py-2 bg-red-50 text-red-700 text-sm border-b border-red-200">
          {error}
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
      {showVersionHistory && (
        <VersionHistory
          onClose={() => setShowVersionHistory(false)}
          currentVersion={version}
        />
      )}
    </>
  );
}
