// TCM-Integrated Proctology Surgery project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const stats = [
  { value: "80%", label: "Crohn's anal fistula healing rate" },
  { value: "15%", label: "Recurrence rate (far below international average)" },
  { value: "30-40%", label: "Reduction in healing time" },
];

const statsZh = [
  { value: "80%", label: "克罗恩病肛瘘愈合率" },
  { value: "15%", label: "复发率（远低于国际平均）" },
  { value: "30-40%", label: "愈合时间缩短" },
];

const conditions: { title: string; description: string }[] = [
  {
    title: "Complex Anal Fistula / Crohn's-related Fistula",
    description:
      "An anal fistula is an abnormal tunnel between the anal canal and surrounding skin, typically arising from a perianal abscess. Complex fistulas have multi-branching tracts passing through or near the sphincter muscle. Crohn's disease-related fistulas are highly prone to recurrence and are internationally recognised as one of the most challenging anorectal conditions to treat.",
  },
  {
    title: "Hemorrhoids (Mixed / Circumferential)",
    description:
      "Hemorrhoids are abnormally enlarged vascular cushions in the anal canal. Mixed hemorrhoids involve both internal and external components simultaneously. Chronic or prolonged bleeding may lead to anaemia.",
  },
];

const conditionsZh: { title: string; description: string }[] = [
  {
    title: "复杂性肛瘘/克罗恩病相关肛瘘",
    description:
      "肛瘘是肛管与周围皮肤之间的异常通道，通常由肛周脓肿引起。复杂性肛瘘具有多分支瘘管，穿过或靠近括约肌。克罗恩病相关肛瘘极易复发，被国际公认为最难治疗的肛肠疾病之一。",
  },
  {
    title: "混合痔（环状）",
    description:
      "痔疮是肛管内血管垫异常增大。混合痔同时涉及内痔和外痔成分。慢性或长期出血可能导致贫血。",
  },
];

const clinicalAdvantages: { title: string; description: string }[] = [
  {
    title: "Sphincter-Preserving · Function First",
    description:
      "Conventional fistulotomy risks partial sphincter damage and incontinence. Seton and Herbal Thread Therapy achieves gradual fistula closure through staged cutting and localised medication delivery — maximally preserving post-operative sphincter control and continence.",
  },
  {
    title: "Proprietary Formulations · Accelerated Healing",
    description:
      "Proprietary formulations — Jin Huang Ointment (reduces swelling), Bai Yu Ointment (tissue regeneration), Red Oil Ointment (debridement & healing) and oral Promoting Healing Granules — form a complete post-operative wound care system. Clinical data show a 30–40% reduction in healing time and significantly less scar formation.",
  },
  {
    title: "International Minimally Invasive Techniques",
    description:
      "Fully proficient in Video-Assisted Anal Fistula Treatment (VAAFT), Rectal Advancement Flap and Fistula Laser Closure (FiLaC) — expanding treatment options for patients unsuitable for conventional surgery.",
  },
  {
    title: "Holistic TCM Conditioning · Long-term Recurrence Prevention",
    description:
      "Beyond local treatment, personalised TCM conditioning — qi-tonifying herbal prescriptions, dietary guidance and bowel-habit improvement advice — to address the root causes of recurrence rather than merely treating the current episode.",
  },
  {
    title: "Minimally Invasive · Rapid Recovery (Hemorrhoids)",
    description:
      "For mixed hemorrhoids, combines sclerotherapy, banding and minimally invasive surgery — significantly reducing postoperative pain compared to traditional Milligan-Morgan hemorrhoidectomy. Patients can typically resume daily activities within 24–48 hours.",
  },
];

const clinicalAdvantagesZh: { title: string; description: string }[] = [
  {
    title: "保括约肌·功能优先",
    description:
      "传统瘘管切开术存在部分括约肌损伤和失禁风险。挂线疗法和药线疗法通过分阶段切割和局部给药实现瘘管逐渐闭合——最大程度保留术后括约肌控制和排便功能。",
  },
  {
    title: "院内制剂·加速愈合",
    description:
      "院内制剂——金黄膏（消肿）、白玉膏（组织再生）、红油膏（清创愈合）及口服促愈颗粒——形成完整的术后创面护理体系。临床数据显示愈合时间缩短30-40%，瘢痕形成显著减少。",
  },
  {
    title: "国际微创技术",
    description:
      "熟练掌握VAAFT视频辅助肛瘘治疗、直肠推进瓣和FiLaC激光闭合技术——为不适合传统手术的患者扩展治疗选择。",
  },
  {
    title: "中医整体调理·长期防复发",
    description:
      "除局部治疗外，个性化中医调理——补气中药方剂、饮食指导和排便习惯改善建议——解决复发的根本原因，而非仅治疗当前发作。",
  },
  {
    title: "微创·快速恢复（痔疮）",
    description:
      "对于混合痔，结合硬化剂注射、套扎和微创手术——与传统Milligan-Morgan痔切除术相比显著减轻术后疼痛。患者通常可在24-48小时内恢复日常活动。",
  },
];

const suitableCandidates = [
  "Complex or recurrent anal fistula, including Crohn's disease-related fistula or post-multiple-surgery recurrence",
  "Mixed hemorrhoids (including circumferential) seeking reduced postoperative pain and faster recovery",
  "Post-perianal abscess surgery requiring advanced wound management",
  "Patients seeking TCM-integrated care to reduce long-term recurrence risk",
  "Patients treated overseas with unsatisfactory outcomes, seeking a second opinion",
];

const suitableCandidatesZh = [
  "复杂性或复发性肛瘘，包括克罗恩病相关肛瘘或多次手术后复发",
  "混合痔（包括环状）寻求减轻术后疼痛和更快恢复",
  "肛周脓肿手术后需要先进创面管理",
  "寻求中西医结合护理以降低长期复发风险的患者",
  "在海外治疗效果不佳，寻求第二诊疗意见的患者",
];

const contraindications = [
  "Coagulation disorders or current anticoagulant medication",
  "Active flare of inflammatory bowel disease (Crohn's disease / ulcerative colitis)",
  "Severe local infection or active sepsis",
  "Pregnant women (certain procedures deferred to post-partum)",
  "Poorly controlled diabetes affecting wound healing",
];

const contraindicationsZh = [
  "凝血功能障碍或正在服用抗凝药物",
  "炎症性肠病（克罗恩病/溃疡性结肠炎）活动期",
  "严重局部感染或活动性败血症",
  "孕妇（某些手术推迟至产后）",
  "影响伤口愈合的糖尿病控制不佳",
];

const processSteps: {
  num: string;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    num: "1",
    title: "Online Enquiry & Symptom Assessment",
    duration: "1-3 days",
    description:
      "Contact MedKungfu via email — a brief description of your symptoms and medical history is all that is needed to get started. Prior medical records, surgical history or imaging (MRI, CT) are helpful but not required. MedKungfu will arrange a preliminary remote assessment with proctologists.",
  },
  {
    num: "2",
    title: "Travel & Itinerary Planning",
    duration: "3-7 days",
    description:
      "Once treatment intent is confirmed, MedKungfu assists with visa documentation (including hospital invitation letters), accommodation near the hospital, airport transfer arrangements, and a recommended stay duration based on the planned procedure and hospitalisation requirements.",
  },
  {
    num: "3",
    title: "Pre-treatment Specialist Assessment at Hospital",
    duration: "Day 1",
    description:
      "Upon arrival, a bilingual escort accompanies you to the hospital. The specialist conducts a comprehensive assessment: TCM constitution analysis; local lesion examination (including fistuloscopy and imaging review); personalised treatment plan formulation and procedure scheduling.",
  },
  {
    num: "4",
    title: "Procedure & Treatment",
    duration: "Procedure day",
    description:
      "Depending on condition: complex fistulas are treated with Seton / Herbal Thread Therapy or VAAFT / FiLaC; hemorrhoids with ligation, sclerotherapy or minimally invasive surgery. MedKungfu provides in-hospital interpretation throughout.",
  },
  {
    num: "5",
    title: "Post-operative Wound Care & Follow-up",
    duration: "Throughout stay",
    description:
      "Physicians conduct standardised dressing changes using proprietary formulations, assess wound healing progress regularly, and adjust seton tension or formulations as needed. MedKungfu coordinates transport and accompaniment for all follow-up visits.",
  },
  {
    num: "6",
    title: "Pre-departure Summary & Home Care Guidance",
    duration: "Before departure",
    description:
      "Upon completing the main treatment phase, the physician provides a bilingual written summary: home wound care instructions; dietary guidance; recurrence warning signs and management; long-term follow-up plan. MedKungfu continues to coordinate remote follow-up after the patient returns home.",
  },
];

const processStepsZh: {
  num: string;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    num: "1",
    title: "在线咨询与症状评估",
    duration: "1-3 days",
    description:
      "通过电子邮件联系MedKungfu——简要描述您的症状和病史即可开始。既往病历、手术史或影像资料（MRI、CT）有帮助但非必需。MedKungfu将安排肛肠科医生的初步远程评估。",
  },
  {
    num: "2",
    title: "行程规划",
    duration: "3-7 days",
    description:
      "确认治疗意向后，MedKungfu协助办理签证文件（包括医院邀请函）、医院附近住宿、机场接送安排，并根据计划的手术和住院要求推荐停留时间。",
  },
  {
    num: "3",
    title: "入院前专家评估",
    duration: "Day 1",
    description:
      "抵达后，双语陪同人员陪同您前往医院。专家进行全面评估：中医体质分析；局部病变检查（包括肛瘘镜和影像复查）；个性化治疗方案制定和手术排期。",
  },
  {
    num: "4",
    title: "手术与治疗",
    duration: "Procedure day",
    description:
      "根据病情：复杂性肛瘘采用挂线/药线疗法或VAAFT/FiLaC；痔疮采用结扎、硬化剂注射或微创手术。MedKungfu全程提供院内翻译。",
  },
  {
    num: "5",
    title: "术后创面护理与随访",
    duration: "Throughout stay",
    description:
      "医生使用院内制剂进行标准化换药，定期评估创面愈合进展，并根据需要调整挂线张力或配方。MedKungfu协调所有随访就诊的交通和陪同。",
  },
  {
    num: "6",
    title: "离院总结与居家护理指导",
    duration: "Before departure",
    description:
      "完成主要治疗阶段后，医生提供双语书面总结：居家创面护理说明；饮食指导；复发预警信号和管理；长期随访计划。患者回国后，MedKungfu继续协调远程随访。",
  },
];

const fullSupports: { title: string; description: string }[] = [
  {
    title: "Bilingual Interpretation",
    description:
      "Dedicated escort with full medical interpretation at every appointment. All records, reports and treatment plans provided in bilingual format for zero-barrier communication.",
  },
  {
    title: "Transport & Escort",
    description:
      "Airport transfer and dedicated escort to every appointment — no need to navigate the hospital independently.",
  },
  {
    title: "Dedicated Coordinator",
    description:
      "Personal coordinator manages all appointments, progress tracking, care arrangements and non-medical needs throughout the stay.",
  },
  {
    title: "Visa & Travel Support",
    description:
      "Support with medical visa invitation letters, arrival guidance and accommodation arrangements for patient and accompanying family.",
  },
];

const fullSupportsZh: { title: string; description: string }[] = [
  {
    title: "双语翻译",
    description:
      "每次就诊都有专属陪同和完整医疗翻译。所有记录、报告和治疗计划均提供双语格式，实现零障碍沟通。",
  },
  {
    title: "交通与陪同",
    description:
      "机场接送和每次就诊的专属陪同——无需独自在医院奔波。",
  },
  {
    title: "专属协调员",
    description:
      "个人协调员管理所有预约、进度跟踪、护理安排和住院期间的非医疗需求。",
  },
  {
    title: "签证与旅行支持",
    description:
      "支持医疗签证邀请函、抵达指导和患者及陪同家属的住宿安排。",
  },
];

export default function TcmProctologyContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const statList = isZh ? statsZh : stats;
  const conditionList = isZh ? conditionsZh : conditions;
  const advantageList = isZh ? clinicalAdvantagesZh : clinicalAdvantages;
  const candidateList = isZh ? suitableCandidatesZh : suitableCandidates;
  const contraindicationList = isZh ? contraindicationsZh : contraindications;
  const steps = isZh ? processStepsZh : processSteps;
  const supportList = isZh ? fullSupportsZh : fullSupports;

  return (
    <main
      role="main"
      aria-label="TCM-Integrated Proctology Surgery"
      className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
    >
      <div className="container-custom">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
            <div>
              <p className="text-lg text-emerald-200 mb-4 tracking-wider">
                Anorectal Care Programme
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                中西医结合肛肠科手术
              </h1>
              <p className="text-xl md:text-2xl text-emerald-200 mb-4">
                {isZh
                  ? "中西医结合微创治疗"
                  : "TCM-Integrated Minimally Invasive Treatment"}
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                {isZh
                  ? "顾氏外科传承 · 中西医结合 · 微创治疗 · 标本兼治"
                  : "Gu's Surgical Heritage · TCM-Western Integration · Minimally Invasive · Root & Symptom Treatment"}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  80% Crohn&apos;s肛瘘愈合率
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  15%复发率（远低于国际平均）
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  个性化方案
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  双语全程陪诊
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@medkungfu.com"
                  className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  {isZh ? "邮件咨询" : "Email Consultation"}
                </a>
                <a
                  href="#intro"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  {isZh ? "优势项目 → 了解详情 →" : "Medical Projects → Learn More →"}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* ===== STATS STRIP ===== */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {statList.map((stat) => (
                <Reveal key={stat.label} className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GU'S SURGICAL HERITAGE ===== */}
        <section id="intro" className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal x={-30}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                  {isZh
                    ? "顾氏外科传承 · 百年肛肠专科"
                    : "Gu's Surgical Heritage · Century-old Anorectal Specialty"}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {isZh
                    ? "传承百年\"顾氏外科\"学术积淀，将传统中医精髓与现代先进技术无缝融合，为复杂性肛瘘、混合痔等肛肠疾病患者提供精准、个性化的治疗方案。"
                    : "Inheriting the century-old academic accumulation of \"Gu's Surgery\", seamlessly integrating traditional Chinese medicine essence with modern advanced technology, providing precise and personalized treatment plans for patients with complex anorectal diseases such as complex anal fistulas and mixed hemorrhoids."}
                </p>
                <p className="text-gray-600 mb-6">
                  {isZh
                    ? "标准西方手术治疗复杂性或克罗恩病相关肛瘘存在显著的括约肌损伤风险和高复发率。我们采用挂线疗法、药线疗法结合国际先进的VAAFT视频辅助肛瘘治疗技术和FiLaC激光闭合技术，在临床括约肌保护率和复发率降低方面获得公认疗效。"
                    : "Standard Western surgical treatment for complex or Crohn's disease-related anal fistulas carries significant risk of sphincter damage and high recurrence rates. We adopt seton therapy, herbal thread therapy combined with internationally advanced VAAFT video-assisted anal fistula treatment and FiLaC laser closure technology, achieving recognized clinical efficacy in sphincter preservation and recurrence reduction."}
                </p>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <p className="text-emerald-700 font-medium">
                    {isZh
                      ? "院内制剂——金黄膏、红油膏、生肌散等——进一步加速创面愈合，减少瘢痕形成。"
                      : "Proprietary formulations — Jin Huang Ointment, Hong You Ointment, Sheng Ji San, etc. — further accelerate wound healing and reduce scar formation."}
                  </p>
                </div>
              </Reveal>
              <Reveal x={30} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                <img
                  src="/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160550-2173dba999ef-w800.jpg"
                  alt="TCM Proctology Treatment"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== TWO COMPLEX ANORECTAL CONDITIONS ===== */}
        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "两大肛肠疑难病症" : "Two Complex Anorectal Conditions"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isZh
                  ? "我们专注治疗的两种复杂肛肠疾病"
                  : "The two complex anorectal diseases we specialize in treating"}
              </p>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-8">
              {conditionList.map((item) => (
                <Reveal key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FIVE IRREPLACEABLE CLINICAL ADVANTAGES ===== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh
                  ? "五大不可替代的临床优势"
                  : "Five Irreplaceable Clinical Advantages"}
              </h2>
            </Reveal>
            <div className="space-y-8">
              {advantageList.map((adv, i) => (
                <Reveal key={adv.title} className="bg-emerald-50 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {i === 0 && <Icons.shield className="h-10 w-10" />}
                      {i === 1 && <Icons.heart className="h-10 w-10" />}
                      {i === 2 && <Icons.activity className="h-10 w-10" />}
                      {i === 3 && <Icons.stethoscope className="h-10 w-10" />}
                      {i === 4 && <Icons.clock className="h-10 w-10" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        {adv.title}
                      </h3>
                      <p className="text-gray-600">{adv.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SUITABLE CANDIDATES + CONTRAINDICATIONS ===== */}
        <section className="py-20 lg:py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Reveal x={-30}>
                <h2 className="text-3xl font-bold mb-8">
                  {isZh ? "适用人群" : "Suitable Candidates"}
                </h2>
                <div className="space-y-4">
                  {candidateList.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Icons.checkCircle className="text-emerald-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal x={30}>
                <h2 className="text-3xl font-bold mb-8">
                  {isZh ? "禁忌症" : "Contraindications"}
                </h2>
                <p className="text-gray-400 mb-6">
                  {isZh
                    ? "请在咨询时向医生如实告知以下情况——适用性需个体化评估"
                    : "Please inform your doctor truthfully about the following conditions during consultation — suitability requires individualized assessment"}
                </p>
                <div className="space-y-4">
                  {contraindicationList.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Icons.alertCircle className="text-rose-400 h-5 w-5" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-6 pt-4 border-t border-slate-700">
                  {isZh
                    ? "所有患者将在治疗前由专科医生评估，确认适用性并制定个体化方案。"
                    : "All patients will be assessed by specialists before treatment to confirm suitability and develop individualized plans."}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== ONE-STOP FULL-PROCESS ACCOMPANIMENT SERVICE ===== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh
                  ? "一站式全程陪诊服务"
                  : "One-stop Full-process Accompaniment Service"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isZh
                  ? "从在线咨询到返程随访，MedKungfu为每一位海外患者提供全程管家式服务"
                  : "From online inquiry to return follow-up, MedKungfu provides full butler-style service for every overseas patient"}
              </p>
            </Reveal>
            <div className="space-y-6">
              {steps.map((step) => (
                <Reveal key={step.num} className="bg-slate-50 rounded-2xl p-6 relative">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-bold text-[#1A1A2E] text-lg">
                          {step.title}
                        </h3>
                        <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BEYOND MEDICAL — FULL SUPPORT ===== */}
        <section className="py-20 lg:py-32 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "超越医疗的全程支持" : "Beyond Medical — Full Support"}
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportList.map((item, i) => (
                <Reveal key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {i === 0 && <Icons.globe className="h-8 w-8" />}
                    {i === 1 && <Icons.mapPin className="h-8 w-8" />}
                    {i === 2 && <Icons.users className="h-8 w-8" />}
                    {i === 3 && <Icons.award className="h-8 w-8" />}
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REFERENCE TREATMENT COST ===== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "参考治疗费用" : "Reference Treatment Cost"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isZh
                  ? "透明定价，全球价格优势无与伦比"
                  : "Transparent pricing, unparalleled global price advantage"}
              </p>
            </Reveal>
            <Reveal className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4">
                {isZh
                  ? "约$7,000（含中医康复）"
                  : "Approx. $7,000 (including TCM rehabilitation)"}
              </div>
              <p className="text-emerald-100 text-lg mb-6">
                {isZh
                  ? "具体费用以医院最终评估为准。"
                  : "Specific costs subject to final hospital assessment."}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-white/20 rounded-full">
                  ✓ 含手术费用
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full">
                  ✓ 含中医康复
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full">
                  ✓ 含住院护理
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section id="contact" className="py-20 lg:py-32 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isZh
                  ? "开启您的肛肠治疗之旅"
                  : "Start Your Anorectal Treatment Journey"}
              </h2>
              <p className="text-emerald-200 mb-4">
                {isZh
                  ? "联系我们进行免费初步评估"
                  : "Contact us for a free preliminary assessment"}
              </p>
              <p className="text-emerald-300 mb-8">
                {isZh
                  ? "医学顾问团队将在一小时内回复，并为您安排专业双语咨询服务"
                  : "Our medical advisory team will respond within one hour and arrange professional bilingual consultation for you"}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@medkungfu.com"
                  className="px-8 py-4 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  {isZh ? "邮件咨询" : "Email Consultation"}
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  {isZh ? "在线留言" : "Online Inquiry"}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  );
}
