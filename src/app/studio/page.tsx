// Studio page selection — lists available pages to edit.
// Currently only "home" is available; future pages (about, services, etc.)
// will appear here as their UCD schemas are added.

import Link from "next/link";

const PAGES = [
  {
    id: "home",
    title: "Home Page",
    description: "Hero, services, trust stats, patient stories, FAQ, CTA",
    sections: 10,
  },
];

export default function StudioPage() {
  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Studio Editor</h1>
        <p className="text-gray-600 mb-8">
          Select a page to edit. Changes are saved as JSON Patch operations
          through the single executor.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
          {PAGES.map((page) => (
            <li key={page.id}>
              <Link
                href={`/studio/${page.id}`}
                className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[#1B4D3E] hover:shadow-lg transition-all"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {page.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#1B4D3E] font-medium">
                  {page.sections} sections
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
