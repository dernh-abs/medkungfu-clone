"use client";

// Fixed top navigation bar matching MedKungFu's header.
// Green brand color #1B4D3E, accent #7CB342. Mobile menu toggles below lg.
// Language switcher (EN / 简体中文 / Русский) matches the source site.
import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { X } from "lucide-react";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { SupportedLanguage } from "@/lib/i18n/translations";

import { Icons } from "./icons";

const NAV_KEYS: { href: string; key: string }[] = [
  { href: "/", key: "nav.home" },
  { href: "/projects", key: "nav.projects" },
  { href: "/services", key: "nav.services" },
  { href: "/hospitals", key: "nav.hospitals" },
  { href: "/stories", key: "nav.stories" },
  { href: "/about", key: "nav.about" },
  { href: "/faq", key: "nav.faq" },
];

const LANGUAGES: { code: SupportedLanguage; label: string }[] = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
  { code: "ru", label: "Русский" },
];

const LANG_BADGE: Record<SupportedLanguage, string> = {
  en: "EN",
  zh: "中文",
  ru: "RU",
};

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B4D3E] text-white shadow-md">
      <div className="container-custom h-[72px] flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start">
          <span className="text-2xl font-bold font-montserrat tracking-wide">
            MedKungfu
          </span>
          <span className="text-[10px] tracking-[0.2em] text-white/80 -mt-1">
            {t("HEALTHCARE · CONCIERGE")}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_KEYS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                isActive(link.href, pathname) ? "text-[#7CB342]" : "text-white"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-[#7CB342] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#689F38] transition-colors"
          >
            {t("nav.consult")}
          </Link>
          {/* Language switcher */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-sm hover:text-[#7CB342]"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select language"
            >
              <Icons.globe className="h-4 w-4" />
              <span>{LANG_BADGE[lang]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-[#1A1A2E] rounded-lg shadow-xl py-2 z-50">
                {LANGUAGES.map((langOption) => (
                  <button
                    key={langOption.code}
                    onClick={() => {
                      setLang(langOption.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#F5F7FA] ${
                      lang === langOption.code ? "text-[#1B4D3E] font-semibold" : ""
                    }`}
                  >
                    {langOption.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden bg-[#1B4D3E] border-t border-white/10 px-4 py-4 space-y-3">
          {NAV_KEYS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/90 hover:text-[#7CB342]"
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            {LANGUAGES.map((langOption) => (
              <button
                key={langOption.code}
                onClick={() => {
                  setLang(langOption.code);
                  setOpen(false);
                }}
                className={`text-sm ${
                  lang === langOption.code
                    ? "text-[#7CB342] font-semibold"
                    : "text-white/80 hover:text-[#7CB342]"
                }`}
              >
                {langOption.label}
              </button>
            ))}
          </div>
          <Link
            href="/login"
            className="block bg-[#7CB342] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#689F38] transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            {t("nav.consult")}
          </Link>
        </div>
      )}
    </header>
  );
}
