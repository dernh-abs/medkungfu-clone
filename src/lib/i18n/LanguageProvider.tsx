"use client";

// Language context matching the source site's i18n: persisted in
// localStorage["medkungfu-language"], defaults to "en", ru falls back to en.
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { TRANSLATIONS, type SupportedLanguage } from "./translations";

const STORAGE_KEY = "medkungfu-language";

type TranslateFn = (key: string) => string;

interface LanguageContextValue {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
  t: TranslateFn;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function lookup(obj: unknown, key: string): string | undefined {
  const value = (obj as Record<string, unknown>)[key];
  if (typeof value === "string") return value;
  return undefined;
}

/** Resolve a dotted path ("nav.home") against a language's translation dict. */
function resolve(translation: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = translation;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "ru" || stored === "en") {
      setLangState(stored);
    }
    document.documentElement.lang =
      stored === "zh" ? "zh-CN" : stored === "ru" ? "ru" : "en";
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  }, [lang]);

  const setLang = (next: SupportedLanguage) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : next;
  };

  const t: TranslateFn = (key: string) => {
    // ru content is not shipped — fall back to en.
    const activeLang: SupportedLanguage = lang === "ru" ? "en" : lang;
    const dict = TRANSLATIONS[activeLang]?.translation ?? {};
    const direct = lookup(dict, key);
    if (direct !== undefined) return direct;
    const nested = resolve(dict, key);
    if (nested !== undefined) return nested;
    // Fall back to English, then to the key itself.
    const enDict = TRANSLATIONS.en?.translation ?? {};
    const enValue = lookup(enDict, key) ?? resolve(enDict, key);
    return enValue ?? key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
