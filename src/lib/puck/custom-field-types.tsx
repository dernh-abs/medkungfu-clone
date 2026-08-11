// Puck custom field types — registered via overrides.fieldTypes.
//
// Adds two custom field types to puck:
//   - "image" : renders ImageUploader (replaces hand-entered URL text fields)
//   - "list"  : renders a card-editing list with add/remove/reorder,
//               with per-item fields declared in `itemFields`
//
// Type mapping:
//   ImageField receives FieldProps<ImageFieldDef, string> — value is the URL.
//   ListField  receives FieldProps<ListFieldDef, string> — value is JSON string
//               (kept as string to match the puck-config schema upgrade;
//               we parse/serialize internally so clients don't see JSON).

"use client";

import { useState, useCallback } from "react";

import { ImageUploader } from "@/app/studio/components/ImageUploader";

// ─── Custom field definitions (extended by puck-config users) ──────────
export interface ImageFieldDef {
  type: "image";
  label?: string;
  labelIcon?: React.ReactElement;
  metadata?: unknown;
  visible?: boolean;
}

export interface ListFieldDefItemField {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select" | "image";
  placeholder?: string;
  options?: { label: string; value: string }[];
}

export interface ListFieldDef {
  type: "list";
  label?: string;
  labelIcon?: React.ReactElement;
  metadata?: unknown;
  visible?: boolean;
  /** Schema for each item's fields. */
  itemFields: ListFieldDefItemField[];
  /** Optional add-button label. */
  addLabel?: string;
  /** Optional empty-state text. */
  emptyText?: string;
}

// Puck FieldProps<F, ValueType> — { field, value, onChange, readOnly, id }
interface FieldPropsOf<F, V> {
  field: F;
  value: V;
  id?: string;
  onChange: (value: V) => void;
  readOnly?: boolean;
  /** Passed by Puck when rendering; unused here. */
  children?: React.ReactNode;
  /** Passed by Puck when rendering; unused here. */
  name?: string;
}

// ─── 1. Image field ────────────────────────────────────────────────────

export function ImageField({
  field,
  value,
  onChange,
  readOnly,
}: FieldPropsOf<ImageFieldDef, string>) {
  if (readOnly) {
    return (
      <div className="w-full">
        {field.label && (
          <span className="block text-xs text-gray-500 mb-1">{field.label}</span>
        )}
        <div className="w-full h-24 rounded border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt={field.label ?? "image"}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-xs text-gray-400">未设置图片</span>
          )}
        </div>
      </div>
    );
  }
  return (
    <ImageUploader
      value={value ?? ""}
      onChange={onChange}
      label={field.label}
    />
  );
}

// ─── 2. List field (card editor, JSON <-> array inside) ────────────────
//
// puck-config currently stores list fields as JSON strings to match the
// pre-migration textarea(JSON) pattern. The ListField transparently
// parses/serializes so card editing works without changing the UCD schema.

type AnyItem = Record<string, unknown>;

function parseItems(value: string | undefined | null): AnyItem[] {
  if (!value) return [];
  try {
    const arr = JSON.parse(value);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function serializeItems(items: AnyItem[]): string {
  return JSON.stringify(items, null, 2);
}

function defaultForItem(fields: ListFieldDefItemField[]): AnyItem {
  const obj: AnyItem = {};
  for (const f of fields) {
    if (f.type === "number") obj[f.key] = 0;
    else if (f.type === "select" && f.options?.[0]) obj[f.key] = f.options[0].value;
    else obj[f.key] = "";
  }
  return obj;
}

export function ListField({
  field,
  value,
  onChange,
  readOnly,
}: FieldPropsOf<ListFieldDef, string>) {
  const items = parseItems(value);
  const meta = (field.metadata ?? {}) as ListFieldDef;
  const itemFields: ListFieldDefItemField[] = meta.itemFields ?? [];
  const addLabel = meta.addLabel;
  const emptyText = meta.emptyText;

  const write = useCallback(
    (next: AnyItem[]) => onChange(serializeItems(next)),
    [onChange]
  );
  const [editIdxs, setEditIdxs] = useState<Record<number, boolean>>({});

  const addItem = () => {
    write([...items, defaultForItem(itemFields)]);
  };
  const removeItem = (idx: number) => {
    write(items.filter((_, i) => i !== idx));
    const n = { ...editIdxs };
    delete n[idx];
    setEditIdxs(n);
  };
  const move = (idx: number, dir: -1 | 1) => {
    const j = idx + dir;
    if (j < 0 || j >= items.length) return;
    const copy = items.slice();
    [copy[idx], copy[j]] = [copy[j], copy[idx]];
    write(copy);
  };
  const updateItemField = (idx: number, key: string, val: unknown) => {
    const copy = items.slice();
    copy[idx] = { ...copy[idx], [key]: val };
    write(copy);
  };
  const toggleEdit = (idx: number) =>
    setEditIdxs((s) => ({ ...s, [idx]: !s[idx] }));

  return (
    <div className="w-full">
      {field.label && (
        <span className="block text-xs text-gray-500 mb-1.5">{field.label}</span>
      )}
      <div className="flex flex-col gap-2">
        {items.length === 0 && (
          <div className="text-xs text-gray-400 py-3 text-center border border-dashed border-gray-200 rounded">
            {emptyText ?? "列表为空"}
          </div>
        )}
        {items.map((item, idx) => {
          const expanded = !!editIdxs[idx];
          return (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => move(idx, -1)}
                    disabled={idx === 0 || readOnly}
                    className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                    title="上移"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => move(idx, 1)}
                    disabled={idx === items.length - 1 || readOnly}
                    className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                    title="下移"
                  >
                    ↓
                  </button>
                  <span className="ml-2 text-xs font-medium text-gray-700">
                    #{idx + 1}{" "}
                    <span className="text-gray-400 font-normal">
                      {summarize(item)}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => toggleEdit(idx)}
                    disabled={readOnly}
                    className="px-2 py-0.5 text-[10px] text-gray-600 hover:bg-gray-100 rounded"
                  >
                    {expanded ? "收起" : "编辑"}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    disabled={readOnly}
                    className="px-2 py-0.5 text-[10px] text-red-600 hover:bg-red-50 rounded"
                  >
                    删除
                  </button>
                </div>
              </div>
              {expanded && (
                <div className="p-3 flex flex-col gap-2">
                  {itemFields.map((f) => (
                    <ItemFieldEditor
                      key={f.key}
                      def={f}
                      value={item[f.key]}
                      disabled={readOnly}
                      onChange={(v) => updateItemField(idx, f.key, v)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!readOnly && (
        <button
          type="button"
          onClick={addItem}
          className="mt-2 w-full px-3 py-2 text-xs border border-dashed border-gray-300 rounded text-gray-600 hover:bg-gray-50 hover:border-gray-400"
        >
          + {addLabel ?? "添加项目"}
        </button>
      )}
    </div>
  );
}

function summarize(item: AnyItem): string {
  // Show first few scalar values as a summary in the collapse header.
  const vals: string[] = [];
  for (const v of Object.values(item)) {
    if (typeof v === "string") vals.push(v.length > 20 ? v.slice(0, 20) + "…" : v);
    else if (typeof v === "number") vals.push(String(v));
    if (vals.length >= 2) break;
  }
  return vals.join(" · ") || "";
}

function ItemFieldEditor({
  def,
  value,
  disabled,
  onChange,
}: {
  def: ListFieldDefItemField;
  value: unknown;
  disabled?: boolean;
  onChange: (v: unknown) => void;
}) {
  const strVal = typeof value === "string" ? value : value === null || value === undefined ? "" : String(value);
  switch (def.type) {
    case "textarea":
      return (
        <label className="block">
          <span className="block text-[11px] text-gray-500 mb-0.5">{def.label}</span>
          <textarea
            value={strVal}
            placeholder={def.placeholder}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E] disabled:bg-gray-50"
          />
        </label>
      );
    case "number":
      return (
        <label className="block">
          <span className="block text-[11px] text-gray-500 mb-0.5">{def.label}</span>
          <input
            type="number"
            value={strVal}
            placeholder={def.placeholder}
            disabled={disabled}
            onChange={(e) =>
              onChange(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E] disabled:bg-gray-50"
          />
        </label>
      );
    case "select":
      return (
        <label className="block">
          <span className="block text-[11px] text-gray-500 mb-0.5">{def.label}</span>
          <select
            value={strVal}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E] disabled:bg-gray-50"
          >
            {def.options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      );
    case "image":
      return (
        <ImageUploader
          value={strVal}
          onChange={(url) => onChange(url)}
          label={def.label}
        />
      );
    default:
      return (
        <label className="block">
          <span className="block text-[11px] text-gray-500 mb-0.5">{def.label}</span>
          <input
            type="text"
            value={strVal}
            placeholder={def.placeholder}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E] disabled:bg-gray-50"
          />
        </label>
      );
  }
}
