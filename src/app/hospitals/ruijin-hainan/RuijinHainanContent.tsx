// Ruijin Hospital Hainan Branch detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const overviewStats = [
  { value: "2022", label: "Official Operation" },
  { value: "500 beds", label: "Phase I Approved Beds" },
  { value: "219项", label: "Licensed Drugs & Devices" },
  { value: "151项", label: "First in China" },
  { value: "33,000+", label: "Patients Served" },
];

const overviewStatsZh = [
  { value: "2022年", label: "正式运行" },
  { value: "500张", label: "一期核定床位" },
  { value: "219项", label: "落地特许药械" },
  { value: "151项", label: "全国首落" },
  { value: "33,000+", label: "服务人次" },
];

const policyCards = [
  {
    title: "Licensed Medical Care",
    description: "Internationally newly approved drugs and devices can be clinically applied here first",
    icon: Icons.shield,
  },
  {
    title: "Licensed Research",
    description: "Conduct frontier medical research and clinical trials",
    icon: Icons.activity,
  },
  {
    title: "Licensed Operation",
    description: "Introduce international advanced medical management models",
    icon: Icons.trendingUp,
  },
  {
    title: "Licensed International Medical Exchange",
    description: "Promote international medical cooperation and exchange",
    icon: Icons.globe,
  },
];

const policyCardsZh = [
  {
    title: "特许医疗",
    description: "国际最新获批的药械可在此率先临床应用",
    icon: Icons.shield,
  },
  {
    title: "特许研究",
    description: "开展前沿医学研究和临床试验",
    icon: Icons.activity,
  },
  {
    title: "特许经营",
    description: "引入国际先进医疗管理模式",
    icon: Icons.trendingUp,
  },
  {
    title: "特许国际医疗交流",
    description: "促进国际医疗合作与交流",
    icon: Icons.globe,
  },
];

interface ClusterCard {
  badge: string;
  title: string;
  intro: string;
  items: string[];
}

const clusterCards: ClusterCard[] = [
  {
    badge: "International Innovative Drug & Device Channel",
    title: "Oncology & Hematology Cluster",
    intro:
      "Through Boao licensed drug/device policy, patients can access the latest global anti-cancer drugs and cutting-edge equipment",
    items: [
      "Unique advantages in surgical and conversion treatment of pancreatic, hepatobiliary and retroperitoneal tumors",
      "Can perform robot-assisted high-difficulty minimally invasive surgery",
      "Hematology department has rich experience in lymphoma, multiple myeloma, acute/chronic leukemia diagnosis and treatment",
      "Can conduct frontier technologies such as CAR-T cell immunotherapy",
    ],
  },
  {
    badge: "Leading in Cardiovascular Intervention",
    title: "Cardiovascular & Metabolic Disease Cluster",
    intro:
      "Featured in cardiovascular diseases such as hypertension, coronary heart disease, arrhythmia",
    items: [
      "Coronary intervention diagnosis and treatment technology is leading in complex coronary lesions",
      "Radiofrequency ablation, cardiac pacemaker and leadless pacemaker implantation",
      "Renal artery denervation ablation",
      "Neurology has significant advantages in early diagnosis and treatment of cerebrovascular disease, epilepsy, neurodegenerative diseases and Parkinson's disease",
    ],
  },
  {
    badge: "Comprehensive Neurological Disease Diagnosis & Treatment",
    title: "Neuroscience Cluster",
    intro: "Relying on Shanghai Ruijin Hospital's strong neurology and neurosurgery resources",
    items: [
      "Covers cerebrovascular disease, nervous system infectious diseases",
      "Neurodegenerative diseases, epilepsy, Parkinson's disease and movement disorders",
      "Comprehensive diagnosis and treatment of neurological diseases such as sleep disorders",
      "Minimally invasive interventional treatment of various cerebrovascular diseases (intracranial aneurysm, carotid stenosis, arteriovenous malformation, etc.)",
    ],
  },
  {
    badge: "Strong Alliance of Shanghai-Hainan Experts",
    title: "General Internal Medicine & Featured Specialties",
    intro:
      "Has expert teams from Shanghai Ruijin Hospital and Hainan Provincial People's Hospital",
    items: [
      "Gastroenterology, Nephrology, Respiratory Medicine",
      "TCM Department, Ophthalmology, Orthopedics, Gynecology",
      "Dermatology, ENT, Stomatology",
      "Tumor intervention, peripheral vascular intervention and comprehensive intervention",
    ],
  },
];

const clusterCardsZh: ClusterCard[] = [
  {
    badge: "国际创新药械通道",
    title: "肿瘤及血液学科群",
    intro: "借助乐城特许药械政策，患者可用上全球最新抗癌药物和尖端设备",
    items: [
      "胰腺、肝胆及后腹膜肿瘤的外科治疗与转化治疗形成独特优势",
      "可开展机器人辅助下的高难度微创手术",
      "血液内科在淋巴瘤、多发性骨髓瘤、急慢性白血病等诊疗领域经验丰富",
      "可开展CAR-T细胞免疫治疗等前沿技术",
    ],
  },
  {
    badge: "心血管介入领先",
    title: "心脑血管和代谢学科群",
    intro: "以高血压、冠心病、心律失常等心血管疾病为特色",
    items: [
      "冠脉介入诊疗技术在复杂冠脉病变方面处于领先水平",
      "射频消融术、心脏起搏器及无导线起搏器植入术",
      "肾动脉去交感神经消融术",
      "神经内科在脑血管病、癫痫、神经变性疾病及帕金森病早期诊断和治疗方面优势显著",
    ],
  },
  {
    badge: "全面神经疾病诊治",
    title: "神经脑科学学科群",
    intro: "依托上海瑞金医院强大的神经内外科资源",
    items: [
      "覆盖脑血管病、神经系统感染性疾病",
      "神经变性疾病、癫痫、帕金森病及运动障碍疾病",
      "睡眠障碍等神经疾病的全面诊治",
      "各类脑血管病的微创介入治疗（颅内动脉瘤、颈动脉狭窄、动静脉畸形等）",
    ],
  },
  {
    badge: "沪琼专家强强联合",
    title: "综合内科与特色专科",
    intro: "拥有上海瑞金医院及海南省人民医院专家团队",
    items: [
      "消化内科、肾内科、呼吸内科",
      "中医科、眼科、骨科、妇科",
      "皮肤科、耳鼻喉科、口腔科",
      "肿瘤介入、外周血管介入及综合介入",
    ],
  },
];

interface Expert {
  name: string;
  role: string;
  bio: string;
}

interface ExpertGroup {
  title: string;
  experts: Expert[];
}

const expertGroups: ExpertGroup[] = [
  {
    title: "Oncology & Hematology Cluster",
    experts: [
      {
        name: "Jin Jiabin",
        role: "Chief Physician",
        bio: "Surgical and conversion treatment of various pancreatic, hepatobiliary and retroperitoneal tumors",
      },
      {
        name: "Wang Yanliang",
        role: "Chief Physician",
        bio: "Minimally invasive treatment of liver, gallbladder, pancreas, spleen, stomach, colorectal tumors",
      },
      {
        name: "Zhao Juping",
        role: "Associate Chief Physician",
        bio: "Urological tumors (kidney cancer, adrenal minimally invasive treatment)",
      },
      {
        name: "You Jianhua",
        role: "Associate Chief Physician, Director of Hematology",
        bio: `Nutritional anemia, immune thrombocytopenic purpura
Lymphoma, multiple myeloma, acute/chronic leukemia diagnosis and treatment`,
      },
      {
        name: "Shi Wenbo",
        role: "Chief Physician, Medical Oncology",
        bio: "Chemotherapy, targeted therapy, immunotherapy for solid tumors such as breast cancer, lung cancer, thymoma, esophageal cancer",
      },
      {
        name: "Han Liang",
        role: "Attending Physician, Breast Surgery",
        bio: "Comprehensive treatment of breast cancer including surgery, chemotherapy, endocrine therapy",
      },
    ],
  },
  {
    title: "Cardiovascular & Metabolic Disease Cluster",
    experts: [
      {
        name: "Wu Liqun",
        role: "Chief Physician, Director of Cardiology",
        bio: "Arrhythmia, cardiac pacemaker implantation and cardiovascular interventional treatment",
      },
      {
        name: "Qi Shuying",
        role: "Chief Physician, Cardiology",
        bio: `Interventional diagnosis and treatment of complex coronary lesions, radiofrequency ablation
Cardiac pacemaker implantation, renal artery stent implantation
Renal artery denervation ablation, etc.`,
      },
      {
        name: "Kang Wenyan",
        role: "Chief Physician, Neurology",
        bio: `Parkinson's disease and movement disorders
Diagnosis and treatment of cerebrovascular disease and sleep disorders`,
      },
    ],
  },
  {
    title: "Neuroscience Cluster",
    experts: [
      {
        name: "Huang Peijian",
        role: "Associate Chief Physician",
        bio: `Cerebrovascular disease, nervous system infectious diseases
Neurodegenerative diseases, epilepsy, etc.`,
      },
      {
        name: "Ni Hongyang",
        role: "Attending Physician, Neurosurgery",
        bio: `Minimally invasive interventional treatment of various cerebrovascular diseases
Intracranial aneurysm, carotid stenosis, arteriovenous malformation, etc.`,
      },
    ],
  },
  {
    title: "General Departments",
    experts: [
      {
        name: "Sui Liang",
        role: "Associate Chief Physician",
        bio: "Focus on emergency biliary tract diseases, ERCP surgery",
      },
      {
        name: "Zhao Liangchao",
        role: "Associate Chief Physician",
        bio: "Surgical treatment of digestive system tumors, minimally invasive surgery of liver, gallbladder and pancreas",
      },
      {
        name: "Wu Ning",
        role: "Chief Physician",
        bio: "Tumor intervention, peripheral vascular intervention and comprehensive intervention",
      },
    ],
  },
];

const expertGroupsZh: ExpertGroup[] = [
  {
    title: "肿瘤及血液学科群",
    experts: [
      {
        name: "金佳斌",
        role: "主任医师",
        bio: "各类胰腺、肝胆肿瘤及后腹膜肿瘤的外科治疗与转化治疗",
      },
      {
        name: "王艳良",
        role: "主任医师",
        bio: "肝、胆、胰、脾、胃、结直肠肿瘤的微创治疗",
      },
      {
        name: "赵菊平",
        role: "副主任医师",
        bio: "泌尿系统肿瘤（肾癌、肾上腺微创治疗）",
      },
      {
        name: "游建华",
        role: "副主任医师、血液内科主任",
        bio: "营养性贫血、免疫性血小板减少性紫癜\n淋巴瘤、多发性骨髓瘤、急慢性白血病等的诊疗",
      },
      {
        name: "石文波",
        role: "主任医师、肿瘤内科",
        bio: "乳腺癌、肺癌、胸腺瘤、食管癌等实体肿瘤的化学治疗、靶向治疗、免疫治疗等",
      },
      {
        name: "韩靓",
        role: "主治医师、乳腺外科",
        bio: "乳腺癌手术、化疗、内分泌治疗等综合治疗",
      },
    ],
  },
  {
    title: "心脑血管和代谢学科群",
    experts: [
      {
        name: "吴立群",
        role: "主任医师、心内科主任",
        bio: "心律失常、心脏起搏器植入及心血管介入治疗",
      },
      {
        name: "亓树莹",
        role: "主任医师、心内科",
        bio: "复杂冠脉病变介入诊疗、射频消融术\n心脏起搏器植入术、肾动脉支架植入术\n肾动脉去交感神经消融术等",
      },
      {
        name: "康文岩",
        role: "主任医师、神经内科",
        bio: "帕金森病与运动障碍疾病\n脑血管病及睡眠障碍等疾病的诊治",
      },
    ],
  },
  {
    title: "神经脑科学学科群",
    experts: [
      {
        name: "黄培坚",
        role: "副主任医师",
        bio: "脑血管病、神经系统感染性疾病\n神经变性疾病、癫痫等",
      },
      {
        name: "倪泓阳",
        role: "主治医师、神经外科",
        bio: "各类脑血管病的微创介入治疗\n颅内动脉瘤、颈动脉狭窄、动静脉畸形等",
      },
    ],
  },
  {
    title: "综合科室",
    experts: [
      {
        name: "隋亮",
        role: "副主任医师",
        bio: "主攻急诊胆道疾病，ERCP手术",
      },
      {
        name: "赵良超",
        role: "副主任医师",
        bio: "消化系统肿瘤外科治疗，肝胆胰微创手术",
      },
      {
        name: "吴宁",
        role: "主任医师",
        bio: "肿瘤介入、外周血管介入及综合介入",
      },
    ],
  },
];

export default function RuijinHainanContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const stats = isZh ? overviewStatsZh : overviewStats;
  const policies = isZh ? policyCardsZh : policyCards;
  const clusters = isZh ? clusterCardsZh : clusterCards;
  const groups = isZh ? expertGroupsZh : expertGroups;

  return (
    <main
      role="main"
      aria-label="Ruijin Hospital Hainan - National Regional Medical Center"
      className="min-h-screen bg-white"
    >
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured hospital asset */}
        <img
          src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-ruijin-hainan.jpg"
          alt={isZh ? "瑞金医院海南医院外观" : "Ruijin Hospital Hainan exterior"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/85 via-teal-950/70 to-cyan-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isZh
                ? "上海交通大学医学院附属瑞金医院海南医院"
                : "Ruijin Hospital Hainan Branch, Shanghai Jiao Tong University School of Medicine"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {isZh ? "海南博鳌研究型医院" : "Hainan Boao Research Hospital"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isZh
                ? "乐城先行区唯一公立医疗机构 · 国家区域医疗中心"
                : "The only public medical institution in Boao Lecheng Pilot Zone · National Regional Medical Center"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "四大特许政策" : "Four Licensed Policies"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "219项特许药械落地" : "219 Licensed Drugs &amp; Devices"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "大病不出岛" : "Major Diseases Treated on Island"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-white text-cyan-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                {isZh ? "了解更多" : "Learn More"}
              </button>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                {isZh ? "预约咨询" : "Book Consultation"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOSPITAL OVERVIEW ===== */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "医院简介" : "Hospital Overview"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {stats.map((stat) => (
              <Reveal key={stat.label} className="bg-cyan-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "上海交通大学医学院附属瑞金医院海南医院（海南博鳌研究型医院）位于海南博鳌乐城国际医疗旅游先行区，是乐城先行区中唯一一家公立医疗机构，也是国家区域医疗中心。医院于2021年12月试运行，2022年3月正式运行，一期核定床位数500张，二期正同步建设中。"
                : "Ruijin Hospital Hainan Branch, Shanghai Jiao Tong University School of Medicine (Hainan Boao Research Hospital) is located in Hainan Boao Lecheng International Medical Tourism Pilot Zone. It is the only public medical institution in the Lecheng Pilot Zone and also a National Regional Medical Center. The hospital started trial operation in December 2021 and officially began operation in March 2022, with 500 approved beds in Phase I, and Phase II is under simultaneous construction."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "医院由海南省人民政府建设，平移上海瑞金医院&quot;技术、人才、管理和品牌&quot;，以海南省人民医院为依托单位，实现与上海总院的医疗同质化。截至2026年3月，已落地219项特许药械及生物医学新技术，其中全国首落151项，服务超33,000人次，并获评全国卫生健康系统先进集体。"
                : "The hospital is built by the Hainan Provincial People&apos;s Government, transferring Shanghai Ruijin Hospital&apos;s &quot;technology, talent, management and brand&quot;, with Hainan Provincial People&apos;s Hospital as the supporting unit, achieving medical homogenization with the Shanghai main hospital. As of March 2026, 219 licensed drugs, devices and new biomedical technologies have been implemented, including 151 first-in-China implementations, serving over 33,000 patients, and was awarded as an Advanced Collective in the National Health System."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== KEY POLICY & RESOURCE ADVANTAGES ===== */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "关键政策与资源优势" : "Key Policy &amp; Resource Advantages"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "依托乐城先行区&quot;四大特许&quot;政策，国际最新获批的药械可在此率先临床应用"
                : "Relying on the &quot;Four Licensed&quot; policies of Boao Lecheng Pilot Zone, internationally newly approved drugs and devices can be clinically applied here first"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {policies.map((card) => (
              <Reveal key={card.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center text-cyan-600">
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isZh ? "沪琼优质医疗资源强强联动" : "Strong Alliance of Shanghai-Hainan Quality Medical Resources"}
            </h3>
            <p className="text-cyan-100 max-w-3xl mx-auto">
              {isZh
                ? "除平移上海瑞金医院超千名&quot;候鸟式&quot;专家往返坐诊外，还与海南省人民医院深度合作。2024年上半年门诊量已达15,000人次，近3年内已有超过400名上海瑞金专家往来于沪琼两地手术、查房与坐诊。"
                : "In addition to transferring over 1,000 &quot;migratory bird&quot; experts from Shanghai Ruijin Hospital for rotating consultations, the hospital also cooperates deeply with Hainan Provincial People&apos;s Hospital. Outpatient visits reached 15,000 in the first half of 2024, and over 400 Shanghai Ruijin experts have traveled between Shanghai and Hainan for surgery, ward rounds and consultations in the past three years."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== KEY SPECIALTIES ===== */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "优势治疗项目" : "Key Specialties"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "全面平移上海瑞金医院的优质医疗资源，重点围绕三大重点学科群开展高品质诊疗服务"
                : "Comprehensively transfer Shanghai Ruijin Hospital&apos;s quality medical resources, focusing on high-quality diagnosis and treatment services around three key discipline clusters"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {clusters.map((cluster) => (
              <Reveal
                key={cluster.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-cyan-50"
              >
                <div className="mb-5 flex flex-col gap-3">
                  <span className="w-fit px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                    {cluster.badge}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-cyan-700">
                    {cluster.title}
                  </h3>
                  <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                    {cluster.intro}
                  </p>
                </div>
                <ul className="space-y-3">
                  {cluster.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERT TEAM ===== */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "专家团队" : "Expert Team"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "上海瑞金医院持续派&quot;候鸟式&quot;专家往返沪琼常态化坐诊、查房及开展高难度手术"
                : "Shanghai Ruijin Hospital continuously sends &quot;migratory bird&quot; experts for regular consultations, ward rounds and high-difficulty surgeries between Shanghai and Hainan"}
            </p>
          </Reveal>
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
              {isZh ? "各科室专家团队" : "Expert Teams by Department"}
            </h3>
            {groups.map((group) => (
              <Reveal key={group.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-cyan-600 mb-6">
                  {group.title}
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {group.experts.map((expert) => (
                    <div
                      key={expert.name}
                      className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors"
                    >
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        {expert.name}
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">{expert.role}</p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {expert.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh ? "大病不出岛 · 大病不出国" : "Major Diseases Treated on Island · No Need to Go Abroad"}
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              {isZh
                ? "地址：海南博鳌乐城国际医疗旅游先行区"
                : "Address: Hainan Boao Lecheng International Medical Tourism Pilot Zone"}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              {isZh ? "立即预约咨询" : "Book Consultation Now"}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
