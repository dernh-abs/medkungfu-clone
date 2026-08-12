// "Partner Hospitals" hero — green gradient banner with eyebrow, title,
// subtitle, 3 stats, and the bottom wave divider. Matches /hospitals.
// Bilingual: zh uses the captured Chinese (verbatim from the source zh page);
// ru resolves each English string through the merged RU map, falling back to
// English when a string is not covered.
"use client";

import { Icons } from "../shared/icons";
import { RU } from "@/lib/i18n/ru";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STATS = [
  { value: "100+", label: "Partner Hospitals", labelZh: "合作医院" },
  { value: "6", label: "Major Cities", labelZh: "主要城市" },
  { value: "50+", label: "Specialties", labelZh: "专科领域" },
];

export function HospitalsHero() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";
  return (
    <header
      role="banner"
      aria-label={ru ? (RU["Hospitals Hero"] ?? "Hospitals Hero") : "Hospitals Hero"}
      className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-[#1B4D3E] via-[#2E7D5A] to-[#1B4D3E]"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="container-custom relative z-10 px-4 py-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            role="status"
          >
            <Icons.checkCircle className="h-4 w-4" aria-hidden="true" />
            <span>
              {ru
                ? (RU["Premium Healthcare Network"] ?? "Premium Healthcare Network")
                : zh
                  ? "优质医疗网络"
                  : "Premium Healthcare Network"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight">
            {ru
              ? (RU["Partner Hospitals"] ?? "Partner Hospitals")
              : zh
                ? "合作医院"
                : "Partner Hospitals"}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            {ru
              ? (RU["We collaborate with China's most prestigious medical institutions to ensure you receive the best care."] ??
                  "We collaborate with China's most prestigious medical institutions to ensure you receive the best care.")
              : zh
                ? "我们与中国最负盛名的医疗机构合作，确保您获得最佳医疗服务"
                : "We collaborate with China's most prestigious medical institutions to ensure you receive the best care."}
          </p>
          <dl className="flex flex-wrap justify-center gap-8 mt-8" role="list">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="contents">
                {i > 0 && <div className="w-px h-12 bg-white/20" aria-hidden="true" />}
                <div className="text-center" role="listitem">
                  <dt className="text-3xl font-bold text-white">{stat.value}</dt>
                  <dd className="text-sm text-white/70">
                    {ru ? (RU[stat.label] ?? stat.label) : zh ? stat.labelZh : stat.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F5F7FA"
          />
        </svg>
      </div>
    </header>
  );
}
