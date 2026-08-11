"use client";

// Toolbar — Studio top bar.
//
// Left:  Page name | version | unsaved indicator
// Right: Undo | Redo | Discard | History | Save Draft | Submit Review | Publish
//
// Workflow buttons (Save Draft / Submit Review / Publish) are conditionally
// shown based on draftStatus:
//   editing → [Save Draft] visible
//   draft   → [Submit Review] visible
//   review  → [Publish] visible
//   published → none
//   none     → [Save Draft] visible (creates first draft)

import type { DraftStatus } from "@/lib/executor/draft-store";

interface ToolbarProps {
  page: string;
  version: number;
  hasPendingChanges: boolean;
  saving: boolean;
  redoCount: number;
  draftStatus: DraftStatus | "none";
  onSave: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onDiscard: () => void;
  onToggleHistory: () => void;
  onSaveDraft: () => void;
  onSubmitReview: () => void;
  onPublish: () => void;
}

export function Toolbar({
  page,
  version,
  hasPendingChanges,
  saving,
  redoCount,
  draftStatus,
  onSave,
  onUndo,
  onRedo,
  onDiscard,
  onToggleHistory,
  onSaveDraft,
  onSubmitReview,
  onPublish,
}: ToolbarProps) {
  const busy = saving;

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shrink-0">
      {/* Left: page + version + status */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-900 capitalize">
          {page}
        </span>
        <span className="text-xs text-gray-400">|</span>
        <span className="text-xs text-gray-500">v{version}</span>
        {hasPendingChanges && (
          <span className="text-xs text-amber-600 font-medium">
            ● unsaved changes
          </span>
        )}
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        {/* Version control */}
        <button
          type="button"
          onClick={onUndo}
          disabled={busy || version <= 1}
          className="px-3 py-1.5 text-sm text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Undo
        </button>
        <button
          type="button"
          onClick={onRedo}
          disabled={busy || redoCount === 0}
          className="px-3 py-1.5 text-sm text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          title={redoCount > 0 ? `${redoCount} change${redoCount > 1 ? "s" : ""} to redo` : undefined}
        >
          Redo{redoCount > 0 ? ` (${redoCount})` : ""}
        </button>
        <button
          type="button"
          onClick={onDiscard}
          disabled={busy || !hasPendingChanges}
          className="px-3 py-1.5 text-sm text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Discard
        </button>
        <button
          type="button"
          onClick={onToggleHistory}
          className="px-3 py-1.5 text-sm text-gray-700 rounded-md hover:bg-gray-100"
        >
          History
        </button>

        {/* Quick save (direct patch) */}
        <button
          type="button"
          onClick={onSave}
          disabled={busy || !hasPendingChanges}
          className="px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-gray-100 border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
          title="直接保存修改到当前版本"
        >
          Save
        </button>

        {/* Divider */}
        <span className="w-px h-6 bg-gray-200 mx-1" />

        {/* Workflow buttons — conditionally shown by draftStatus */}
        {(draftStatus === "editing" || draftStatus === "none") && (
          <button
            type="button"
            onClick={onSaveDraft}
            disabled={busy}
            className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
            title="保存到草稿箱"
          >
            Save Draft
          </button>
        )}

        {draftStatus === "draft" && (
          <button
            type="button"
            onClick={onSubmitReview}
            disabled={busy}
            className="px-3 py-1.5 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed"
            title="提交审核"
          >
            Submit Review
          </button>
        )}

        {draftStatus === "review" && (
          <button
            type="button"
            onClick={onPublish}
            disabled={busy}
            className="px-3 py-1.5 text-sm font-medium text-white bg-[#1B4D3E] rounded-md hover:bg-[#143D30] disabled:opacity-40 disabled:cursor-not-allowed"
            title="发布到生产"
          >
            Publish
          </button>
        )}

        {draftStatus === "published" && (
          <span className="px-3 py-1.5 text-sm text-green-700 font-medium">
            ✅ Published
          </span>
        )}
      </div>
    </header>
  );
}
