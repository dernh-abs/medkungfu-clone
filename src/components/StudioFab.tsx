"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

// Slugs that have a dedicated Studio editor. Must stay in sync with the
// `pages/<slug>.json` files under `.content/` (see content-loader.listPageSlugs).
const STUDIO_SLUGS = new Set([
  "home",
  "projects",
  "services",
  "hospitals",
  "stories",
  "about",
  "faq",
  "contact",
  "why-china",
]);

/**
 * Map the current public URL to the matching Studio edit route.
 * - `/`                         -> `/studio/home`
 * - `/projects`                 -> `/studio/projects`
 * - `/projects/prp-tcm` (detail) -> `/studio/projects` (parent editor)
 * - `/studio/*`                 -> `null` (already inside Studio)
 * - other (e.g. `/privacy`)     -> `/studio` (hub)
 */
function resolveStudioHref(pathname: string): string | null {
  if (!pathname || pathname.startsWith("/studio")) return null;
  const slug =
    pathname === "/"
      ? "home"
      : (pathname.split("/").filter(Boolean)[0] ?? "home");
  return STUDIO_SLUGS.has(slug) ? `/studio/${slug}` : "/studio";
}

export function StudioFab() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  // Only expose the editor entry in dev / preview builds, never on production.
  // Set NEXT_PUBLIC_SHOW_STUDIO_FAB=true to force-enable on a preview deploy.
  const enabled =
    process.env.NODE_ENV !== "production" ||
    process.env.NEXT_PUBLIC_SHOW_STUDIO_FAB === "true";
  if (!enabled) return null;

  const href = resolveStudioHref(pathname ?? "");
  if (!href) return null;

  const label = lang === "zh" ? "在 Studio 编辑" : "Edit in Studio";

  return (
    <Link
      href={href}
      data-studio-fab
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1B4D3E] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B4D3E]/30 transition-transform hover:scale-105 hover:bg-[#163e32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D3E] focus-visible:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793ZM11.379 5.793 3 14.172V17h2.828l8.38-8.379-2.83-2.828Z" />
      </svg>
      <span>{label}</span>
    </Link>
  );
}
