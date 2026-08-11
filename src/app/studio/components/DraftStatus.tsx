"use client";

// DraftStatus — banner showing the current draft workflow state.
//
// Displays a colored banner above the editor canvas with the current status
// and relevant action hints. The actual action buttons live in the Toolbar;
// this component is informational only.

import type { DraftStatus } from "@/lib/executor/draft-store";

interface DraftStatusProps {
  status: DraftStatus | "none";
  draftId?: string | null;
  submittedAt?: string | null;
  reviewNote?: string | null;
}

const STATUS_CONFIG: Record<
  DraftStatus | "none",
  { bg: string; text: string; border: string; message: string }
> = {
  editing: {
    bg: "bg-gray-50",
    text: "text-gray-700",
    border: "border-gray-200",
    message: "正在编辑 — 修改尚未保存到草稿",
  },
  draft: {
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    message: "草稿已保存 — 可提交审核或继续编辑",
  },
  review: {
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
    message: "审核中 — 等待审核通过后发布",
  },
  published: {
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    message: "已发布 — 修改已生效",
  },
  none: {
    bg: "bg-transparent",
    text: "text-gray-400",
    border: "border-transparent",
    message: "",
  },
};

export function DraftStatus({ status, draftId, submittedAt, reviewNote }: DraftStatusProps) {
  if (status === "none") return null;

  const config = STATUS_CONFIG[status];

  return (
    <div className={`px-4 py-1.5 text-xs border-b ${config.bg} ${config.text} ${config.border} flex items-center justify-between`}>
      <div className="flex items-center gap-3">
        <span className="font-medium">{config.message}</span>
        {draftId && (
          <span className="opacity-50">#{draftId.slice(0, 8)}</span>
        )}
        {submittedAt && status === "review" && (
          <span className="opacity-60">提交于 {submittedAt}</span>
        )}
      </div>
      {reviewNote && status === "draft" && (
        <span className="italic opacity-70">退回原因：{reviewNote}</span>
      )}
    </div>
  );
}
