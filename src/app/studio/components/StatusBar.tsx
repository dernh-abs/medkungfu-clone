"use client";

// StatusBar — bottom bar for the Studio editor.
//
// Shows: pending changes count | draft status | last action time | version.
//
// Planned layout (per spec):
//   📝 3 处未保存修改 | 📦 2 个区段在草稿箱待发布 | 最后编辑：14:32 | ✅ 已发布

import type { DraftStatus } from "@/lib/executor/draft-store";

interface StatusBarProps {
  pendingChanges: number;
  draftStatus: DraftStatus | "none";
  version: number;
  lastActionTime?: string | null;
}

const STATUS_META: Record<DraftStatus | "none", { label: string; icon: string; color: string }> = {
  editing: { label: "编辑中", icon: "✏️", color: "text-gray-600" },
  draft: { label: "草稿", icon: "📦", color: "text-blue-600" },
  review: { label: "审核中", icon: "⏳", color: "text-amber-600" },
  published: { label: "已发布", icon: "✅", color: "text-green-600" },
  none: { label: "无草稿", icon: "—", color: "text-gray-400" },
};

export function StatusBar({ pendingChanges, draftStatus, version, lastActionTime }: StatusBarProps) {
  const meta = STATUS_META[draftStatus];

  return (
    <footer className="flex items-center justify-between px-4 py-1.5 bg-gray-50 border-t border-gray-200 text-xs text-gray-600 shrink-0">
      <div className="flex items-center gap-4">
        <span>
          {pendingChanges > 0 ? (
            <span className="text-amber-600 font-medium">
              📝 {pendingChanges} 处未保存修改
            </span>
          ) : (
            <span className="text-gray-400">无未保存修改</span>
          )}
        </span>

        <span className="text-gray-300">|</span>

        <span className={meta.color}>
          {meta.icon} {meta.label}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {lastActionTime && (
          <>
            <span className="text-gray-400">
              最后编辑：{lastActionTime}
            </span>
            <span className="text-gray-300">|</span>
          </>
        )}
        <span className="text-gray-500">v{version}</span>
      </div>
    </footer>
  );
}
