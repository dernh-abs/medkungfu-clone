import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const leaders = [
  {
    name: "Yu Xianjun",
    role: "President",
    bio: "Chief Physician, Professor II\nPresident of Fudan University Shanghai Cancer Center\nAppointed July 2025",
  },
  {
    name: "Guo Xiaomao",
    role: "Director of Clinical Technology Committee",
    bio: "Former President",
  },
  {
    name: "Jiang Guoliang",
    role: "Honorary Director",
    bio: "Hospital Honorary Director",
  },
];

interface SpecialtyMember {
  initial: string;
  name: string;
  title: string;
  bio: string;
}

interface SpecialtyGroup {
  title: string;
  members: SpecialtyMember[];
  coreMembers: string[];
}

const specialtyGroups: SpecialtyGroup[] = [
  {
    title: "Head & Neck / CNS Oncology",
    members: [
      {
        initial: "K",
        name: "Kong Lin",
        title: "Chief Physician, PhD Supervisor",
        bio: "Assistant to President, Director of Head & Neck Oncology Dept I\nChairman of Proton Heavy Ion Radiotherapy Committee\nTeam completed over 4,000 particle therapy cases\nInternational pioneer in mixed beam radiotherapy for nasopharyngeal cancer, won 61st PTCOG \"Goitein Award\"",
      },
      {
        initial: "H",
        name: "Hu Chaosu",
        title: "Chief Physician, PhD Supervisor",
        bio: "Director of Head & Neck Oncology Dept II\nDirector of Fudan Nasopharyngeal Cancer Center\nTeam treated over 1,000 particle therapy patients",
      },
    ],
    coreMembers: [
      "Hu Weixu, Associate Chief Physician",
      "Hu Jiyi, Chief Physician",
    ],
  },
  {
    title: "Thoracic Oncology",
    members: [
      {
        initial: "W",
        name: "Wu Kailiang",
        title: "Chief Physician, PhD Supervisor",
        bio: "Assistant to President, Director of Thoracic Oncology\nVice Chairman of Ion Radiation Therapy Branch\nTeam pioneered large-scale pencil beam scanning for lung cancer\nInternationally established dose fractionation protocols for thoracic heavy ion therapy",
      },
    ],
    coreMembers: [
      "Mao Jingfang, Chief Physician, Deputy Director",
      "Chen Jian, Chief Physician, Master Supervisor",
      "Gao Jing, Associate Chief Physician",
    ],
  },
  {
    title: "Abdominal-Pelvic / Breast Oncology",
    members: [
      {
        initial: "Z",
        name: "Zhang Qing",
        title: "Chief Physician, Graduate Supervisor",
        bio: "Director of Abdominal-Pelvic/Breast Oncology\nStanding Committee Member of Shanghai Anti-Cancer Association Radiotherapy Committee",
      },
    ],
    coreMembers: [
      "Wang Zheng, Chief Physician, Deputy Director",
      "Guan Xiyin, Associate Chief Physician",
      "Cai Xin, Associate Chief Physician",
      "Mei Xin, Associate Chief Physician",
      "Li Ping, Associate Chief Physician",
    ],
  },
];

const otherExperts = [
  {
    name: "Song Shaoli",
    title: "Chief Physician, PhD Supervisor",
    bio: "Director of Nuclear Medicine\nDirector of Shanghai Molecular Imaging Probe Engineering Center\nShanghai Leading Talent\nProvides core technical support for precision diagnosis and imaging evaluation",
  },
];

export function ExpertTeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Expert Team · Quality Care
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Deeply integrated with Fudan University Shanghai Cancer Center with
            shared resources, gathering top domestic talent in oncology
            radiotherapy
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader) => (
            <Reveal
              key={leader.name}
              y={20}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
            >
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icons.users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                {leader.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {leader.bio}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-12">
          {specialtyGroups.map((group) => (
            <Reveal
              key={group.title}
              y={20}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6 pb-4 border-b border-gray-200">
                {group.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {group.members.map((member) => (
                  <div key={member.name} className="bg-blue-50 rounded-xl p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div
                        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white shadow-sm"
                        aria-hidden="true"
                      >
                        {member.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-700 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-600">{member.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-3">
                  Department Core Members
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.coreMembers.map((member) => (
                    <div
                      key={member}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Icons.checkCircle className="h-4 w-4 text-blue-600" />
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">
            Other Core Experts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherExperts.map((expert) => (
              <Reveal
                key={expert.name}
                y={20}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6"
              >
                <h4 className="font-bold text-indigo-600 mb-2">
                  {expert.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{expert.title}</p>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {expert.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
