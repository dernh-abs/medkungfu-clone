// "Treatment Categories" section of the /projects page.
// 6 white cards in a 2-col grid (lg+) with icon tile, title, zh label,
// description, and a list of treatment links.
import Link from "next/link";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Treatment {
  label: string;
  href: string | null;
}

interface Category {
  title: string;
  zhLabel: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  treatments: Treatment[];
}

const CATEGORIES: Category[] = [
  {
    title: "Precision Oncology",
    zhLabel: "肿瘤精准治疗",
    description: "Heavy Ion/Proton Therapy, CAR-T, BNCT & NK Cell Therapy",
    icon: Icons.activity,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    treatments: [
      { label: "Heavy Ion/Proton Therapy", href: "/projects/heavy-ion-proton" },
      { label: "CAR-T Cell Therapy", href: "/projects/cart-therapy" },
      { label: "EBV-Related DC Vaccine Therapy", href: "/projects/ebv-dc-vaccine" },
      { label: "BNCT Boron Neutron Capture Therapy", href: "/projects/bnct-therapy" },
      { label: "Autologous NK Cell Therapy", href: "/projects/nk-therapy" },
    ],
  },
  {
    title: "Regenerative Medicine",
    zhLabel: "再生医学",
    description: "Stem Cell Therapy for Multiple Chronic Conditions",
    icon: Icons.dna,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    treatments: [
      { label: "Stem Cell Therapy for Pulmonary Fibrosis", href: "/projects/pulmonary-fibrosis-stem-cell" },
      { label: "Stem Cell Therapy for Heart Failure", href: "/projects/heart-failure-stem-cell" },
      { label: "Stem Cell Therapy for Type 2 Diabetes", href: "/projects/diabetes-stem-cell" },
      { label: "Stem Cell Therapy for COPD/ILD", href: "/projects/copd-ild-stem-cell" },
      { label: "Airway Stem Cell Therapy for Bronchiectasis", href: "/projects/bronchiectasis-stem-cell" },
    ],
  },
  {
    title: "Comprehensive Arthritis Treatment",
    zhLabel: "关节炎综合治疗",
    description: "Advanced Regenerative Medicine for Knee Osteoarthritis",
    icon: Icons.bone,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    treatments: [
      { label: "TCM-Integrated PRP Platelet-Rich Plasma Therapy", href: "/projects/prp-tcm" },
      { label: "Mesenchymal Stem Cells (MSC)", href: "/projects/msc-tcm" },
      { label: "Microfragmented Adipose Tissue (MFAT)", href: "/projects/mfat-tcm" },
      { label: "TCM-Integrated Microfracture for Arthritis", href: "/projects/microfracture-tcm" },
      { label: "TCM-Integrated MACI Cartilage Cell Transplantation", href: "/projects/maci-tcm" },
      { label: "TCM-Integrated Joint Arthroplasty", href: "/projects/arthroplasty-tcm" },
    ],
  },
  {
    title: "TCM Specialties",
    zhLabel: "中医特色项目",
    description: "Traditional Chinese Medicine for Wellness & Recovery",
    icon: Icons.leaf,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    treatments: [
      { label: "Acupuncture Beauty & Skin Tightening", href: "/projects/acupuncture-beauty" },
      { label: "TCM-Integrated Proctology Surgery", href: "/projects/tcm-proctology" },
      { label: "Post-Cancer TCM Recovery", href: null },
    ],
  },
  {
    title: "Health Checkup",
    zhLabel: "健康检查",
    description: "Comprehensive Health Screening & Diagnostics",
    icon: Icons.clipboardCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    treatments: [
      { label: "Premium Health Checkup", href: "/projects/premium-health-checkup" },
      { label: "Painless Endoscopy", href: "/projects/painless-endoscopy" },
      { label: "Precision Oncology Diagnostics", href: "/projects/precision-oncology-diagnostics" },
    ],
  },
  {
    title: "More Premium Medical Projects",
    zhLabel: "更多优势医疗项目",
    description: "Cutting-edge treatments including functional neurosurgery",
    icon: Icons.brain,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    treatments: [
      { label: "Parkinson's Disease & Movement Disorders Precision Treatment", href: "/projects/functional-neurosurgery" },
    ],
  },
];

export function TreatmentCategoriesSection() {
  return (
    <section aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="sr-only">
        Treatment Categories
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
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{cat.zhLabel}</p>
                <p className="text-gray-500 mb-6">{cat.description}</p>
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
                          {item.label}
                        </Link>
                      ) : (
                        <span>{item.label}</span>
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
