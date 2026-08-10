// Guanghua Hospital detail page — transcribed verbatim from
// docs/research/www-medkungfu-com-363c9bc1/guanghua/rendered.html.
// Teal/green theme matching the captured DOM.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const STATS = [
  { value: "1958", label: "Founded" },
  { value: "600 beds", label: "Planned Beds" },
  { value: "Grade 3A", label: "Hospital Grade" },
  { value: "2 Campuses", label: "Xinhua & Yan'an Rd" },
  { value: ">80%", label: "Joint Disease Beds" },
];

const STATS_ZH = [
  { value: "1958年", label: "建院时间" },
  { value: "600张", label: "规划床位" },
  { value: "三级甲等", label: "医院等级" },
  { value: "2个院区", label: "新华路、延安西路" },
  { value: ">80%", label: "关节病专科床位占比" },
];

const SPECIALTIES = [
  {
    badge: "National TCM Advantage Specialty",
    title: "Rheumatology & Immunology",
    subtitle: "Regional TCM Diagnosis & Treatment Center for Rheumatic Diseases",
    items: [
      "Expertise in rheumatoid arthritis, ankylosing spondylitis, osteoarthritis, gouty arthritis, SLE",
      "Advanced testing: anti-CCP antibody, HLA-B27, GPI antigen",
      "Early diagnosis accuracy at national leading level",
      "Proprietary TCM preparations including snake-based formulations",
    ],
  },
  {
    badge: "National TCM Advantage Specialty",
    title: "Orthopedics & Traumatology",
    subtitle: "Sub-specialties: joint surgery, spine surgery, hand & foot trauma",
    items: [
      "Systematic hip, knee, shoulder, elbow, ankle joint replacement & revision",
      "High reputation for joint replacement volume in Shanghai and nationwide",
      "Hip & knee replacement volume ranks among top in Shanghai",
      "Elbow & ankle replacement volume ranks among top nationally",
      "Complex surgeries: cervical RA anterior/posterior approach, AS kyphosis correction",
    ],
  },
  {
    badge: "Key Construction Specialty of NTCM",
    title: "Joint Medicine",
    subtitle: "Shanghai TCM Featured Specialty & Key Discipline",
    items: [
      "Focus on pharmacological & integrated treatment for RA, AS and other rheumatic diseases",
      "Rich experience in early diagnosis and integrated Chinese-Western collaborative treatment",
    ],
  },
  {
    badge: "Shanghai TCM Advantage Specialty",
    title: "Rehabilitation",
    subtitle: 'National "Flagship" Department for Chinese-Western Collaboration',
    items: [
      "Featured integrated TCM diagnosis & treatment for neck, shoulder, waist & leg pain",
      "Comprehensive use of needle-knife, silver needle, warm acupuncture, tuina, chiropractic",
      "Combined with modern techniques: ozone, radiofrequency, needle-knife endoscopy",
      "Significant efficacy in spinal joint diseases and periarticular soft tissue pain",
    ],
  },
  {
    badge: "City's Only",
    title: "Gout Department",
    subtitle: "The city's only 24-hour gout emergency service",
    items: [
      "Focus on integrated treatment for acute & chronic gouty arthritis",
      "24/7 emergency medical services",
    ],
  },
  {
    badge: "Integrated Chinese-Western Feature",
    title: "Oncology",
    subtitle: "Three directions: medical oncology, interventional oncology, integrated treatment",
    items: [
      "From early cancer diagnosis to chemotherapy, immunotherapy, targeted therapy, TCM & integrated treatment",
      "Comprehensive diagnostic & therapeutic services",
    ],
  },
];

const SPECIALTIES_ZH = [
  {
    badge: "国家中医优势专科",
    title: "风湿免疫科",
    subtitle: "国家中医药管理局区域中医（风湿病）诊疗中心建设单位",
    items: [
      "擅长类风湿关节炎、强直性脊柱炎、骨关节炎、痛风性关节炎、系统性红斑狼疮等诊治",
      "开展抗CCP抗体、HLA-B27、GPI抗原等多项前沿检测项目",
      "早期诊断准确率居于国内领先水平",
      "拥有蛇制剂等院内特色中成药制剂",
    ],
  },
  {
    badge: "国家中医优势专科",
    title: "骨伤科",
    subtitle: "下设关节外科、脊柱外科、手足创伤外科等亚专业方向",
    items: [
      "系统开展髋、膝、肩、肘、踝人工关节置换及翻修手术",
      "关节置换量在上海乃至全国具有较高知名度",
      "髋膝关节置换手术量位于上海前列",
      "肘、踝关节置换量位于全国前列",
      "能够开展颈椎类风湿性关节炎前后路手术、强直性脊柱炎后凸矫形等复杂手术",
    ],
  },
  {
    badge: "国家中医药管理局重点建设专科",
    title: "关节内科",
    subtitle: "上海市中医特色专科、上海市中医重点学科",
    items: [
      "专注于类风湿关节炎、强直性脊柱炎等风湿病的药物及中西医结合治疗",
      "在关节病早期诊断和中西医协同治疗方面拥有丰富经验",
    ],
  },
  {
    badge: "上海市中医优势专科",
    title: "康复科",
    subtitle: "国家中西医协同&quot;旗舰&quot;科室建设项目",
    items: [
      "以颈肩腰腿痛中医综合一体化诊疗为特色",
      "综合运用针刀、银质针、温针灸、推拿、整脊等中医特色疗法",
      "结合臭氧、射频、针刀镜等现代治疗技术",
      "在脊柱关节病和关节周围软组织疼痛性疾病诊疗方面具有显著疗效",
    ],
  },
  {
    badge: "全市唯一",
    title: "痛风科",
    subtitle: "开设全市唯一的24小时痛风急诊服务",
    items: [
      "专注于痛风性关节炎的急慢性期中西医结合治疗",
      "提供全天候紧急医疗服务",
    ],
  },
  {
    badge: "中西医结合特色",
    title: "肿瘤科",
    subtitle: "涵盖肿瘤内科、肿瘤介入、中西医结合治疗三大方向",
    items: [
      "从早癌诊治到化疗、免疫、靶向以及中医、中西医结合肿瘤内科治疗",
      "提供综合诊疗服务",
    ],
  },
];

interface Expert {
  name: string;
  role: string;
  bio: string;
}

interface ExpertBlock {
  department: string;
  featured?: { name: string; role: string };
  experts: Expert[];
}

const EXPERT_BLOCKS: ExpertBlock[] = [
  {
    department: "Rheumatology & Immunology",
    featured: { name: "He Dongyi", role: "Discipline Leader" },
    experts: [
      {
        name: "Yang Xiaoling",
        role: "Chief Physician",
        bio: `Graduated from Shanghai University of TCM in 1993, Director of Gout Dept since 2005
Studied under renowned rheumatologist Ni Liqing
Expert in integrated treatment of gout, AS, osteoporosis, SLE`,
      },
    ],
  },
  {
    department: "Joint Surgery",
    experts: [
      {
        name: "Ouyang Guilin",
        role: "Director of Joint Surgery, Chief Physician, PhD, Master Supervisor",
        bio: `Expert in artificial knee, hip, elbow, ankle, shoulder joint replacement & revision
Rich experience in surgical treatment of RA, AS, osteoarthritis`,
      },
      {
        name: "He Yong",
        role: "Director of Joint Orthopedic Surgery, Chief Physician, MD, Master Supervisor",
        bio: `Experienced in shoulder, knee, hip, elbow joint disease treatment
Expert in arthroscopic minimally invasive surgery & joint replacement
Nominated for Shanghai "Silver Snake Award" & "Youth May 4th Medal"`,
      },
      {
        name: "Gao Huali",
        role: "Associate Chief Physician",
        bio: `Expert in arthroscopic surgery & robot-assisted joint replacement`,
      },
      {
        name: "Han Dapeng",
        role: "Associate Chief Physician",
        bio: `Expert in artificial joint replacement & arthroscopic surgery`,
      },
      {
        name: "Xu Yuelin",
        role: "Chief Physician",
        bio: `Pioneer in domestic knee & hip artificial joint replacement`,
      },
    ],
  },
  {
    department: "Spine Surgery",
    featured: {
      name: "Huang Zheng",
      role: "Director of Spine Surgery, Chief Physician, Orthopedic PhD, Master Supervisor",
    },
    experts: [
      {
        name: "Huang Zheng",
        role: "Director of Spine Surgery",
        bio: `Expert in integrated & minimally invasive treatment of lumbar disc herniation, spinal stenosis, cervical spondylosis, AS, RA`,
      },
      {
        name: "Zhang Zifeng",
        role: "Director of Spinal Trauma Surgery, Associate Chief Physician, MD",
        bio: `Expert in minimally invasive treatment of spinal diseases & complex cervical spondylosis surgery`,
      },
      {
        name: "Xiao Lianbo",
        role: "Chief Orthopedic Physician",
        bio: `Conducts artificial joint replacement & integrated treatment of spine-related diseases`,
      },
    ],
  },
  {
    department: "Rehabilitation",
    featured: {
      name: "Cheng Shaodan",
      role: "Director of Rehabilitation, Chief Physician, Graduate Supervisor",
    },
    experts: [
      {
        name: "Cheng Shaodan",
        role: "Director of Rehabilitation",
        bio: `Leader of TCM Rehabilitation discipline (Shanghai key clinical discipline)
Head of National "Flagship" Chinese-Western Collaboration Project
Famous TCM Doctor of Changning District, Shanghai
Pioneered professional diagnosis & rehabilitation for neck/shoulder/waist/leg pain in Shanghai tertiary hospitals
Established integrated TCM diagnosis & treatment system
Performed first needle-knife endoscopy in East China`,
      },
    ],
  },
  {
    department: "Other Departments",
    experts: [
      {
        name: "Liu Xuan",
        role: "Director of Oncology, Professor",
        bio: `Department has grown into a clinical specialty featuring integrated Chinese-Western tumor prevention & treatment
Established comprehensive capabilities from early cancer diagnosis to chemotherapy, immunotherapy, targeted therapy, TCM & integrated treatment`,
      },
      {
        name: "Ma Danjun",
        role: "Director of Internal Medicine",
        bio: `Graduated from Tongji University Medical School, nearly 30 years in internal medicine
Experienced in diagnosis & treatment of common & frequently occurring internal diseases`,
      },
      {
        name: "Huang Tiansheng",
        role: "Director of Gastroenterology, Chief Physician, MD, Master Supervisor",
        bio: `Studied under famous Shanghai TCM doctor Prof. Zhu Shengliang
Serves as committee member of Spleen & Stomach Disease Branch, China Association of Chinese Medicine
Vice chairman of Shanghai TCM Association Spleen & Stomach Disease Branch`,
      },
      {
        name: "Sun Kemin",
        role: "Director of ENT, MD, Master Supervisor",
        bio: `Executive director of World Federation of Chinese Medicine Societies ENT & Stomatology Committee
Vice chairman of Allergy Expert Committee, ENT Branch, China Association of Integrative Medicine`,
      },
    ],
  },
];

const EXPERT_BLOCKS_ZH: ExpertBlock[] = [
  {
    department: "风湿免疫科",
    featured: { name: "何东仪", role: "学科带头人" },
    experts: [
      {
        name: "杨晓凌",
        role: "主任医师",
        bio: `1993年毕业于上海中医药大学，2005年起担任痛风科主任
师从上海市风湿病名家倪立青主任
擅长痛风、强直性脊柱炎、骨质疏松及系统性红斑狼疮等风湿免疫疾病的中西医结合治疗`,
      },
    ],
  },
  {
    department: "关节外科",
    experts: [
      {
        name: "欧阳桂林",
        role: "关节外科主任、主任医师、博士、硕士生导师",
        bio: `擅长人工膝、髋、肘、踝、肩关节置换及翻修术
在类风湿性关节炎、强直性脊柱炎、骨关节炎等关节疾病的手术治疗方面有丰富经验`,
      },
      {
        name: "何勇",
        role: "关节矫形外科主任、主任医师、医学博士、硕士生导师",
        bio: `在肩、膝、髋、肘等关节疾病的诊治方面经验丰富
擅长关节镜微创手术及人工关节置换术
获上海市"银蛇奖"提名奖和上海市"青年五四奖章"`,
      },
      {
        name: "高华利",
        role: "副主任医师",
        bio: `擅长关节镜手术及机器人辅助关节置换`,
      },
      {
        name: "韩大鹏",
        role: "副主任医师",
        bio: `擅长人工关节置换术及关节镜手术`,
      },
      {
        name: "徐岳林",
        role: "主任医师",
        bio: `率先在国内开展膝、髋人工关节置换`,
      },
    ],
  },
  {
    department: "脊柱外科",
    featured: {
      name: "黄正",
      role: "脊柱外科主任、主任医师、骨科博士、硕士生导师",
    },
    experts: [
      {
        name: "黄正",
        role: "脊柱外科主任",
        bio: `擅长腰椎间盘突出症、腰椎管狭窄症、颈椎病、强直性脊柱炎、类风湿关节炎等疾病的中西医结合和微创治疗`,
      },
      {
        name: "张子峰",
        role: "脊柱创伤外科主任、副主任医师、医学博士",
        bio: `擅长脊柱疾病的微创治疗及复杂颈椎病的手术治疗`,
      },
      {
        name: "肖涟波",
        role: "骨科主任医师",
        bio: `在脊柱外科领域开展人工关节置换及脊柱相关疾病的中西医结合治疗`,
      },
    ],
  },
  {
    department: "康复科",
    featured: {
      name: "程少丹",
      role: "康复学科主任、主任医师、研究生导师",
    },
    experts: [
      {
        name: "程少丹",
        role: "康复学科主任",
        bio: `上海市中医药（临床类）重点学科中医康复学学科带头人
国家中西医协同"旗舰"科室建设项目负责人
上海市长宁区名中医
在上海三甲医院中首创颈肩腰腿痛专业诊疗及康复科室
形成了颈肩腰腿痛中医综合一体化诊疗服务体系
开展了华东地区首台针刀镜技术`,
      },
    ],
  },
  {
    department: "其他科室",
    experts: [
      {
        name: "刘煊",
        role: "肿瘤科主任、教授",
        bio: `科室已成长为以中西医结合防治肿瘤为特色的临床科室
建立了从早癌诊治到化疗、免疫、靶向、中医及中西医结合的综合诊疗能力`,
      },
      {
        name: "马丹军",
        role: "内科主任",
        bio: `毕业于同济大学医学院医疗系，从事内科领域工作近30年
在内科常见病、多发病的诊疗方面经验丰富`,
      },
      {
        name: "黄天生",
        role: "消化内科主任、主任医师、医学博士、硕士生导师",
        bio: `师从上海市名中医朱生樑教授
兼任中华中医药学会脾胃病分会委员、上海市中医药学会脾胃病分会副主任委员等职`,
      },
      {
        name: "孙克敏",
        role: "耳鼻喉科主任、医学博士、硕士生导师",
        bio: `兼任世界中联耳鼻喉口腔科专业委员会常务理事
中国中西医结合学会耳鼻咽喉科专业委员会变态反应专家委员会副主任委员`,
      },
    ],
  },
];

export function GuanghuaPage() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const stats = isZh ? STATS_ZH : STATS;
  const specialties = isZh ? SPECIALTIES_ZH : SPECIALTIES;
  const expertBlocks = isZh ? EXPERT_BLOCKS_ZH : EXPERT_BLOCKS;
  return (
    <main
      role="main"
      aria-label="Guanghua Hospital - Joint Disease Specialist"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-guanghua.jpg"
          alt={isZh ? "上海光华医院外观" : "Guanghua Hospital exterior"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/85 via-green-950/70 to-teal-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isZh
                ? "上海中医药大学附属光华医院"
                : "Guanghua Hospital Affiliated to Shanghai University of TCM"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {isZh
                ? "上海市光华中西医结合医院"
                : "Shanghai Guanghua Integrated Chinese-Western Medicine Hospital"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isZh
                ? "以关节病、风湿性疾病中西医结合诊治为特色的三级甲等专科医院"
                : "Grade 3A specialized hospital featuring integrated Chinese-Western diagnosis &amp; treatment of joint diseases and rheumatic disorders"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "始建于1958年" : "Founded in 1958"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "国家区域关节病诊疗中心" : "National Regional Joint Disease Center"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "全市唯一24小时痛风急诊" : "City&apos;s Only 24h Gout Emergency"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intro"
                className="px-8 py-3 bg-white text-teal-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                {isZh ? "了解更多" : "Learn More"}
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                {isZh ? "预约咨询" : "Book Consultation"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOSPITAL OVERVIEW */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "医院简介" : "Hospital Overview"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {stats.map((stat) => (
              <Reveal
                key={stat.label}
                className="bg-teal-50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "上海中医药大学附属光华医院（上海市光华中西医结合医院）始建于1958年，是一所以关节病、风湿性疾病中西医结合诊治为特色的三级甲等专科医院。医院现有新华路、延安西路两个院区，2026年5月新院区正式启用，规划床位600张。"
                : "Guanghua Hospital Affiliated to Shanghai University of TCM (Shanghai Guanghua Integrated Chinese-Western Medicine Hospital) was founded in 1958. It is a Grade 3A specialized hospital featuring integrated Chinese-Western diagnosis and treatment of joint diseases and rheumatic disorders. The hospital has two campuses at Xinhua Road and Yan&apos;an West Road, with the new campus officially opened in May 2026, planning 600 beds."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "医院是国家区域关节病诊疗中心，关节病专科床位占比超80%，风湿免疫科、骨伤科为国家中医优势专科。医院持有蛇制剂、问荆合剂、舒筋合剂等院内特色制剂，髋膝关节置换手术量位于上海前列，肘、踝关节置换量位于全国前列。医院正由专科医院向综合医院转型，并开设全市唯一24小时痛风急诊。"
                : "The hospital is the National Regional Joint Disease Diagnosis and Treatment Center, with over 80% of beds dedicated to joint disease specialties. Rheumatology &amp; Immunology and Orthopedics &amp; Traumatology are National TCM Advantage Specialties. The hospital holds proprietary preparations including snake-based formulations, Wenjing mixture, and Shujin mixture. Hip and knee replacement volumes rank among the top in Shanghai, while elbow and ankle replacement volumes rank among the top nationally. The hospital is transitioning from a specialized hospital to a comprehensive hospital and operates the city&apos;s only 24-hour gout emergency service."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* KEY SPECIALTIES */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "优势治疗项目" : "Key Specialties"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "以中西医结合为特色，在关节病和风湿病的诊治领域形成了显著的学科优势"
                : "Featuring integrated Chinese-Western medicine, forming significant disciplinary advantages in joint disease and rheumatic disorder diagnosis and treatment"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((spec) => (
              <Reveal
                key={spec.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-teal-50"
              >
                <div className="mb-5 flex flex-col gap-3">
                  <span className="w-fit px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {spec.badge}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-teal-700">
                    {spec.title}
                  </h3>
                  <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                    {spec.subtitle}
                  </p>
                </div>
                <ul className="space-y-3">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Icons.checkCircle
                        className="text-teal-600 mt-0.5 flex-shrink-0 h-4 w-4"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT TEAM */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "专家团队 实力护航" : "Expert Team"}
            </h2>
          </Reveal>
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
              {isZh ? "各科室核心专家" : "Core Experts by Department"}
            </h3>
            {expertBlocks.map((block) => (
              <Reveal key={block.department} className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-teal-600 mb-6">
                  {block.department}
                </h4>
                {block.featured && (
                  <div className="mb-6 bg-teal-50 rounded-xl p-6">
                    <h5 className="font-bold text-teal-700 mb-2">
                      {block.featured.name}
                    </h5>
                    <p className="text-sm text-gray-600">{block.featured.role}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {block.experts.map((expert) => (
                    <div
                      key={expert.name}
                      className="border border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors"
                    >
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        {expert.name}
                      </h5>
                      <p className="text-sm text-teal-600 mb-3">{expert.role}</p>
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

      {/* CLOSING CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh
                ? "中西医结合 · 专注关节风湿"
                : "Integrated Chinese-Western Medicine · Focus on Joint &amp; Rheumatic Diseases"}
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              {isZh
                ? "地址：上海市新华路、延安西路两个院区"
                : "Address: Two campuses at Xinhua Road &amp; Yan&apos;an West Road, Shanghai"}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              {isZh ? "立即预约咨询" : "Book Consultation Now"}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
