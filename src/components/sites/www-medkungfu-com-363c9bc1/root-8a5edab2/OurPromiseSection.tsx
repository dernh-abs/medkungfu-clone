// "Our Promise" section matching MedKungFu's homepage.
// Light section (bg #F5F7FA) with 4 value cards in a responsive grid.
// Each card reveals with a scale(0.9) entrance and lifts on hover via .card-hover.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface PromiseValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: PromiseValue[] = [
  {
    icon: Icons.shield,
    title: "Direct Hospital Access",
    description: "Direct hospital access without intermediaries",
  },
  {
    icon: Icons.zap,
    title: "Rapid Response",
    description: "Efficient scheduling and rapid response",
  },
  {
    icon: Icons.userCheck,
    title: "Fully Customized",
    description: "Personalized service plans for every patient",
  },
  {
    icon: Icons.fileText,
    title: "Transparent & Secure",
    description: "Clear pricing with guaranteed refunds",
  },
];

export function OurPromiseSection() {
  return (
    <section
      aria-labelledby="core-values-heading"
      className="section-padding bg-[#F5F7FA]"
    >
      <div className="container-custom">
        <h2
          id="core-values-heading"
          className="text-3xl font-bold text-center mb-12 text-[#1A1A2E] font-montserrat"
        >
          Our Promise
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} scale={0.9} className="flex">
                <li className="bg-white p-8 rounded-xl shadow-sm card-hover text-center w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#1A1A2E] font-montserrat">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
