// "Patient Stories" section: white section with 3 testimonial cards.
// Each card: quote icon, italic quote text, avatar + name, revealed with scale(0.95).
// Bilingual: heading, quotes, and names switch to Russian in ru mode.
"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

import type { PatientStoriesSection } from "@/lib/content/content-schema";
import { HOME_PAGE_SEED } from "@/lib/content/seed-data";
import { useSectionData } from "@/lib/executor/use-content-runtime";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const FALLBACK: PatientStoriesSection = HOME_PAGE_SEED.sections.patientStories;

export function PatientStoriesSection() {
  const { lang } = useLanguage();
  const ru = lang === "ru";
  const section = useSectionData("home", "patientStories", FALLBACK);
  const items = section.items;

  return (
    <section
      aria-labelledby="patient-stories-heading"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <h2
          id="patient-stories-heading"
          className="text-3xl font-bold text-center mb-12 text-[#1A1A2E] font-montserrat"
        >
          {ru ? "Истории пациентов" : section.heading}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
          {items.map((s) => (
            <Reveal key={s.name} scale={0.95} className="flex">
              <li className="bg-[#F5F7FA] p-8 rounded-xl relative w-full">
                <Icons.quote
                  className="absolute top-6 left-6 text-[#1B4D3E]/20 h-10 w-10"
                  aria-hidden="true"
                />
                <blockquote className="text-gray-700 italic mb-6 relative z-10 pt-4">
                  <p>{ru ? (RU[s.quote] ?? s.quote) : s.quote}</p>
                </blockquote>
                <footer className="flex items-center space-x-4">
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static avatar, intentional */}
                  <img
                    src={s.image}
                    alt={ru ? (RU[s.name] ?? s.name) : s.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <cite className="text-sm font-semibold text-[#1A1A2E] not-italic">
                    {ru ? (RU[s.name] ?? s.name) : s.name}
                  </cite>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
