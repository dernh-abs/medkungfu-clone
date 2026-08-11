"use client";

// Hero section (below fixed nav) matching MedKungFu's homepage.
// Big green-tinted hero: trust badge, headline, copy, stat bullets, dual CTAs,
// and a floating doctor image card with partner-hospital figcaption.
// Bilingual via the site translation dictionary (hero.* keys).
//
// Stage D 改造：statKeys / image / imageAlt / ctaLinks 从 ContentRuntime 读取，
// doc === null 时回退到 HOME_PAGE_SEED（与原硬编码值一致）。
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useSectionData } from "@/lib/executor/use-content-runtime";
import { HOME_PAGE_SEED } from "@/lib/content/seed-data";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const FALLBACK = HOME_PAGE_SEED.sections.hero;

export function HeroSection() {
  const { t } = useLanguage();
  const section = useSectionData("home", "hero", FALLBACK);
  const statKeys = section.statKeys;
  const image = section.image;
  const imageAlt = section.imageAlt;
  const exploreHref = section.ctaLinks.explore;
  const bookHref = section.ctaLinks.book;

  return (
    <header
      role="banner"
      aria-label="Hero Section"
      className="relative min-h-[700px] md:min-h-[800px] flex items-center overflow-hidden bg-[#F5F7FA]"
    >
      {/* decorations */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8F5E9]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-custom relative z-10 px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="text-left">
            <Reveal y={20}>
              <div className="inline-flex items-center gap-2 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Icons.checkCircle className="h-4 w-4" />
                <span>{t("hero.trustBadge")}</span>
              </div>
            </Reveal>
            <Reveal y={20}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-6 font-montserrat">
                {t("hero.headline1")}
                <span className="text-[#1B4D3E]"> {t("hero.headline2")}</span>
                <br />
                {t("hero.headline3")}
              </h1>
            </Reveal>
            <Reveal y={20}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                {t("hero.subheadline")}
              </p>
            </Reveal>
            <Reveal y={20}>
              <ul className="flex flex-wrap gap-4 mb-10 list-none">
                {statKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-[#7CB342] rounded-full" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal y={20}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={exploreHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-md hover:bg-[#143D30] transition-all duration-300"
                >
                  {t("hero.explore")}
                  <Icons.arrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href={bookHref}
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4D3E] border-2 border-[#1B4D3E] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#1B4D3E]/5 transition-all duration-300"
                >
                  {t("hero.book")}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <Reveal y={20} className="hidden lg:block">
            <figure className="relative hidden lg:block">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static hero asset, intentional */}
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-[500px] object-cover object-top"
                    width={904}
                    height={1200}
                  />
                </div>
                <figcaption className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1B4D3E] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">100+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A2E]">
                        {t("hero.partnerHospitals")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("hero.acrossCities")}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
