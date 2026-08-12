// Sun Yat-sen Memorial Hospital detail page — transcribed verbatim from
// docs/research/www-medkungfu-com-363c9bc1/sun-yat-sen-memorial/rendered.html.
// Red theme (red/rose) matching the captured DOM.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const STATS = [
  { value: "1835", label: "Founded" },
  { value: "7", label: "National Key Disciplines" },
  { value: "17", label: "National Clinical Key Specialties" },
  {
    value: "4 Major Organs",
    label: "Transplant Qualification (Heart/Liver/Kidney/Lung)",
  },
  { value: "First in China", label: "First Western Medicine Hospital" },
];

const STATS_ZH = [
  { value: "1835年", label: "建院时间" },
  { value: "7个", label: "国家重点学科" },
  { value: "17个", label: "国家临床重点专科" },
  { value: "四大器官", label: "移植资质（心肝肾肺）" },
  { value: "中国第一", label: "首家西医医院" },
];

const SPECIALTIES = [
  {
    title: "Breast Tumor Center",
    badge: "First Public Breast Tumor Hospital in China",
    subtitle: "Led by Academician Team",
    items: [
      "Regularly performs breast-conserving surgery and postoperative breast reconstruction",
      "Breast cancer breast-conserving rate up to 57%",
      "Leading breast-conserving surgery technology nationwide",
      "Significant advantages in comprehensive breast cancer treatment",
    ],
  },
  {
    title: "Oncology",
    badge: "National Clinical Key Specialty",
    subtitle: "Individualized comprehensive treatment for common malignant tumors",
    items: [
      "Significant advantages in comprehensive treatment of breast cancer, nasopharyngeal carcinoma, gastrointestinal tumors",
      "Individualized comprehensive treatment for lung cancer, liver cancer and other common malignant tumors",
      "Multidisciplinary collaborative diagnosis and treatment model",
      "Provides comprehensive tumor treatment plans",
    ],
  },
  {
    title: "Cardiology",
    badge: "National Clinical Key Specialty",
    subtitle:
      "Interventional treatment for coronary heart disease, arrhythmia and heart failure",
    items: [
      "Over 5,000 coronary angiography procedures annually",
      "Mature radiofrequency ablation and pacemaker implantation technology",
      "Rich experience in coronary heart disease interventional treatment",
      "Leading level in arrhythmia diagnosis and treatment nationwide",
    ],
  },
  {
    title: "Urology",
    badge: "National Clinical Key Specialty",
    subtitle: "Deep historical heritage, pioneered multiple domestic records",
    items: [
      "Particularly skilled in using Da Vinci robot for minimally invasive surgery",
      "Minimally invasive treatment for bladder cancer, prostate cancer and other urological tumors",
      "Urological surgical technology at international advanced level",
      "High proportion of minimally invasive surgery, fast patient recovery",
    ],
  },
  {
    title: "Obstetrics & Gynecology",
    badge: "Excellent Performance and Deep Accumulation",
    subtitle: "Gynecological tumors, reproductive medicine, recurrent miscarriage prevention",
    items: [
      "Diagnosis and treatment of cervical cancer, ovarian cancer and other gynecological tumors",
      "IVF success rate > 65%",
      "Prevention and treatment of recurrent miscarriage and premature birth",
      "Diagnosis and treatment of reproductive endocrine diseases",
    ],
  },
  {
    title: "Other Advantageous Specialties",
    badge: "Multidisciplinary Collaborative Development",
    subtitle: "Orthopedics, Endocrinology, Neurology, etc.",
    items: [
      "Orthopedics: mature scoliosis correction and joint replacement technology",
      "Endocrinology: diabetes and thyroid disease diagnosis and treatment",
      "Neurology: rich clinical experience in Parkinson's disease, epilepsy and other diseases",
    ],
  },
];

const SPECIALTIES_ZH = [
  {
    title: "乳腺肿瘤中心",
    badge: "国内首个公立乳腺肿瘤医院",
    subtitle: "以院士团队为引领",
    items: [
      "常规开展保乳手术及术后乳房重建等精准治疗",
      "乳腺癌保乳率高达57%",
      "保乳手术技术全国领先",
      "在乳腺癌综合治疗方面具有显著优势",
    ],
  },
  {
    title: "肿瘤科",
    badge: "国家临床重点专科",
    subtitle: "常见恶性肿瘤个体化综合治疗",
    items: [
      "在乳腺癌、鼻咽癌、胃肠肿瘤的综合治疗方面优势显著",
      "肺癌、肝癌等常见恶性肿瘤的个体化综合治疗",
      "多学科协作诊疗模式",
      "提供全方位肿瘤治疗方案",
    ],
  },
  {
    title: "心血管内科",
    badge: "国家临床重点专科",
    subtitle: "冠心病、心律失常及心力衰竭介入治疗",
    items: [
      "年冠脉造影手术超5000例",
      "射频消融与起搏器植入技术成熟",
      "在冠心病介入治疗方面经验丰富",
      "心律失常诊治水平国内领先",
    ],
  },
  {
    title: "泌尿外科",
    badge: "国家临床重点专科",
    subtitle: "科室历史底蕴深厚，首创多项国内纪录",
    items: [
      "特别擅长使用达芬奇机器人进行微创手术",
      "膀胱癌、前列腺癌等泌尿系肿瘤微创治疗",
      "泌尿外科手术技术处于国际先进水平",
      "微创手术比例高，患者恢复快",
    ],
  },
  {
    title: "妇产科",
    badge: "卓越表现和深厚积累",
    subtitle: "妇科肿瘤、生殖医学、复发性流产防治",
    items: [
      "宫颈癌、卵巢癌等妇科肿瘤诊治",
      "试管婴儿成功率＞65%",
      "复发性流产及早产防治",
      "生殖内分泌疾病诊治",
    ],
  },
  {
    title: "其他优势专科",
    badge: "多学科协同发展",
    subtitle: "骨科、内分泌科、神经内科等",
    items: [
      "骨科：脊柱侧弯矫形、关节置换技术成熟",
      "内分泌科：糖尿病、甲状腺疾病诊治",
      "神经内科：帕金森病、癫痫等疾病丰富临床经验",
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
    department: "Breast Tumor Center",
    featured: { name: "Song Erwei", role: "Academician" },
    experts: [
      {
        name: "Song Erwei",
        role: "Academician",
        bio: `Top expert in breast tumor field
Academician of Chinese Academy of Sciences
Leads the development of Breast Tumor Center`,
      },
      {
        name: "Liu Qiang",
        role: "Chief Physician",
        bio: `Core expert of Breast Tumor Center
Expert in comprehensive breast cancer treatment`,
      },
      {
        name: "Su Fengxi",
        role: "Chief Physician",
        bio: `Core expert of Breast Tumor Center
Experienced in breast disease diagnosis and treatment`,
      },
    ],
  },
  {
    department: "Medical Oncology",
    featured: {
      name: "Li Heping",
      role: "Department Director, Chief Physician",
    },
    experts: [
      {
        name: "Li Heping",
        role: "Department Director, Chief Physician",
        bio: `Head of Medical Oncology
Expert in comprehensive treatment of various malignant tumors`,
      },
      {
        name: "Li Zhihua",
        role: "Deputy Department Director, Chief Physician",
        bio: `Deputy Director of Medical Oncology
Rich experience in individualized tumor treatment`,
      },
      {
        name: "Qiu Xingsheng",
        role: "Radiotherapy Specialist, Chief Physician",
        bio: `Radiotherapy specialist
Expert in tumor radiotherapy`,
      },
    ],
  },
  {
    department: "Cardiology",
    featured: {
      name: "Wang Jingfeng",
      role: "Department Director, Chief Physician",
    },
    experts: [
      {
        name: "Wang Jingfeng",
        role: "Department Director, Chief Physician",
        bio: `Head of Cardiology
Expert in cardiovascular disease diagnosis and treatment`,
      },
      {
        name: "Liu Pinming",
        role: "Director of Coronary Heart Disease Sub-specialty, Chief Physician",
        bio: `Head of Coronary Heart Disease Sub-specialty
Over 5,000 coronary angiography procedures annually
Mature radiofrequency ablation and pacemaker implantation technology`,
      },
      {
        name: "Xie Shuanglun",
        role: "Director of Internal Medicine, Chief Physician",
        bio: `Director of Internal Medicine
Rich experience in comprehensive cardiovascular disease treatment`,
      },
    ],
  },
  {
    department: "Urology",
    featured: { name: "Huang Jian", role: "Department Director, Chief Physician" },
    experts: [
      {
        name: "Huang Jian",
        role: "Department Director, Chief Physician",
        bio: `Head of Urology
Expert in urological disease diagnosis and treatment`,
      },
      {
        name: "He Wang",
        role: "Executive Deputy Director, Chief Physician",
        bio: `Executive Deputy Director of Urology
Experienced in urological surgery`,
      },
      {
        name: "Dong Wen",
        role: "Director of Urological Tumor Specialty, Chief Physician",
        bio: `Director of Urological Tumor Specialty
Particularly skilled in using Da Vinci robot for minimally invasive surgery of bladder cancer, prostate cancer and other urological tumors`,
      },
    ],
  },
  {
    department: "Obstetrics & Gynecology / Reproductive Center",
    experts: [
      {
        name: "Zhang Jianping",
        role: "Director of Obstetrics, Chief Physician",
        bio: `Director of Obstetrics
Particularly skilled in recurrent miscarriage and premature birth prevention
Experienced in obstetric critical care`,
      },
      {
        name: "Yang Dongzi",
        role: "Reproductive Center, Chief Physician",
        bio: `Reproductive center expert
Expert in reproductive endocrinology, PCOS and assisted reproductive technology
IVF success rate > 65%`,
      },
    ],
  },
];

const EXPERT_BLOCKS_ZH: ExpertBlock[] = [
  {
    department: "乳腺肿瘤中心",
    featured: { name: "宋尔卫", role: "院士" },
    experts: [
      {
        name: "宋尔卫",
        role: "院士",
        bio: `乳腺肿瘤领域顶尖专家
中国科学院院士
引领乳腺肿瘤中心发展`,
      },
      {
        name: "刘强",
        role: "主任医师",
        bio: `乳腺肿瘤中心核心专家
擅长乳腺癌综合治疗`,
      },
      {
        name: "苏逢锡",
        role: "主任医师",
        bio: `乳腺肿瘤中心核心专家
在乳腺疾病诊治方面经验丰富`,
      },
    ],
  },
  {
    department: "肿瘤内科",
    featured: {
      name: "李鹤平",
      role: "科室主任、主任医师",
    },
    experts: [
      {
        name: "李鹤平",
        role: "科室主任、主任医师",
        bio: `肿瘤内科负责人
擅长各类恶性肿瘤的综合治疗`,
      },
      {
        name: "李志花",
        role: "科室副主任、主任医师",
        bio: `肿瘤内科副主任
在肿瘤个体化治疗方面有丰富经验`,
      },
      {
        name: "邱幸生",
        role: "放疗专科、主任医师",
        bio: `放疗专科专家
擅长肿瘤放射治疗`,
      },
    ],
  },
  {
    department: "心血管内科",
    featured: {
      name: "王景峰",
      role: "科室主任、主任医师",
    },
    experts: [
      {
        name: "王景峰",
        role: "科室主任、主任医师",
        bio: `心血管内科负责人
擅长心血管疾病诊治`,
      },
      {
        name: "刘品明",
        role: "冠心病亚专科主任、主任医师",
        bio: `冠心病亚专科负责人
年冠脉造影手术超5000例
射频消融与起搏器植入技术成熟`,
      },
      {
        name: "谢双伦",
        role: "内科主任、主任医师",
        bio: `内科主任
在心血管疾病综合治疗方面经验丰富`,
      },
    ],
  },
  {
    department: "泌尿外科",
    featured: { name: "黄健", role: "科室主任、主任医师" },
    experts: [
      {
        name: "黄健",
        role: "科室主任、主任医师",
        bio: `泌尿外科负责人
擅长泌尿系疾病诊治`,
      },
      {
        name: "何旺",
        role: "常务副主任、主任医师",
        bio: `泌尿外科常务副主任
在泌尿外科手术方面经验丰富`,
      },
      {
        name: "董文",
        role: "泌尿系肿瘤专科主任、主任医师",
        bio: `泌尿系肿瘤专科主任
特别擅长使用达芬奇机器人进行膀胱癌、前列腺癌等泌尿系肿瘤的微创手术`,
      },
    ],
  },
  {
    department: "妇产科 & 生殖中心",
    experts: [
      {
        name: "张建平",
        role: "产科主任、主任医师",
        bio: `产科主任
尤其擅长复发性流产、早产防治
在产科危急重症救治方面经验丰富`,
      },
      {
        name: "杨冬梓",
        role: "生殖中心、主任医师",
        bio: `生殖中心专家
擅长生殖内分泌、多囊卵巢综合征及辅助生殖技术
试管婴儿成功率＞65%`,
      },
    ],
  },
];

export function SunYatSenMemorialPage() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const stats = isZh ? STATS_ZH : STATS;
  const specialties = isZh ? SPECIALTIES_ZH : SPECIALTIES;
  const expertBlocks = isZh ? EXPERT_BLOCKS_ZH : EXPERT_BLOCKS;
  return (
    <main
      role="main"
      aria-label="Sun Yat-sen Memorial Hospital - First Western Hospital in China"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <Image
          src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-sun-yatsen.jpg"
          alt={isZh ? "中山大学孙逸仙纪念医院外观" : "Sun Yat-sen Memorial Hospital exterior"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/85 via-rose-950/70 to-red-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isZh ? "中山大学孙逸仙纪念医院" : "Sun Yat-sen Memorial Hospital"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {isZh
                ? "中山大学附属第二医院"
                : "The Second Affiliated Hospital of Sun Yat-sen University"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isZh
                ? "中国第一家西医医院 · 中国西医学和西医教育的发源地"
                : "China&apos;s First Western Medicine Hospital · Birthplace of Western Medicine and Medical Education in China"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "始建于1835年" : "Founded in 1835"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "7个国家重点学科" : "7 National Key Disciplines"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "四大器官移植资质" : "4 Major Organ Transplant Qualification"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intro"
                className="px-8 py-3 bg-white text-red-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
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
                className="bg-red-50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "中山大学孙逸仙纪念医院（中山大学附属第二医院）创建于1835年，是中国第一家西医医院，也是中国西医学和西医教育的发源地。如今，它已发展成为一所集医疗、教学、科研于一体的大型三级甲等综合性医院，拥有7个国家重点学科和17个国家临床重点专科，综合实力雄厚。"
                : "Sun Yat-sen Memorial Hospital (The Second Affiliated Hospital of Sun Yat-sen University) was founded in 1835. It is China&apos;s first Western medicine hospital and the birthplace of Western medicine and medical education in China. Today, it has developed into a large Grade 3A comprehensive hospital integrating medical care, teaching and research, with 7 national key disciplines and 17 national clinical key specialties, demonstrating strong comprehensive strength."}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isZh
                ? "作为广东省高水平医院，医院还具备心、肝、肺、肾四大器官移植资质。医院的多个优势专科在全国都极具影响力，包括乳腺肿瘤中心、肿瘤科、心血管内科、泌尿外科、妇产科等。"
                : "As a high-level hospital in Guangdong Province, the hospital also has transplant qualifications for four major organs: heart, liver, lung and kidney. Many of the hospital&apos;s advantageous specialties are highly influential nationwide, including the Breast Tumor Center, Oncology, Cardiology, Urology, Obstetrics &amp; Gynecology, etc."}
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
                ? "多个优势专科在全国都极具影响力"
                : "Multiple advantageous specialties are highly influential nationwide"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((spec) => (
              <Reveal
                key={spec.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-red-600">{spec.title}</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                    {spec.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{spec.subtitle}</p>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Icons.checkCircle
                        className="text-red-600 mt-0.5 flex-shrink-0 h-4 w-4"
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
              {isZh ? "专家团队" : "Expert Team"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? "汇聚院士、知名专家领衔的顶尖医疗团队"
                : "Gathering top medical teams led by academicians and renowned experts"}
            </p>
          </Reveal>
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
              {isZh ? "各科室核心专家" : "Core Experts by Department"}
            </h3>
            {expertBlocks.map((block) => (
              <Reveal key={block.department} className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-red-600 mb-6">
                  {block.department}
                </h4>
                {block.featured && (
                  <div className="mb-6 bg-red-50 rounded-xl p-6">
                    <h5 className="font-bold text-red-700 mb-2">
                      {block.featured.name}
                    </h5>
                    <p className="text-sm text-gray-600">{block.featured.role}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {block.experts.map((expert) => (
                    <div
                      key={expert.name}
                      className="border border-gray-200 rounded-xl p-6 hover:border-red-300 transition-colors"
                    >
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        {expert.name}
                      </h5>
                      <p className="text-sm text-red-600 mb-3">{expert.role}</p>
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
      <section className="py-20 bg-gradient-to-br from-red-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh
                ? "百年名院 · 传承创新"
                : "Century-old Famous Hospital · Inheritance &amp; Innovation"}
            </h2>
            <p className="text-xl text-red-100 mb-8">
              {isZh ? "地址：广州市沿江西路107号" : "Address: No. 107 Yanjiang West Road, Guangzhou"}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              {isZh ? "立即预约咨询" : "Book Consultation Now"}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
