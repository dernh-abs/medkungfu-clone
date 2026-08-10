// "Why Choose China Medical?" — 6 core-advantage cards + dark green
// distinctive-features grid + CTA. Matches /why-china.
import Link from "next/link";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADVANTAGES: Feature[] = [
  {
    icon: Icons.award,
    title: "World-Class Medical Technology",
    description:
      "China leads globally in advanced treatments including Heavy Ion/Proton therapy with 54 specialized centers, CAR-T cell therapy with 40%+ of global clinical trials, and 76 new drugs approved in 2025 ranking #1 worldwide.",
  },
  {
    icon: Icons.clock,
    title: "Exceptional Efficiency",
    description:
      "No long waiting times. Joint replacement surgery can be completed in about 1 month, compared to 6-12 months in many Western countries.",
  },
  {
    icon: Icons.heartPulse,
    title: "Comprehensive Care System",
    description:
      "The world's only complete Integrative Medicine system combining modern technology with traditional Chinese medicine wisdom for holistic treatment.",
  },
  {
    icon: Icons.microscope,
    title: "Cutting-Edge Innovation",
    description:
      "Leading in Stem Cell therapy with 100+ registered institutions and Interventional Therapy at global leadership level.",
  },
  {
    icon: Icons.globe,
    title: "International Standards",
    description:
      "Dozens of international medical service hospitals with JCI accreditation and standardized processes meeting global healthcare standards.",
  },
  {
    icon: Icons.plane,
    title: "Medical Tourism Friendly",
    description:
      "Hainan offers visa-free entry for medical reasons with 30-day stay permitted, making access convenient for international patients.",
  },
];

const DISTINCTIVE: Feature[] = [
  {
    icon: Icons.stethoscope,
    title: "Expert Medical Teams",
    description:
      "Highly skilled doctors trained in both domestic and international institutions",
  },
  {
    icon: Icons.building,
    title: "Modern Facilities",
    description:
      "State-of-the-art hospitals equipped with the latest medical technology",
  },
  {
    icon: Icons.leaf,
    title: "Holistic Approach",
    description:
      "Integration of TCM and Western medicine for comprehensive treatment",
  },
  {
    icon: Icons.zap,
    title: "Rapid Innovation",
    description:
      "Fast adoption of breakthrough treatments and medical technologies",
  },
];

export function CoreAdvantagesSection() {
  return (
    <section aria-labelledby="core-advantages-heading" className="mb-16">
      <Reveal className="text-3xl font-bold text-center mb-12 text-[#1A1A2E]">
        <h2 id="core-advantages-heading">Core Advantages</h2>
      </Reveal>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none" role="list">
        {ADVANTAGES.map((feature) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} className="flex">
              <li className="bg-white rounded-2xl shadow-sm p-8 card-hover w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6"
                  aria-hidden="true"
                >
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A2E]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function DistinctiveFeaturesSection() {
  return (
    <section
      aria-labelledby="distinctive-features-heading"
      className="bg-[#1B4D3E] rounded-2xl p-10 md:p-16 mb-16"
    >
      <Reveal className="text-3xl font-bold text-center mb-12 text-white">
        <h2 id="distinctive-features-heading">
          The Distinctive Features of Chinese Medical Care
        </h2>
      </Reveal>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none" role="list">
        {DISTINCTIVE.map((feature) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} className="flex">
              <li className="text-center w-full">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white mb-5"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function WhyChinaCtaSection() {
  return (
    <Reveal className="text-center bg-white rounded-2xl shadow-sm p-10">
      <section aria-labelledby="cta-heading">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-[#1A1A2E] mb-4"
        >
          Ready to Experience World-Class Healthcare?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us guide you through China&apos;s exceptional medical system with
          personalized concierge service tailored to your unique healthcare
          needs.
        </p>
        <nav aria-label="Contact CTA">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#143D30] transition-all duration-300"
          >
            Start Your Medical Journey
          </Link>
        </nav>
      </section>
    </Reveal>
  );
}
