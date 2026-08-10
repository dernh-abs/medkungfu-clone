"use client";

// "Why Choose Us?" — 9 icon items in a 3-col grid. Matches /services.
// Bilingual: heading and items switch to Chinese in zh mode.
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
  titleZh: string;
  descriptionZh: string;
}

const REASONS: Reason[] = [
  {
    icon: Icons.shield,
    title: "Compliance Operation",
    description:
      "Company directly signs and collects payments, ensuring contract compliance and fund security",
    titleZh: "合规运营",
    descriptionZh: "公司直接签约收款，确保合同合规和资金安全",
  },
  {
    icon: Icons.checkCircle,
    title: "Direct Hospital Connection",
    description:
      "Formal partnerships with top hospitals, no intermediary markup, medical fees go directly to hospitals",
    titleZh: "医院直联",
    descriptionZh: "与顶级医院正式合作，无中间加价，医疗费直付医院",
  },
  {
    icon: Icons.award,
    title: "Service Stratification",
    description:
      "From standard to all-inclusive VIP services, catering to different budgets and needs",
    titleZh: "服务分层",
    descriptionZh: "从标准到全包VIP服务，满足不同预算和需求",
  },
  {
    icon: Icons.globe,
    title: "Full Bilingual Support",
    description:
      "All communications, medical records, and contracts provided in bilingual services",
    titleZh: "全程双语支持",
    descriptionZh: "所有沟通、病历和合同均提供双语服务",
  },
  {
    icon: Icons.clock,
    title: "Extremely Fast Scheduling",
    description:
      "Priority through green channel, seizing the treatment window",
    titleZh: "极速排期",
    descriptionZh: "绿色通道优先安排，把握治疗窗口",
  },
  {
    icon: Icons.checkCircle,
    title: "Strict Quality Inspection",
    description:
      "All service personnel undergo rigorous screening and quality supervision",
    titleZh: "严格质检",
    descriptionZh: "所有服务人员经过严格筛选和质量监督",
  },
  {
    icon: Icons.shield,
    title: "Transparent Pricing",
    description:
      "Service fees clearly marked, refunds available in 7 situations, maximum full refund",
    titleZh: "价格透明",
    descriptionZh: "服务费明码标价，7种情况可退款，最高全额退款",
  },
  {
    icon: Icons.checkCircle,
    title: "Risk Transparency",
    description:
      "Sign informed consent before treatment, clearly informing of efficacy uncertainty and potential risks",
    titleZh: "风险透明",
    descriptionZh: "治疗前签署知情同意书，明确告知疗效不确定性和潜在风险",
  },
  {
    icon: Icons.calendar,
    title: "Long-term Follow-up",
    description:
      "Long-term follow-up system, local medical coordination upon returning home",
    titleZh: "长期随访",
    descriptionZh: "长期随访体系，回国后本地医疗协调",
  },
];

export function WhyChooseUsSection() {
  const { lang } = useLanguage();
  const zh = lang === "zh";

  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="bg-white rounded-2xl p-10 shadow-sm mb-12"
    >
      <h2
        id="why-choose-us-heading"
        className="text-2xl font-bold mb-10 text-center text-[#1A1A2E]"
      >
        {zh ? "为什么选择我们？" : "Why Choose Us?"}
      </h2>
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none"
        role="list"
      >
        {REASONS.map((reason) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} className="flex">
              <li className="flex items-start space-x-4 p-4 bg-[#F5F7FA] rounded-lg w-full">
                <div
                  className="p-2 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg flex-shrink-0"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] mb-1">
                    {zh ? reason.titleZh : reason.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {zh ? reason.descriptionZh : reason.description}
                  </p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
