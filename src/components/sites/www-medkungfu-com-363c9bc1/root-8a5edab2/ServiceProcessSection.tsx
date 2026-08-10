// "Our Service Process" section matching MedKungFu's homepage.
// Light section (bg #F5F7FA) with 6 step cards in a responsive grid.
// Each card shows an icon chip, a step number, a progress bar, and a
// connector line to the next step (vertical on mobile, horizontal on md+).
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  progress: number;
}

const STEPS: Step[] = [
  {
    icon: Icons.clipboardCheck,
    number: "01",
    title: "Consultation & Review",
    progress: 22,
  },
  {
    icon: Icons.stethoscope,
    number: "02",
    title: "Contract Signing",
    progress: 32,
  },
  {
    icon: Icons.fileText,
    number: "03",
    title: "Matching & Remote Eval",
    progress: 48,
  },
  {
    icon: Icons.plane,
    number: "04",
    title: "Pre-trip Prep",
    progress: 64,
  },
  {
    icon: Icons.mapPin,
    number: "05",
    title: "Treatment in China",
    progress: 80,
  },
  {
    icon: Icons.building,
    number: "06",
    title: "Post-care Follow-up",
    progress: 96,
  },
];

export function ServiceProcessSection() {
  return (
    <section
      aria-labelledby="service-process-heading"
      className="section-padding bg-[#F5F7FA]"
    >
      <div className="container-custom">
        <h2
          id="service-process-heading"
          className="text-3xl font-bold text-center mb-16 text-[#1A1A2E] font-montserrat"
        >
          Our Service Process
        </h2>
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6 list-none">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} y={12} className="flex">
                <li className="relative w-full">
                  <div className="h-full rounded-xl border border-[#1B4D3E]/10 bg-white p-5 shadow-sm">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1B4D3E] text-white">
                        <Icon className="h-[22px] w-[22px]" />
                      </div>
                      <div className="text-sm font-bold text-[#7CB342]">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1A1A2E] font-montserrat">
                      {step.title}
                    </h3>
                    <div className="mt-5 h-1.5 rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#7CB342]"
                        style={{ width: `${step.progress}%` }}
                      />
                    </div>
                  </div>
                  {/* Connector between steps (omit on last) */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="pointer-events-none absolute left-1/2 top-full h-5 w-px bg-[#1B4D3E]/20 md:left-full md:top-1/2 md:h-px md:w-5 lg:w-6"
                      aria-hidden="true"
                    />
                  )}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
