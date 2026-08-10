// "Patient Stories" section: white section with 3 testimonial cards.
// Each card: quote icon, italic quote text, avatar + name, revealed with scale(0.95).
// Bilingual: heading, quotes, and names switch to Russian in ru mode.
"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface PatientStory {
  quote: string;
  image: string;
  name: string;
}

const STORIES: PatientStory[] = [
  {
    quote:
      "From the despair of recurrence to complete remission, CAR-T therapy in China gave me a second life.",
    image:
      "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-se-asia-lymphoma.jpg",
    name: "Patient from Southeast Asia, Recurrent Lymphoma",
  },
  {
    quote:
      "Heavy ion therapy for prostate cancer: short course, minimal side effects, and costs far less than in Europe.",
    image:
      "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-middle-east.jpg",
    name: "Patient from the Middle East",
  },
  {
    quote: "TCM is amazing. It allowed me to walk normally again.",
    image:
      "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-se-asia-osteoarthritis.jpg",
    name: "Patient from Southeast Asia, Osteoarthritis",
  },
];

export function PatientStoriesSection() {
  const { lang } = useLanguage();
  const ru = lang === "ru";

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
          {ru ? "Истории пациентов" : "Patient Stories"}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
          {STORIES.map((s) => (
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
