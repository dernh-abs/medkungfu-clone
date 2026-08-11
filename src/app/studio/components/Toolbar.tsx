"use client";

// Toolbar — Studio top bar.
// Page name | Undo | Discard | Save | Version history toggle | Version badge.

interface ToolbarProps {
  page: string;
  version: number;
  hasPendingChanges: boolean;
  saving: boolean;
  onSave: () => void;
  onUndo: () => void;
  onDiscard: () => void;
  onToggleHistory: () => void;
}

export function Toolbar({
  page,
  version,
  hasPendingChanges,
  saving,
  onSave,
  onUndo,
  onDiscard,
  onToggleHistory,
}: ToolbarProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shrink-0">
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

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onUndo}
          disabled={saving || version <= 1}
          className="px-3 py-1.5 text-sm text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Undo
        </button>
        <button
          type="button"
          onClick={onDiscard}
          disabled={saving || !hasPendingChanges}
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
        <button
          type="button"
          onClick={onSave}
          disabled={saving || !hasPendingChanges}
          className="px-4 py-1.5 text-sm font-medium text-white bg-[#1B4D3E] rounded-md hover:bg-[#143D30] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </header>
  );
}
