"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Puck, useGetPuck } from "@measured/puck";
import "@measured/puck/puck.css";

import { useState, useEffect, useCallback, useRef, useMemo, useContext } from "react";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { DraftStatus } from "@/lib/executor/draft-store";
import { commitDocument, getDocument } from "@/lib/executor/content-runtime";
import { puckConfig } from "@/lib/puck/puck-config";
import { ucdToPuck, puckToUcd, type PuckData } from "@/lib/puck/puck-adapter";
import { resolveBlockTitle } from "@/lib/puck/block-title";
import {
  ImageField,
  ListField,
} from "@/lib/puck/custom-field-types";

import { Toolbar } from "../components/Toolbar";
import { StatusBar } from "../components/StatusBar";
import { DraftStatus as DraftStatusBanner } from "../components/DraftStatus";
import { TranslationEditor, TranslationEditorContext } from "../components/TranslationEditor";
import { NLCommandBar } from "../components/NLCommandBar";
import { IntentPreview } from "../components/IntentPreview";
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

interface PendingPreview {
  intent: any;
  operations: any[];
  preview?: any;
  command: string;
}

function setNestedTranslation(
  dict: unknown,
  path: string,
  value: string
): void {
  const parts = path.split(".");
  let cur: unknown = dict;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null || typeof cur !== "object") return;
    const next = (cur as Record<string, unknown>)[parts[i]];
    if (next == null || typeof next !== "object") {
      (cur as Record<string, unknown>)[parts[i]] = {};
    }
    cur = (cur as Record<string, unknown>)[parts[i]];
  }
  if (cur != null && typeof cur === "object") {
    (cur as Record<string, unknown>)[parts[parts.length - 1]] = value;
  }
}

// ─── StudioOutline (custom Puck outline override) ───────────────────────
//
// Replaces Puck's default outline so each canvas block shows a resolved,
// human-readable title instead of the bare component label ("Hero" / "Services").
// Home components resolve their translation key to the actual copy; `pageSection`
// reads its self-contained `title` prop.
//
// Selection is driven through Puck's real store (`useGetPuck`) + `getSelectorForId`
// + `dispatch({ type: "setUi" })` — the same mechanism Puck's own outline uses,
// so the right-side TranslationEditor (keyed off `itemSelector`) stays in sync.

type OutlineItem = { type: string; props?: Record<string, unknown> };

function StudioOutline() {
  const getPuck = useGetPuck();
  const { ucd } = useContext(TranslationEditorContext);
  const store = getPuck();
  const appState = store.appState;
  const content = (appState?.data?.content ?? []) as OutlineItem[];
  const selected = (appState?.ui?.itemSelector ?? null) as {
    index?: number;
    zone?: string;
  } | null;
  const { dispatch, getSelectorForId } = store;

  return (
    <div className="puck-studio-outline" data-studio-outline>
      {content.length === 0 ? (
        <div className="p-3 text-xs text-gray-400">画布暂无区块</div>
      ) : (
        content.map((item) => {
          const props = item.props ?? {};
          const id =
            typeof props.id === "string" && props.id ? props.id : item.type;
          const title = resolveBlockTitle(item.type, props, ucd);
          const sel = getSelectorForId(id);
          const isSelected =
            !!sel &&
            !!selected &&
            sel.index === selected.index &&
            (sel.zone ?? undefined) === (selected.zone ?? undefined);
          return (
            <button
              key={id}
              type="button"
              data-studio-outline-item
              data-block-type={item.type}
              title={title}
              onClick={() => {
                if (sel) dispatch({ type: "setUi", ui: { itemSelector: sel } });
              }}
              className={`w-full text-left px-3 py-2 text-sm border-b border-gray-100 flex items-center gap-2 ${
                isSelected
                  ? "bg-[#1B4D3E]/10 text-[#1B4D3E] font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="truncate flex-1">{title}</span>
              <span className="text-[10px] font-mono text-gray-400 shrink-0">
                {item.type}
              </span>
            </button>
          );
        })
      )}
    </div>
  );
}

export function PuckEditor({ page }: PuckEditorProps) {
  const [ucd, setUcd] = useState<UnifiedContentDocument | null>(null);
  const [puckData, setPuckData] = useState<PuckData | null>(null);
  const [version, setVersion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  const [draftStatus, setDraftStatus] = useState<DraftStatus | "none">("none");
  const [draftId, setDraftId] = useState<string | null>(null);
  const [draftSubmittedAt, setDraftSubmittedAt] = useState<string | null>(null);
  const [draftReviewNote, setDraftReviewNote] = useState<string | null>(null);
  const [lastActionTime, setLastActionTime] = useState<string | null>(null);

  const [pendingPreview, setPendingPreview] = useState<PendingPreview | null>(null);
  const [applyingAgent, setApplyingAgent] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [previewSuggestions, setPreviewSuggestions] = useState<string[]>([]);

  const lastSavedDataRef = useRef<string>("");

  const refreshDocument = useCallback(async () => {
    try {
      const res = await fetch(`/api/studio/document?page=${encodeURIComponent(page)}`);
      const data: DocumentResponse = await res.json();
      if (data.success && data.document) {
        const doc = data.document;
        commitDocument(doc);
        setUcd(doc);
        setPuckData(ucdToPuck(doc, page));
        setVersion(doc.meta.version);
        lastSavedDataRef.current = JSON.stringify(ucdToPuck(doc, page));
      }
    } catch (err) {
      console.warn("refreshDocument failed", err);
    }
  }, [page]);

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

        let docToUse = data.document;

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

  const debouncedSave = useDebouncedSave(saveDraft, 1000);

  const handleChange = useCallback(
    (newPuckData: PuckData) => {
      if (!ucd) return;

      const newUcd = puckToUcd(newPuckData, ucd, page);
      commitDocument(newUcd);
      setPuckData(newPuckData);

      const serialized = JSON.stringify(newPuckData);
      if (serialized !== lastSavedDataRef.current) {
        setHasPendingChanges(true);
        debouncedSave(newPuckData);
      }
    },
    [ucd, page, debouncedSave]
  );

  const handleTranslationChange = useCallback(
    (key: string, lang: "en" | "zh", value: string) => {
      if (!ucd || !puckData) return;

      const newUcd: UnifiedContentDocument = JSON.parse(JSON.stringify(ucd));
      setNestedTranslation(newUcd.translations[lang], key, value);

      commitDocument(newUcd);
      setUcd(newUcd);

      setHasPendingChanges(true);
      debouncedSave(puckData);
    },
    [ucd, puckData, debouncedSave]
  );

  const handlePublish = useCallback(async () => {
    if (!puckData || !ucd) return;
    setSaving(true);
    setError(null);
    try {
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

  const handleSaveDraft = useCallback(async () => {
    if (!puckData) return;
    setSaving(true);
    await saveDraft(puckData);
    lastSavedDataRef.current = JSON.stringify(puckData);
    setSaving(false);
  }, [puckData, saveDraft]);

  const handleSubmitReview = useCallback(async () => {
    if (!puckData || !draftId) {
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

  const handleUndo = useCallback(() => {
  }, []);
  const handleRedo = useCallback(() => {
  }, []);
  const handleDiscard = useCallback(() => {
    if (!ucd) return;
    setPuckData(ucdToPuck(ucd, page));
    commitDocument(ucd);
    setHasPendingChanges(false);
  }, [ucd, page]);

  const handleAgentPreview = useCallback((pv: PendingPreview) => {
    setPendingPreview(pv);
    setPreviewError(null);
    setPreviewSuggestions([]);
  }, []);

  const handleAgentApply = useCallback(async () => {
    if (!pendingPreview) return;
    setApplyingAgent(true);
    setPreviewError(null);
    try {
      const intent = pendingPreview.intent;

      if (intent?.type === "undo") {
        const undoRes = await fetch("/api/studio/undo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "undo" }),
        });
        const undoData = await undoRes.json();
        if (!undoData.success) {
          setPreviewError(undoData.error ?? "撤销失败");
          return;
        }
        await refreshDocument();
        setPendingPreview(null);
        return;
      }
      if (intent?.type === "redo") {
        const curVer = (getDocument() as UnifiedContentDocument | null)?.meta.version;
        const redoRes = await fetch("/api/studio/undo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "redo", version: curVer ? curVer + 1 : undefined }),
        });
        const redoData = await redoRes.json();
        if (!redoData.success) {
          setPreviewError(redoData.error ?? "重做失败");
          return;
        }
        await refreshDocument();
        setPendingPreview(null);
        return;
      }

      const res = await fetch("/api/agent/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: pendingPreview.command, options: { dryRun: false, page } }),
      });
      const data = await res.json();
      if (!data.success) {
        setPreviewError(data.error ?? data.message ?? "应用失败");
        if (data.stage === "parse" || data.stage === "plan") {
          setPreviewSuggestions(data.templates ?? []);
        }
        return;
      }
      await refreshDocument();
      setPendingPreview(null);
    } catch (err) {
      setPreviewError((err as Error).message);
    } finally {
      setApplyingAgent(false);
    }
  }, [pendingPreview, refreshDocument]);

  const handleAgentCancel = useCallback(() => {
    setPendingPreview(null);
    setPreviewError(null);
    setPreviewSuggestions([]);
  }, []);

  const handleAgentResult = useCallback((result: any) => {
    void result;
    refreshDocument();
  }, [refreshDocument]);

  const puckOverrides = useMemo(
    () => ({
      fieldTypes: { image: ImageField as any, list: ListField as any },
      outline: () => <StudioOutline />,
      fields: (fieldsProps: any) => (
        <TranslationEditor
          isLoading={fieldsProps.isLoading}
          itemSelector={fieldsProps.itemSelector ?? null}
        >
          {fieldsProps.children}
        </TranslationEditor>
      ),
    }),
    []
  );

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

  const preview = pendingPreview;

  return (
    <TranslationEditorContext.Provider
      value={{ ucd, onTranslationChange: handleTranslationChange }}
    >
      <div className="flex flex-col h-screen relative">
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
        >
          <NLCommandBar
            page={page}
            onPreview={handleAgentPreview}
            onResult={handleAgentResult}
          />
        </Toolbar>
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
            overrides={puckOverrides}
          />
        </div>
        <StatusBar
          pendingChanges={hasPendingChanges ? 1 : 0}
          draftStatus={draftStatus}
          version={version}
          lastActionTime={lastActionTime}
        />

        {preview && (
          <div className="fixed top-14 right-4 z-50">
            <IntentPreview
              command={preview.command}
              intent={preview.intent}
              operations={preview.operations}
              preview={preview.preview}
              onApply={handleAgentApply}
              onCancel={handleAgentCancel}
              applying={applyingAgent}
              suggestions={previewSuggestions.length > 0 ? previewSuggestions : undefined}
              error={previewError ?? undefined}
            />
          </div>
        )}
      </div>
    </TranslationEditorContext.Provider>
  );
}
