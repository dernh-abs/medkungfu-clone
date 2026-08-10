// "Our Service Process" — 7-phase alternating timeline with center line
// on desktop and a left line on mobile. Matches /services.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface ProcessStep {
  name: string;
  description: string;
}

interface ProcessPhase {
  icon: LucideIcon;
  title: string;
  steps: ProcessStep[];
}

const PHASES: ProcessPhase[] = [
  {
    icon: Icons.phone,
    title: "Inquiry & Initial Consultation",
    steps: [
      {
        name: "Remote Consultation",
        description:
          "Initial contact via phone, email, or video call to understand your medical needs",
      },
      {
        name: "Medical Records Collection & Translation",
        description:
          "Gather and professionally translate your medical history and diagnostic reports",
      },
    ],
  },
  {
    icon: Icons.stethoscope,
    title: "Medical Resource Matching & Remote Assessment",
    steps: [
      {
        name: "Precision Hospital Matching",
        description:
          "Match you with the most suitable hospitals and specialists based on your condition",
      },
      {
        name: "Expert Remote Video Assessment",
        description:
          "Video consultation with top specialists to evaluate treatment feasibility",
      },
      {
        name: "Written Treatment Recommendation Report",
        description:
          "Receive a detailed medical assessment and personalized treatment plan",
      },
    ],
  },
  {
    icon: Icons.fileSignature,
    title: "Service Agreement & Appointment Scheduling",
    steps: [
      {
        name: "Service Agreement Signing",
        description:
          "Formal contract outlining services, fees, and mutual responsibilities",
      },
      {
        name: "Priority Hospital Appointment",
        description:
          "Secure priority scheduling through our green channel access",
      },
    ],
  },
  {
    icon: Icons.briefcase,
    title: "Pre-departure Preparation",
    steps: [
      {
        name: "Visa Application Assistance",
        description: "Guidance and support for medical visa application process",
      },
      {
        name: "Travel Arrangements",
        description:
          "Flight booking, accommodation near hospital, and itinerary planning",
      },
    ],
  },
  {
    icon: Icons.mapPin,
    title: "Arrival in China & Hospital Admission",
    steps: [
      {
        name: "Airport Pickup Service",
        description:
          "Professional greeting and transportation from airport to accommodation",
      },
      {
        name: "Exclusive Hospital Admission Channel",
        description:
          "Priority check-in and dedicated admission process without waiting",
      },
    ],
  },
  {
    icon: Icons.heartPulse,
    title: "Examination & Treatment",
    steps: [
      {
        name: "Pre-treatment Examinations",
        description: "Comprehensive diagnostic tests and health assessments",
      },
      {
        name: "Treatment Implementation",
        description:
          "Execution of the personalized treatment plan by expert medical teams",
      },
      {
        name: "Personalized Support During Hospitalization",
        description:
          "Dedicated care coordinator, translation services, and daily assistance",
      },
    ],
  },
  {
    icon: Icons.clipboardCheck,
    title: "Discharge & Follow-up Management",
    steps: [
      {
        name: "Discharge & Return Journey",
        description:
          "Medical summary, medication guidance, and travel arrangements home",
      },
      {
        name: "Remote Follow-up",
        description:
          "Ongoing medical consultation, recovery monitoring, and local coordination",
      },
    ],
  },
];

export function ServiceProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-white rounded-2xl p-10 shadow-sm mb-12"
    >
      <Reveal y={20} className="text-center mb-12">
        <h2 id="process-heading" className="text-3xl font-bold mb-4 text-[#1A1A2E]">
          Our Service Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Seven comprehensive stages from initial inquiry to post-treatment
          follow-up, ensuring a seamless medical journey.
        </p>
      </Reveal>
      <div className="relative">
        {/* Desktop center line */}
        <div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B4D3E] via-[#2E7D32] to-[#1B4D3E] hidden md:block"
          aria-hidden="true"
          style={{ transform: "translateX(-50%)" }}
        />
        {/* Mobile left line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B4D3E] via-[#2E7D32] to-[#1B4D3E] md:hidden"
          aria-hidden="true"
        />
        <ol className="space-y-8 list-none" role="list">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            const reversed = i % 2 === 1; // even phases alternate to the right
            return (
              <Reveal key={phase.title} y={30} className="flex">
                <li
                  className={`relative flex flex-col md:flex-row${
                    reversed ? " md:flex-row-reverse" : ""
                  } items-start md:items-center gap-4 md:gap-8 w-full`}
                >
                  {/* Desktop node dot */}
                  <div
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#1B4D3E] border-4 border-white shadow-lg z-10 hidden md:block"
                    aria-hidden="true"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  {/* Mobile node dot */}
                  <div
                    className="absolute left-4 w-4 h-4 rounded-full bg-[#1B4D3E] border-4 border-white shadow-lg z-10 md:hidden"
                    aria-hidden="true"
                  />
                  {/* Phase label */}
                  <div
                    className={`md:w-5/12 pl-12 md:pl-0 ${
                      reversed ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] font-semibold text-sm mb-2${
                        reversed ? "" : " md:flex-row-reverse"
                      }`}
                    >
                      <span>Phase {i + 1}</span>
                    </div>
                  </div>
                  {/* Center icon node (desktop) */}
                  <div
                    className="hidden md:flex w-12 h-12 rounded-full bg-[#1B4D3E] text-white items-center justify-center shadow-lg flex-shrink-0 z-20"
                    aria-hidden="true"
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  {/* Article */}
                  <div
                    className={`md:w-5/12 pl-12 md:pl-0 ${
                      reversed ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <article className="bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-shadow text-left">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2 md:hidden">
                        <span className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7" />
                        </span>
                        <span>{phase.title}</span>
                      </h3>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 hidden md:block">
                        {phase.title}
                      </h3>
                      <ul className="space-y-3 list-none" role="list">
                        {phase.steps.map((step) => (
                          <li key={step.name} className="flex items-start gap-3">
                            <Icons.checkCircle className="text-[#1B4D3E] flex-shrink-0 mt-0.5 h-[18px] w-[18px]" />
                            <div>
                              <span className="font-semibold text-[#1A1A2E] text-sm">
                                {step.name}
                              </span>
                              <p className="text-gray-500 text-sm mt-0.5">
                                {step.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
