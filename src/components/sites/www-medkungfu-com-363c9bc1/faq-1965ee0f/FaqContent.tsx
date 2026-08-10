"use client";

// /faq — hero + category sidebar + FAQ accordion. Client component driving the
// category filter and expand/collapse states. Matches the source site,
// including its trilingual (EN/zh/ru) content: hero, sidebar label, notice
// boxes, and all 72 Q&A switch to Chinese (zh fields) or Russian (RU map,
// keyed by the English strings) when the site language is zh / ru.
import { useState } from "react";

import { FAQ_CATEGORIES, FAQ_ITEMS } from "./faq-data";
import { Icons } from "../shared/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

const MEDICAL_NOTICE_EN =
  "MedKungfu provides cross-border medical resource recommendation, record organization, process coordination, interpretation, escort, visa and accommodation support, and follow-up assistance. It does not directly provide diagnosis, treatment, or outcome guarantees. Diagnosis, treatment plans, indications, risks, costs, and timelines are subject to final assessment by medical institutions and specialists.";
const MEDICAL_NOTICE_ZH =
  "康福来提供跨境医疗资源推荐、病历整理、流程协调、翻译陪诊、签证住宿支持和随访协助。康福来不直接提供诊断、治疗或效果保证。诊断、治疗方案、适应症、风险、费用和周期以医疗机构和专科医生的最终评估为准。";

const ENTITY_NOTE_EN =
  "MedKungFu's corporate entity is MEDTECH CHINA LIMITED. The contracting entity, payment entity, service responsibilities, and refund rules are subject to formal agreements, payment documents, and official statements.";
const ENTITY_NOTE_ZH =
  "康福来的公司主体是MEDTECH CHINA LIMITED。签约主体、收款主体、服务责任和退款规则以正式合同、付款文件和官方说明为准。";

export function FaqContent() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("core");
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const zh = lang === "zh";
  const ru = lang === "ru";

  // Pick the rendered text for the active language. zh uses the per-field
  // Chinese content; ru resolves the English string through the merged RU map
  // (falling back to English when a key is missing); en uses the English text.
  const pick = (en: string, zhText: string): string => {
    if (zh) return zhText;
    if (ru) return RU[en] ?? en;
    return en;
  };

  const items = FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#123D32] text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,179,66,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_28%)]"
          aria-hidden="true"
        />
        <div className="container-custom relative py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#9CCC65] mb-4">
              {ru ? (RU["MedKungfu Knowledge Base"] ?? "MedKungfu Knowledge Base") : "MedKungfu Knowledge Base"}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              {pick(
                "Frequently Asked Questions About Medical Care in China",
                "康福来跨境医疗常见问题"
              )}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
              {pick(
                "A practical FAQ for international patients and families evaluating cross-border medical resources, care coordination, costs, timelines, risks, and selected treatment directions in China.",
                "面向海外患者和家属，集中说明什么时候考虑跨境医疗、康福来能做什么、费用周期如何判断，以及具体医疗方向的适用边界。"
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-[#1A1A2E]">
              <Icons.fileText className="text-[#1B4D3E] h-[18px] w-[18px]" />
              <h2 className="text-sm font-semibold">
                {pick("Categories", "问题分类")}
              </h2>
            </div>
            <div className="space-y-2">
              {FAQ_CATEGORIES.map((cat) => {
                const count = FAQ_ITEMS.filter((f) => f.category === cat.id).length;
                const active = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setExpandedId(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                      active
                        ? "bg-[#1B4D3E] text-white shadow-md"
                        : "text-gray-700 hover:bg-[#EEF5F1] hover:text-[#1B4D3E]"
                    }`}
                  >
                    <span className="block font-medium">
                      {pick(cat.en, cat.zh)}
                    </span>
                    <span className="text-xs opacity-70">{count} Q&amp;A</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-5">
            {/* Medical notice */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Icons.alertCircle className="text-[#7CB342] mt-1 flex-shrink-0 h-5 w-5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {pick(MEDICAL_NOTICE_EN, MEDICAL_NOTICE_ZH)}
                </p>
              </div>
            </div>

            {/* Entity note */}
            <div className="bg-white border border-blue-100 rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Icons.fileText className="text-blue-600 mt-1 flex-shrink-0 h-5 w-5" />
                <div>
                  <h2 className="text-sm font-semibold text-[#1A1A2E] mb-2">
                    {pick("Entity and Contract Note", "实体与合同说明")}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {pick(ENTITY_NOTE_EN, ENTITY_NOTE_ZH)}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="space-y-4">
              {items.map((item) => {
                const open = expandedId === item.id;
                return (
                  <article
                    key={item.id}
                    id={`faq-${item.id}`}
                    className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={open}
                      className="w-full flex items-start gap-4 px-5 md:px-6 py-5 text-left hover:bg-[#FBFCFC] transition-colors"
                    >
                      <Icons.helpCircle className="text-[#1B4D3E] mt-0.5 flex-shrink-0 h-[22px] w-[22px]" />
                      <span className="flex-1 font-semibold text-[#1A1A2E] leading-relaxed">
                        {pick(item.question, item.questionZh)}
                      </span>
                      <Icons.chevronDown
                        className={`text-gray-400 mt-1 flex-shrink-0 h-5 w-5 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open && (
                      <div style={{ height: "auto", opacity: 1 }}>
                        <div className="px-5 md:px-6 pb-6 pl-[58px] text-gray-700 leading-relaxed">
                          {pick(item.answer, item.answerZh)}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
