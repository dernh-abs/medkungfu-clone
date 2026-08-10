"use client";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

export function ContactCtaSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white">
      <div className="container-custom">
        <Reveal y={30} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isZh ? "联系我们 · 一小时内回复" : "Contact Us · Reply Within One Hour"}
          </h2>
          <p className="text-xl mb-4 text-gray-200">
            {isZh
              ? "开启您的国际研究型医院诊疗之旅"
              : "Begin Your International Research Hospital Journey"}
          </p>
          <p className="text-gray-300 mb-8">
            {isZh
              ? "联系我们进行免费初步评估，提交病历及影像资料，我们将安排专家进行远程预筛。"
              : "Contact us for a free preliminary assessment. Submit your medical records and imaging data, and we will arrange for specialists to conduct remote pre-screening."}
          </p>
          <a
            href="mailto:contact@medkungfu.com"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1B4D3E] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            contact@medkungfu.com
            <Icons.arrowRight className="h-5 w-5 ml-2" />
          </a>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-400">MK · EST. 2026</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
