import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

interface InternationalService {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: InternationalService[] = [
  {
    title: "Customized Multidisciplinary Consultation (MDT)",
    description:
      "Gathering renowned domestic and foreign expert resources to provide personalized diagnosis and treatment plans for patients.",
    icon: Icons.users,
  },
  {
    title: "Full-cycle Exclusive Service",
    description:
      "Full-process accompaniment from visa assistance, airport pickup, hospitalization to discharge follow-up.",
    icon: Icons.globe,
  },
  {
    title: "Multi-language Translation Service",
    description:
      "Providing English, Japanese and other multi-language translation services to ensure barrier-free communication.",
    icon: Icons.checkCircle,
  },
  {
    title: "Comfortable Hospitalization Environment",
    description:
      "Wards equipped with central air conditioning, shower rooms, TV, refrigerator, microwave and other living facilities.",
    icon: Icons.building,
  },
];

export function InternationalServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal y={20} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
            International Patient Services
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Reveal
              key={service.title}
              scale={0.95}
              className="bg-[#F5F7FA] rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
