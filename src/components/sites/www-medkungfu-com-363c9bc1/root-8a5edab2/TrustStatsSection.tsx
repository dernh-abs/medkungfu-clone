"use client";

// White trust-indicator band: 4 stats (icon + label) in a responsive grid,
// matching MedKungFu's homepage. Each stat reveals on scroll via Reveal.
// Bilingual via trust.* keys.
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Stat {
  icon: LucideIcon;
  key: string;
}

const STATS: Stat[] = [
  { icon: Icons.building, key: "trust.hospitals" },
  { icon: Icons.mapPin, key: "trust.cities" },
  { icon: Icons.messageCircle, key: "trust.patients" },
  { icon: Icons.clock, key: "trust.response" },
];

export function TrustStatsSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Trust indicators"
      className="py-12 bg-white border-b border-gray-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => {
            const Icon = s.icon;
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
