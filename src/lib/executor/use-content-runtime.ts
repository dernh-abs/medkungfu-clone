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
