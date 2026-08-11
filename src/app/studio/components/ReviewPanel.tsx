"use client";

// ReviewPanel —审核对比面板，显示草稿与生产文档之间的差异。
//
// Uses generateDiff to compute JSON Patch operations between the draft UCD
// and the production UCD. Each operation is displayed with color coding:
//   add (green) | remove (red) | replace (yellow) | move (blue)

import { useState, useMemo } from "react";
import { generateDiff } from "@/lib/executor/diff-generator";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import type { JsonPatchOperation } from "@/lib/executor/patch-types";

interface ReviewPanelProps {
  draftDocument: UnifiedContentDocument;
  productionDocument: UnifiedContentDocument;
  onApprove: () => void;
  onReject: (note?: string) => void;
  onClose: () => void;
}

const OP_COLORS: Record<string, string> = {
  add: "text-green-700 bg-green-50 border-green-200",
  remove: "text-red-700 bg-red-50 border-red-200",
  replace: "text-amber-700 bg-amber-50 border-amber-200",
  move: "text-blue-700 bg-blue-50 border-blue-200",
};

const OP_ICONS: Record<string, string> = {
  add: "+",
  remove: "−",
  replace: "→",
  move: "↔",
};

export function ReviewPanel({
  draftDocument,
  productionDocument,
  onApprove,
  onReject,
  onClose,
}: ReviewPanelProps) {
  const diffOps = useMemo<JsonPatchOperation[]>(
    () => generateDiff(productionDocument, draftDocument),
    [productionDocument, draftDocument]
  );
  const [rejectNote, setRejectNote] = useState("");
  const [showRejectInput, setShowRejectInput] = useState(false);

  const addCount = diffOps.filter((o) => o.op === "add").length;
  const removeCount = diffOps.filter((o) => o.op === "remove").length;
  const replaceCount = diffOps.filter((o) => o.op === "replace").length;
  const moveCount = diffOps.filter((o) => o.op === "move").length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Review Changes
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Summary */}
        <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-4 text-sm">
          <span className="text-gray-600">
            {diffOps.length} change{diffOps.length !== 1 ? "s" : ""}
          </span>
          {addCount > 0 && (
            <span className="text-green-700">+{addCount} add</span>
          )}
          {removeCount > 0 && (
            <span className="text-red-700">−{removeCount} remove</span>
          )}
          {replaceCount > 0 && (
            <span className="text-amber-700">→{replaceCount} replace</span>
          )}
          {moveCount > 0 && (
            <span className="text-blue-700">↔{moveCount} move</span>
          )}
        </div>

        {/* Diff list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {diffOps.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No changes detected between draft and production.
            </p>
          ) : (
            <ul className="space-y-2">
              {diffOps.map((op, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${
                    OP_COLORS[op.op] ?? "text-gray-700 bg-gray-50 border-gray-200"
                  }`}
                >
                  <span className="font-mono font-bold text-lg leading-none mt-0.5">
                    {OP_ICONS[op.op] ?? "?"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">
                      <span className="uppercase">{op.op}</span>{" "}
                      <code className="text-xs break-all">{op.path}</code>
                    </p>
                    {"value" in op && op.value !== undefined && (
                      <p className="text-xs mt-1 opacity-80">
                        Value:{" "}
                        <code className="break-all">
                          {typeof op.value === "string"
                            ? op.value
                            : JSON.stringify(op.value)}
                        </code>
                      </p>
                    )}
                    {"from" in op && op.from !== undefined && (
                      <p className="text-xs mt-1 opacity-80">
                        From: <code>{op.from}</code>
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Reject note input */}
        {showRejectInput && (
          <div className="px-6 py-3 border-t border-gray-100">
            <textarea
              value={rejectNote}
              onChange={(e) => setRejectNote(e.target.value)}
              placeholder="Rejection reason (optional)…"
              rows={2}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200">
          {showRejectInput ? (
            <>
              <button
                type="button"
                onClick={() => {
                  setShowRejectInput(false);
                  setRejectNote("");
                }}
                className="px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => onReject(rejectNote || undefined)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Confirm Reject
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowRejectInput(true)}
                className="px-4 py-2 text-sm text-red-600 rounded-md hover:bg-red-50"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={onApprove}
                disabled={diffOps.length === 0}
                className="px-4 py-2 text-sm font-medium text-white bg-[#1B4D3E] rounded-md hover:bg-[#143D30] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Approve & Publish
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
