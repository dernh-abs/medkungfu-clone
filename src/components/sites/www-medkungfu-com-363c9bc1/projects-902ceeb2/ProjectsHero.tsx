// "Advantageous Medical Projects" hero for the /projects page.
// Bilingual via the site translation dictionary (projects.* keys).
"use client";

import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ProjectsHero() {
  const { t } = useLanguage();
  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        {t("projects.pageTitle")}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{t("projects.pageDesc")}</p>
    </Reveal>
  );
}
