"use client";

// Services section (white) matching MedKungFu's homepage.
// "How MedKungFu Helps You" heading, 3 service cards with icon tiles,
// and a "View All Services" call-to-action. Bilingual via home.* keys.
//
// Stage D 改造：items / linkHref / viewAllKey 从 ContentRuntime 读取，
// doc === null 时回退到 HOME_PAGE_SEED。bg/color 为表现层属性，保留在组件内。
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useSectionData } from "@/lib/executor/use-content-runtime";
import { HOME_PAGE_SEED } from "@/lib/content/seed-data";
import type { ServicesSection as ServicesSectionData } from "@/lib/content/content-schema";

import { Icons, resolveIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const FALLBACK: ServicesSectionData = HOME_PAGE_SEED.sections.services;

// Presentation-only styling (not content, stays in component).
const SERVICE_STYLES = [
  { bg: "rgba(27,77,62,0.082)", color: "#1B4D3E" },
  { bg: "rgba(46,125,90,0.082)", color: "#2E7D5A" },
  { bg: "rgba(124,179,66,0.082)", color: "#7CB342" },
];

export function ServicesSection() {
  const { t } = useLanguage();
  const section = useSectionData("home", "services", FALLBACK);
  const items = section.items;
  const linkHref = section.linkHref;
  const viewAllKey = section.viewAllKey;

  return (
    <section aria-labelledby="services-heading" className="py-20 bg-white">
      <div className="container-custom px-4">
        <Reveal y={20}>
          <div className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat"
            >
              {t("home.howWeHelp")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t("home.howWeHelpDesc")}
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
          {items.map((svc, i) => {
            const Icon = resolveIcon(svc.icon);
            const style = SERVICE_STYLES[i] ?? SERVICE_STYLES[0];
            return (
              <Reveal key={svc.titleKey} y={12} delay={i * 0}>
                <li className="group relative">
                  <Link
                    href={linkHref}
                    aria-label={`Learn more about ${t(svc.titleKey)}`}
                    className="block h-full rounded-2xl p-8 border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4D3E]/30 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7CB342]/25"
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: style.bg, color: style.color }}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 font-montserrat">
                      {t(svc.titleKey)}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {t(svc.descKey)}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#7CB342] px-4 py-2 text-[#1B4D3E] font-medium transition-all duration-300 group-hover:gap-3 group-hover:bg-[#7CB342]/10">
                      {t("home.learnMore")}
                      <Icons.arrowRight className="h-[18px] w-[18px]" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
        <Reveal y={20}>
          <nav className="text-center mt-12">
            <Link
              href={linkHref}
              className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#143D30] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t(viewAllKey)}
              <Icons.arrowRight className="h-5 w-5" />
            </Link>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
