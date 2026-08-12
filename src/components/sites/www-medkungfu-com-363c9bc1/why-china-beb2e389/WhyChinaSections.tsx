"use client";

// "Why Choose China Medical?" — 6 core-advantage cards + dark green
// distinctive-features grid + CTA. Matches /why-china.
// Bilingual via whyChina.* keys.
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Feature {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const ADVANTAGES: Feature[] = [
  {
    icon: Icons.award,
    titleKey: "whyChina.advantage1Title",
    descKey: "whyChina.advantage1Desc",
  },
  {
    icon: Icons.clock,
    titleKey: "whyChina.advantage2Title",
    descKey: "whyChina.advantage2Desc",
  },
  {
    icon: Icons.heartPulse,
    titleKey: "whyChina.advantage3Title",
    descKey: "whyChina.advantage3Desc",
  },
  {
    icon: Icons.microscope,
    titleKey: "whyChina.advantage4Title",
    descKey: "whyChina.advantage4Desc",
  },
  {
    icon: Icons.globe,
    titleKey: "whyChina.advantage5Title",
    descKey: "whyChina.advantage5Desc",
  },
  {
    icon: Icons.plane,
    titleKey: "whyChina.advantage6Title",
    descKey: "whyChina.advantage6Desc",
  },
];

const DISTINCTIVE: Feature[] = [
  {
    icon: Icons.stethoscope,
    titleKey: "whyChina.feature1Title",
    descKey: "whyChina.feature1Desc",
  },
  {
    icon: Icons.building,
    titleKey: "whyChina.feature2Title",
    descKey: "whyChina.feature2Desc",
  },
  {
    icon: Icons.leaf,
    titleKey: "whyChina.feature3Title",
    descKey: "whyChina.feature3Desc",
  },
  {
    icon: Icons.zap,
    titleKey: "whyChina.feature4Title",
    descKey: "whyChina.feature4Desc",
  },
];

export function WhyChinaHero() {
  const { t } = useLanguage();

  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6 font-montserrat">
        {t("whyChina.title")}
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {t("whyChina.subtitle")}
      </p>
    </Reveal>
  );
}

export function CoreAdvantagesSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="core-advantages-heading" className="mb-16">
      <Reveal className="text-3xl font-bold text-center mb-12 text-[#1A1A2E]">
        <h2 id="core-advantages-heading">{t("whyChina.coreAdvantages")}</h2>
      </Reveal>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none" role="list">
        {ADVANTAGES.map((feature) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.titleKey} className="flex">
              <li className="bg-white rounded-2xl shadow-sm p-8 card-hover w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6"
                  aria-hidden="true"
                >
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A2E]">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function DistinctiveFeaturesSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="distinctive-features-heading"
      className="bg-[#1B4D3E] rounded-2xl p-10 md:p-16 mb-16"
    >
      <Reveal className="text-3xl font-bold text-center mb-12 text-white">
        <h2 id="distinctive-features-heading">
          {t("whyChina.distinctiveFeatures")}
        </h2>
      </Reveal>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none" role="list">
        {DISTINCTIVE.map((feature) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.titleKey} className="flex">
              <li className="text-center w-full">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white mb-5"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function WhyChinaCtaSection() {
  const { t } = useLanguage();

  return (
    <Reveal className="text-center bg-white rounded-2xl shadow-sm p-10">
      <section aria-labelledby="cta-heading">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-[#1A1A2E] mb-4"
        >
          {t("whyChina.ctaTitle")}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {t("whyChina.ctaDesc")}
        </p>
        <nav aria-label="Contact CTA">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#143D30] transition-all duration-300"
          >
            {t("whyChina.ctaButton")}
          </Link>
        </nav>
      </section>
    </Reveal>
  );
}
