"use client";

// Language context matching the source site's i18n: persisted in
// localStorage["medkungfu-language"], defaults to "en". zh uses the nested
// translation dictionary; ru resolves the English text and looks it up in the
// merged Russian map (ru-translations/*.json), falling back to English.
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { TRANSLATIONS, type SupportedLanguage } from "./translations";
import { RU } from "./ru";

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
    // Read the persisted language once after hydration. This setState is
    // intentionally synchronous-on-mount so SSR renders the default and the
    // persisted choice applies right after — the standard i18n pattern.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "ru" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reading persisted language on mount
      setLangState(stored);
    }
    document.documentElement.lang =
      stored === "zh" ? "zh-CN" : stored === "ru" ? "ru" : "en";
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  }, [lang]);

  const setLang = useCallback((next: SupportedLanguage) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : next;
  }, []);

  const t = useCallback<TranslateFn>(
    (key: string) => {
      const enDict = TRANSLATIONS.en?.translation ?? {};
      const enText = lookup(enDict, key) ?? resolve(enDict, key) ?? key;
      // Russian: resolve the English text, then look it up in the RU map.
      if (lang === "ru") {
        return RU[enText] ?? enText;
      }
      // zh / en use the nested dictionary.
      const dict = TRANSLATIONS[lang]?.translation ?? {};
      const direct = lookup(dict, key);
      if (direct !== undefined) return direct;
      const nested = resolve(dict, key);
      if (nested !== undefined) return nested;
      return enText;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
