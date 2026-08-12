"use client";

// ContentBootstrap — reconnects Studio's editable content (.content/) to the
// public clone site.
//
// The clone components read text via `t()` and structured section data via
// `useSectionData()`, both of which resolve through the ContentRuntime module
// singleton. While `doc === null` (the default) they transparently fall back
// to the faithful medkungfu.com baseline (TRANSLATIONS/RU modules + seed-data),
// so the public site always renders correctly.
//
// This component loads the current UCD (assembled by /api/studio/document from
// the physically-split `.content/` files that Studio writes) into that
// singleton on the client, so any edit made in /studio flows through to the
// public pages on the next load. The merge policy in compat-adapter guarantees
// the UCD can only OVERRIDE the faithful baseline, never break it.
//
// It runs only on public (non-/studio) pages: Studio loads and manages its own
// document instance.

import { useEffect } from "react";

import { usePathname } from "next/navigation";

import { commitDocument } from "@/lib/executor/content-runtime";
import type { UnifiedContentDocument } from "@/lib/content/content-schema";

export function ContentBootstrap() {
  const pathname = usePathname();

  useEffect(() => {
    // Studio manages its own document; never clobber it from the public loader.
    if (pathname?.startsWith("/studio")) return;

    let cancelled = false;
    fetch("/api/studio/document")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { success?: boolean; document?: UnifiedContentDocument } | null) => {
        if (cancelled || !data?.success || !data.document) return;
        commitDocument(data.document);
      })
      .catch(() => {
        // Network/file error — fall back to the faithful baseline (doc stays null).
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
