"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface IntentPreviewProps {
  command: string;
  intent: any;
  operations: any[];
  preview?: any;
  onApply: () => void;
  onCancel: () => void;
  applying?: boolean;
  suggestions?: string[];
  error?: string;
}

const INTENT_META: Record<string, { icon: string; label: string }> = {
  update_text: { icon: "📝", label: "修改文本" },
  update_image: { icon: "🖼️", label: "替换图片" },
  update_link: { icon: "🔗", label: "修改链接" },
  add_section: { icon: "➕", label: "新增区段" },
  duplicate_section: { icon: "📑", label: "复制区段" },
  remove_section: { icon: "🗑️", label: "删除区段" },
  reorder_sections: { icon: "↕️", label: "移动区段" },
  undo: { icon: "↶", label: "撤销" },
  redo: { icon: "↷", label: "重做" },
  query: { icon: "❓", label: "查询" },
  translate: { icon: "🌐", label: "翻译" },
  bulk_update: { icon: "📦", label: "批量" },
};

function truncate(value: any, max = 40): string {
  if (value == null) return "—";
  const s = typeof value === "string" ? value : JSON.stringify(value);
  if (s.length <= max) return s;
  return s.slice(0, max) + "…";
}

function humanTarget(intent: any): string {
  if (!intent) return "—";
  const parts: string[] = [];
  if (intent.page) parts.push(`页面：${intent.page}`);
  if (intent.target) parts.push(`目标：${intent.target}`);
  if (intent.sectionId) parts.push(`区段：${intent.sectionId}`);
  if (intent.sectionType) parts.push(`类型：${intent.sectionType}`);
  if (intent.value != null) parts.push(`值：${truncate(intent.value, 30)}`);
  if (intent.newSrc) parts.push(`新图片：${truncate(intent.newSrc, 30)}`);
  if (intent.newHref) parts.push(`新链接：${truncate(intent.newHref, 30)}`);
  if (intent.question) parts.push(`问题：${intent.question}`);
  if (intent.newOrder && Array.isArray(intent.newOrder)) {
    parts.push(`顺序：${intent.newOrder.join(", ")}`);
  }
  if (intent.position) {
    const p = intent.position;
    if (typeof p === "object" && p.anchor !== undefined) {
      parts.push(`位置：${p.side} ${p.anchor}`);
    }
  }
  if (intent.lang) parts.push(`语言：${intent.lang}`);
  return parts.length ? parts.join(" · ") : JSON.stringify(intent);
}

export function IntentPreview({
  command,
  intent,
  operations,
  onApply,
  onCancel,
  applying,
  suggestions,
  error,
}: IntentPreviewProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const meta = intent?.type ? INTENT_META[intent.type] : null;
  const isFailure = !!error || !intent;
  const isQuery = intent?.type === "query";

  const copyTemplate = async (t: string) => {
    try {
      await navigator.clipboard.writeText(t);
      setCopied(t);
      setTimeout(() => setCopied(null), 1500);
    } catch {
    }
  };

  return (
    <div
      className="flex flex-col bg-white rounded-lg shadow-xl border border-gray-200"
      style={{ width: 420 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          {isFailure ? (
            <span className="text-xl">⚠️</span>
          ) : (
            <span className="text-xl">{meta?.icon ?? "📋"}</span>
          )}
          <h3 className="text-sm font-semibold text-gray-900">
            {isFailure ? "指令解析失败" : meta?.label ?? "预览修改"}
          </h3>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={onCancel}
          title="关闭"
        >
          ✕
        </Button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {/* Command echo */}
        <div className="rounded-md bg-gray-50 border border-gray-100 px-3 py-2 text-xs text-gray-600 font-mono break-all">
          {command}
        </div>

        {isFailure ? (
          <>
            <div className="text-sm text-red-600">
              {error ?? "无法解析此指令，请尝试以下格式："}
            </div>
            {suggestions && suggestions.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-xs text-gray-500 font-medium">建议指令：</div>
                <ul className="space-y-1">
                  {suggestions.map((t, i) => (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => copyTemplate(t)}
                        className="w-full text-left text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-50 px-2 py-1 rounded border border-gray-100 transition"
                        title={copied === t ? "已复制！" : `点击复制：${t}`}
                      >
                        {copied === t ? "✅ 已复制 · " : "📋 "}
                        <span className="font-mono">{t}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Target info */}
            <div className="space-y-1">
              <div className="text-xs text-gray-500 font-medium">影响目标</div>
              <div className="text-sm text-gray-800 break-all">
                {humanTarget(intent)}
              </div>
            </div>

            {/* Operations */}
            {operations.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-xs text-gray-500 font-medium">
                  将执行以下操作：
                </div>
                <ul className="space-y-1">
                  {operations.map((op, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 rounded px-2 py-1.5 border border-gray-100"
                    >
                      <span
                        className={`shrink-0 font-mono text-[10px] px-1.5 py-0.5 rounded ${
                          op.op === "replace"
                            ? "bg-blue-50 text-blue-700"
                            : op.op === "add"
                            ? "bg-green-50 text-green-700"
                            : op.op === "remove"
                            ? "bg-red-50 text-red-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {op.op}
                      </span>
                      <span className="font-mono break-all">
                        {op.path} → {truncate(op.value, 36)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {operations.length === 0 && isQuery && (
              <div className="text-xs text-gray-500">查询操作，无需补丁执行。</div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-gray-100">
        {isFailure ? (
          <Button type="button" variant="default" size="sm" onClick={onCancel}>
            知道了
          </Button>
        ) : (
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onCancel}
              disabled={applying}
            >
              取消
            </Button>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={onApply}
              disabled={applying}
            >
              {applying ? "应用中…" : "应用修改"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
