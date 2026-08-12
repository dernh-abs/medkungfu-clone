// "Treatment Categories" section of the /projects page.
// 6 white cards in a 2-col grid (lg+) with icon tile, title, zh label,
// description, and a list of treatment links. Fully bilingual: EN titles +
// descriptions, zh uses per-field Chinese (titleZh/descriptionZh/labelZh),
// ru resolves each English string through the merged RU map.
"use client";
import Link from "next/link";

import { RU } from "@/lib/i18n/ru";
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface Treatment {
  label: string;
  /** Chinese label shown in zh mode (verbatim from the source zh page). */
  labelZh: string;
  href: string | null;
}

interface Category {
  title: string;
  /** Dictionary key (projects.*) used when a translation exists. */
  titleKey?: string;
  /** Chinese title shown in zh mode (verbatim from the source zh page). */
  titleZh: string;
  zhLabel: string;
  description: string;
  /** Chinese description shown in zh mode (verbatim from the source zh page). */
  descriptionZh: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  treatments: Treatment[];
}

const CATEGORIES: Category[] = [
  {
    title: "Precision Oncology",
    titleKey: "projects.oncology",
    titleZh: "肿瘤精准治疗",
    zhLabel: "肿瘤精准治疗",
    description: "Heavy Ion/Proton Therapy, CAR-T, BNCT & NK Cell Therapy",
    descriptionZh: "重离子/质子治疗、CAR-T、BNCT及NK细胞治疗",
    icon: Icons.activity,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    treatments: [
      { label: "Heavy Ion/Proton Therapy", labelZh: "重离子/质子治疗", href: "/projects/heavy-ion-proton" },
      { label: "CAR-T Cell Therapy", labelZh: "CAR-T细胞治疗", href: "/projects/cart-therapy" },
      { label: "EBV-Related DC Vaccine Therapy", labelZh: "EBV相关血液肿瘤性DC疫苗治疗", href: "/projects/ebv-dc-vaccine" },
      { label: "BNCT Boron Neutron Capture Therapy", labelZh: "硼中子俘获肿瘤治疗（BNCT）", href: "/projects/bnct-therapy" },
      { label: "Autologous NK Cell Therapy", labelZh: "自体NK细胞实体瘤辅助治疗", href: "/projects/nk-therapy" },
    ],
  },
  {
    title: "Regenerative Medicine",
    titleKey: "projects.regenerative",
    titleZh: "再生医学",
    zhLabel: "再生医学",
    description: "Stem Cell Therapy for Multiple Chronic Conditions",
    descriptionZh: "多种慢性疾病的干细胞治疗",
    icon: Icons.dna,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    treatments: [
      { label: "Stem Cell Therapy for Pulmonary Fibrosis", labelZh: "肺纤维化干细胞治疗", href: "/projects/pulmonary-fibrosis-stem-cell" },
      { label: "Stem Cell Therapy for Heart Failure", labelZh: "慢性心力衰竭干细胞治疗", href: "/projects/heart-failure-stem-cell" },
      { label: "Stem Cell Therapy for Type 2 Diabetes", labelZh: "2型糖尿病干细胞治疗", href: "/projects/diabetes-stem-cell" },
      { label: "Stem Cell Therapy for COPD/ILD", labelZh: "慢性阻塞性肺病/间质性肺病干细胞治疗", href: "/projects/copd-ild-stem-cell" },
      { label: "Airway Stem Cell Therapy for Bronchiectasis", labelZh: "支气管扩张症的气道基底层干细胞治疗技术", href: "/projects/bronchiectasis-stem-cell" },
    ],
  },
  {
    title: "Comprehensive Arthritis Treatment",
    titleZh: "关节炎综合治疗",
    zhLabel: "关节炎综合治疗",
    description: "Advanced Regenerative Medicine for Knee Osteoarthritis",
    descriptionZh: "膝骨关节炎的先进再生医学治疗",
    icon: Icons.bone,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    treatments: [
      { label: "TCM-Integrated PRP Platelet-Rich Plasma Therapy", labelZh: "中西医联合-PRP富血小板血浆治疗", href: "/projects/prp-tcm" },
      { label: "Mesenchymal Stem Cells (MSC)", labelZh: "间充质干细胞（MSC）", href: "/projects/msc-tcm" },
      { label: "Microfragmented Adipose Tissue (MFAT)", labelZh: "自体脂肪微片段（MFAT）", href: "/projects/mfat-tcm" },
      { label: "TCM-Integrated Microfracture for Arthritis", labelZh: "中西医联合-微骨折术治疗关节炎", href: "/projects/microfracture-tcm" },
      { label: "TCM-Integrated MACI Cartilage Cell Transplantation", labelZh: "中西医联合-MACI软骨细胞移植", href: "/projects/maci-tcm" },
      { label: "TCM-Integrated Joint Arthroplasty", labelZh: "中西医联合-关节置换术", href: "/projects/arthroplasty-tcm" },
    ],
  },
  {
    title: "TCM Specialties",
    titleZh: "中医特色项目",
    zhLabel: "中医特色项目",
    description: "Traditional Chinese Medicine for Wellness & Recovery",
    descriptionZh: "传统中医养生与康复",
    icon: Icons.leaf,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    treatments: [
      { label: "Acupuncture Beauty & Skin Tightening", labelZh: "针灸美颜紧肤疗法", href: "/projects/acupuncture-beauty" },
      { label: "TCM-Integrated Proctology Surgery", labelZh: "中西医结合肛肠科手术", href: "/projects/tcm-proctology" },
      { label: "Post-Cancer TCM Recovery", labelZh: "癌症术后中医调理", href: null },
    ],
  },
  {
    title: "Health Checkup",
    titleZh: "健康检查",
    zhLabel: "健康检查",
    description: "Comprehensive Health Screening & Diagnostics",
    descriptionZh: "全面健康筛查与诊断",
    icon: Icons.clipboardCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    treatments: [
      { label: "Premium Health Checkup", labelZh: "高端健康体检", href: "/projects/premium-health-checkup" },
      { label: "Painless Endoscopy", labelZh: "高端无痛胃肠镜", href: "/projects/painless-endoscopy" },
      { label: "Precision Oncology Diagnostics", labelZh: "精准肿瘤诊断服务", href: "/projects/precision-oncology-diagnostics" },
    ],
  },
  {
    title: "More Premium Medical Projects",
    titleZh: "更多优势医疗项目",
    zhLabel: "更多优势医疗项目",
    description: "Cutting-edge treatments including functional neurosurgery",
    descriptionZh: "功能神经外科等前沿治疗技术",
    icon: Icons.brain,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    treatments: [
      { label: "Parkinson's Disease & Movement Disorders Precision Treatment", labelZh: "帕金森病 · 运动障碍精准治疗", href: "/projects/functional-neurosurgery" },
    ],
  },
];

export function TreatmentCategoriesSection() {
  const { t, lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";
  return (
    <section aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="sr-only">
        {ru ? (RU["Treatment Categories"] ?? "Treatment Categories") : "Treatment Categories"}
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 list-none" role="list">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <Reveal key={cat.title} className="flex">
              <li className="bg-white rounded-2xl p-8 shadow-sm card-hover w-full">
                <div
                  className={`w-20 h-20 rounded-xl ${cat.iconBg} ${cat.iconColor} flex items-center justify-center mb-6`}
                  aria-hidden="true"
                >
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-1 font-montserrat">
                  {ru
                    ? (RU[cat.title] ?? cat.title)
                    : zh
                      ? cat.titleZh
                      : cat.titleKey
                        ? t(cat.titleKey)
                        : cat.title}
                </h3>
                {/* The source swaps the subtitle: English name in zh mode,
                    Chinese label in en/ru mode. */}
                <p className="text-sm text-gray-400 mb-3">
                  {zh ? cat.title : cat.zhLabel}
                </p>
                <p className="text-gray-500 mb-6">
                  {ru
                    ? (RU[cat.description] ?? cat.description)
                    : zh
                      ? cat.descriptionZh
                      : cat.description}
                </p>
                <ul className="space-y-3 list-none" role="list">
                  {cat.treatments.map((item) => (
                    <li key={item.label} className="flex items-center text-gray-700">
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-[#1B4D3E] mr-3"
                        aria-hidden="true"
                      ></div>
                      {item.href ? (
                        <Link
                          className="text-[#1B4D3E] hover:text-[#2E7D5A] hover:underline transition-colors"
                          href={item.href}
                        >
                          {ru
                            ? (RU[item.label] ?? item.label)
                            : zh
                              ? item.labelZh
                              : item.label}
                        </Link>
                      ) : (
                        <span>
                          {ru
                            ? (RU[item.label] ?? item.label)
                            : zh
                              ? item.labelZh
                              : item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
