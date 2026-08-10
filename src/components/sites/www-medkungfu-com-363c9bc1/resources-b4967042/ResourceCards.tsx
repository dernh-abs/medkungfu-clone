// "Resource Center" — 3 resource card groups (guides / tools / city guides)
// with download rows. Matches /resources.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface ResourceGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const GROUPS: ResourceGroup[] = [
  {
    icon: Icons.bookOpen,
    title: "Medical Guides",
    items: [
      "Heavy Ion Therapy: A New Weapon Against Tumors",
      "CAR-T Treatment: Hope for Blood Cancer Patients",
      "Stem Cell Therapy: Scientific Boundaries and Compliance",
    ],
  },
  {
    icon: Icons.fileText,
    title: "Practical Tools",
    items: [
      "Medical Record Preparation Checklist (Multi-language)",
      "China Medical Visa Application Guide",
      "Post-surgery Rehabilitation Precautions",
    ],
  },
  {
    icon: Icons.map,
    title: "City Guides",
    items: [
      "Shanghai: Hospital Transport & Accommodation",
      "Beijing: International Patient Services",
      "Guangzhou: TCM Integration Centers",
    ],
  },
];

export function ResourceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {GROUPS.map((group) => {
        const Icon = group.icon;
        return (
          <Reveal key={group.title} className="flex">
            <div className="bg-white rounded-xl p-8 shadow-sm card-hover w-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-[#1A1A2E]">{group.title}</h2>
              </div>
              <ul className="space-y-4 list-none" role="list">
                {group.items.map((item) => (
                  <li key={item} className="group cursor-pointer" role="listitem">
                    <div className="flex items-start">
                      <Icons.download className="mt-1 mr-3 text-gray-400 group-hover:text-[#1B4D3E] transition-colors h-[18px] w-[18px]" />
                      <span className="text-gray-600 group-hover:text-[#1B4D3E] transition-colors text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
