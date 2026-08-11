"use client";

// "Questions International Patients Ask First" — Featured FAQ section.
// White section with 10 static FAQ cards in a 2-col grid (no accordion).
// Bilingual: the heading, subtitle, link, and each Q&A switch to Chinese when
// the site language is zh (zh text comes from the shared FAQ data).
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

import type { FeaturedFaqSection } from "@/lib/content/content-schema";
import { HOME_PAGE_SEED } from "@/lib/content/seed-data";
import { useSectionData } from "@/lib/executor/use-content-runtime";

import { FAQ_ITEMS } from "../faq-1965ee0f/faq-data";
import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const FALLBACK: FeaturedFaqSection = HOME_PAGE_SEED.sections.featuredFaq;

function faqIdFromHref(href: string): number | null {
  const m = href.match(/faq-(\d+)$/);
  return m ? Number(m[1]) : null;
}

export function FeaturedFAQSection() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";
  const section = useSectionData("home", "featuredFaq", FALLBACK);
  const items = section.items;

  return (
    <section
      aria-labelledby="featured-faq-heading"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <Reveal y={20}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[#1B4D3E] font-semibold mb-3">
                FAQ
              </p>
              <h2
                id="featured-faq-heading"
                className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat"
              >
                {zh
                  ? "海外患者最常问的问题"
                  : ru
                    ? "Вопросы, которые задают пациенты в первую очередь"
                    : section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {zh
                  ? "先了解服务边界、病历准备、医院匹配、费用周期和随访方式，再判断是否适合启动赴华医疗评估。"
                  : ru
                    ? "Понять границы обслуживания, записывать подготовку, соответствие больниц, расходы, сроки и последующее наблюдение, прежде чем принимать решение о начале медицинской оценки в Китае."
                    : section.subtitle}
              </p>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#1B4D3E] font-semibold hover:text-[#7CB342] transition-colors shrink-0"
            >
              {zh ? "查看完整 72 问" : ru ? "Прочитайте все 72 FAQ" : section.linkText}
              <Icons.arrowRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((faq) => {
            const faqId = faqIdFromHref(faq.href);
            const item = faqId != null ? FAQ_ITEMS.find((f) => f.id === faqId) : undefined;
            const question = ru
              ? (RU[faq.question] ?? faq.question)
              : zh && item
                ? item.questionZh
                : faq.question;
            const answer = ru
              ? (RU[faq.answer] ?? faq.answer)
              : zh && item
                ? item.answerZh
                : faq.answer;
            return (
              <Reveal key={faq.href} y={12} className="flex">
                <Link
                  href={faq.href}
                  className="group border border-gray-200 rounded-lg p-5 hover:border-[#7CB342] hover:shadow-md transition-all bg-[#FBFCFC] w-full"
                >
                  <div className="flex items-start gap-3">
                    <Icons.helpCircle className="text-[#1B4D3E] mt-0.5 flex-shrink-0 h-5 w-5" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A2E] leading-relaxed group-hover:text-[#1B4D3E]">
                        {question}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {answer}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
