"use client";

// PuckEditor — client component integrating Puck visual editor with the UCD.
//
// Data flow:
//   1. On mount: fetch UCD from /api/studio/document + check for active draft
//   2. Convert UCD → Puck data via ucdToPuck()
//   3. Initialize ContentRuntime with commitDocument() so section components render
//   4. Puck onChange: convert Puck → UCD → commitDocument() (live preview) + debounced save draft
//   5. Puck onPublish: convert Puck → UCD → /api/studio/publish (creates new version)
//
// Workflow buttons (Save Draft / Submit Review / Publish) are in the Toolbar,
// which calls back to this component's handlers.

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

import { useState, useEffect, useCallback, useRef } from "react";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { DraftStatus } from "@/lib/executor/draft-store";
import { commitDocument } from "@/lib/executor/content-runtime";
import { puckConfig } from "@/lib/puck/puck-config";
import { ucdToPuck, puckToUcd, type PuckData } from "@/lib/puck/puck-adapter";

import { Toolbar } from "../components/Toolbar";
import { StatusBar } from "../components/StatusBar";
import { DraftStatus as DraftStatusBanner } from "../components/DraftStatus";
import { useDebouncedSave } from "../hooks/useDebouncedSave";

interface PuckEditorProps {
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

export function PuckEditor({ page }: PuckEditorProps) {
  const [ucd, setUcd] = useState<UnifiedContentDocument | null>(null);
  const [puckData, setPuckData] = useState<PuckData | null>(null);
  const [version, setVersion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  // Workflow state
  const [draftStatus, setDraftStatus] = useState<DraftStatus | "none">("none");
  const [draftId, setDraftId] = useState<string | null>(null);
  const [draftSubmittedAt, setDraftSubmittedAt] = useState<string | null>(null);
  const [draftReviewNote, setDraftReviewNote] = useState<string | null>(null);
  const [lastActionTime, setLastActionTime] = useState<string | null>(null);

  // Track the last saved Puck data to detect changes.
  const lastSavedDataRef = useRef<string>("");

  // --- Load document + draft on mount ---
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Load live document.
        const res = await fetch(`/api/studio/document?page=${encodeURIComponent(page)}`);
        const data: DocumentResponse = await res.json();
        if (cancelled) return;
        if (!data.success || !data.document) {
          setError(data.error ?? "Failed to load document");
          setLoading(false);
          return;
        }

        let docToUse = data.document;

        // 2. Check for active draft.
        const draftRes = await fetch("/api/studio/draft", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "load", page }),
        });
        const draftData: DraftLoadResponse = await draftRes.json();
        if (cancelled) return;
        if (draftData.success && draftData.exists && draftData.draft) {
          docToUse = draftData.draft.document;
          setDraftStatus(draftData.draft.status);
          setDraftId(draftData.draft.id);
          setDraftSubmittedAt(draftData.draft.submittedAt ?? null);
          setDraftReviewNote(draftData.draft.reviewNote ?? null);
        } else {
          setDraftStatus("editing");
        }

        // 3. Initialize ContentRuntime so section components can render.
        commitDocument(docToUse);
        setUcd(docToUse);
        setPuckData(ucdToPuck(docToUse, page));
        setVersion(docToUse.meta.version);
        lastSavedDataRef.current = JSON.stringify(ucdToPuck(docToUse, page));
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

  // --- Save draft to API ---
  const saveDraft = useCallback(
    async (currentPuckData: PuckData) => {
      if (!ucd) return;
      const newUcd = puckToUcd(currentPuckData, ucd, page);
      try {
        const res = await fetch("/api/studio/draft", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "save",
            page,
            document: newUcd,
            puckData: currentPuckData,
            draftId: draftId ?? undefined,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setDraftId(data.draftId);
          setDraftStatus(data.status ?? "draft");
          setHasPendingChanges(false);
          setLastActionTime(new Date().toLocaleTimeString());
        }
      } catch (err) {
        setError((err as Error).message);
      }
    },
    [ucd, page, draftId]
  );

  // --- Debounced save ---
  const debouncedSave = useDebouncedSave(saveDraft, 1000);

  // --- Puck onChange: live preview + debounced save ---
  const handleChange = useCallback(
    (newPuckData: PuckData) => {
      if (!ucd) return;

      // Update ContentRuntime for live preview.
      const newUcd = puckToUcd(newPuckData, ucd, page);
      commitDocument(newUcd);
      setPuckData(newPuckData);

      // Detect changes vs last saved state.
      const serialized = JSON.stringify(newPuckData);
      if (serialized !== lastSavedDataRef.current) {
        setHasPendingChanges(true);
        // Debounced auto-save.
        debouncedSave(newPuckData);
      }
    },
    [ucd, page, debouncedSave]
  );

  // --- Puck onPublish: publish via executor ---
  const handlePublish = useCallback(async () => {
    if (!puckData || !ucd) return;
    setSaving(true);
    setError(null);
    try {
      // Save draft first (ensure latest changes are persisted).
      const newUcd = puckToUcd(puckData, ucd, page);
      const saveRes = await fetch("/api/studio/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save",
          page,
          document: newUcd,
          puckData,
          draftId: draftId ?? undefined,
        }),
      });
      const saveData = await saveRes.json();
      if (!saveData.success) {
        setError(saveData.error ?? "Failed to save before publish");
        return;
      }
      const savedDraftId = saveData.draftId;

      // Submit for review.
      const reviewRes = await fetch("/api/studio/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit", draftId: savedDraftId }),
      });
      const reviewData = await reviewRes.json();
      if (!reviewData.success) {
        setError(reviewData.error ?? "Failed to submit review");
        return;
      }

      // Publish.
      const pubRes = await fetch("/api/studio/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftId: savedDraftId }),
      });
      const pubData = await pubRes.json();
      if (!pubData.success) {
        setError(pubData.error ?? "Publish failed");
        return;
      }

      setDraftStatus("published");
      setVersion(pubData.newVersion ?? version);
      setHasPendingChanges(false);
      setLastActionTime(new Date().toLocaleTimeString());
      lastSavedDataRef.current = JSON.stringify(puckData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }, [puckData, ucd, page, draftId, version]);

  // --- Save Draft button handler ---
  const handleSaveDraft = useCallback(async () => {
    if (!puckData) return;
    setSaving(true);
    await saveDraft(puckData);
    lastSavedDataRef.current = JSON.stringify(puckData);
    setSaving(false);
  }, [puckData, saveDraft]);

  // --- Submit Review button handler ---
  const handleSubmitReview = useCallback(async () => {
    if (!puckData || !draftId) {
      // Save first, then submit.
      await handleSaveDraft();
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/studio/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit", draftId }),
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
  }, [puckData, draftId, handleSaveDraft]);

  // --- Undo/Redo/History stubs (Puck has its own undo) ---
  const handleUndo = useCallback(() => {
    // Puck has built-in undo via its toolbar
  }, []);
  const handleRedo = useCallback(() => {
    // Puck has built-in redo via its toolbar
  }, []);
  const handleDiscard = useCallback(() => {
    if (!ucd) return;
    setPuckData(ucdToPuck(ucd, page));
    commitDocument(ucd);
    setHasPendingChanges(false);
  }, [ucd, page]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Loading Puck editor…</p>
      </div>
    );
  }

  if (error && !puckData) {
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

  if (!puckData) return null;

  return (
    <div className="flex flex-col h-screen">
      <Toolbar
        page={page}
        version={version}
        hasPendingChanges={hasPendingChanges}
        saving={saving}
        redoCount={0}
        draftStatus={draftStatus}
        onSave={() => handleSaveDraft()}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onDiscard={handleDiscard}
        onToggleHistory={() => {}}
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
        <div className="px-4 py-2 text-sm border-b bg-red-50 text-red-700 border-red-200">
          {error}
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <Puck
          config={puckConfig}
          data={puckData}
          onChange={handleChange}
          onPublish={handlePublish}
        />
      </div>
      <StatusBar
        pendingChanges={hasPendingChanges ? 1 : 0}
        draftStatus={draftStatus}
        version={version}
        lastActionTime={lastActionTime}
      />
    </div>
  );
}
