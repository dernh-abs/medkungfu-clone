"use client";

// Language context — Stage D 改造后从 ContentRuntime 获取翻译数据。
//
// t() 委托给 useContentRuntime().translate(lang, key)。当 UCD 未加载
// (doc === null) 时，compat-adapter 透明回退到原始 TRANSLATIONS / RU 模块，
// 确保改造前后渲染结果完全一致。localStorage 持久化逻辑保持不变。
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { type SupportedLanguage } from "./translations";
import { useContentRuntime } from "@/lib/executor/use-content-runtime";

const STORAGE_KEY = "medkungfu-language";

type TranslateFn = (key: string) => string;

interface LanguageContextValue {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
  t: TranslateFn;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SupportedLanguage>("en");
  const { translate } = useContentRuntime();

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

  // t() delegates to ContentRuntime.translate. When doc === null the
  // compat-adapter falls back to the original TRANSLATIONS/RU modules,
  // producing identical output to the pre-migration implementation.
  const t = useCallback<TranslateFn>(
    (key: string) => translate(lang, key),
    [lang, translate]
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
