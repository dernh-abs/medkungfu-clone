"use client";

// "Our Service Process" section matching MedKungFu's homepage.
// Light section (bg #F5F7FA) with 6 step cards in a responsive grid.
// Each card shows an icon chip, a step number, a progress bar, and a
// connector line to the next step (vertical on mobile, horizontal on md+).
// Bilingual via process.* keys.
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Step {
  icon: LucideIcon;
  number: string;
  titleKey: string;
  progress: number;
}

const STEPS: Step[] = [
  {
    icon: Icons.clipboardCheck,
    number: "01",
    titleKey: "process.step1",
    progress: 22,
  },
  {
    icon: Icons.stethoscope,
    number: "02",
    titleKey: "process.step2",
    progress: 32,
  },
  {
    icon: Icons.fileText,
    number: "03",
    titleKey: "process.step3",
    progress: 48,
  },
  {
    icon: Icons.plane,
    number: "04",
    titleKey: "process.step4",
    progress: 64,
  },
  {
    icon: Icons.mapPin,
    number: "05",
    titleKey: "process.step5",
    progress: 80,
  },
  {
    icon: Icons.building,
    number: "06",
    titleKey: "process.step6",
    progress: 96,
  },
];

export function ServiceProcessSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="service-process-heading"
      className="section-padding bg-[#F5F7FA]"
    >
      <div className="container-custom">
        <h2
          id="service-process-heading"
          className="text-3xl font-bold text-center mb-16 text-[#1A1A2E] font-montserrat"
        >
          {t("process.title")}
        </h2>
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6 list-none">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.titleKey} y={12} className="flex">
                <li className="relative w-full">
                  <div className="h-full rounded-xl border border-[#1B4D3E]/10 bg-white p-5 shadow-sm">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1B4D3E] text-white">
                        <Icon className="h-[22px] w-[22px]" />
                      </div>
                      <div className="text-sm font-bold text-[#7CB342]">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1A1A2E] font-montserrat">
                      {t(step.titleKey)}
                    </h3>
                    <div className="mt-5 h-1.5 rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#7CB342]"
                        style={{ width: `${step.progress}%` }}
                      />
                    </div>
                  </div>
                  {/* Connector between steps (omit on last) */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="pointer-events-none absolute left-1/2 top-full h-5 w-px bg-[#1B4D3E]/20 md:left-full md:top-1/2 md:h-px md:w-5 lg:w-6"
                      aria-hidden="true"
                    />
                  )}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
