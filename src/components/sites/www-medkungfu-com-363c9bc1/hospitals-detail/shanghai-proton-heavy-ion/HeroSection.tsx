"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function HeroSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured asset */}
      <img
        src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-shanghai-proton.jpg"
        alt={isZh ? "上海市质子重离子医院外观" : "Shanghai Proton Heavy Ion Hospital exterior"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-indigo-950/70 to-blue-950/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {isZh ? "上海市质子重离子医院" : "Shanghai Proton Heavy Ion Hospital"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {isZh
              ? "复旦大学附属质子重离子医院"
              : "Fudan University Affiliated Proton Heavy Ion Hospital"}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            {isZh
              ? "精准粒子放疗 · 守护生命健康"
              : "Precision Particle Radiotherapy · Protecting Life and Health"}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {isZh
                ? "国内首家同时开展质子、重离子两种先进放疗技术"
                : "China&apos;s first hospital offering both proton and heavy ion therapy"}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {isZh ? "9317例累计治疗患者" : "9,317 total patients treated"}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              {isZh ? "50+种可治疗病种" : "50+ treatable diseases"}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#intro"
              className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {isZh ? "了解更多" : "Learn More"}
            </Link>
            <Link
              className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              href="/contact"
            >
              {isZh ? "预约咨询" : "Book Consultation"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
