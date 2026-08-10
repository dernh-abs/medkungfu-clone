// Painless Endoscopy project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { FAQAccordion, type FAQItem } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/FAQAccordion";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const whyChooseItems: { title: string; description: string }[] = [
  {
    title: "1. Leading Equipment & Technology",
    description:
      "China's top medical centers are equipped with gastroscopy systems synchronized with international standards, using the latest flagship endoscopy platforms from global mainstream manufacturers.",
  },
  {
    title: "2. No Long Waiting Times",
    description:
      "Western countries: specialist appointments often require 30+ days (US) or 18+ weeks in public systems (UK). In China: from initial consultation to examination completion, can be arranged in as little as 3-5 working days.",
  },
  {
    title: "3. Visa Convenience Support",
    description:
      "China has implemented visa-free or visa-on-arrival policies for 75 countries. Citizens of other countries can quickly obtain medical visas with our official medical invitation letter.",
  },
];

const whyChooseItemsZh: { title: string; description: string }[] = [
  {
    title: "1. 设备与技术领先",
    description:
      "中国顶级医疗中心配备的胃肠镜系统与国际同步，采用全球主流厂商最新旗舰内镜平台。",
  },
  {
    title: "2. 无需漫长等待",
    description:
      "西方国家：专科预约常需30天以上（美国）或公立系统18周以上（英国）。在中国：从首次咨询到完成检查，最快3-5个工作日即可安排。",
  },
  {
    title: "3. 签证便利支持",
    description:
      "中国已对75个国家实行免签或落地签。其他国家可凭我们出具的正式医疗邀请函快速办理医疗签证。",
  },
];

const stats: { value: string; label: string }[] = [
  { value: "3-5 Days", label: "Fastest Arrangement" },
  { value: "3-4 Hours", label: "Total Duration" },
  { value: "Same Day", label: "Preliminary Report" },
  { value: "75 Countries", label: "Visa-Free/On-Arrival" },
];

const statsZh: { value: string; label: string }[] = [
  { value: "3-5天", label: "最快安排检查" },
  { value: "3-4小时", label: "全程完成" },
  { value: "当日", label: "出初步报告" },
  { value: "75国", label: "免签或落地签" },
];

const detectableIssues = [
  "Inflammation",
  "Erosion",
  "Ulcer",
  "Polyps",
  "Early Cancer",
];

const detectableIssuesZh = ["炎症", "糜烂", "溃疡", "息肉", "早期癌症"];

const whoIsItFor = [
  "Age ≥40 (recommended by international guidelines for routine screening)",
  "Family history of gastric or colorectal cancer",
  "Digestive symptoms (acid reflux, abdominal pain, blood in stool, changes in bowel habits)",
  "Long-term use of aspirin or non-steroidal anti-inflammatory drugs",
  "Previous history of polyps requiring follow-up",
];

const whoIsItForZh = [
  "年龄≥40岁（国际指南推荐常规筛查）",
  "有胃癌或结直肠癌家族史",
  "存在消化道症状（反酸、腹痛、便血、排便习惯改变）",
  "长期服用阿司匹林或非甾体抗炎药",
  "既往有息肉史，需复查",
];

const notSuitable = [
  "Severe cardiopulmonary disease",
  "Uncorrected coagulation disorders",
  "Acute intestinal obstruction",
  "Other conditions determined by physician assessment",
];

const notSuitableZh = [
  "严重心肺疾病",
  "未纠正的凝血功能障碍",
  "急性肠梗阻",
  "其他由医生评估确定的情况",
];

const processStep1 = [
  "Chinese-English health advisors remotely collect health information, medical history, medication details, allergy history",
  "Gastroenterologist + anesthesiologist jointly assess and develop personalized examination plan",
  "Guide safe discontinuation of anticoagulants, provide low-fiber diet guidance and split-dose bowel preparation",
  "Issue official medical visa invitation letter",
  "Assist with booking partner hotels near the hospital",
];

const processStep1Zh = [
  "中英文健康顾问远程采集健康信息、病史、用药情况、过敏史",
  "消化科医生+麻醉科医生共同评估，制定个性化检查方案",
  "指导安全停用抗凝药、提供低纤维饮食指导和分剂量清肠法",
  "出具正式医疗签证邀请函",
  "协助预订医院附近合作酒店",
];

const processStep2 = [
  "Dinner: low-fiber meal (congee, white bread, noodles, peeled melons)",
  "Take split-dose bowel preparation as per written instructions (once in evening, once early morning on examination day)",
  "No solid food after dinner, clear water allowed until 4 hours before examination",
  "Receive detailed bilingual preparation guide",
];

const processStep2Zh = [
  "晚餐进食低纤维餐（粥、白面包、面条、去皮的瓜类）",
  "按书面说明服用分剂量清肠剂（傍晚一次，检查当天清晨一次）",
  "晚餐后禁食固体食物，可饮清水直至检查前4小时",
  "收到中英文对照的详细准备指南",
];

const processTimeline: { time: string; text: string }[] = [
  { time: "9:00", text: "Arrive at VIP International Medical Center, personal reception, sign bilingual informed consent, change clothes" },
  { time: "9:30", text: "Establish IV access, anesthesiologist administers propofol - fall asleep within 30 seconds" },
  { time: "9:45", text: "Gastroscopy (5-8 min) + colonoscopy (15-20 min) - completely painless" },
  { time: "10:15", text: "If ≤3 small polyps found → immediate cold snare resection, painless, no memory" },
  { time: "10:30", text: "Wake up in recovery room, professional nurses continuously monitor vital signs for ~45 minutes" },
  { time: "11:30", text: "Light refreshments provided, attending physician explains preliminary endoscopy report face-to-face (with color images)" },
  { time: "12:00", text: "Discharge (advised not to drive, drink alcohol, or operate precision instruments on the same day)" },
];

const processTimelineZh: { time: string; text: string }[] = [
  { time: "9:00", text: "到达VIP国际医疗中心，专人接待，签署中英文知情同意书，更衣" },
  { time: "9:30", text: "建立静脉通路，麻醉医生推注丙泊酚——30秒内入睡" },
  { time: "9:45", text: "胃镜（5-8分钟）+结肠镜（15-20分钟）——完全无感觉" },
  { time: "10:15", text: "若发现≤3颗小息肉→即时冷切除，无痛、无记忆" },
  { time: "10:30", text: "在复苏室醒来，专业护士持续监护生命体征约45分钟" },
  { time: "11:30", text: "提供清淡点心，主治医生当面解读初步内镜报告（含彩色图片）" },
  { time: "12:00", text: "离院（建议当日不驾驶、不饮酒、不操作精密仪器）" },
];

const processStep4 = [
  "Within 24 hours: dedicated health advisor calls/messages with precautions",
  "Remote follow-up (video or voice), assess recovery and provide further recommendations",
  "Establish lifetime electronic health records",
  "If issues requiring further treatment are found, activate green referral channel to top-tier hospitals",
];

const processStep4Zh = [
  "检查后24小时内：专属健康顾问电话/消息提醒注意事项",
  "远程随访（视频或语音），评估恢复情况及后续建议",
  "建立终身电子健康档案",
  "如发现需要进一步治疗的问题，启动三甲医院绿色转诊通道",
];

const packageIncludes = [
  "Anesthesia assessment + IV anesthesia",
  "Combined gastroscopy + colonoscopy",
  "Biopsy (≤3 sites)",
  "C13 breath test (Helicobacter pylori)",
  "ECG + coagulation function + CBC/biochemistry",
  "Cold snare polyp resection (≤3 polyps)",
  "Extended post-operative recovery room monitoring",
  "Bilingual reports + 24-hour emergency contact",
];

const packageIncludesZh = [
  "麻醉评估+静脉麻醉",
  "胃镜+结肠镜联合检查",
  "活检（≤3部位）",
  "碳13呼气试验（幽门螺杆菌）",
  "心电图+凝血功能+血常规/生化",
  "息肉冷切除（≤3颗）",
  "术后恢复室监护延长",
  "中英文报告+24小时紧急联系",
];

const qualityStandards: { title: string; description: string }[] = [
  {
    title: "Endoscopy Equipment",
    description:
      "Olympus/Fujifilm HD systems with narrow-band imaging (NBI) and magnifying endoscopy",
  },
  {
    title: "Anesthesia Management",
    description:
      "Propofol IV anesthesia with continuous monitoring by attending anesthesiologist - cardiopulmonary complication rate <0.1%",
  },
  {
    title: "Bowel Preparation",
    description:
      "Split-dose bowel preparation following latest ASGE/ESGE 2024-2025 guidelines",
  },
  {
    title: "Infection Control",
    description:
      "Endoscope cleaning and disinfection process complies with ISO 15883 standards, disposable consumables for each patient",
  },
  {
    title: "Laboratory Certification",
    description:
      "Pathology and genetic testing certified to ISO 15189 international standards",
  },
  {
    title: "Privacy Protection",
    description:
      "VIP international independent area, gender-separated examinations, private rooms, encrypted health data",
  },
];

const qualityStandardsZh: { title: string; description: string }[] = [
  {
    title: "内镜设备",
    description: "奥林巴斯/富士高清系统，配备窄带成像（NBI）、放大内镜",
  },
  {
    title: "麻醉管理",
    description: "丙泊酚静脉麻醉，由主治麻醉医师全程监护——心肺并发症率<0.1%",
  },
  {
    title: "肠道准备",
    description: "分剂量清肠法，遵循ASGE/ESGE 2024-2025最新指南",
  },
  {
    title: "感染控制",
    description: "内镜清洗消毒流程符合ISO 15883标准，每例患者使用一次性耗材",
  },
  {
    title: "实验室认证",
    description: "病理及基因检测通过ISO 15189国际认证",
  },
  {
    title: "隐私保护",
    description: "VIP国际独立区域，男女分检，独立诊室，健康数据加密",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Is the examination really painless?",
    answer:
      "Yes. Under short-acting IV anesthesia (propofol), you will fall asleep within about 30 seconds and enter a comfortable sleep state for 20-30 minutes. The combined gastroscopy and colonoscopy are completed completely painlessly, and you wake up in the recovery room without any discomfort or memory of the procedure.",
  },
  {
    question: "What if polyps are found?",
    answer:
      "If ≤3 small polyps are found, they are removed immediately during the same session using the cold snare resection technique - examination becomes treatment, no second appointment needed. Any additional costs for extra polyp removal (>3) or special treatments are disclosed to you in advance.",
  },
  {
    question: "How soon can I fly home after the procedure?",
    answer:
      "You are advised not to drive, drink alcohol, or operate precision instruments on the same day. Most patients can safely travel home the following day once the anesthesia has fully cleared. Our health advisor will provide personalized guidance based on your recovery.",
  },
  {
    question:
      "Are the reports in English? Can they be used for insurance claims or shown to my family doctor?",
    answer:
      "Yes. Bilingual reports with color images are provided, and pathology and genetic testing are certified to ISO 15189 international standards. The reports can be shown to your family doctor or submitted for insurance claims.",
  },
  {
    question: "Do I need someone to accompany me?",
    answer:
      "It is recommended due to the IV anesthesia. Our English-speaking health advisor provides one-on-one accompaniment throughout - reception, informed consent, examination, and recovery room monitoring - so you are well supported even if you travel alone.",
  },
  {
    question: "Can I drink water before the examination?",
    answer:
      "No solid food is allowed after dinner the night before. Clear water is allowed until 4 hours before the examination, following the split-dose bowel preparation schedule and the detailed bilingual preparation guide provided in advance.",
  },
  {
    question: "I have high blood pressure/diabetes, can I still do this?",
    answer:
      "In most cases, yes. The gastroenterologist and anesthesiologist jointly assess your condition and medication history in advance to develop a personalized examination plan. Specific contraindications are determined by physician assessment.",
  },
];

const faqItemsZh: FAQItem[] = [
  {
    question: "检查真的不痛吗？",
    answer:
      "是的。丙泊酚静脉麻醉让您进入短暂睡眠，全程无记忆、无痛感。绝大多数患者醒来后问\"什么时候开始做？\"",
  },
  {
    question: "如果发现息肉怎么办？",
    answer:
      "若为≤3颗的小息肉，我们当场用冷圈套技术切除，检查即治疗。较大或可疑息肉会建议择期内镜下切除（我们会安排三甲医院绿色通道）。",
  },
  {
    question: "做完多久可以坐飞机回国？",
    answer:
      "建议麻醉后留出24小时再乘坐长途航班。这既保证您充分恢复，也避免极罕见的术后延迟出血风险。我们可协助您调整离境时间。",
  },
  {
    question: "报告是英文的吗？回国后能用于保险报销或给家庭医生看吗？",
    answer:
      "可以。我们提供专业中英文双语报告，内含详细描述、内镜图片、病理结果（如有）。该格式被国际保险公司和国外家庭医生广泛接受。",
  },
  {
    question: "需要有人陪同吗？",
    answer:
      "需要。麻醉后24小时内不能驾驶、签署法律文件或独自一人。若您独自前来，我们可以安排专业护工陪护（额外收费，需提前预约）。",
  },
  {
    question: "检查前能喝水吗？",
    answer:
      "可以。禁食固体后，清水、清苹果汁、黑咖啡/茶（不加奶）允许喝到检查前4小时。您会收到详细的英文指导。",
  },
  {
    question: "我有高血压/糖尿病，能做吗？",
    answer:
      "多数情况下可以。我们会要求您提供近期用药情况和相关检查报告，麻醉医生和消化科医生会联合评估风险，必要时请国内专科医生会诊。",
  },
];

const travelSupport: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.plane,
    title: "Visa Assistance",
    description: "Provide official medical invitation letter for visa application",
  },
  {
    icon: Icons.globe,
    title: "Language Services",
    description: "English-speaking coordinator throughout (other languages available upon request)",
  },
  {
    icon: Icons.mapPin,
    title: "Transportation & Accommodation",
    description: "Airport transfers, premium hotel partnership rates",
  },
  {
    icon: Icons.award,
    title: "Travel Extension",
    description: "Customizable cultural or leisure itineraries",
  },
];

const travelSupportZh: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.plane,
    title: "签证协助",
    description: "提供正式医疗邀请函，支持医疗签证申请",
  },
  {
    icon: Icons.globe,
    title: "语言服务",
    description: "全程英文协调员（其他语种可提前预约）",
  },
  {
    icon: Icons.mapPin,
    title: "交通住宿",
    description: "机场接送、高端酒店合作价",
  },
  {
    icon: Icons.award,
    title: "旅行延展",
    description: "可定制文化或休闲行程",
  },
];

export default function PainlessEndoscopyContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const choose = isZh ? whyChooseItemsZh : whyChooseItems;
  const statList = isZh ? statsZh : stats;
  const issues = isZh ? detectableIssuesZh : detectableIssues;
  const audience = isZh ? whoIsItForZh : whoIsItFor;
  const unsuitable = isZh ? notSuitableZh : notSuitable;
  const step1 = isZh ? processStep1Zh : processStep1;
  const step2 = isZh ? processStep2Zh : processStep2;
  const timeline = isZh ? processTimelineZh : processTimeline;
  const step4 = isZh ? processStep4Zh : processStep4;
  const includes = isZh ? packageIncludesZh : packageIncludes;
  const standards = isZh ? qualityStandardsZh : qualityStandards;
  const faqList = isZh ? faqItemsZh : faqItems;
  const support = isZh ? travelSupportZh : travelSupport;

  return (
    <main
      role="main"
      aria-label="Painless Endoscopy - Advanced Gastrointestinal Examination"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <p className="text-lg text-teal-200 mb-4 tracking-wider">
              {isZh ? "内镜检查项目" : "Endoscopy Programme"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isZh ? "高端国际无痛胃肠镜" : "Premium International Painless Endoscopy"}
            </h1>
            <p className="text-xl md:text-2xl text-teal-200 mb-4">
              {isZh ? "Painless Endoscopy Package" : "无痛内镜套餐"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
              {isZh
                ? "消化道深度筛查 · 无痛无忧 · 当日完成 · 国际标准"
                : "Deep Digestive Screening · Painless & Worry-Free · Same-Day Completion · International Standards"}
            </p>
            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              {isZh
                ? "面向全球企业高管、高净值人士，专程来华接受高品质、高性价比的无痛胃肠镜联合检查"
                : "For global executives and high-net-worth individuals seeking high-quality, cost-effective combined painless gastroscopy and colonoscopy in China"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "无痛舒适" : "Painless & Comfortable"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "当日完成" : "Same-Day Completion"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "检查即治疗" : "Examination as Treatment"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "国际标准" : "International Standards"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
              >
                {isZh ? "查看套餐" : "View Packages"}
              </a>
              <a
                href="#intro"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {isZh ? "了解更多" : "Learn More"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CHINA FOR PAINLESS ENDOSCOPY */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal x={-30}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                {isZh ? "为什么选择来中国做无痛胃肠镜？" : "Why Choose China for Painless Endoscopy?"}
              </h2>
              <div className="space-y-6">
                {choose.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-lg text-teal-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal x={30}>
              <div className="grid grid-cols-2 gap-4">
                {statList.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-teal-50 rounded-2xl p-6 text-center"
                  >
                    <div className="text-4xl font-bold text-teal-600 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT IS PAINLESS ENDOSCOPY */}
      <section className="py-20 lg:py-32 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "什么是“无痛胃肠镜”？" : 'What is "Painless Endoscopy"?'}
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal x={-30} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "检查过程" : "Examination Process"}
              </h3>
              <p className="text-gray-600 mb-6">
                {isZh
                  ? "在短效静脉麻醉（丙泊酚）下，一次性完成胃镜（上消化道）和结肠镜（下消化道）联合检查。您将进入舒适的睡眠状态约20-30分钟，由经验丰富的消化内镜医生完成食管、胃、十二指肠、全部结直肠的精细探查。"
                  : "Under short-acting IV anesthesia (propofol), complete combined gastroscopy (upper digestive tract) and colonoscopy (lower digestive tract) in one session. You will enter a comfortable sleep state for about 20-30 minutes while experienced gastroenterologists perform detailed examination of esophagus, stomach, duodenum, and entire colon and rectum."}
              </p>
              <div className="bg-teal-50 rounded-xl p-4">
                <p className="text-teal-700 font-medium">
                  {isZh
                    ? "若发现≤3颗小息肉，当场使用“冷圈套切除”技术同步切除——检查即治疗，无需二次预约。"
                    : 'If ≤3 small polyps are found, they are removed immediately using "cold snare resection" technique - examination becomes treatment, no second appointment needed.'}
                </p>
              </div>
            </Reveal>
            <Reveal x={30}>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "可以查出并处理哪些问题？" : "What Issues Can Be Detected and Treated?"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {issues.map((issue) => (
                  <div
                    key={issue}
                    className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3"
                  >
                    <Icons.checkCircle className="text-teal-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR / NOT SUITABLE FOR */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal x={-30}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                {isZh ? "谁适合做？" : "Who Is It For?"}
              </h2>
              <div className="space-y-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="bg-teal-50 rounded-xl p-4 flex items-start gap-3"
                  >
                    <Icons.checkCircle className="text-teal-500 flex-shrink-0 mt-0.5 h-5 w-5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal x={30}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                {isZh ? "不适用于" : "Not Suitable For"}
              </h2>
              <div className="bg-rose-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {unsuitable.map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <Icons.alertCircle className="text-rose-500 mr-3 h-5 w-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm mt-4 pt-4 border-t">
                  {isZh ? "具体禁忌由医生评估确定。" : "Specific contraindications determined by physician assessment."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ONE-STOP PROFESSIONAL SERVICE PROCESS */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isZh ? "一站式专业服务流程" : "One-Stop Professional Service Process"}
            </h2>
          </Reveal>
          <div className="space-y-8">
            <Reveal y={20} className="bg-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {isZh ? "来华前远程医疗定制" : "Pre-Arrival Remote Medical Customization"}
                  </h3>
                  <span className="text-teal-400 text-sm">
                    {isZh ? "提前7-14天" : "7-14 days in advance"}
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {step1.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icons.checkCircle className="text-teal-400 flex-shrink-0 mt-0.5 h-[18px] w-[18px]" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal y={20} className="bg-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {isZh ? "检查前1天（自行准备）" : "Day Before Examination (Self-Preparation)"}
                  </h3>
                  <span className="text-teal-400 text-sm">
                    {isZh ? "检查前24小时" : "24 hours before examination"}
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {step2.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icons.checkCircle className="text-teal-400 flex-shrink-0 mt-0.5 h-[18px] w-[18px]" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal y={20} className="bg-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {isZh ? "检查当日" : "Examination Day"}
                  </h3>
                  <span className="text-teal-400 text-sm">
                    {isZh ? "全程3-4小时" : "Total 3-4 hours"}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {timeline.map((entry) => (
                  <div
                    key={entry.time}
                    className="flex gap-4 bg-slate-700/50 rounded-lg p-3"
                  >
                    <span className="text-teal-400 font-bold w-16">
                      {entry.time}
                    </span>
                    <span className="text-gray-300">{entry.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal y={20} className="bg-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {isZh ? "检后医疗随访" : "Post-Examination Medical Follow-up"}
                  </h3>
                  <span className="text-teal-400 text-sm">
                    {isZh ? "检查后持续" : "Ongoing after examination"}
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {step4.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icons.checkCircle className="text-teal-400 flex-shrink-0 mt-0.5 h-[18px] w-[18px]" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PACKAGE & PRICING */}
      <section id="packages" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "套餐与费用" : "Package & Pricing"}
            </h2>
          </Reveal>
          <Reveal
            y={20}
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              {isZh ? "高端无痛胃肠镜套餐" : "Premium Painless Endoscopy Package"}
            </h3>
            <div className="text-4xl font-bold mb-6">$900 – $1,200</div>
            <p className="text-teal-100 mb-6">
              {isZh ? "以上均为全包价，无隐形收费" : "All-inclusive pricing, no hidden fees"}
            </p>
            <h4 className="font-bold mb-4">
              {isZh ? "包含内容：" : "Includes:"}
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Icons.checkCircle className="text-teal-200 h-[18px] w-[18px] flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-teal-100 text-sm mt-6 pt-4 border-t border-teal-400">
              {isZh
                ? "*如需额外息肉切除超过3颗或特殊治疗，将提前告知费用"
                : "*Additional costs will be disclosed in advance for extra polyp removal (>3) or special treatments"}
            </p>
            <p className="text-teal-100/70 text-sm mt-2">
              {isZh ? "*具体费用以医院最终评估为准。" : "*Specific costs subject to final hospital assessment."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTERNATIONAL QUALITY & SAFETY STANDARDS */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "国际质量与安全标准" : "International Quality & Safety Standards"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard) => (
              <Reveal
                y={20}
                key={standard.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-lg text-[#1A1A2E] mb-2">
                  {standard.title}
                </h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "常见问题（FAQ）" : "Frequently Asked Questions (FAQ)"}
            </h2>
          </Reveal>
          <FAQAccordion items={faqList} />
        </div>
      </section>

      {/* SEAMLESS INTERNATIONAL MEDICAL TRAVEL SUPPORT */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "国际医疗旅行无缝支持" : "Seamless International Medical Travel Support"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {support.map((item) => (
              <Reveal
                y={20}
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh ? "开启您的无痛胃肠镜检查之旅" : "Start Your Painless Endoscopy Journey"}
            </h2>
            <p className="text-teal-200 mb-8">
              {isZh
                ? "无痛、高效、精准——上午检查，下午取报告，专业闭环管理"
                : "Painless, efficient, precise - morning examination, afternoon report, professional closed-loop management"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@medkungfu.com"
                className="px-8 py-4 bg-white text-teal-900 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                {isZh ? "邮件咨询" : "Email Inquiry"}
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
    </main>
  );
}
