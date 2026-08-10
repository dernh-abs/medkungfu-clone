import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

interface SpecialtyProgram {
  title: string;
  description: string;
  icon: LucideIcon;
}

const programs: SpecialtyProgram[] = [
  {
    title: "Melanoma & Sarcoma / Urologic Oncology",
    description:
      "Led by authoritative experts in international melanoma field, the earliest established, largest scale, and highest level treatment center nationwide. Led the formulation of CSCO diagnosis and treatment guidelines, pioneered international staging standards for mucosal melanoma.",
    icon: Icons.activity,
  },
  {
    title: "Digestive System Tumors",
    description:
      "Led by the director of Digestive Oncology at Peking University Cancer Hospital, specializing in diagnosis and comprehensive treatment of gastric cancer, colorectal cancer, esophageal cancer, pancreatic cancer and other digestive system tumors.",
    icon: Icons.heart,
  },
  {
    title: "Thoracic Oncology (Lung Cancer)",
    description:
      "Integrating advantages of pulmonary tumor medical comprehensive treatment with minimally invasive technology expertise, covering all stages of lung cancer, pulmonary nodules, benign lung tumors, providing full-cycle comprehensive treatment.",
    icon: Icons.stethoscope,
  },
  {
    title: "Hematologic Tumors & Cellular Immunotherapy (CAR-T)",
    description:
      "Building a full-chain diagnosis and treatment system covering diagnosis, transplantation, and immunotherapy, with outstanding achievements in CAR-T cell therapy, research results selected multiple times for top international academic conferences such as ASH.",
    icon: Icons.users,
  },
  {
    title: "Cardiovascular Supportive Care",
    description:
      "Led by cardiology experts from Peking University Third Hospital, focusing on tumor patient population, providing pre-anticancer treatment cardiac function assessment and professional management of cardiovascular complications.",
    icon: Icons.heart,
  },
  {
    title: "Neuroscience",
    description:
      "Officially launched Gaobo Neuroscience Clinical Diagnosis and Research Center, specializing in solid tumors, lymphoma and neuroscience.",
    icon: Icons.brain,
  },
];

export function SpecialtyProgramsSection() {
  return (
    <section id="specialties" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal y={20} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
            Specialty Treatment Programs
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Reveal
              key={program.title}
              y={30}
              className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                <program.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
