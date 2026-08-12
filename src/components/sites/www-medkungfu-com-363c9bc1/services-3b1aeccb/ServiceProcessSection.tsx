"use client";

// "Our Service Process" — 7-phase alternating timeline with center line
// on desktop and a left line on mobile. Matches /services.
// Bilingual via services.process* / services.process{N}* keys.
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface ProcessStep {
  nameKey: string;
  descKey: string;
}

interface ProcessPhase {
  icon: LucideIcon;
  titleKey: string;
  steps: ProcessStep[];
}

const PHASES: ProcessPhase[] = [
  {
    icon: Icons.phone,
    titleKey: "services.processTitle1",
    steps: [
      {
        nameKey: "services.process1Item1",
        descKey: "services.process1Desc1",
      },
      {
        nameKey: "services.process1Item2",
        descKey: "services.process1Desc2",
      },
    ],
  },
  {
    icon: Icons.stethoscope,
    titleKey: "services.processTitle2",
    steps: [
      {
        nameKey: "services.process2Item1",
        descKey: "services.process2Desc1",
      },
      {
        nameKey: "services.process2Item2",
        descKey: "services.process2Desc2",
      },
      {
        nameKey: "services.process2Item3",
        descKey: "services.process2Desc3",
      },
    ],
  },
  {
    icon: Icons.fileSignature,
    titleKey: "services.processTitle3",
    steps: [
      {
        nameKey: "services.process3Item1",
        descKey: "services.process3Desc1",
      },
      {
        nameKey: "services.process3Item2",
        descKey: "services.process3Desc2",
      },
    ],
  },
  {
    icon: Icons.briefcase,
    titleKey: "services.processTitle4",
    steps: [
      {
        nameKey: "services.process4Item1",
        descKey: "services.process4Desc1",
      },
      {
        nameKey: "services.process4Item2",
        descKey: "services.process4Desc2",
      },
    ],
  },
  {
    icon: Icons.mapPin,
    titleKey: "services.processTitle5",
    steps: [
      {
        nameKey: "services.process5Item1",
        descKey: "services.process5Desc1",
      },
      {
        nameKey: "services.process5Item2",
        descKey: "services.process5Desc2",
      },
    ],
  },
  {
    icon: Icons.heartPulse,
    titleKey: "services.processTitle6",
    steps: [
      {
        nameKey: "services.process6Item1",
        descKey: "services.process6Desc1",
      },
      {
        nameKey: "services.process6Item2",
        descKey: "services.process6Desc2",
      },
      {
        nameKey: "services.process6Item3",
        descKey: "services.process6Desc3",
      },
    ],
  },
  {
    icon: Icons.clipboardCheck,
    titleKey: "services.processTitle7",
    steps: [
      {
        nameKey: "services.process7Item1",
        descKey: "services.process7Desc1",
      },
      {
        nameKey: "services.process7Item2",
        descKey: "services.process7Desc2",
      },
    ],
  },
];

export function ServicesHero() {
  const { t } = useLanguage();

  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        {t("services.title")}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {t("services.subtitle")}
      </p>
    </Reveal>
  );
}

export function ServiceProcessSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="process-heading"
      className="bg-white rounded-2xl p-10 shadow-sm mb-12"
    >
      <Reveal y={20} className="text-center mb-12">
        <h2 id="process-heading" className="text-3xl font-bold mb-4 text-[#1A1A2E]">
          {t("services.processTitle")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t("services.processSubtitle")}
        </p>
      </Reveal>
      <div className="relative">
        {/* Desktop center line */}
        <div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B4D3E] via-[#2E7D32] to-[#1B4D3E] hidden md:block"
          aria-hidden="true"
          style={{ transform: "translateX(-50%)" }}
        />
        {/* Mobile left line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B4D3E] via-[#2E7D32] to-[#1B4D3E] md:hidden"
          aria-hidden="true"
        />
        <ol className="space-y-8 list-none" role="list">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            const reversed = i % 2 === 1; // even phases alternate to the right
            return (
              <Reveal key={phase.titleKey} y={30} className="flex">
                <li
                  className={`relative flex flex-col md:flex-row${
                    reversed ? " md:flex-row-reverse" : ""
                  } items-start md:items-center gap-4 md:gap-8 w-full`}
                >
                  {/* Desktop node dot */}
                  <div
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#1B4D3E] border-4 border-white shadow-lg z-10 hidden md:block"
                    aria-hidden="true"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  {/* Mobile node dot */}
                  <div
                    className="absolute left-4 w-4 h-4 rounded-full bg-[#1B4D3E] border-4 border-white shadow-lg z-10 md:hidden"
                    aria-hidden="true"
                  />
                  {/* Phase label */}
                  <div
                    className={`md:w-5/12 pl-12 md:pl-0 ${
                      reversed ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] font-semibold text-sm mb-2${
                        reversed ? "" : " md:flex-row-reverse"
                      }`}
                    >
                      <span>{t(`services.processPhase${i + 1}`)}</span>
                    </div>
                  </div>
                  {/* Center icon node (desktop) */}
                  <div
                    className="hidden md:flex w-12 h-12 rounded-full bg-[#1B4D3E] text-white items-center justify-center shadow-lg flex-shrink-0 z-20"
                    aria-hidden="true"
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  {/* Article */}
                  <div
                    className={`md:w-5/12 pl-12 md:pl-0 ${
                      reversed ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <article className="bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-shadow text-left">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2 md:hidden">
                        <span className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7" />
                        </span>
                        <span>{t(phase.titleKey)}</span>
                      </h3>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 hidden md:block">
                        {t(phase.titleKey)}
                      </h3>
                      <ul className="space-y-3 list-none" role="list">
                        {phase.steps.map((step) => (
                          <li key={step.nameKey} className="flex items-start gap-3">
                            <Icons.checkCircle className="text-[#1B4D3E] flex-shrink-0 mt-0.5 h-[18px] w-[18px]" />
                            <div>
                              <span className="font-semibold text-[#1A1A2E] text-sm">
                                {t(step.nameKey)}
                              </span>
                              <p className="text-gray-500 text-sm mt-0.5">
                                {t(step.descKey)}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
