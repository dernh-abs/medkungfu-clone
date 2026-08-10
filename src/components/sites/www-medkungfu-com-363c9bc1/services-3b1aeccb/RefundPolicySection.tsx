// "Refund Policy" — 5 scenario/result cards in a 2-col grid with
// alternating x-slide reveals. Matches /services.
import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface RefundRule {
  scenario: string;
  result: string;
}

const RULES: RefundRule[] = [
  {
    scenario: "Unable to match suitable hospital within agreed timeframe",
    result: "Full refund of service fee",
  },
  {
    scenario: "Expert assessment deems treatment unsuitable",
    result: "Full refund of service fee",
  },
  {
    scenario: "Visa rejected (complete documents, non-patient fault)",
    result: "Full refund of service fee",
  },
  {
    scenario: "Patient voluntarily withdraws (different stages)",
    result: "Proportional refund based on progress",
  },
  {
    scenario: "Treatment discontinued by medical advice",
    result: "Proportional refund based on progress",
  },
];

export function RefundPolicySection() {
  return (
    <section
      aria-labelledby="refund-policy-heading"
      className="bg-white rounded-2xl p-10 shadow-sm mb-12"
    >
      <h2
        id="refund-policy-heading"
        className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]"
      >
        Refund Policy
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RULES.map((rule, i) => (
          <Reveal key={rule.scenario} y={0} x={i % 2 === 0 ? -20 : 20} className="flex">
            <div className="p-6 bg-[#F5F7FA] rounded-xl w-full">
              <div className="flex items-start space-x-4">
                <Icons.checkCircle className="text-[#1B4D3E] flex-shrink-0 mt-0.5 h-5 w-5" />
                <div>
                  <dt className="text-gray-700 text-sm mb-1">{rule.scenario}</dt>
                  <dd className="font-semibold text-[#1B4D3E]">{rule.result}</dd>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
