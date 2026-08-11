"use client";

// PropertyPanel — right sidebar for editing the selected section's fields.
//
// The panel is generic: it flattens the section data into dot-notation
// paths and renders an input for each leaf value (string, number, boolean).
// Arrays of objects are shown as groups with indexed paths.
//
// Each edit calls onUpdate(sectionId, fieldPath, value) which updates the
// draft via Immer. The diff generator then produces the corresponding
// replace operation automatically.

import { useMemo } from "react";

interface PropertyPanelProps {
  sectionId: string | null;
  sectionData: unknown;
  onUpdate: (sectionId: string, fieldPath: string, value: unknown) => void;
}

interface LeafField {
  path: string;
  value: string | number | boolean;
  type: "string" | "number" | "boolean";
  label: string;
}

/** Flatten an object into dot-notation leaf paths. */
function flatten(obj: unknown, prefix = ""): LeafField[] {
  const fields: LeafField[] = [];
  if (obj == null) return fields;

  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      const path = prefix ? `${prefix}.${i}` : String(i);
      if (item != null && typeof item === "object") {
        fields.push(...flatten(item, path));
      } else {
        fields.push(makeLeaf(path, item));
      }
    });
    return fields;
  }

  if (typeof obj === "object") {
    for (const [key, val] of Object.entries(obj as Record<string, unknown>)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (val != null && typeof val === "object") {
        fields.push(...flatten(val, path));
      } else {
        fields.push(makeLeaf(path, val));
      }
    }
    return fields;
  }

  return fields;
}

function makeLeaf(path: string, value: unknown): LeafField {
  const v = value as string | number | boolean | null | undefined;
  if (typeof v === "number") {
    return { path, value: v, type: "number", label: path };
  }
  if (typeof v === "boolean") {
    return { path, value: v, type: "boolean", label: path };
  }
  return { path, value: String(v ?? ""), type: "string", label: path };
}

/** Group fields by their first path segment for display. */
function groupFields(fields: LeafField[]): Map<string, LeafField[]> {
  const groups = new Map<string, LeafField[]>();
  for (const f of fields) {
    const top = f.path.split(".")[0];
    if (!groups.has(top)) groups.set(top, []);
    groups.get(top)!.push(f);
  }
  return groups;
}

export function PropertyPanel({ sectionId, sectionData, onUpdate }: PropertyPanelProps) {
  const fields = useMemo(() => flatten(sectionData), [sectionData]);
  const groups = useMemo(() => groupFields(fields), [fields]);

  if (!sectionId) {
    return (
      <aside className="w-72 shrink-0 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="px-4 py-8 text-center text-sm text-gray-400">
          Select a section to edit its properties.
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-72 shrink-0 bg-white border-l border-gray-200 overflow-y-auto">
      <div className="px-4 py-2 border-b border-gray-100 sticky top-0 bg-white z-10">
        <h2 className="text-sm font-semibold text-gray-900">{sectionId}</h2>
        <p className="text-xs text-gray-500">{fields.length} fields</p>
      </div>

      <div className="px-4 py-3">
        {Array.from(groups.entries()).map(([group, groupFields]) => (
          <div key={group} className="mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              {group}
            </h3>
            <div className="space-y-2">
              {groupFields.map((field) => (
                <FieldInput
                  key={field.path}
                  field={field}
                  onChange={(value) => onUpdate(sectionId, field.path, value)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function FieldInput({
  field,
  onChange,
}: {
  field: LeafField;
  onChange: (value: unknown) => void;
}) {
  const label = field.path.split(".").slice(1).join(".") || field.path;

  if (field.type === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={field.value as boolean}
          onChange={(e) => onChange(e.target.checked)}
          className="rounded"
        />
        <span className="text-gray-700">{label}</span>
      </label>
    );
  }

  if (field.type === "number") {
    return (
      <label className="block">
        <span className="text-xs text-gray-500">{label}</span>
        <input
          type="number"
          value={field.value as number}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full mt-0.5 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E]"
        />
      </label>
    );
  }

  // String — use textarea for long values, input for short ones.
  const isLong = String(field.value).length > 40;
  return (
    <label className="block">
      <span className="text-xs text-gray-500">{label}</span>
      {isLong ? (
        <textarea
          value={field.value as string}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className="w-full mt-0.5 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E] resize-y"
        />
      ) : (
        <input
          type="text"
          value={field.value as string}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mt-0.5 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#1B4D3E]"
        />
      )}
    </label>
  );
}
