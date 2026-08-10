"use client";

// /faq — category sidebar + FAQ accordion. Client component driving the
// category filter and expand/collapse states. Matches the source.
// Renders Chinese question/answer and category labels when the site
// language is zh; otherwise English.
import { useState } from "react";

import { FAQ_CATEGORIES, FAQ_ITEMS } from "./faq-data";
import { Icons } from "../shared/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const MEDICAL_NOTICE =
  "MedKungfu provides cross-border medical resource recommendation, record organization, process coordination, interpretation, escort, visa and accommodation support, and follow-up assistance. It does not directly provide diagnosis, treatment, or outcome guarantees. Diagnosis, treatment plans, indications, risks, costs, and timelines are subject to final assessment by medical institutions and specialists.";

const ENTITY_NOTE =
  "MedKungFu's corporate entity is MEDTECH CHINA LIMITED. The contracting entity, payment entity, service responsibilities, and refund rules are subject to formal agreements, payment documents, and official statements.";

export function FaqContent() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("core");
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const items = FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="container-custom py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-[#1A1A2E]">
            <Icons.fileText className="text-[#1B4D3E] h-[18px] w-[18px]" />
            <h2 className="text-sm font-semibold">Categories</h2>
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
                    {lang === "zh" ? cat.zh : cat.en}
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
                {MEDICAL_NOTICE}
              </p>
            </div>
          </div>

          {/* Entity note */}
          <div className="bg-white border border-blue-100 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Icons.fileText className="text-blue-600 mt-1 flex-shrink-0 h-5 w-5" />
              <div>
                <h2 className="text-sm font-semibold text-[#1A1A2E] mb-2">
                  Entity and Contract Note
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {ENTITY_NOTE}
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
                      {lang === "zh" ? item.questionZh : item.question}
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
                        {lang === "zh" ? item.answerZh : item.answer}
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
  );
}
