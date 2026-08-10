"use client";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const stats = [
  { value: "10 hectares", label: "Area" },
  { value: "220 beds", label: "Beds" },
  { value: "50+ types", label: "Treatable Diseases" },
  { value: "9,317 cases", label: "Total Patients" },
  { value: "1,000+/year", label: "Annual Cases" },
];

const statsZh = [
  { value: "150亩", label: "占地面积" },
  { value: "220张", label: "核定床位" },
  { value: "50+种", label: "可治疗病种" },
  { value: "9317例", label: "累计治疗患者" },
  { value: "1000+例/年", label: "年治疗量" },
];

export function OverviewSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items = isZh ? statsZh : stats;
  return (
    <section id="intro" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {isZh ? "医院概况" : "Hospital Overview"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isZh
              ? "上海市质子重离子医院（复旦大学附属质子重离子医院）坐落于浦东新区张江科学城，是国内首家同时开展质子、重离子两种先进放疗技术的肿瘤专科医疗机构。"
              : "Shanghai Proton Heavy Ion Hospital (Fudan University Affiliated) is located in Zhangjiang Science City, Pudong New Area. It is China&apos;s first specialized oncology institution offering both proton and heavy ion advanced radiotherapy technologies."}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {items.map((stat) => (
            <Reveal
              key={stat.label}
              y={20}
              className="bg-blue-50 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal y={20} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <p className="text-gray-700 leading-relaxed">
            {isZh
              ? "医院占地150亩，核定床位220张。自2015年5月正式运营以来，依托质子重离子精准放疗技术，可治疗病种拓展至50余种，覆盖国内绝大多数常见恶性肿瘤。"
              : "The hospital covers 10 hectares with 220 approved beds. Since official operation began in May 2015, leveraging precise proton and heavy ion radiotherapy technology, treatable diseases have expanded to over 50 types, covering the vast majority of common malignant tumors in China."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
