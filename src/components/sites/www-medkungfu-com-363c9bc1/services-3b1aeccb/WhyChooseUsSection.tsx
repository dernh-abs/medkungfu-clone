// "Why Choose Us?" — 9 icon items in a 3-col grid. Matches /services.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: Icons.shield,
    title: "Compliance Operation",
    description:
      "Company directly signs and collects payments, ensuring contract compliance and fund security",
  },
  {
    icon: Icons.checkCircle,
    title: "Direct Hospital Connection",
    description:
      "Formal partnerships with top hospitals, no intermediary markup, medical fees go directly to hospitals",
  },
  {
    icon: Icons.award,
    title: "Service Stratification",
    description:
      "From standard to all-inclusive VIP services, catering to different budgets and needs",
  },
  {
    icon: Icons.globe,
    title: "Full Bilingual Support",
    description:
      "All communications, medical records, and contracts provided in bilingual services",
  },
  {
    icon: Icons.clock,
    title: "Extremely Fast Scheduling",
    description:
      "Priority through green channel, seizing the treatment window",
  },
  {
    icon: Icons.checkCircle,
    title: "Strict Quality Inspection",
    description:
      "All service personnel undergo rigorous screening and quality supervision",
  },
  {
    icon: Icons.shield,
    title: "Transparent Pricing",
    description:
      "Service fees clearly marked, refunds available in 7 situations, maximum full refund",
  },
  {
    icon: Icons.checkCircle,
    title: "Risk Transparency",
    description:
      "Sign informed consent before treatment, clearly informing of efficacy uncertainty and potential risks",
  },
  {
    icon: Icons.calendar,
    title: "Long-term Follow-up",
    description:
      "Long-term follow-up system, local medical coordination upon returning home",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="bg-white rounded-2xl p-10 shadow-sm mb-12"
    >
      <h2
        id="why-choose-us-heading"
        className="text-2xl font-bold mb-10 text-center text-[#1A1A2E]"
      >
        Why Choose Us?
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
                  <h4 className="font-bold text-[#1A1A2E] mb-1">{reason.title}</h4>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
