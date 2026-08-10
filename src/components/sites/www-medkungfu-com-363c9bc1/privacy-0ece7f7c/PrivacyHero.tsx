"use client";

// /privacy hero — extracted into a client component so the H1/effective-date
// switch per the active language. The source keeps /privacy in English even in
// zh mode (no Chinese content), so zh falls back to English; ru resolves the
// English strings through the merged RU map (ru-privacy.ts), falling back to
// English.
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

export function PrivacyHero() {
  const { lang } = useLanguage();
  const ru = lang === "ru";

  const title = ru
    ? (RU["MedKungfu Privacy Policy"] ?? "MedKungfu Privacy Policy")
    : "MedKungfu Privacy Policy";

  const effectiveDate = ru
    ? (RU["Effective date: July 9, 2026 | Last updated: July 9, 2026"] ??
      "Effective date: July 9, 2026 | Last updated: July 9, 2026")
    : "Effective date: July 9, 2026 | Last updated: July 9, 2026";

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        {title}
      </h1>
      <p className="text-gray-600">{effectiveDate}</p>
    </div>
  );
}
