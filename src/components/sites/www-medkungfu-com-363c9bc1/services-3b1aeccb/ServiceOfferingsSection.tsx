// "Service Offerings" — 6 white cards in a 3-col grid. Matches /services.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
}

const OFFERINGS: Offering[] = [
  {
    icon: Icons.video,
    title: "Expert Video Consultation",
    description: "Connect with top specialists remotely before your trip.",
  },
  {
    icon: Icons.calendar,
    title: "Full-process Butler",
    description: "End-to-end coordination from appointment to discharge.",
  },
  {
    icon: Icons.plane,
    title: "Visa & Travel",
    description: "Assistance with medical visas and flight arrangements.",
  },
  {
    icon: Icons.messageSquare,
    title: "Translation & Escort",
    description: "Professional medical translators accompanying you.",
  },
  {
    icon: Icons.home,
    title: "Accommodation",
    description: "Comfortable stays near partner hospitals.",
  },
  {
    icon: Icons.fileText,
    title: "Rehabilitation Follow-up",
    description: "Continuous care after you return home.",
  },
];

export function ServiceOfferingsSection() {
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
                  {offering.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {offering.description}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
