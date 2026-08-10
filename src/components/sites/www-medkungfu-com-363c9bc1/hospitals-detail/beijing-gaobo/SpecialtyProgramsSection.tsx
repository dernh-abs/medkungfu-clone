"use client";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

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

const programsZh: SpecialtyProgram[] = [
  {
    title: "黑色素瘤与肉瘤/泌尿肿瘤",
    description:
      "由国际黑色素瘤领域权威专家领衔，全国成立最早、规模最大、水平最高的诊疗中心。牵头制定CSCO诊疗指南，开创粘膜黑色素瘤国际分期标准。",
    icon: Icons.activity,
  },
  {
    title: "消化系统肿瘤",
    description:
      "北京大学肿瘤医院消化肿瘤内科主任领衔，专长于胃癌、结直肠癌、食管癌、胰腺癌等消化系统肿瘤的诊断与综合治疗。",
    icon: Icons.heart,
  },
  {
    title: "胸部肿瘤（肺癌）",
    description:
      "整合肺部肿瘤内科综合治疗优势与微创技术专长，覆盖各期肺癌、肺结节、肺良性肿瘤，提供全周期综合治疗。",
    icon: Icons.stethoscope,
  },
  {
    title: "血液肿瘤与细胞免疫治疗（CAR-T）",
    description:
      "构建覆盖诊断、移植、免疫治疗的全链条诊疗体系，CAR-T细胞治疗成果突出，研究成果多次入选ASH等国际顶级学术会议。",
    icon: Icons.users,
  },
  {
    title: "心血管支持治疗",
    description:
      "由北京大学第三医院心内科专家领衔，聚焦肿瘤患者群体，提供抗癌治疗前心脏功能评估及心血管并发症专业管理。",
    icon: Icons.heart,
  },
  {
    title: "脑科学",
    description:
      "已正式启动高博神经科学临床诊疗与研究中心，以实体肿瘤、淋巴瘤与脑科学为专科特色。",
    icon: Icons.brain,
  },
];

export function SpecialtyProgramsSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items = isZh ? programsZh : programs;
  return (
    <section id="specialties" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal y={20} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
            {isZh ? "优势治疗项目" : "Specialty Treatment Programs"}
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((program) => (
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
