"use client";

// ComponentLibrary — left sidebar listing available section types.
// In Stage E this is read-only (display only). Drag-to-add is a future
// enhancement; the library serves as a reference for what sections exist.

const SECTION_TYPES = [
  { id: "hero", label: "Hero", icon: "▣" },
  { id: "cityStrip", label: "City Strip", icon: "≡" },
  { id: "services", label: "Services", icon: "▦" },
  { id: "trustStats", label: "Trust Stats", icon: "✦" },
  { id: "ourPromise", label: "Our Promise", icon: "✓" },
  { id: "medicalProjects", label: "Medical Projects", icon: "◈" },
  { id: "serviceProcess", label: "Service Process", icon: "☰" },
  { id: "patientStories", label: "Patient Stories", icon: "❝" },
  { id: "featuredFaq", label: "Featured FAQ", icon: "?" },
  { id: "cta", label: "CTA", icon: "→" },
];

export function ComponentLibrary() {
  return (
    <aside className="w-48 shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="px-3 py-2 border-b border-gray-100">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Sections
        </h2>
      </div>
      <ul className="py-1 list-none">
        {SECTION_TYPES.map((s) => (
          <li key={s.id}>
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
              <span className="text-gray-400 w-4 text-center">{s.icon}</span>
              <span>{s.label}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-3 py-3 mt-2 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Drag sections in the canvas to reorder. Click a section to edit its
          properties.
        </p>
      </div>
    </aside>
  );
}
