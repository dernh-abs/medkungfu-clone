// Services section (white) matching MedKungFu's homepage.
// "How MedKungfu Helps You" heading, 3 service cards with icon tiles,
// and a "View All Services" call-to-action. Server component.
import Link from "next/link";

import { type LucideIcon } from "lucide-react";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Service {
  icon: LucideIcon;
  bg: string;
  color: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Icons.building,
    bg: "rgba(27,77,62,0.082)",
    color: "#1B4D3E",
    title: "Hospital Referral",
    description:
      "Direct access to 50+ top-tier hospitals across China. We match you with the best medical facilities for your specific needs.",
  },
  {
    icon: Icons.languages,
    bg: "rgba(46,125,90,0.082)",
    color: "#2E7D5A",
    title: "Medical Translation",
    description:
      "Professional medical interpreters fluent in English and Chinese, ensuring clear communication throughout your healthcare journey.",
  },
  {
    icon: Icons.users,
    bg: "rgba(124,179,66,0.082)",
    color: "#7CB342",
    title: "In-Person Escort",
    description:
      "Dedicated healthcare concierge accompanying you to appointments, handling logistics, and providing personalized support.",
  },
];

export function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="py-20 bg-white">
      <div className="container-custom px-4">
        <Reveal y={20}>
          <div className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat"
            >
              How MedKungfu Helps You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive healthcare concierge services designed for expats in
              China
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={svc.title} y={12} delay={i * 0}>
                <li className="group relative">
                  <Link
                    href="/services"
                    aria-label={`Learn more about ${svc.title}`}
                    className="block h-full rounded-2xl p-8 border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4D3E]/30 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7CB342]/25"
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: svc.bg, color: svc.color }}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 font-montserrat">
                      {svc.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {svc.description}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#7CB342] px-4 py-2 text-[#1B4D3E] font-medium transition-all duration-300 group-hover:gap-3 group-hover:bg-[#7CB342]/10">
                      Learn More
                      <Icons.arrowRight className="h-[18px] w-[18px]" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
        <Reveal y={20}>
          <nav className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#143D30] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <Icons.arrowRight className="h-5 w-5" />
            </Link>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
