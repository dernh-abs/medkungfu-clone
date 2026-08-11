"use client";

// React hook bridging components to ContentRuntime.
//
// Components call translate()/getSectionData() during render; when the
// executor commits a new document the snapshot version bumps and
// useSyncExternalStore re-renders every subscriber with fresh data.
//
// Until the UCD is loaded (doc === null) translate() transparently falls
// back to the original TRANSLATIONS via the compat-adapter, so the site
// renders identically before and after the migration.
//
// useSectionData(page, sectionId, fallback) is a convenience hook that
// returns the UCD section data or the caller-provided fallback when the
// UCD is not yet loaded — ensuring SSR and client first-render produce
// identical output (no hydration mismatch).

import { useSyncExternalStore } from "react";

import type { SupportedLanguage } from "@/lib/i18n/translations";
import {
  subscribeRuntime,
  getSnapshot,
  translate,
  getSectionData,
  getSectionOrder,
  getTranslations,
} from "./content-runtime";

export interface ContentRuntimeApi {
  translate: (lang: SupportedLanguage, key: string) => string;
  getSectionData: (page: string, sectionId: string) => unknown;
  getSectionOrder: (page: string) => string[];
  getTranslations: (lang: SupportedLanguage) => Record<string, unknown>;
}

export function useContentRuntime(): ContentRuntimeApi {
  useSyncExternalStore(subscribeRuntime, getSnapshot, getSnapshot);
  return {
    translate,
    getSectionData,
    getSectionOrder,
    getTranslations,
  };
}

/**
 * Read a UCD section by page + sectionId, falling back to `fallback` when
 * the UCD is not yet loaded (doc === null). The fallback ensures SSR and
 * client first-render produce identical HTML (zero hydration mismatch).
 *
 * Components pass the seed-data constant as the fallback so there is a
 * single source of truth (seed-data.ts) that mirrors the pre-migration
 * hardcoded values.
 */
export function useSectionData<T>(
  page: string,
  sectionId: string,
  fallback: T
): T {
  useSyncExternalStore(subscribeRuntime, getSnapshot, getSnapshot);
  const data = getSectionData(page, sectionId);
  return (data as T | null) ?? fallback;
}
