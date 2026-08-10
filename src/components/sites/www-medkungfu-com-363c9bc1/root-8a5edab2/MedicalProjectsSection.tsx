"use client";

// "Advantageous Medical Projects" section matching MedKungFu's homepage.
// White section with 4 project cards (icon, title, subtitle, Learn More pill).
// Bilingual via projects.pageTitle / projects.* / projects.details keys.
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Project {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  titleKey: string;
  subtitle: string;
}

const PROJECTS: Project[] = [
  {
    icon: Icons.activity,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    titleKey: "projects.oncology",
    subtitle: "Heavy Ion & CAR-T Therapy",
  },
  {
    icon: Icons.dna,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    titleKey: "projects.regenerative",
    subtitle: "Stem Cell Treatment",
  },
  {
    icon: Icons.leaf,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    titleKey: "projects.integrative",
    subtitle: "TCM & Western Medicine",
  },
  {
    icon: Icons.stethoscope,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    titleKey: "projects.specialties",
    subtitle: "Cardiology, Orthopedics & More",
  },
];

export function MedicalProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="medical-projects-heading"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <h2
          id="medical-projects-heading"
          className="text-3xl font-bold text-center mb-12 text-[#1A1A2E] font-montserrat"
        >
          {t("projects.pageTitle")}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.titleKey} y={12} className="flex">
                <li className="group w-full">
                  <Link
                    href="/projects"
                    aria-label={`View details for ${t(p.titleKey)}`}
                    className="block h-full rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4D3E]/30 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7CB342]/25"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg ${p.iconBg} ${p.iconColor} flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#1A1A2E] group-hover:text-[#1B4D3E] transition-colors font-montserrat">
                      {t(p.titleKey)}
                    </h3>
                    <p className="text-gray-500 mb-4 text-sm">{p.subtitle}</p>
                    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#7CB342] px-3 py-2 text-[#1B4D3E] text-sm font-medium">
                      {t("projects.details")}
                    </span>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
