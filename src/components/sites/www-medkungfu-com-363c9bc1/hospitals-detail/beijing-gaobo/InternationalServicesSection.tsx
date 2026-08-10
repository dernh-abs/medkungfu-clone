"use client";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

interface InternationalService {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: InternationalService[] = [
  {
    title: "Customized Multidisciplinary Consultation (MDT)",
    description:
      "Gathering renowned domestic and foreign expert resources to provide personalized diagnosis and treatment plans for patients.",
    icon: Icons.users,
  },
  {
    title: "Full-cycle Exclusive Service",
    description:
      "Full-process accompaniment from visa assistance, airport pickup, hospitalization to discharge follow-up.",
    icon: Icons.globe,
  },
  {
    title: "Multi-language Translation Service",
    description:
      "Providing English, Japanese and other multi-language translation services to ensure barrier-free communication.",
    icon: Icons.checkCircle,
  },
  {
    title: "Comfortable Hospitalization Environment",
    description:
      "Wards equipped with central air conditioning, shower rooms, TV, refrigerator, microwave and other living facilities.",
    icon: Icons.building,
  },
];

const servicesZh: InternationalService[] = [
  {
    title: "定制化多学科会诊（MDT）",
    description: "汇聚国内外知名专家资源，为患者提供个性化诊疗方案。",
    icon: Icons.users,
  },
  {
    title: "全周期专属服务",
    description: "从签证协助、机场接送、住院诊疗到出院随访的全程陪伴。",
    icon: Icons.globe,
  },
  {
    title: "多语种翻译服务",
    description: "提供英语、日语等多语种翻译服务，确保无障碍沟通。",
    icon: Icons.checkCircle,
  },
  {
    title: "舒适住院环境",
    description: "病区配备中央空调、淋浴间、电视、冰箱、微波炉等生活设施。",
    icon: Icons.building,
  },
];

export function InternationalServicesSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items = isZh ? servicesZh : services;
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal y={20} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
            {isZh ? "国际患者服务" : "International Patient Services"}
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((service) => (
            <Reveal
              key={service.title}
              scale={0.95}
              className="bg-[#F5F7FA] rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
