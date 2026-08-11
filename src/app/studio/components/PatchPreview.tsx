"use client";

// PatchPreview — bottom bar showing pending JSON Patch operations.
// Displays the diff between the original document and the current draft,
// plus the last saved operations for reference.

import { useState } from "react";

import type { JsonPatchOperation } from "@/lib/executor/patch-types";

interface PatchPreviewProps {
  pendingOps: JsonPatchOperation[];
  lastSavedOps: JsonPatchOperation[];
}

type Tab = "pending" | "lastSaved";

export function PatchPreview({ pendingOps, lastSavedOps }: PatchPreviewProps) {
  const [tab, setTab] = useState<Tab>("pending");
  const [expanded, setExpanded] = useState(true);

  const ops = tab === "pending" ? pendingOps : lastSavedOps;
  const label = tab === "pending" ? "Pending" : "Last Saved";

  return (
    <footer className="shrink-0 bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="flex items-center justify-between px-4 py-1.5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="text-xs font-medium hover:text-white"
          >
            {expanded ? "▼" : "▶"} JSON Patch
          </button>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setTab("pending")}
              className={`text-xs px-2 py-0.5 rounded ${
                tab === "pending"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Pending ({pendingOps.length})
            </button>
            <button
              type="button"
              onClick={() => setTab("lastSaved")}
              className={`text-xs px-2 py-0.5 rounded ${
                tab === "lastSaved"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Last Saved ({lastSavedOps.length})
            </button>
          </div>
        </div>
        {pendingOps.length > 0 && (
          <span className="text-xs text-amber-400">
            {pendingOps.length} uncommitted operation{pendingOps.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>
      {expanded && (
        <div className="px-4 pb-2 max-h-40 overflow-auto">
          {ops.length === 0 ? (
            <p className="text-xs text-gray-500 py-2">
              No {label.toLowerCase()} operations.
            </p>
          ) : (
            <pre className="text-xs text-green-400 font-mono leading-relaxed">
              {JSON.stringify(
                ops.map((op) => {
                  const o = op as unknown as Record<string, unknown>;
                  return {
                    op: o.op,
                    path: o.path,
                    ...(o.value !== undefined ? { value: o.value } : {}),
                    ...(o.from !== undefined ? { from: o.from } : {}),
                  };
                }),
                null,
                2
              )}
            </pre>
          )}
        </div>
      )}
    </footer>
  );
}
