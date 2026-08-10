"use client";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

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

const leadersZh = [
  {
    name: "虞先濬",
    role: "院长",
    bio: "主任医师、二级教授\n复旦大学附属肿瘤医院院长\n2025年7月就任",
  },
  {
    name: "郭小毛",
    role: "临床技术委员会主任",
    bio: "原院长",
  },
  {
    name: "蒋国梁",
    role: "荣誉主任",
    bio: "医院荣誉主任",
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

const specialtyGroupsZh: SpecialtyGroup[] = [
  {
    title: "头颈及中枢神经肿瘤科",
    members: [
      {
        initial: "孔",
        name: "孔琳",
        title: "主任医师、博士生导师",
        bio: "院长助理、头颈及中枢神经肿瘤一科主任\n中国人体健康科技促进会质子重离子放疗专委会主任委员\n团队累计完成粒子放疗超4000例\n国际首创混合线束放疗初诊鼻咽癌，斩获第61届PTCOG\"戈伊丁奖\"",
      },
      {
        initial: "胡",
        name: "胡超苏",
        title: "主任医师、博士生导师",
        bio: "头颈及中枢神经肿瘤二科主任\n复旦大学鼻咽癌诊治中心主任\n团队完成千余例粒子放疗患者诊疗",
      },
    ],
    coreMembers: ["胡微煦 副主任医师", "胡集祎 主任医师"],
  },
  {
    title: "胸部肿瘤科",
    members: [
      {
        initial: "吴",
        name: "吴开良",
        title: "主任医师、博士生导师",
        bio: "院长助理、胸部肿瘤科主任\n兼任中国医学装备协会离子放射治疗分会副会长\n团队率先规模化运用质子重离子笔形束扫描技术治疗肺癌\n在国际上率先确立胸部肿瘤重离子放疗剂量分割方案",
      },
    ],
    coreMembers: ["茅静芳 主任医师、科室副主任", "陈剑 主任医师、硕士生导师", "高晶 副主任医师"],
  },
  {
    title: "腹盆腔/乳腺肿瘤科",
    members: [
      {
        initial: "章",
        name: "章青",
        title: "主任医师、研究生导师",
        bio: "腹盆腔/乳腺肿瘤科主任\n上海抗癌协会放疗专业委员会常委",
      },
    ],
    coreMembers: [
      "王征 主任医师、腹盆腔肿瘤科副主任",
      "管西寅 副主任医师",
      "蔡昕 副主任医师",
      "梅欣 副主任医师",
      "李萍 副主任医师",
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

const otherExpertsZh = [
  {
    name: "宋少莉",
    title: "主任医师、博士生导师",
    bio: "核医学科主任\n上海分子影像探针工程技术研究中心主任\n上海市领军人才\n为全院精准诊断、影像评估提供核心技术支撑",
  },
];

export function ExpertTeamSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const leaderItems = isZh ? leadersZh : leaders;
  const groups = isZh ? specialtyGroupsZh : specialtyGroups;
  const expertItems = isZh ? otherExpertsZh : otherExperts;
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {isZh ? "专家团队 实力护航" : "Expert Team · Quality Care"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isZh
              ? "医院与复旦大学附属肿瘤医院深度融合、资源共享，汇聚国内顶尖肿瘤放疗人才"
              : "Deeply integrated with Fudan University Shanghai Cancer Center with shared resources, gathering top domestic talent in oncology radiotherapy"}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leaderItems.map((leader) => (
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
          {groups.map((group) => (
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
                  {isZh ? "科室骨干" : "Department Core Members"}
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
            {isZh ? "其他核心专家" : "Other Core Experts"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertItems.map((expert) => (
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
