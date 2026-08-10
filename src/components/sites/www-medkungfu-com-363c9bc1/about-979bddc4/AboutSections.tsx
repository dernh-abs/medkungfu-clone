// About MedKungFu — Who We Are / Our Commitment / Mission & Core Services /
// Our Values / Our Expert Team. Matches /about.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const WHO_WE_ARE =
  "MedKungFu China is a specialized international medical placement service dedicated to connecting global patients with China's world-class healthcare system. We serve as a reliable bridge between international patients and China's top-tier medical institutions.";

const OUR_COMMITMENT =
  "From visa assistance to post-treatment rehabilitation care, we handle every detail of your medical journey—allowing you to focus solely on what matters most: your recovery. We understand that seeking medical care abroad can be filled with uncertainty and stress. That's precisely why we've built a seamless, end-to-end service covering every aspect of your medical journey. From initial consultation to post-treatment remote follow-up, our multilingual team ensures you not only receive quality medical solutions but also experience empathetic, efficient, and culturally sensitive support throughout your entire journey.";

const CORE_SERVICES = [
  "International Precision Referral: Matching you with the most suitable hospitals and specialists",
  "Telemedicine Second Opinion: Accessing assessments from China's top doctors without leaving home",
  "One-stop Medical Accompaniment: Dedicated multilingual support from arrival to discharge",
  "Full-cycle Health Management: Continuous care covering pre-treatment, during treatment, and post-treatment",
];

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: Icons.shield,
    title: "Transparency",
    description: "Clear pricing and honest communication.",
  },
  {
    icon: Icons.award,
    title: "Professionalism",
    description: "Expert medical teams with global standards.",
  },
  {
    icon: Icons.heart,
    title: "Compassion",
    description: "Treating every patient with warmth and care.",
  },
  {
    icon: Icons.globe,
    title: "Responsibility",
    description: "Bridging borders for better health outcomes.",
  },
];

const TEAM = [
  { title: "Medical Advisors", description: "Experts from top-tier Chinese hospitals" },
  { title: "Operations Team", description: "Rich experience in cross-border healthcare" },
  { title: "Multilingual Support", description: "Professional medical translators" },
];

function SectionHeading({ id, text }: { id: string; text: string }) {
  return (
    <h2
      id={id}
      className="text-xl font-semibold text-[#1B4D3E] mb-4 flex items-center justify-center"
    >
      <span className="w-8 h-1 bg-[#1B4D3E] rounded mr-3" aria-hidden="true" />
      {text}
      <span className="w-8 h-1 bg-[#1B4D3E] rounded ml-3" aria-hidden="true" />
    </h2>
  );
}

export function AboutIntro() {
  return (
    <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
      <section aria-labelledby="who-we-are-heading">
        <SectionHeading id="who-we-are-heading" text="Who We Are" />
        <p className="text-gray-600 leading-relaxed text-lg">{WHO_WE_ARE}</p>
      </section>
      <section
        aria-labelledby="our-commitment-heading"
        className="border-t border-gray-100 pt-8 mt-8"
      >
        <SectionHeading id="our-commitment-heading" text="Our Commitment" />
        <p className="text-gray-600 leading-relaxed text-lg">{OUR_COMMITMENT}</p>
      </section>
    </article>
  );
}

export function MissionSection() {
  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
    >
      <h2 id="mission-vision-heading" className="sr-only">
        Mission and Core Services
      </h2>
      <article className="bg-white p-10 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed">
          To share China&apos;s cutting-edge medical achievements with the world,
          making quality healthcare accessible across borders.
        </p>
      </article>
      <article className="bg-[#1B4D3E] p-10 rounded-2xl shadow-sm text-white">
        <h3 className="text-2xl font-bold mb-4">Core Services</h3>
        <ul className="space-y-3 list-none" role="list">
          {CORE_SERVICES.map((service) => (
            <li key={service} className="flex items-center" role="listitem">
              <div
                className="w-2 h-2 bg-[#7CB342] rounded-full mr-3"
                aria-hidden="true"
              />
              {service}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="mb-20">
      <h2
        id="values-heading"
        className="text-3xl font-bold text-center mb-12 text-[#1A1A2E]"
      >
        Our Values
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none" role="list">
        {VALUES.map((value) => {
          const Icon = value.icon;
          return (
            <Reveal key={value.title} y={20} className="flex">
              <li className="bg-white p-8 rounded-xl shadow-sm text-center card-hover w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6"
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function TeamSection() {
  return (
    <section
      aria-labelledby="team-heading"
      className="bg-white rounded-2xl p-10 shadow-sm"
    >
      <h2 id="team-heading" className="text-2xl font-bold text-center mb-10">
        Our Expert Team
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {TEAM.map((member) => (
          <div key={member.title}>
            <dt className="font-bold text-[#1A1A2E] mb-2">{member.title}</dt>
            <dd className="text-sm text-gray-500">{member.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
