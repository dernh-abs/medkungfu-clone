// Longhua Hospital Affiliated to Shanghai University of TCM detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const overviewStats = [
  { value: "1960", label: "Founded" },
  { value: "1,750 beds", label: "Total Beds" },
  { value: "3000+", label: "Staff" },
  { value: "5.36M+", label: "2025 Outpatient Visits" },
  { value: "#1 in China", label: "2022 TCM Hospital Performance" },
];

const overviewStatsZh = [
  { value: "1960年", label: "建院时间" },
  { value: "1750张", label: "总核定床位" },
  { value: "3000+", label: "员工数量" },
  { value: "536万+", label: "2025年门急诊人次" },
  { value: "全国第一", label: "2022年中医综合类医院绩效" },
];

interface Specialty {
  title: string;
  badge: string;
  description: string;
  items: string[];
}

const specialties: Specialty[] = [
  {
    title: "Oncology",
    badge: "National TCM Clinical Research Base",
    description:
      "Largest TCM & integrated tumor prevention research base nationwide",
    items: [
      "TCM Master Liu Jiaxiang pioneered \"Fu Zheng Zhi Ai\" theory in 1972",
      "Leading in advanced lung cancer, gastric cancer, colorectal cancer treatment",
      "Intervention window moved to early-mid stage and precancerous lesions",
      "Systematic TCM intervention for pulmonary nodules and other precancerous lesions",
      "Independently developed 3 new drugs (Jinfukang oral liquid, Qitian Fuzheng capsules, Chanwu gel plaster)",
      "Peak annual outpatient visits reached 540,000, annual discharges 14,000",
    ],
  },
  {
    title: "Orthopedics & Traumatology",
    badge: "#2 Among National TCM Hospitals",
    description:
      "Founded by Mr. Shi Xiaoshan, integrating four major Shanghai trauma schools",
    items: [
      "Leading nationwide in TCM treatment of degenerative spine and joint diseases",
      "Established integrated diagnosis & treatment system for cervical spondylotic myelopathy",
      "Clinical efficacy improved by 15%, promoted in 25 medical institutions nationwide",
      "Combining TCM characteristics with modern technology",
    ],
  },
  {
    title: "Nephrology",
    badge: "Leading TCM Nephrology Discipline",
    description: "Represented by Prof. Chen Yiping, famous Shanghai TCM doctor",
    items: [
      "Innovatively proposed \"Harmonizing Triple Burner\" kidney treatment theory with specialized formulas",
      "Unique system for treating refractory nephropathies: membranous nephropathy, IgA nephropathy, diabetic nephropathy",
      "Research achievements won First Prize of National Science and Technology Progress Award",
      "Significantly improved clinical efficacy",
    ],
  },
  {
    title: "Proctology",
    badge: "#1 Academic Influence in Proctology among TCM Hospitals",
    description: "Important part of Haipai TCM Gu's Surgery",
    items: [
      "Inheriting Gu's surgical academic thoughts",
      "Significant advantages in anorectal disease diagnosis and treatment",
    ],
  },
  {
    title: "Gastroenterology",
    badge: "Key Specialty of NTCM",
    description:
      "Remarkable efficacy in atrophic gastritis and gastric precancerous lesion treatment",
    items: [
      "Focus on integrated Chinese-Western treatment of digestive system diseases",
      "Unique advantages in gastric precancerous lesion intervention",
    ],
  },
  {
    title: "Pulmonology",
    badge: "Shanghai TCM Respiratory Disease Advantage Specialty",
    description:
      "Established in 1965, first among national TCM hospital systems",
    items: [
      "Rich experience in respiratory system disease diagnosis and treatment",
      "Integrated Chinese-Western treatment of pulmonary diseases",
    ],
  },
];

const specialtiesZh: Specialty[] = [
  {
    title: "肿瘤科",
    badge: "国家中医临床研究基地",
    description: "全国最大的中医及中西医结合肿瘤防治研究基地",
    items: [
      "国医大师刘嘉湘于1972年在全国首倡&quot;扶正治癌&quot;学术思想",
      "在晚期肺癌、胃癌、结直肠癌等传统优势病种保持国内领先",
      "干预窗口前移至早中期及癌前病变阶段",
      "针对肺小结节等癌前病变形成系统中医干预方案",
      "自主创新研发3种新药（金复康口服液、芪天扶正胶囊、蟾乌凝胶膏）",
      "全年门诊量最高峰达54万人次，年出院1.4万人次",
    ],
  },
  {
    title: "骨伤科",
    badge: "全国中医医院学科排名第2",
    description: "由石筱山先生创建，整合沪上四大伤科流派学术精粹",
    items: [
      "在脊柱退行性疾病和骨关节退行性疾病的中医药诊治方面走在全国前列",
      "在脊髓型颈椎病等领域建立中西医结合诊疗技术体系",
      "临床疗效提高15%，已在全国25家医疗机构推广应用",
      "坚持中医药特色与现代技术相结合",
    ],
  },
  {
    title: "肾病科",
    badge: "国内领先的中医肾病学科",
    description: "以上海市名中医陈以平教授为代表",
    items: [
      "创新性提出&quot;斡旋三焦&quot;治肾理论，形成系列专方专药",
      "在膜性肾病、IgA肾病、糖尿病肾病等难治性肾病治疗中自成体系",
      "研究成果曾获国家科技进步奖一等奖",
      "极大提高了临床疗效",
    ],
  },
  {
    title: "肛肠科",
    badge: "中国中医医院肛肠学科学术影响力排名第一",
    description: "海派中医顾氏外科重要组成部分",
    items: [
      "传承顾氏外科学术思想",
      "在肛肠疾病诊治方面具有显著优势",
    ],
  },
  {
    title: "脾胃病科",
    badge: "国家中医药管理局重点专科",
    description: "在萎缩性胃炎、胃癌前病变治疗方面疗效显著",
    items: [
      "专注于消化系统疾病的中西医结合治疗",
      "在胃癌前病变干预方面具有独特优势",
    ],
  },
  {
    title: "肺病科",
    badge: "上海市中医临床呼吸病优势专科",
    description: "成立于1965年，为全国中医医院系统首创",
    items: [
      "在呼吸系统疾病诊治方面具有丰富经验",
      "中西医结合治疗肺部疾病",
    ],
  },
];

const otherSpecialties = [
  "TCM Surgery (Gu's School, chronic non-healing wounds, diabetic foot, peripheral vascular disease)",
  "TCM Breast Department",
  "Acupuncture (including \"Lu's Acupuncture\" National Intangible Cultural Heritage)",
  "Cardiology",
  "Cholelithiasis",
];

const otherSpecialtiesZh = [
  "中医外科（顾氏外科流派，慢性难愈性创面、糖尿病足、周围血管病）",
  "中医乳腺科",
  "针灸科（含&quot;陆氏针灸&quot;国家级非物质文化遗产）",
  "心病科",
  "胆石病",
];

interface Expert {
  name: string;
  role: string;
  bio: string;
}

interface ExpertGroup {
  title: string;
  featured?: { name: string; role: string };
  experts: Expert[];
}

const expertGroups: ExpertGroup[] = [
  {
    title: "Oncology",
    featured: { name: "Liu Jiaxiang", role: "TCM Master, Academic Leader" },
    experts: [
      {
        name: "Li Hegen",
        role: "Chief Physician, Level-2 Chief Physician, PhD Supervisor",
        bio: `Current Director of Oncology & Third Oncology Dept
Head of National TCM Clinical Research Base (Malignant Tumors)
Head of Shanghai TCM Oncology Clinical Medical Center
Chairman of Shanghai TCM Association Oncology Branch`,
      },
      {
        name: "Zhou Lei",
        role: "Executive Director of Oncology",
        bio: "Exploring lung cancer precancerous lesions and early prevention",
      },
      {
        name: "Xu Zhenye",
        role: "Lifetime Professor, PhD Supervisor, Famous Shanghai TCM Doctor",
        bio: `Vice President of World Federation of Chinese Medicine Societies Oncology Committee
Expert in integrated treatment of lung cancer, liver cancer, breast cancer
7 invention patents`,
      },
      {
        name: "Liu Lingshuang",
        role: "Chief Physician, PhD Supervisor",
        bio: `Deputy Director of Oncology & Director of Sixth Oncology Dept
Studied under TCM Master Prof. Liu Jiaxiang
Served nearly 300,000 patients
Research reduced postoperative recurrence/metastasis risk of stage IIIA NSCLC by 62.2%`,
      },
      {
        name: "Wang Zhongqi",
        role: "Chief Physician, Master Supervisor",
        bio: "Director of Second Oncology Dept, studied under Prof. Xu Zhenye",
      },
      {
        name: "Shen Keping",
        role: "Chief Physician, Master Supervisor",
        bio: `Deputy Director of Oncology & Director of Fifth Oncology Dept
Studied under Prof. Qiu Jiaxin
33 years in digestive tract malignant tumor prevention and treatment`,
      },
    ],
  },
  {
    title: "Orthopedics & Traumatology",
    featured: { name: "Shi Qi", role: "TCM Master, Academic Founder" },
    experts: [
      {
        name: "Mo Wen",
        role: "Chief Physician, Level-2 Professor, PhD Supervisor",
        bio: `Administrative Director of Orthopedics
Deputy Director of Spine Disease Institute, Shanghai University of TCM
Studied under TCM Master Prof. Shi Qi
Representative inheritor of Shanghai Intangible Cultural Heritage Shi's Trauma Therapy
Established complete technical system of "Yi Qi Hua Yu Bu Shen Method" for cervical spondylotic myelopathy
Won 6 awards including National Science and Technology Progress Award`,
      },
      {
        name: "Wang Yongjun",
        role: "Chief Physician, Professor, Researcher, PhD Supervisor",
        bio: `Chief Scientist of National "973" Program, Changjiang Scholar Distinguished Professor
Recipient of National Outstanding Youth Science Fund
Director of Spine Disease Institute
Mainly engaged in applied and basic research of TCM prevention and treatment of bone degenerative diseases
Expert in cervical/lumbar diseases, spinal tumors, osteoporosis`,
      },
      {
        name: "Ge Jinghua",
        role: "Chief Physician, Professor, Master Supervisor",
        bio: "Long-term engagement in orthopedic clinical practice, research and teaching",
      },
      {
        name: "Wu Xuequn",
        role: "Chief Physician",
        bio: `Deputy Administrative Director of Orthopedics, Head of Trauma Group
Studied under Prof. Shi Qi and Teacher Gong Zhengfeng
Expert in fracture trauma, neck/back pain, osteoarthritis`,
      },
      {
        name: "Hou Baoxing",
        role: "Chief Physician",
        bio: "Expert in diagnosis and treatment of cervical spondylosis, lumbar disease, osteoarthritis, ankylosing spondylitis and other difficult cases",
      },
    ],
  },
  {
    title: "Nephrology",
    featured: {
      name: "Chen Yiping",
      role: "Lifetime Professor, PhD Supervisor, Famous Shanghai TCM Doctor",
    },
    experts: [
      {
        name: "Chen Yiping",
        role: "One of the founders of Chinese integrative nephrology",
        bio: `Guiding teacher of National Famous Old TCM Expert Inheritance Studio
Creatively proposed "Harmonizing Triple Burner" kidney treatment theory`,
      },
      {
        name: "Deng Yueyi",
        role: "Chief Physician, Professor, PhD Supervisor",
        bio: `Director of Nephrology
Academic leader of TCM nephrology, Shanghai University of TCM
Vice Chairman of Kidney Disease Professional Committee, China Association of Integrative Medicine
Guiding teacher of 7th batch National Old TCM Expert Academic Experience Inheritance
Studied under Prof. Chen Yiping`,
      },
      {
        name: "Zhong Yifei",
        role: "Chief Physician, Professor, PhD Supervisor",
        bio: `Director of First Nephrology Dept
Deputy Director of Nephrology Institute, Shanghai University of TCM
"Young Qihuang Scholar" of National Administration of Traditional Chinese Medicine
Vice President of Nephrology Professional Committee, World Federation of Chinese Medicine Societies
Research focus: diabetic nephropathy, IgA nephropathy`,
      },
      {
        name: "Wang Lin",
        role: "Chief Physician",
        bio: `Director of Nephrology, Longhua Hospital Shangnan Campus
Head of Chen Yiping National Famous Old TCM Inheritance Studio`,
      },
      {
        name: "Zhu Rong",
        role: "Chief Physician",
        bio: "Expert in integrated treatment of hypertensive nephropathy, gouty nephropathy, chronic pyelonephritis",
      },
    ],
  },
  {
    title: "Other Department Core Experts",
    experts: [
      {
        name: "Cao Yongqing",
        role: "Chief Physician, Professor, PhD Supervisor",
        bio: `Director of Proctology
Comprehensively responsible for medical, teaching and research work`,
      },
      {
        name: "Wang Chen",
        role: "Chief Physician",
        bio: `Standing Committee Member of Proctology Professional Committee, World Federation of Chinese Medicine Societies
Expert in difficult cases like high horseshoe perianal abscess`,
      },
      {
        name: "Zhang Huiyong",
        role: "Chief Physician, PhD Supervisor",
        bio: "Discipline leader of Pulmonology",
      },
      {
        name: "Que Huafa",
        role: "Chief Physician, Level-2 Professor, PhD Supervisor",
        bio: `Discipline leader of Key Specialty, National Administration of Traditional Chinese Medicine
Fifth generation academic inheritor of Shanghai Gu's Surgery School
Shanghai Medical Craftsman
Expert in diabetic foot, varicose ulcers, peripheral vascular disease, thyroid and breast diseases`,
      },
      {
        name: "Fang Bangjiang",
        role: "Chief Physician, Professor, PhD Supervisor",
        bio: `Director of Emergency Department
Discipline leader of Ministry of Health National Key Clinical Specialty`,
      },
      {
        name: "Chen Wei",
        role: "Chief Physician, Professor, PhD Supervisor",
        bio: `Director of Critical Care Medicine
Visiting scholar at Harvard University, USA`,
      },
      {
        name: "Xia Xiang",
        role: "Chief Physician, Professor",
        bio: "Expert in integrated treatment of chronic gastritis, chronic enteritis, coronary heart disease, hypertension, post-stroke sequelae",
      },
      {
        name: "Peng Sheng",
        role: "Chief Physician, Professor",
        bio: `Director of Anesthesiology
Person in charge of National First-class Anesthesiology Course
Long-term commitment to perioperative brain protection and brain function regulation research`,
      },
    ],
  },
];

const expertGroupsZh: ExpertGroup[] = [
  {
    title: "肿瘤科",
    featured: { name: "刘嘉湘", role: "国医大师、学术领衔人" },
    experts: [
      {
        name: "李和根",
        role: "主任医师、二级主任医师、博士生导师",
        bio: `现任肿瘤科主任兼肿瘤三科主任
国家中医临床研究基地（恶性肿瘤）负责人
上海市中医肿瘤临床医学中心负责人
上海市中医药学会肿瘤分会主任委员`,
      },
      {
        name: "周蕾",
        role: "肿瘤科执行主任",
        bio: "探索肺癌癌前病变及早期防治",
      },
      {
        name: "徐振晔",
        role: "终身教授、博士生导师、上海市名中医",
        bio: `世界中医药联合会肿瘤专业委员会副会长
擅长肺癌、肝癌、乳腺癌等恶性肿瘤的中西医综合治疗
发明专利7项`,
      },
      {
        name: "刘苓霜",
        role: "主任医师、博士生导师",
        bio: `肿瘤科副主任兼肿瘤六科主任
师从国医大师刘嘉湘教授
累计服务患者近30万人次
研究成果可使ⅢA期非小细胞肺癌术后复发转移风险降低62.2%`,
      },
      {
        name: "王中奇",
        role: "主任医师、硕士生导师",
        bio: "肿瘤二科主任，师从徐振晔教授",
      },
      {
        name: "沈克平",
        role: "主任医师、硕士生导师",
        bio: `肿瘤科副主任兼肿瘤五科主任
师从邱佳信教授
从事消化道恶性肿瘤防治33年`,
      },
    ],
  },
  {
    title: "骨伤科",
    featured: { name: "施杞", role: "国医大师、学术奠基人" },
    experts: [
      {
        name: "莫文",
        role: "主任医师、二级教授、博士生导师",
        bio: `骨伤科行政主任
上海中医药大学脊柱病研究所副所长
师从国医大师施杞教授
上海市非物质文化遗产石氏伤科疗法代表性传承人
建立&quot;益气化瘀补肾法&quot;治疗脊髓型颈椎病的完整技术体系
获国家科技进步奖、上海市科技进步奖等成果奖励6项`,
      },
      {
        name: "王拥军",
        role: "主任医师、教授、研究员、博士生导师",
        bio: `国家&quot;973&quot;计划首席科学家、长江学者特聘教授
国家杰出青年科学基金获得者
脊柱病研究所所长
主要从事中医药防治骨退行性病变的应用与基础研究
擅长颈腰椎疾病、脊柱肿瘤、骨质疏松症等`,
      },
      {
        name: "葛京化",
        role: "主任医师、教授、硕士生导师",
        bio: "长期从事骨伤科临床、科研和教学工作",
      },
      {
        name: "邬学群",
        role: "主任医师",
        bio: `骨伤科行政副主任，创伤组组长
师从施杞教授及龚正丰老师
擅长骨折创伤、颈腰痛、骨关节炎等`,
      },
      {
        name: "侯宝兴",
        role: "主任医师",
        bio: "擅长颈椎病、腰椎病、骨关节炎、强直性脊柱炎等疑难杂症的诊治",
      },
    ],
  },
  {
    title: "肾病科",
    featured: { name: "陈以平", role: "终身教授、博士生导师、上海市名中医" },
    experts: [
      {
        name: "陈以平",
        role: "中国中西医结合肾脏病奠基人之一",
        bio: `全国名老中医药专家传承工作室指导老师
创造性提出&quot;斡旋三焦&quot;治肾理论`,
      },
      {
        name: "邓跃毅",
        role: "主任医师、教授、博士生导师",
        bio: `肾病科主任
上海中医药大学中医肾病学术带头人
中国中西医结合学会肾脏疾病专业委员会副主任委员
第七批全国老中医药专家学术经验继承工作指导老师
师从陈以平教授`,
      },
      {
        name: "钟逸斐",
        role: "主任医师、教授、博士生导师",
        bio: `肾病一科主任
上海中医药大学肾病研究所副所长
国家中医药管理局&quot;青年岐黄学者&quot;
世界中医药学会联合会肾病专业委员会副会长
研究方向为糖尿病肾病、IgA肾病等`,
      },
      {
        name: "王琳",
        role: "主任医师",
        bio: `龙华医院上南院区肾病科主任
陈以平全国名老中医传承工作室负责人`,
      },
      {
        name: "朱戎",
        role: "主任医师",
        bio: "擅长高血压肾病、痛风性肾病、慢性肾盂肾炎等的中西医结合治疗",
      },
    ],
  },
  {
    title: "其他科室骨干专家",
    experts: [
      {
        name: "曹永清",
        role: "主任医师、教授、博士生导师",
        bio: `肛肠科主任
全面主持学科的医疗、教学、科研工作`,
      },
      {
        name: "王琛",
        role: "主任医师",
        bio: `世界中医药学会联合会肛肠专业委员会常务委员
擅长高位马蹄形肛周脓肿等疑难病症`,
      },
      {
        name: "张惠勇",
        role: "主任医师、博士生导师",
        bio: "肺病科学科带头人",
      },
      {
        name: "阙华发",
        role: "主任医师、二级教授、博士生导师",
        bio: `国家中医药管理局重点学科学科带头人
上海市顾氏外科流派第五代学术传承人
上海市医务工匠
擅长糖尿病足、静脉曲张性溃疡、周围血管病、甲状腺乳腺疾病等`,
      },
      {
        name: "方邦江",
        role: "主任医师、教授、博士生导师",
        bio: `急诊科主任
卫生部国家重点临床专科学科带头人`,
      },
      {
        name: "陈伟",
        role: "主任医师、教授、博士生导师",
        bio: `重症医学科主任
美国哈佛大学访问学者`,
      },
      {
        name: "夏翔",
        role: "主任医师、教授",
        bio: "擅长慢性胃炎、慢性肠炎、冠心病、高血压、脑中风后遗症等的中西医结合治疗",
      },
      {
        name: "彭生",
        role: "主任医师、教授",
        bio: `麻醉科主任
国家级麻醉学一流课程负责人
长期致力于围术期脑保护与脑功能调控研究`,
      },
    ],
  },
];

export default function LonghuaContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const stats = isZh ? overviewStatsZh : overviewStats;
  const specItems = isZh ? specialtiesZh : specialties;
  const otherItems = isZh ? otherSpecialtiesZh : otherSpecialties;
  const groups = isZh ? expertGroupsZh : expertGroups;

  return (
    <main
      role="main"
      aria-label="Longhua Hospital - TCM Clinical Base"
      className="min-h-screen bg-white"
    >
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured hospital asset */}
        <img
          src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-longhua.jpg"
          alt={isZh ? "上海龙华医院外观" : "Longhua Hospital exterior"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/85 via-orange-950/70 to-amber-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isZh
                ? "上海中医药大学附属龙华医院"
                : "Longhua Hospital Affiliated to Shanghai University of TCM"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {isZh
                ? "全国最早建立的四大中医临床基地之一"
                : "One of the Four Earliest Established TCM Clinical Bases Nationwide"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isZh
                ? "集医疗、教学、科研为一体的三级甲等中医医院 · 全国示范中医院"
                : "Grade 3A TCM Hospital integrating medical care, teaching and research · National Demonstration TCM Hospital"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "始建于1960年" : "Founded in 1960"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh
                  ? "2022年全国中医综合类医院绩效第一"
                  : "#1 in 2022 National TCM Hospital Performance"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "1750张床位" : "1,750 Beds"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-white text-amber-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
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
              <Reveal key={stat.label} className="bg-amber-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "上海中医药大学附属龙华医院创建于1960年7月，是全国最早建立的四大中医临床基地之一，也是一所集医疗、教学、科研为一体的三级甲等中医医院、全国示范中医院。医院现有徐汇、上南、航头三个院区，总核定床位1750张，现有员工3000余名。2025年门急诊人次536.38万，出院患者9.68万人次。"
                : "Longhua Hospital Affiliated to Shanghai University of TCM was established in July 1960. It is one of the four earliest TCM clinical bases established nationwide, and a Grade 3A TCM hospital integrating medical care, teaching and research, as well as a National Demonstration TCM Hospital. The hospital has three campuses: Xuhui, Shangnan and Hangtou, with a total of 1,750 approved beds and over 3,000 staff. In 2025, outpatient and emergency visits reached 5.36 million, with 96,800 discharged patients."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "医院坚持&quot;名医、名科、名院、名药&quot;的发展战略，在中医药治疗恶性肿瘤、骨退行性病变、肾病等领域具有显著优势，拥有国医大师2名、长江学者4名、岐黄学者4名、上海市名中医44名。2022年全国三级公立医院绩效考核中位列中医综合类医院第一。"
                : "The hospital adheres to the development strategy of &quot;Famous Doctors, Famous Departments, Famous Hospital, Famous Medicines&quot;. It has significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy and other fields. The hospital has 2 TCM Masters, 4 Changjiang Scholars, 4 Qihuang Scholars, and 44 Famous Shanghai TCM Doctors. It ranked first among comprehensive TCM hospitals in the 2022 National Public Hospital Performance Assessment."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== KEY SPECIALTIES ===== */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "优势治疗项目" : "Key Specialties"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "在中医药治疗恶性肿瘤、骨退行性病变、肾病等领域具有显著优势"
                : "Significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy and other fields"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specItems.map((spec) => (
              <Reveal
                key={spec.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-amber-600">{spec.title}</h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                    {spec.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">
              {isZh ? "其他特色专科" : "Other Featured Specialties"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherItems.map((item) => (
                <div key={item} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERT TEAM ===== */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "专家团队" : "Expert Team"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "汇聚国医大师、长江学者、岐黄学者等顶尖专家"
                : "Gathering top experts including TCM Masters, Changjiang Scholars, and Qihuang Scholars"}
            </p>
          </Reveal>
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
              {isZh ? "各科室核心专家" : "Core Experts by Department"}
            </h3>
            {groups.map((group) => (
              <Reveal key={group.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-amber-600 mb-6">
                  {group.title}
                </h4>
                {group.featured && (
                  <div className="mb-6 bg-amber-50 rounded-xl p-6">
                    <h5 className="font-bold text-amber-700 mb-2">
                      {group.featured.name}
                    </h5>
                    <p className="text-sm text-gray-600">{group.featured.role}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {group.experts.map((expert) => (
                    <div
                      key={expert.name}
                      className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors"
                    >
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        {expert.name}
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">{expert.role}</p>
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
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh
                ? "名医名科 · 传承创新"
                : "Famous Doctors &amp; Departments · Inheritance &amp; Innovation"}
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              {isZh
                ? "地址：上海市徐汇区宛平南路725号"
                : "Address: No. 725 Wanping South Road, Xuhui District, Shanghai"}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              {isZh ? "立即预约咨询" : "Book Consultation Now"}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
