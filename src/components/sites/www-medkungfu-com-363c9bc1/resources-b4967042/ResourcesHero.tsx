"use client";

// /resources hero — extracted into a client component so the H1/subtitle
// switch per the active language. The source keeps /resources in English even
// in zh mode (no Chinese content), so zh falls back to English; ru resolves
// the English strings through the merged RU map (ru-resources.ts), falling
// back to English.
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

export function ResourcesHero() {
  const { lang } = useLanguage();
  const ru = lang === "ru";

  const title = ru ? (RU["Resource Center"] ?? "Resource Center") : "Resource Center";

  const subtitle = ru
    ? (RU["Comprehensive guides and tools to help you prepare for your medical journey."] ??
      "Comprehensive guides and tools to help you prepare for your medical journey.")
    : "Comprehensive guides and tools to help you prepare for your medical journey.";

  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        {title}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </Reveal>
  );
}
