// "Treatment Highlights" section matching MedKungFu's /projects page.
// White rounded panel with 4 light-gray cards in a 2-col grid.
// Heading is bilingual via the site translation dictionary (projects.* keys).
"use client";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface Highlight {
  title: string;
  icon: LucideIcon;
  points: string[];
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Heavy Ion/Proton Therapy",
    icon: Icons.activity,
    points: [
      "1/3 of US cost",
      "54 centers, no months waiting",
      "90%+ 5-year local control rate for pancreatic cancer",
    ],
  },
  {
    title: "CAR-T Cell Therapy",
    icon: Icons.dna,
    points: [
      "1/5 to 1/8 of US cost",
      "#1 in clinical trials globally",
      "Significantly improved patient survival",
    ],
  },
  {
    title: "BNCT Boron Neutron Capture Therapy",
    icon: Icons.scan,
    points: ["Targeted radiation for refractory tumors", "Advanced neutron beam technology"],
  },
  {
    title: "Stem Cell Regenerative Therapy",
    icon: Icons.sparkles,
    points: ["First functional cure for Type 1 diabetes globally", "About 1/10 of US cost"],
  },
];

export function TreatmentHighlightsSection() {
  const { t } = useLanguage();
  return (
    <section
      aria-labelledby="highlights-heading"
      className="bg-white rounded-2xl p-10 shadow-sm"
    >
      <h2
        id="highlights-heading"
        className="text-2xl font-bold mb-10 text-center text-[#1A1A2E] font-montserrat"
      >
        {t("projects.treatmentHighlights")}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none" role="list">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} scale={0.95} className="flex">
              <li className="p-6 bg-[#F5F7FA] rounded-xl w-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg"
                    aria-hidden="true"
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] font-montserrat">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 list-none" role="list">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
