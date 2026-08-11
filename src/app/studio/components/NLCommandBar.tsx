"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useAgentCommand } from "../hooks/useAgentCommand";

interface NLCommandBarProps {
  page: string;
  onPreview: (preview: {
    intent: any;
    operations: any[];
    preview?: any;
    command: string;
  }) => void;
  onResult?: (result: any) => void;
}

export function NLCommandBar({ page, onPreview, onResult }: NLCommandBarProps) {
  const { state, dryRun, apply, dismiss } = useAgentCommand(page);
  // Hook surface kept stable for external callers; apply routed via IntentPreview card.
  void apply; void dismiss;
  const [inputValue, setInputValue] = useState("");
  const [historyOpen, setHistoryOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setHistoryOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setHistoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (state.preview) {
      onPreview(state.preview);
    }
  }, [state.preview, onPreview]);

  useEffect(() => {
    if (state.result && onResult) {
      onResult(state.result);
    }
  }, [state.result, onResult]);

  const handleExecute = async () => {
    const cmd = inputValue.trim();
    if (!cmd) return;
    setHistoryOpen(false);
    const resp = await dryRun(cmd);
    if (resp && resp.success === false) {
      onPreview({
        intent: null,
        operations: [],
        command: cmd,
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleExecute();
    } else if (e.key === "Escape") {
      setHistoryOpen(false);
    }
  };

  const pickHistory = (cmd: string) => {
    setInputValue(cmd);
    inputRef.current?.focus();
    setHistoryOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center gap-2 w-96">
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setHistoryOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="输入设计指令（⌘K 聚焦）"
          className="w-full h-8 px-3 pr-16 text-sm rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={state.loading}
        />
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 border border-gray-200 rounded px-1 py-0.5">
          ⌘K
        </span>

        {historyOpen && state.history.length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
            {state.history.map((h, i) => (
              <button
                key={i}
                type="button"
                onClick={() => pickHistory(h)}
                className="w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-50 last:border-b-0"
              >
                {h}
              </button>
            ))}
          </div>
        )}
      </div>

      <Button
        type="button"
        variant="default"
        size="sm"
        onClick={handleExecute}
        disabled={state.loading || !inputValue.trim()}
      >
        {state.loading ? "…" : "执行"}
      </Button>

      <div className="absolute -bottom-4 left-0 text-[11px] text-gray-400 whitespace-nowrap">
        试试：把 hero 标题改成 欢迎，或输入 帮助 查看全部指令
      </div>
    </div>
  );
}
