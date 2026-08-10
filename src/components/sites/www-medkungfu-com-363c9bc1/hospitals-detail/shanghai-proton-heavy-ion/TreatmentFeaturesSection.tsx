"use client";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const treatments = [
  {
    title: "Nasopharyngeal Cancer",
    description:
      "World's largest particle center for nasopharyngeal cancer heavy ion therapy",
    highlight: "5-year OS rate 93.8% for newly diagnosed patients",
  },
  {
    title: "Lung Cancer",
    description: "85% of lung cancer patients receive heavy ion therapy",
    highlight: "Stage I NSCLC 5-year OS rate 73.8%",
  },
  {
    title: "Pancreatic Cancer",
    description:
      "Pioneer in pure heavy ion therapy for locally recurrent cases",
    highlight: "3-year OS 33.1%, median survival 26.8 months",
  },
  {
    title: "Prostate Cancer",
    description:
      "Pure heavy ion therapy for localized prostate cancer",
    highlight:
      "5-year OS 97.2%, prostate-specific survival 100%",
  },
  {
    title: "Breast Cancer",
    description: "Primarily proton therapy",
    highlight: "5-year OS rate 97.3%",
  },
  {
    title: "Liver Cancer",
    description:
      "Precise tumor cell destruction with maximum liver protection",
    highlight:
      "Significant clinical advantages in unresectable liver cancer and metastases",
  },
];

const treatmentsZh = [
  {
    title: "鼻咽癌",
    description: "国际收治重离子放疗鼻咽癌患者数量最多的粒子中心",
    highlight: "初治患者5年总生存率93.8%",
  },
  {
    title: "肺癌",
    description: "85%肺癌患者采用重离子放疗",
    highlight: "Ⅰ期早期非小细胞肺癌5年总生存率73.8%",
  },
  {
    title: "胰腺癌",
    description: "国际首创单纯重离子治疗局部复发鼻咽癌",
    highlight: "3年总生存率33.1%，中位生存时间26.8个月",
  },
  {
    title: "前列腺癌",
    description: "局限期患者行单纯重离子放疗",
    highlight: "5年总生存率97.2%，前列腺特异生存率100%",
  },
  {
    title: "乳腺癌",
    description: "以质子放疗为主",
    highlight: "5年总生存率97.3%",
  },
  {
    title: "肝癌",
    description: "精准杀伤肿瘤细胞，最大程度保护正常肝组织",
    highlight: "在不可切除肝癌、肝转移瘤等领域展现出显著临床优势",
  },
];

export function TreatmentFeaturesSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items = isZh ? treatmentsZh : treatments;
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {isZh ? "技术特色 & 优势治疗项目" : "Technical Features &amp; Advantageous Treatments"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isZh
              ? "医院以重离子放疗为核心特色，临床中75%患者采用单纯重离子或重离子联合质子治疗"
              : "The hospital specializes in heavy ion radiotherapy, with 75% of clinical patients receiving pure heavy ion or combined heavy ion-proton therapy"}
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((treatment) => (
            <Reveal
              key={treatment.title}
              y={20}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {treatment.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {treatment.description}
              </p>
              <p className="text-blue-600 font-medium text-sm">
                {treatment.highlight}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
