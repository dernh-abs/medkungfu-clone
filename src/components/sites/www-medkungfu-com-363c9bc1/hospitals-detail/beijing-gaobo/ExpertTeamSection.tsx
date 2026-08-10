"use client";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

interface ExpertCard {
  name: string;
  role: string;
  subtitle: string;
  items: string[];
  x: number;
}

const experts: ExpertCard[] = [
  {
    name: "GUO Jun",
    role: "Chief Physician, PhD Supervisor",
    subtitle: "Director of Melanoma & Sarcoma Dept, Urologic Oncology Dept",
    items: [
      "Vice Chairman of International Melanoma Society (MWS)",
      "Chairman of ESMO Melanoma & Skin Tumors Branch",
      "Led the writing of CSCO guidelines for melanoma, renal cancer, urothelial carcinoma",
    ],
    x: -30,
  },
  {
    name: "SHEN Lin",
    role: "Chief Scientist, Discipline Leader",
    subtitle: "Digestive Oncology",
    items: [
      "Director of Digestive Oncology at Peking University Cancer Hospital",
      "Discipline leader of digestive oncology at Beijing Gaobo Hospital",
    ],
    x: 30,
  },
  {
    name: "PAN Jing",
    role: "Director of Hematologic Tumor Immunotherapy",
    subtitle: "CAR-T Cell Therapy Expert",
    items: [
      'Donor-derived CD7 CAR-T research published in "Blood"',
      "Successfully performed CAR-T therapy for patients with multi-system rare diseases",
    ],
    x: -30,
  },
  {
    name: "QIN Haifeng",
    role: "Director of Thoracic Oncology",
    subtitle: "Lung Cancer Comprehensive Treatment Expert",
    items: [
      "Providing international medical services for patients from Kazakhstan, Middle East, Russia and other countries",
    ],
    x: 30,
  },
];

const expertsZh: ExpertCard[] = [
  {
    name: "郭军",
    role: "主任医师，博士生导师",
    subtitle: "黑色素瘤与肉瘤内科主任、泌尿肿瘤内科主任",
    items: [
      "国际黑色素瘤协会（MWS）副主席",
      "欧洲肿瘤内科学会（ESMO）黑色素瘤与皮肤肿瘤分会主席",
      "牵头编写CSCO黑色素瘤、肾癌、尿路上皮癌诊疗指南",
    ],
    x: -30,
  },
  {
    name: "沈琳",
    role: "首席科学家、学科带头人",
    subtitle: "消化肿瘤科",
    items: [
      "北京大学肿瘤医院消化肿瘤内科主任",
      "北京高博医院消化肿瘤学科带头人",
    ],
    x: 30,
  },
  {
    name: "潘静",
    role: "血液肿瘤免疫治疗科主任",
    subtitle: "CAR-T细胞治疗专家",
    items: [
      "供者来源CD7 CAR-T研究成果发表于《Blood》",
      "成功为多系统受累罕见病患者实施CAR-T治疗",
    ],
    x: -30,
  },
  {
    name: "秦海峰",
    role: "胸部肿瘤科主任",
    subtitle: "肺癌综合治疗专家",
    items: ["为哈萨克斯坦、中东、俄罗斯等国患者提供国际医疗服务"],
    x: 30,
  },
];

export function ExpertTeamSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items = isZh ? expertsZh : experts;
  return (
    <section id="experts" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="container-custom">
        <Reveal y={20} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
            {isZh ? "各项目专家团队" : "Expert Team by Specialty"}
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((expert) => (
            <Reveal
              key={expert.name}
              x={expert.x}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                  {expert.name}
                </h3>
                <p className="text-[#1B4D3E] font-medium mb-1">
                  {expert.role}
                </p>
                <p className="text-gray-500 text-sm">{expert.subtitle}</p>
              </div>
              <ul className="space-y-3">
                {expert.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
