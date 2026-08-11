"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

// TranslationEditor — replaces Puck's default right-side field panel.
//
// When a section is selected on the canvas, this component:
//   1. Reads the selected item via a top-level `createUsePuck()` hook with
//      three scalar-only selectors (string / null / stable function ref)
//      so snapshot caching is safe.
//   2. Computes which translation keys belong to that section (static
//      namespaces + dynamic key refs from the section's props).
//   3. Renders EN/ZH bilingual edit fields for each key, using metadata
//      (label, type, maxLength) from translation-meta.json.
//   4. Falls back to Puck's default field panel ("组件属性") underneath so
//      non-translation props (image, links, list structure) are still
//      editable.
//
// Translation values are read from / written to the UCD via a React Context
// provided by PuckEditor. Edits trigger `commitDocument()` for live preview
// and a debounced save.

import { useGetPuck } from "@measured/puck";
import { createContext, useContext, type ReactNode } from "react";

import type { UnifiedContentDocument } from "@/lib/content/content-schema";
import {
  getSectionTranslationKeys,
  getTranslationKeyMeta,
} from "@/lib/puck/section-translation-map";
import { resolveBlockTitle } from "@/lib/puck/block-title";

// ─── Context (provided by PuckEditor) ──────────────────────────────────

export interface TranslationEditorContextValue {
  ucd: UnifiedContentDocument | null;
  onTranslationChange: (key: string, lang: "en" | "zh", value: string) => void;
}

export const TranslationEditorContext = createContext<TranslationEditorContextValue>({
  ucd: null,
  onTranslationChange: () => {},
});

// ─── Helpers ───────────────────────────────────────────────────────────

/** Resolve a dotted path ("hero.title") against a nested translation dict. */
function resolveNested(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return "";
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : "";
}

// ─── Single translation key editor (EN + ZH) ───────────────────────────

function TranslationKeyEditor({
  translationKey,
  enValue,
  zhValue,
  onChange,
}: {
  translationKey: string;
  enValue: string;
  zhValue: string;
  onChange: (lang: "en" | "zh", value: string) => void;
}) {
  const meta = getTranslationKeyMeta(translationKey);
  const isTextarea = meta?.type === "textarea";
  const maxLength = meta?.maxLength;
  const overLimit = maxLength
    ? enValue.length > maxLength || zhValue.length > maxLength
    : false;

  const inputClass = `w-full px-2 py-1 text-sm border rounded focus:outline-none focus:border-[#1B4D3E] ${
    overLimit ? "border-red-300" : "border-gray-200"
  }`;

  return (
    <div className="px-3 py-2.5 border-b border-gray-100">
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="text-xs font-medium text-gray-800 truncate">
          {meta?.label ?? translationKey}
        </span>
        <span className="text-[10px] text-gray-400 font-mono shrink-0">
          {translationKey}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {/* EN */}
        <div>
          <label className="flex items-center justify-between mb-0.5">
            <span className="text-[10px] text-gray-500">EN</span>
            {maxLength && (
              <span
                className={`text-[10px] ${
                  enValue.length > maxLength ? "text-red-500" : "text-gray-400"
                }`}
              >
                {enValue.length}/{maxLength}
              </span>
            )}
          </label>
          {isTextarea ? (
            <textarea
              value={enValue}
              onChange={(e) => onChange("en", e.target.value)}
              rows={2}
              className={inputClass}
            />
          ) : (
            <input
              type="text"
              value={enValue}
              onChange={(e) => onChange("en", e.target.value)}
              className={inputClass}
            />
          )}
        </div>
        {/* ZH */}
        <div>
          <label className="flex items-center justify-between mb-0.5">
            <span className="text-[10px] text-gray-500">ZH</span>
            {maxLength && (
              <span
                className={`text-[10px] ${
                  zhValue.length > maxLength ? "text-red-500" : "text-gray-400"
                }`}
              >
                {zhValue.length}/{maxLength}
              </span>
            )}
          </label>
          {isTextarea ? (
            <textarea
              value={zhValue}
              onChange={(e) => onChange("zh", e.target.value)}
              rows={2}
              className={inputClass}
            />
          ) : (
            <input
              type="text"
              value={zhValue}
              onChange={(e) => onChange("zh", e.target.value)}
              className={inputClass}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── TranslationEditor (right-side panel replacement) ──────────────────

export function TranslationEditor({
  children,
  isLoading,
  itemSelector,
}: {
  children?: ReactNode;
  isLoading?: boolean;
  itemSelector?: { index?: number; zone?: string; root?: boolean } | null;
}) {
  const ctx = useContext(TranslationEditorContext);

  // Resolve the currently-selected section from Puck's `itemSelector` prop,
  // which Puck passes to the `fields` override on every selection change.
  // We deliberately avoid `usePuck().selectedItem`: in Puck v0.20 the
  // `selectedItem` mirror proved unreliable inside the override (it kept
  // returning null). `getItemBySelector` reads live app state, and this
  // component re-renders whenever Puck re-passes `itemSelector`, so the
  // displayed section is always in sync with the canvas selection.
  const getPuck = useGetPuck();
  // Puck's `ItemSelector.index` is typed as a required number, but a root
  // selection arrives with `index: undefined`. Normalize defensively so we
  // don't pass an invalid selector into `getItemBySelector`.
  const normalizedSelector = itemSelector
    ? itemSelector.root
      ? { root: true }
      : { index: itemSelector.index, zone: itemSelector.zone }
    : null;
  const picked = normalizedSelector ? getPuck().getItemBySelector(normalizedSelector as any) : null;
  const selectedItem: { type?: string; props?: Record<string, unknown> } | null =
    picked && picked.type ? { type: picked.type, props: picked.props ?? {} } : null;

  const sectionType: string = selectedItem?.type ?? "";
  const sectionProps: Record<string, unknown> = selectedItem?.props ?? {};

  const resolvedSelectedItem: { type: string; props: Record<string, unknown> } | null = sectionType
    ? { type: sectionType, props: sectionProps }
    : null;

  const translationKeys = getSectionTranslationKeys(sectionType, sectionProps);

  // Context header label: resolve the block's real title (translation value for
  // home components, self-contained `title` prop for `pageSection`).
  const blockTitle = resolveBlockTitle(sectionType, sectionProps, ctx.ucd);

  if (isLoading) {
    return (
      <div className="p-4 text-sm text-gray-500">
        加载中…
      </div>
    );
  }

  if (!resolvedSelectedItem) {
    return (
      <div className="p-4 text-sm text-gray-500">
        在画布上点击任意组件以编辑其文本内容。
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Context header — shows the selected block's title + type. */}
      <div
        className="px-3 py-2 bg-[#1B4D3E] text-white shrink-0"
        data-studio-block-header
      >
        <div className="text-xs font-semibold truncate" title={blockTitle}>
          {blockTitle}
        </div>
        {sectionType && (
          <div className="text-[10px] opacity-80 font-mono mt-0.5">
            {sectionType}
          </div>
        )}
      </div>

      {/* Translation text editing */}
      {translationKeys.length > 0 && (
        <div className="border-b border-gray-200">
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-700">文本内容</span>
            <span className="ml-2 text-[10px] text-gray-400">
              ({translationKeys.length} 项)
            </span>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: "50vh" }}>
            {translationKeys.map((key) => (
              <TranslationKeyEditor
                key={key}
                translationKey={key}
                enValue={resolveNested(ctx.ucd?.translations?.en, key)}
                zhValue={resolveNested(ctx.ucd?.translations?.zh, key)}
                onChange={(lang, value) => ctx.onTranslationChange(key, lang, value)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Default Puck fields panel (image, links, lists, etc.) */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
          <span className="text-xs font-semibold text-gray-700">组件属性</span>
        </div>
        {children}
      </div>
    </div>
  );
}
