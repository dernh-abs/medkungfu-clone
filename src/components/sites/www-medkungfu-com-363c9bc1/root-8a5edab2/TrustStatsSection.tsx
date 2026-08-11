"use client";

// White trust-indicator band: 4 stats (icon + label) in a responsive grid,
// matching MedKungFu's homepage. Each stat reveals on scroll via Reveal.
// Bilingual via trust.* keys.
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import type { TrustStatsSection } from "@/lib/content/content-schema";
import { HOME_PAGE_SEED } from "@/lib/content/seed-data";
import { useSectionData } from "@/lib/executor/use-content-runtime";

import { resolveIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const FALLBACK: TrustStatsSection = HOME_PAGE_SEED.sections.trustStats;

export function TrustStatsSection() {
  const { t } = useLanguage();
  const section = useSectionData("home", "trustStats", FALLBACK);
  const items = section.items;

  return (
    <section
      aria-label="Trust indicators"
      className="py-12 bg-white border-b border-gray-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((s) => {
            const Icon = resolveIcon(s.icon);
            return (
              <Reveal
                key={s.key}
                y={20}
                className="flex flex-col items-center text-center"
              >
                <div className="text-[#1B4D3E] mb-3">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="font-semibold text-gray-800">{t(s.key)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
