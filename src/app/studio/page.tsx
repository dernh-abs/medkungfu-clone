// Studio page selection — lists every editable UCD page, grouped by the site
// navigation. Page slugs are authoritative (scanned from `.content/pages/*.json`
// via listPageSlugs); NAVIGATION_SEED supplies the human-readable grouping
// labels and titles.

import Link from "next/link";

import {
  listPageSlugs,
  loadPage,
  loadNavigation,
} from "@/lib/content/content-loader";
import {
  NAVIGATION_SEED,
  PAGE_DESCRIPTIONS,
} from "@/lib/content/seed-data";
import type { Navigation, NavItem } from "@/lib/content/content-schema";

interface PageEntry {
  id: string;
  title: string;
  description: string;
  group: string;
  sections: number;
}

const GROUP_ORDER = ["主导航", "快捷链接", "支持", "其他"] as const;

function navItems(nav: Navigation): NavItem[] {
  return [
    ...nav.main,
    ...nav.footer.quickLinks,
    ...nav.footer.supportLinks,
  ];
}

function groupOf(href: string, nav: Navigation): string {
  if (nav.main.some((i) => i.href === href)) return "主导航";
  if (nav.footer.quickLinks.some((i) => i.href === href)) return "快捷链接";
  if (nav.footer.supportLinks.some((i) => i.href === href)) return "支持";
  return "其他";
}

export default async function StudioPage() {
  const slugs = await listPageSlugs();
  const nav = (await loadNavigation()) ?? NAVIGATION_SEED;
  const items = navItems(nav);

  const entries: PageEntry[] = await Promise.all(
    slugs.map(async (slug) => {
      const href = slug === "home" ? "/" : `/${slug}`;
      const match = items.find((i) => i.href === href);
      const page = await loadPage(slug);
      const order = (page?.order as string[] | undefined) ?? [];
      return {
        id: slug,
        title: match?.label ?? slug,
        description: PAGE_DESCRIPTIONS[slug] ?? "可编辑页面内容",
        group: groupOf(href, nav),
        sections: order.length,
      };
    })
  );

  // Preserve GROUP_ORDER, then any leftover groups alphabetically.
  const presentGroups = Array.from(new Set(entries.map((e) => e.group)));
  const groups = [
    ...GROUP_ORDER.filter((g) => presentGroups.includes(g)),
    ...presentGroups.filter((g) => !GROUP_ORDER.includes(g as (typeof GROUP_ORDER)[number])),
  ];

  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Studio Editor</h1>
        <p className="text-gray-600 mb-8">
          选择一个页面进行编辑。每页的修改通过独立的草稿（draft）流程保存。
        </p>

        {groups.map((group) => {
          const groupEntries = entries.filter((e) => e.group === group);
          return (
            <section key={group} className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
                {group}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                {groupEntries.map((page) => (
                  <li key={page.id}>
                    <Link
                      href={`/studio/${page.id}`}
                      data-studio-page-card={page.id}
                      className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[#1B4D3E] hover:shadow-lg transition-all"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {page.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-[#1B4D3E] font-medium">
                        {page.sections} sections
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
