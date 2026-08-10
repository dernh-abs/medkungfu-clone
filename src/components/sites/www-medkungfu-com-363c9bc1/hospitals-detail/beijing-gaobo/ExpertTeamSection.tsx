import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
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

export function ExpertTeamSection() {
  return (
    <section id="experts" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="container-custom">
        <Reveal y={20} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E]">
            Expert Team by Specialty
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {experts.map((expert) => (
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
