"use client";

// "Service Offerings" — 6 white cards in a 3-col grid. Matches /services.
// Bilingual: card titles/descriptions switch to Chinese in zh mode.
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  titleZh: string;
  descriptionZh: string;
}

const OFFERINGS: Offering[] = [
  {
    icon: Icons.video,
    title: "Expert Video Consultation",
    description: "Connect with top specialists remotely before your trip.",
    titleZh: "专家视频咨询",
    descriptionZh: "在出行前远程连接顶尖专家。",
  },
  {
    icon: Icons.calendar,
    title: "Full-process Butler",
    description: "End-to-end coordination from appointment to discharge.",
    titleZh: "全程管家服务",
    descriptionZh: "从预约到出院的端到端协调。",
  },
  {
    icon: Icons.plane,
    title: "Visa & Travel",
    description: "Assistance with medical visas and flight arrangements.",
    titleZh: "签证与旅行",
    descriptionZh: "协助办理医疗签证和航班安排。",
  },
  {
    icon: Icons.messageSquare,
    title: "Translation & Escort",
    description: "Professional medical translators accompanying you.",
    titleZh: "翻译与陪同",
    descriptionZh: "专业医疗翻译全程陪同。",
  },
  {
    icon: Icons.home,
    title: "Accommodation",
    description: "Comfortable stays near partner hospitals.",
    titleZh: "住宿安排",
    descriptionZh: "合作医院附近的舒适住宿。",
  },
  {
    icon: Icons.fileText,
    title: "Rehabilitation Follow-up",
    description: "Continuous care after you return home.",
    titleZh: "康复随访",
    descriptionZh: "回国后持续护理。",
  },
];

export function ServiceOfferingsSection() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";

  return (
    <section aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Service Offerings
      </h2>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 list-none"
        role="list"
      >
        {OFFERINGS.map((offering) => {
          const Icon = offering.icon;
          return (
            <Reveal key={offering.title} className="flex">
              <li className="bg-white p-8 rounded-xl shadow-sm card-hover text-center w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6"
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A2E]">
                  {ru
                    ? (RU[offering.title] ?? offering.title)
                    : zh
                      ? offering.titleZh
                      : offering.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {ru
                    ? (RU[offering.description] ?? offering.description)
                    : zh
                      ? offering.descriptionZh
                      : offering.description}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
