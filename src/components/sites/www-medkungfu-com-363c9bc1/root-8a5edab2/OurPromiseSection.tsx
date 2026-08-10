"use client";

// "Our Promise" section matching MedKungFu's homepage.
// Light section (bg #F5F7FA) with 4 value cards in a responsive grid.
// Each card reveals with a scale(0.9) entrance and lifts on hover via .card-hover.
// Bilingual via home.ourPromise / values.* / home.valueDesc* keys.
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface PromiseValue {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const VALUES: PromiseValue[] = [
  {
    icon: Icons.shield,
    titleKey: "values.direct",
    descKey: "home.valueDescDirect",
  },
  {
    icon: Icons.zap,
    titleKey: "values.speed",
    descKey: "home.valueDescSpeed",
  },
  {
    icon: Icons.userCheck,
    titleKey: "values.custom",
    descKey: "home.valueDescCustom",
  },
  {
    icon: Icons.fileText,
    titleKey: "values.transparent",
    descKey: "home.valueDescTransparent",
  },
];

export function OurPromiseSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="core-values-heading"
      className="section-padding bg-[#F5F7FA]"
    >
      <div className="container-custom">
        <h2
          id="core-values-heading"
          className="text-3xl font-bold text-center mb-12 text-[#1A1A2E] font-montserrat"
        >
          {t("home.ourPromise")}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.titleKey} scale={0.9} className="flex">
                <li className="bg-white p-8 rounded-xl shadow-sm card-hover text-center w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#1A1A2E] font-montserrat">
                    {t(v.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(v.descKey)}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
