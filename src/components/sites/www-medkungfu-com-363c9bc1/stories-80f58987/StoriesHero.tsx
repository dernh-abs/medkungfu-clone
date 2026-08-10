"use client";

// /stories hero — extracted into a client component so the page.tsx server
// component can keep static metadata while the H1/subtitle switch per the
// active language. zh uses the Chinese copy, ru resolves the English strings
// through the merged RU map (ru-stories.ts), falling back to English.
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

export function StoriesHero() {
  const { lang } = useLanguage();
  const ru = lang === "ru";

  // NOTE: the source keeps /stories in English even in zh mode (no Chinese
  // content), so zh falls back to English; only ru translates.
  const title = ru
    ? (RU["Patient Stories"] ?? "Patient Stories")
    : "Patient Stories";

  const subtitle = ru
    ? (RU["Real experiences from patients who found hope and healing through MedKungFu."] ??
      "Real experiences from patients who found hope and healing through MedKungFu.")
    : "Real experiences from patients who found hope and healing through MedKungFu.";

  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        {title}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </Reveal>
  );
}
