"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useCallback, useRef } from "react";
import { getRuleSuggestionTemplates } from "@/lib/agent/rule-matcher";
import type { Intent } from "@/lib/agent/types";

interface AgentPreview {
  intent: Intent;
  operations: any[];
  preview?: any;
}

interface AgentResult {
  success: boolean;
  newVersion?: number;
  query?: boolean;
  answer?: string;
  templates?: string[];
  stage?: string;
  undo?: boolean;
  redo?: boolean;
  hint?: string;
  [key: string]: any;
}

interface AgentError {
  message: string;
  stage?: string;
  isLLMDisabled?: boolean;
  isParseFailure?: boolean;
}

interface UseAgentCommandState {
  loading: boolean;
  error: AgentError | null;
  preview: (AgentPreview & { command: string }) | null;
  result: AgentResult | null;
  suggestions: string[];
  history: string[];
}

const HISTORY_KEY = "agent-command-history";
const MAX_HISTORY = 10;

function loadHistory(page: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(`${HISTORY_KEY}:${page}`);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return arr.slice(0, MAX_HISTORY);
  } catch {
  }
  return [];
}

function saveHistory(page: string, history: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      `${HISTORY_KEY}:${page}`,
      JSON.stringify(history.slice(0, MAX_HISTORY))
    );
  } catch {
  }
}

export function useAgentCommand(page: string) {
  const [state, setState] = useState<UseAgentCommandState>(() => ({
    loading: false,
    error: null,
    preview: null,
    result: null,
    suggestions: [],
    history: loadHistory(page),
  }));

  const lastCommandRef = useRef<string>("");

  const pushHistory = useCallback(
    (command: string) => {
      if (!command.trim()) return;
      setState((prev) => {
        const next = [
          command,
          ...prev.history.filter((c) => c !== command),
        ].slice(0, MAX_HISTORY);
        saveHistory(page, next);
        return { ...prev, history: next };
      });
    },
    [page]
  );

  const dryRun = useCallback(
    async (command: string) => {
      setState((prev) => ({ ...prev, loading: true, error: null, suggestions: [] }));
      lastCommandRef.current = command;
      try {
        const res = await fetch("/api/agent/command", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ command, options: { dryRun: true, page } }),
        });
        const data = await res.json();
        if (data.success) {
          setState((prev) => ({
            ...prev,
            loading: false,
            preview: {
              intent: data.intent,
              operations: data.operations ?? [],
              preview: data.preview,
              command,
            },
            result: null,
            error: null,
            suggestions: [],
          }));
          return data;
        }
        const isLLMDisabled =
          data.stage === "parse" &&
          (data.error?.includes("LLM") || data.error?.includes("规则") || data.error?.includes("确定性"));
        const isParseFailure = data.stage === "parse" || data.stage === "plan";
        const suggestions =
          isLLMDisabled || isParseFailure
            ? data.templates ?? getRuleSuggestionTemplates()
            : [];
        setState((prev) => ({
          ...prev,
          loading: false,
          preview: null,
          result: null,
          error: {
            message: data.error ?? data.message ?? "Unknown error",
            stage: data.stage,
            isLLMDisabled,
            isParseFailure,
          },
          suggestions,
        }));
        return data;
      } catch (err) {
        const message = (err as Error).message;
        setState((prev) => ({
          ...prev,
          loading: false,
          preview: null,
          result: null,
          error: { message, isParseFailure: true, isLLMDisabled: false },
          suggestions: getRuleSuggestionTemplates(),
        }));
        return { success: false, error: message };
      }
    },
    [page]
  );

  const apply = useCallback(async (): Promise<{
    success: boolean;
    newVersion?: number;
  }> => {
    const command = lastCommandRef.current;
    if (!command) {
      return { success: false };
    }
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const res = await fetch("/api/agent/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command, options: { dryRun: false, page } }),
      });
      const data: AgentResult & { success: boolean } = await res.json();
      if (data.success) {
        pushHistory(command);
        setState((prev) => ({
          ...prev,
          loading: false,
          result: data,
          preview: null,
          error: null,
        }));
        return { success: true, newVersion: data.newVersion };
      }
      const isLLMDisabled =
        (data as any).stage === "parse" &&
        ((data as any).error?.includes("LLM") ||
          (data as any).error?.includes("规则") ||
          (data as any).error?.includes("确定性"));
      const isParseFailure =
        (data as any).stage === "parse" || (data as any).stage === "plan";
      const suggestions =
        isLLMDisabled || isParseFailure
          ? (data as any).templates ?? getRuleSuggestionTemplates()
          : [];
      setState((prev) => ({
        ...prev,
        loading: false,
        result: null,
        error: {
          message: (data as any).error ?? (data as any).message ?? "Unknown error",
          stage: (data as any).stage,
          isLLMDisabled,
          isParseFailure,
        },
        suggestions,
      }));
      return { success: false };
    } catch (err) {
      const message = (err as Error).message;
      setState((prev) => ({
        ...prev,
        loading: false,
        result: null,
        error: { message, isParseFailure: true, isLLMDisabled: false },
        suggestions: getRuleSuggestionTemplates(),
      }));
      return { success: false };
    }
  }, [pushHistory, page]);

  const dismiss = useCallback(() => {
    setState((prev) => ({
      ...prev,
      preview: null,
      error: null,
      result: null,
      suggestions: [],
    }));
  }, []);

  return {
    state,
    dryRun,
    apply,
    dismiss,
  };
}
