"use client";

// "Refund Policy" — 5 scenario/result cards in a 2-col grid with
// alternating x-slide reveals. Matches /services. Bilingual in zh mode.
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface RefundRule {
  scenario: string;
  result: string;
  scenarioZh: string;
  resultZh: string;
}

const RULES: RefundRule[] = [
  {
    scenario: "Unable to match suitable hospital within agreed timeframe",
    result: "Full refund of service fee",
    scenarioZh: "无法在约定时间内匹配合适医院",
    resultZh: "服务费全额退款",
  },
  {
    scenario: "Expert assessment deems treatment unsuitable",
    result: "Full refund of service fee",
    scenarioZh: "经前期远程评估，不符合治疗可行性",
    resultZh: "服务费全额退款",
  },
  {
    scenario: "Visa rejected (complete documents, non-patient fault)",
    result: "Full refund of service fee",
    scenarioZh: "签证被拒（资料完整，非患者原因）",
    resultZh: "服务费全额退款",
  },
  {
    scenario: "Patient voluntarily withdraws (different stages)",
    result: "Proportional refund based on progress",
    scenarioZh: "患者自愿退出（不同阶段）",
    resultZh: "按进度比例退款",
  },
  {
    scenario: "Treatment discontinued by medical advice",
    result: "Proportional refund based on progress",
    scenarioZh: "医生建议停止治疗",
    resultZh: "按进度比例退款",
  },
];

export function RefundPolicySection() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";

  return (
    <section
      aria-labelledby="refund-policy-heading"
      className="bg-white rounded-2xl p-10 shadow-sm mb-12"
    >
      <h2
        id="refund-policy-heading"
        className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]"
      >
        {zh ? "退款政策" : ru ? "Политика возврата" : "Refund Policy"}
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RULES.map((rule, i) => (
          <Reveal key={rule.scenario} y={0} x={i % 2 === 0 ? -20 : 20} className="flex">
            <div className="p-6 bg-[#F5F7FA] rounded-xl w-full">
              <div className="flex items-start space-x-4">
                <Icons.checkCircle className="text-[#1B4D3E] flex-shrink-0 mt-0.5 h-5 w-5" />
                <div>
                  <dt className="text-gray-700 text-sm mb-1">
                    {ru
                      ? (RU[rule.scenario] ?? rule.scenario)
                      : zh
                        ? rule.scenarioZh
                        : rule.scenario}
                  </dt>
                  <dd className="font-semibold text-[#1B4D3E]">
                    {ru
                      ? (RU[rule.result] ?? rule.result)
                      : zh
                        ? rule.resultZh
                        : rule.result}
                  </dd>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
