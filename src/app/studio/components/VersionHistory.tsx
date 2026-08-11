"use client";

// VersionHistory — overlay panel showing the version history.
// Fetches version entries from /api/studio/versions and displays them
// as a list. Each entry shows version number, timestamp, description,
// source (agent/studio), and operation count.

import { useEffect, useState } from "react";

interface VersionEntry {
  version: number;
  parentVersion: number;
  timestamp: string;
  description: string;
  source: string;
  opsCount: number;
}

interface VersionHistoryProps {
  onClose: () => void;
  currentVersion: number;
}

export function VersionHistory({ onClose, currentVersion }: VersionHistoryProps) {
  const [versions, setVersions] = useState<VersionEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/studio/versions");
        const data = await res.json();
        if (cancelled) return;
        if (data.success) {
          setVersions(data.versions);
        } else {
          setError(data.error ?? "Failed to load versions");
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
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[70vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900">
            Version History
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading && (
            <p className="px-4 py-8 text-center text-sm text-gray-400">
              Loading…
            </p>
          )}
          {error && (
            <p className="px-4 py-8 text-center text-sm text-red-600">
              {error}
            </p>
          )}
          {!loading && !error && versions.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-gray-400">
              No version history yet. Save changes to create versions.
            </p>
          )}
          {!loading && !error && versions.length > 0 && (
            <ul className="list-none">
              {[...versions].reverse().map((v) => (
                <li
                  key={v.version}
                  className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 ${
                    v.version === currentVersion
                      ? "bg-[#1B4D3E]/5"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-10 text-center">
                    <span
                      className={`text-sm font-bold ${
                        v.version === currentVersion
                          ? "text-[#1B4D3E]"
                          : "text-gray-700"
                      }`}
                    >
                      v{v.version}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 truncate">
                      {v.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(v.timestamp).toLocaleString()} ·{" "}
                      <span
                        className={
                          v.source === "agent"
                            ? "text-blue-600"
                            : "text-purple-600"
                        }
                      >
                        {v.source}
                      </span>{" "}
                      · {v.opsCount} ops
                    </p>
                  </div>
                  {v.version === currentVersion && (
                    <span className="text-xs text-[#1B4D3E] font-medium">
                      current
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-4 py-2 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Undo reverts the latest version. Rollback to a specific version is
            available in Stage F.
          </p>
        </div>
      </div>
    </div>
  );
}
