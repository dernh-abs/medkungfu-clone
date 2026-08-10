// Shenzhen Hengsheng Hospital detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import {
  Eye,
  Pill,
  Smile,
  type LucideIcon,
} from "lucide-react";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

const statsStrip = [
  { value: "100,000㎡", label: "Total Building Area" },
  { value: "1,100 beds", label: "Planned Beds" },
  { value: "38个", label: "Medical Departments" },
  { value: "80+", label: "Master/PhD Holders" },
  { value: "1100+", label: "Staff" },
  { value: "680+ beds", label: "Open Beds" },
  { value: "130+", label: "Senior Titles" },
  { value: "30 min", label: "Drive to Border Crossing" },
];

const statsStripZh = [
  { value: "10万㎡", label: "总建筑面积" },
  { value: "1100张", label: "规划病房床位" },
  { value: "38个", label: "医技科室" },
  { value: "80+", label: "硕博生" },
  { value: "1100+", label: "职工" },
  { value: "680+张", label: "开放病房床位" },
  { value: "130+", label: "高级职称" },
  { value: "30min", label: "车程距通关口岸" },
];

const honors = [
  "Top 100 Hospitals in Ai Li Bi Social Medical Practice · Single Hospital · Competitiveness Ranking",
  "Hospital with Human Assisted Reproductive Technology Qualification",
  "Obtained ISO15189 Medical Laboratory Accreditation (test results mutually recognized by thousands of international laboratories)",
  "National Chest Pain Center Certified Unit",
];

const honorsZh = [
  "艾力彼社会办医·单体医院·竞争力排行榜100强医院",
  "具备人类辅助生殖技术资质的医院",
  "获得ISO15189医学实验室认可（检验结果可在国际数千家实验室中相互承认）",
  "国家胸痛中心认证单位",
];

interface Department {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const departments: Department[] = [
  {
    title: "Reproductive Medicine Dept",
    subtitle: "生殖医学科",
    description:
      "Member institution of Greater Bay Area Reproductive Medicine Alliance, chairman unit of Shenzhen Non-public Medical Institution Industry Association Integrated Chinese-Western Reproductive Health Committee. Established in 2012, approved for assisted reproductive technology in 2015, obtained embryology laboratory qualification in 2019. Featured treatments: \"Trilogy\" sequential therapy for ovarian insufficiency and premature ovarian failure, precise pregnancy preservation for recurrent miscarriage, endometrial receptivity assessment and improvement. Clinical pregnancy rate stably above 50%, pregnancy rate for patients under 35 reaches 60.52%.",
    icon: Icons.heart,
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
  },
  {
    title: "Medical Gastroenterology",
    subtitle: "消化内科",
    description:
      "Chairman unit of Shenzhen Non-public Medical Institution Industry Association Gastroenterology Professional Committee, training base for digestive endoscopy professional capability of China Non-public Medical Institution Association. Equipped with internationally advanced Olympus 290 series endoscopy system, completing over 8,000 endoscopic diagnoses and treatments annually. Featured techniques: ESD/EMR endoscopic minimally invasive treatment, ERCP biliary-pancreatic disease diagnosis and treatment, endoscopic ultrasound-guided biopsy.",
    icon: Icons.activity,
    image: `${IMG}/photo-1551076805-e1869033e561-w600.jpg`,
  },
  {
    title: "Ophthalmology Dept",
    subtitle: "眼科",
    description:
      "Liao Pinzheng National TCM Master Studio, designated alliance hospital for myopia high-risk population screening in Shenzhen, science popularization and education base for children and adolescent myopia prevention and control in Shenzhen. Inheriting TCM ophthalmology \"Five Wheels Theory\", combined with modern refractive surgery technology, performing SMILE, ICL lens implantation, corneal cross-linking, etc. Completing over 3,000 refractive surgeries annually, covering over 100,000 people in adolescent myopia prevention and control.",
    icon: Eye,
    image: `${IMG}/photo-1579684385127-1ef15d508118-w600.jpg`,
  },
  {
    title: "Orthopaedics",
    subtitle: "骨科",
    description:
      "Member unit of Greater Bay Area Digital Orthopedics Alliance, orthopedic collaboration department of Nanshan District People's Hospital and Baoan District People's Hospital. Led by Prof. Kong Qingkui (National Key Discipline) from former Second Hospital of Shanxi Medical University, developing sub-specialties including spinal minimally invasive surgery, joint replacement, sports medicine. Featured techniques: transforaminal endoscopic nucleotomy, 3D-printed personalized prosthesis replacement, platelet-rich plasma (PRP) intra-articular injection.",
    icon: Icons.bone,
    image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
  },
  {
    title: "Rehabilitation Medicine Dept",
    subtitle: "康复医学科",
    description:
      "Vice chairman unit of Shenzhen Non-public Medical Association Rehabilitation Medicine Professional Committee, designated hospital for work injury rehabilitation, long-term medical care, and disabled person rehabilitation services in Shenzhen. Has over 1,000㎡ rehabilitation treatment area, equipped with advanced equipment such as German Hocoma Lokomat robot gait training system, transcranial magnetic stimulator. Featured programs: post-stroke rehabilitation, spinal cord injury rehabilitation, post-operative bone and joint rehabilitation, pediatric rehabilitation.",
    icon: Icons.stethoscope,
    image: `${IMG}/photo-1571019613454-1cb2f99b2d8b-w600.jpg`,
  },
  {
    title: "Proctology",
    subtitle: "肛肠科",
    description:
      "Inheritor unit of Shenzhen Intangible Cultural Heritage \"Du's Anorectal Therapy\". \"Du's Anorectal Therapy\" is a featured therapy created by fourth-generation inheritor Chief Physician Du Ping, based on ancestral skills and integrated with modern anorectal surgical concepts. Expertise: minimally invasive treatment of complex anal fistula, high abscess, circular mixed hemorrhoids, rectal prolapse. Completing over 2,000 anorectal surgeries annually, with recurrence rate below 5%.",
    icon: Pill,
    image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
  },
  {
    title: "Stomatology",
    subtitle: "口腔科",
    description:
      "Shenzhen clinical skills training base of China Dental Prevention Foundation, vice president unit of Shenzhen Stomatological Association, chairman unit of Shenzhen Oral Prevention Foreign Expert Committee, Baoan District oral health science popularization education base. Includes dental implant center, early childhood orthodontic center, orthodontic center, prosthodontic center, etc. Equipped with German Kavo CBCT, iTero intraoral scanner, microscopic root canal treatment system. Completing over 1,500 dental implants annually.",
    icon: Smile,
    image: `${IMG}/photo-1606811841689-23dfddce3e95-w600.jpg`,
  },
  {
    title: "Nephrology Dept",
    subtitle: "肾内科",
    description:
      "Chairman unit of Fosun Health Nephrology Medical Community Specialty Alliance. Has hemodialysis center, peritoneal dialysis center, chronic kidney disease management center. Equipped with over 30 imported hemodialysis machines and 2 CRRT machines, capable of hemodialysis, hemofiltration, hemoperfusion, plasma exchange and other treatment modes. Featured techniques: autogenous arteriovenous fistula formation, long-term catheter insertion, peritoneal dialysis catheterization.",
    icon: Icons.droplets,
    image: `${IMG}/photo-1579154204601-01588f351e67-w600.jpg`,
  },
  {
    title: "Endocrinology Dept",
    subtitle: "内分泌科",
    description:
      "Member unit of Guangdong Obesity and Diabetes Specialty Alliance / Obesity and Diabetes Clinical Remission Center Adolescent Obesity Prevention and Control Base, one of the first batch of obesity multidisciplinary diagnosis and treatment centers in Guangdong. Adopts \"Double C\" intensive treatment plan (continuous subcutaneous insulin infusion + continuous glucose monitoring), combined with comprehensive management including nutritional intervention, exercise prescription, behavioral correction. Diagnosing and treating over 5,000 diabetic patients annually, with diabetes remission rate above 30%.",
    icon: Icons.sparkles,
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
  },
  {
    title: "International Medical Center",
    subtitle: "国际医疗中心",
    description:
      "Committed to providing high-end health management and medical services for domestic and international clients. Gathering senior experts, equipped with dedicated translators, providing one-stop services from appointment, consultation, examination to hospitalization. Covering general practice outpatient, tumor screening, cardiovascular and cerebrovascular assessment, anti-aging management, etc. Has established direct payment cooperation with multiple international commercial insurance companies, supporting multi-language services.",
    icon: Icons.globe,
    image: `${IMG}/photo-1519494026892-80bbd2d6fd0d-w600.jpg`,
  },
];

const departmentsZh: Department[] = [
  {
    title: "生殖医学科",
    subtitle: "Reproductive Medicine Dept",
    description:
      "粤港澳大湾区生殖医学联盟机构，深圳市非公立医疗机构行业协会中西医结合生殖健康专委会主委单位。成立于2012年，2015年获批准开展辅助生殖技术，2019年获胚胎实验室资质。特色诊疗：卵巢功能低下及卵巢早衰的&quot;三步曲&quot;序贯疗法、复发性流产精准保胎方案、子宫内膜容受性评估与改善等。临床妊娠率稳定在50%以上，35岁以下患者妊娠率达60.52%。",
    icon: Icons.heart,
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
  },
  {
    title: "消化内科",
    subtitle: "Medical Gastroenterology",
    description:
      "深圳市非公立医疗机构行业协会消化病专业委员会主委单位，中国非公立医疗机构协会消化内镜专业能力培训基地。配备国际先进的奥林巴斯290系列内镜系统，年完成内镜诊疗超8000例次。特色技术：ESD/EMR内镜下微创治疗、ERCP胆胰疾病诊治、超声内镜引导下穿刺活检等。",
    icon: Icons.activity,
    image: `${IMG}/photo-1551076805-e1869033e561-w600.jpg`,
  },
  {
    title: "眼科",
    subtitle: "Ophthalmology Dept",
    description:
      "廖品正国医大师工作室，深圳市近视高危人群筛查定点联盟医院，深圳市儿童青少年近视防控科普宣教基地。传承中医眼科&quot;五轮学说&quot;，结合现代屈光手术技术，开展全飞秒SMILE、ICL晶体植入、角膜交联术等。年完成屈光手术超3000例，青少年近视防控覆盖超10万人次。",
    icon: Eye,
    image: `${IMG}/photo-1579684385127-1ef15d508118-w600.jpg`,
  },
  {
    title: "骨科",
    subtitle: "Orthopaedics",
    description:
      "大湾区数字骨科联盟成员单位，南山区人民医院、宝安区人民医院骨科协作科室。由原山医大二院孔庆奎教授（国家重点学科）领衔，开展脊柱微创、关节置换、运动医学等亚专科。特色技术：椎间孔镜下髓核摘除术、3D打印个性化假体置换、富血小板血浆（PRP）关节腔注射等。",
    icon: Icons.bone,
    image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
  },
  {
    title: "康复医学科",
    subtitle: "Rehabilitation Medicine Dept",
    description:
      "深圳市非公医协康复医学专业委员会副主任委员单位，深圳市工伤康复、长期医疗护理、残疾人康复服务定点医院。拥有超1000㎡康复治疗区，配备德国Hocoma Lokomat机器人步态训练系统、经颅磁刺激仪等先进设备。特色项目：脑卒中后康复、脊髓损伤康复、骨关节术后康复、儿童康复等。",
    icon: Icons.stethoscope,
    image: `${IMG}/photo-1571019613454-1cb2f99b2d8b-w600.jpg`,
  },
  {
    title: "肛肠科",
    subtitle: "Proctology",
    description:
      "深圳市非物质文化遗产&quot;杜氏肛肠疗法&quot;传承人单位。&quot;杜氏肛肠疗法&quot;是第四代传人杜平主任医师在继承祖传技艺基础上，融合现代肛肠外科理念创立的特色疗法。擅长：复杂性肛瘘、高位脓肿、环状混合痔、直肠脱垂等疾病的微创治疗。年完成肛肠手术超2000例，复发率低于5%。",
    icon: Pill,
    image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
  },
  {
    title: "口腔科",
    subtitle: "Stomatology",
    description:
      "中国牙防防治基金会深圳临床技能培训基地，深圳市口腔医学会副会长单位，深圳市口腔预防国外专家委员会主委单位，宝安区口腔健康科普教育基地。下设口腔种植中心、儿童早期矫治中心、正畸中心、修复中心等。配备德国卡瓦CBCT、iTero口内扫描仪、显微根管治疗系统等。年完成种植牙超1500颗。",
    icon: Smile,
    image: `${IMG}/photo-1606811841689-23dfddce3e95-w600.jpg`,
  },
  {
    title: "肾内科",
    subtitle: "Nephrology Dept",
    description:
      "复星健康肾病医共体专科联盟主委单位。设有血液净化中心、腹膜透析中心、慢性肾脏病管理中心。配备进口血液透析机30余台、CRRT机2台，可开展血液透析、血液滤过、血液灌流、血浆置换等多种治疗模式。特色技术：自体动静脉内瘘成形术、长期导管置入术、腹膜透析置管术等。",
    icon: Icons.droplets,
    image: `${IMG}/photo-1579154204601-01588f351e67-w600.jpg`,
  },
  {
    title: "内分泌科",
    subtitle: "Endocrinology Dept",
    description:
      "广东省肥胖糖尿病专科联盟单位/肥胖糖尿病临床缓解中心青少年肥胖防治基地，广东首批肥胖多学科诊疗中心。采用&quot;双C&quot;强化治疗方案（持续皮下胰岛素输注+持续葡萄糖监测），结合营养干预、运动处方、行为矫正等综合管理。年诊治糖尿病患者超5000人次，糖尿病缓解率达30%以上。",
    icon: Icons.sparkles,
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
  },
  {
    title: "国际医疗中心",
    subtitle: "International Medical Center",
    description:
      "致力于为国内外人士提供高端健康管理及医疗服务。汇聚资深专家，配备专属翻译，提供从预约、就诊、检查到住院的一站式服务。覆盖全科门诊、肿瘤筛查、心脑血管评估、抗衰老管理等。已与多家国际商业保险公司建立直付合作，支持多国语言服务。",
    icon: Icons.globe,
    image: `${IMG}/photo-1519494026892-80bbd2d6fd0d-w600.jpg`,
  },
];

interface Specialist {
  name: string;
  specialty: string;
  focus?: string;
  items: string[];
  flip: boolean;
  image: string;
}

const specialists: Specialist[] = [
  {
    name: "Dr. Bai Zhancheng",
    specialty: "Orthopaedics",
    focus: "Hip and pelvic surgery",
    items: [
      "Bachelor of Medicine and Bachelor of Surgery, University of Birmingham, UK",
      "Postgraduate Diploma in Sports and Exercise Medicine, University of Bath, UK",
      "Fellow of the Royal College of Surgeons of Edinburgh (Orthopaedics)",
      "Fellow of the Hong Kong Academy of Medicine (Orthopaedics)",
    ],
    flip: false,
    image: `${IMG}/shenzhen-dept-2.png`,
  },
  {
    name: "Dr. Zhang Zhi",
    specialty: "Obstetrics and Gynecology",
    items: [
      "Bachelor of Medicine and Bachelor of Surgery, University of Melbourne, Australia",
      "Fellow of the Royal College of Obstetricians and Gynaecologists, UK",
      "Fellow of the Hong Kong College of Obstetricians and Gynaecologists",
      "Fellow of the Hong Kong Academy of Medicine (Obstetrics & Gynaecology)",
    ],
    flip: true,
    image: `${IMG}/shenzhen-dept-3.png`,
  },
  {
    name: "Dr. Zhou Hongcan",
    specialty: "Orthopaedics",
    focus: "Spinal surgery",
    items: [
      "Bachelor of Medicine and Bachelor of Surgery, University of Hong Kong",
      "Member of the Royal College of Surgeons of Edinburgh",
      "Fellow of the Hong Kong College of Orthopaedics",
      "Fellow of the Royal College of Surgeons of Edinburgh (Orthopaedics)",
      "Fellow of the Hong Kong Academy of Medicine (Orthopaedics)",
    ],
    flip: false,
    image: `${IMG}/shenzhen-dept-4.png`,
  },
];

const specialistsZh: Specialist[] = [
  {
    name: "Dr. Bai Zhancheng",
    specialty: "骨科",
    focus: "髋关节和骨盆手术",
    items: [
      "英国伯明翰大学医学学士和外科学士",
      "英国巴斯大学运动与运动医学研究生文凭",
      "爱丁堡皇家外科学院院士（骨科）",
      "香港医学院院士（骨科）",
    ],
    flip: false,
    image: `${IMG}/shenzhen-dept-2.png`,
  },
  {
    name: "Dr. Zhang Zhi",
    specialty: "妇产科",
    items: [
      "澳大利亚墨尔本大学医学学士和外科学士",
      "英国皇家妇产科学院院士",
      "香港妇产科医学院院士",
      "香港医学院院士（妇产科）",
    ],
    flip: true,
    image: `${IMG}/shenzhen-dept-3.png`,
  },
  {
    name: "Dr. Zhou Hongcan",
    specialty: "骨科",
    focus: "脊柱外科",
    items: [
      "香港大学医学学士和外科学士",
      "爱丁堡皇家外科学院会员",
      "香港骨科医学院院士",
      "爱丁堡皇家外科学院院士（骨科）",
      "香港医学院院士（骨科）",
    ],
    flip: false,
    image: `${IMG}/shenzhen-dept-4.png`,
  },
];

export default function ShenzhenHengshengContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const statItems = isZh ? statsStripZh : statsStrip;
  const honorItems = isZh ? honorsZh : honors;
  const deptItems = isZh ? departmentsZh : departments;
  const specialistItems = isZh ? specialistsZh : specialists;

  return (
    <main
      role="main"
      aria-label="Shenzhen Hengsheng Hospital - National Tertiary General Hospital"
      className="min-h-screen bg-white"
    >
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element -- hero hospital image */}
        <img
          src={`${IMG}/hospital-shenzhen-hengsheng.webp`}
          alt={isZh ? "深圳恒生医院建筑外观" : "Shenzhen Hengsheng Hospital exterior"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-indigo-950/70 to-blue-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <p className="text-lg text-blue-200 mb-4 tracking-wider">
              {isZh ? "复星健康成员医院" : "Fosun Health Member Hospital"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isZh ? "深圳恒生医院" : "Shenzhen Hengsheng Hospital"}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              {isZh ? "Shenzhen Hengsheng Hospital" : "深圳恒生医院"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isZh
                ? "国家三级综合医院 · 复星健康成员医院 · 集医疗、科研、教学、康复和预防保健于一体"
                : "National Grade 3 Comprehensive Hospital · Fosun Health Member Hospital · Integrating Medical Care, Research, Teaching, Rehabilitation and Preventive Healthcare"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "10万㎡建筑面积" : "100,000㎡ Building Area"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "1100+职工" : "1,100+ Staff"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "38个医技科室" : "38 Medical Departments"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "ISO15189认可" : "ISO15189 Accredited"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                {isZh ? "立即咨询" : "Consult Now"}
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                {isZh ? "了解更多" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="py-14 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm md:grid-cols-4 lg:grid-cols-8 lg:gap-0 lg:divide-x lg:divide-blue-100">
            {statItems.map((item) => (
              <div key={item.label} className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal x={-30}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                {isZh
                  ? "国家三级综合医院 · 复星健康成员医院"
                  : "National Grade 3 Comprehensive Hospital · Fosun Health Member Hospital"}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {isZh
                  ? "深圳恒生医院是经广东省卫健委批准成立，集医疗、科研、教学、康复和预防保健于一体的大型现代化三级综合医院，是最具备人类辅助生殖技术资质的医疗机构（深圳西部唯一一家，深圳共8家）。"
                  : "Shenzhen Hengsheng Hospital was approved by Guangdong Provincial Health Commission. It is a large modern Grade 3 comprehensive hospital integrating medical care, research, teaching, rehabilitation and preventive healthcare. It is one of the medical institutions most qualified for human assisted reproductive technology (the only one in western Shenzhen, 8 in total in Shenzhen)."}
              </p>
              <p className="text-gray-600 mb-6">
                {isZh
                  ? "作为复星健康成员医院，恒生医院整合集团优质医疗资源，引进国际先进设备和技术，为患者提供高品质、个性化的医疗服务。医院先后荣获多项荣誉，包括艾力彼社会办医·单体医院·竞争力排行榜100强医院等。"
                  : "As a Fosun Health member hospital, Hengsheng Hospital integrates the group&apos;s quality medical resources, introduces internationally advanced equipment and technology, and provides high-quality, personalized medical services for patients. The hospital has won many honors, including Top 100 Hospitals in Ai Li Bi Social Medical Practice · Single Hospital · Competitiveness Ranking."}
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1A1A2E] mb-4">
                  {isZh ? "荣誉资质" : "Honors &amp; Qualifications"}
                </h3>
                <ul className="space-y-2">
                  {honorItems.map((item) => (
                    <li key={item} className="flex items-start text-gray-700 text-sm">
                      <Icons.award
                        size={16}
                        className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal x={30} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured hospital image */}
              <img
                src={`${IMG}/shenzhen-dept-1.jpg`}
                alt={isZh ? "深圳恒生医院" : "Shenzhen Hengsheng Hospital"}
                className="rounded-2xl shadow-2xl w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== KEY & FEATURED SPECIALTIES ===== */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "医院重点及特色学科" : "Key &amp; Featured Specialties"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isZh
                ? "十大核心科室，为您提供全方位的专业医疗服务"
                : "Ten core departments providing comprehensive professional medical services"}
            </p>
          </Reveal>
          <div className="space-y-8">
            {deptItems.map((dept) => (
              <Reveal key={dept.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                        <dept.icon size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1A2E]">
                          {dept.title}
                        </h3>
                        <p className="text-blue-600 text-sm">{dept.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover min-h-[200px]"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RENOWNED SPECIALISTS FROM HONG KONG ===== */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-lg text-indigo-200 mb-2 tracking-wider">
              {isZh ? "国际医疗中心 · 知名专家" : "International Medical Center · Distinguished Experts"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isZh ? "香港知名专家" : "Renowned Specialists from Hong Kong"}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {isZh
                ? "国际医疗中心汇聚香港知名专家，为您提供国际化的诊疗服务"
                : "International Medical Center gathers renowned Hong Kong experts to provide you with international diagnosis and treatment services"}
            </p>
          </Reveal>
          <div className="space-y-8">
            {specialistItems.map((doc) => (
              <Reveal
                key={doc.name}
                x={doc.flip ? 30 : -30}
                className={
                  doc.flip
                    ? "bg-gradient-to-r from-blue-800/80 to-indigo-800/80 rounded-2xl overflow-hidden backdrop-blur-sm"
                    : "bg-gradient-to-r from-purple-800/80 to-blue-800/80 rounded-2xl overflow-hidden backdrop-blur-sm"
                }
              >
                <div className={doc.flip ? "grid md:grid-cols-[1fr_200px] gap-0" : "grid md:grid-cols-[200px_1fr] gap-0"}>
                  <div className={doc.flip ? "p-8 order-2 md:order-1" : "p-8"}>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                      {doc.name}
                    </h3>
                    <p className="text-indigo-200 mb-1">
                      <span className="font-semibold">
                        {isZh ? "专科:" : "Specialty:"}
                      </span>{" "}
                      {doc.specialty}
                    </p>
                    {doc.focus && (
                      <p className="text-indigo-200 mb-4">
                        <span className="font-semibold">
                          {isZh ? "专长领域:" : "Areas of Focus:"}
                        </span>{" "}
                        {doc.focus}
                      </p>
                    )}
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {doc.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={
                      doc.flip
                        ? "flex items-center justify-center p-8 bg-blue-900/50 order-1 md:order-2"
                        : "flex items-center justify-center p-8 bg-purple-900/50"
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured specialist photo */}
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT US ===== */}
      <section id="contact" className="py-20 lg:py-32 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh ? "联系我们" : "Contact Us"}
            </h2>
            <p className="text-blue-200 mb-8">
              {isZh
                ? "深圳恒生医院国际医疗中心，为您提供专业的医疗咨询服务"
                : "Shenzhen Hengsheng Hospital International Medical Center provides professional medical consultation services"}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Icons.mapPin
                  size={32}
                  className="mx-auto mb-3 text-blue-300"
                />
                <h3 className="font-bold mb-2">
                  {isZh ? "地址" : "Address"}
                </h3>
                <p className="text-blue-200 text-sm">
                  {isZh
                    ? "深圳市宝安区西乡街道银田路20号"
                    : "No. 20 Yintian Road, Xixiang Street, Baoan District, Shenzhen"}
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Icons.phone
                  size={32}
                  className="mx-auto mb-3 text-blue-300"
                />
                <h3 className="font-bold mb-2">
                  {isZh ? "电话" : "Phone"}
                </h3>
                <p className="text-blue-200 text-sm">19819833123</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Icons.globe
                  size={32}
                  className="mx-auto mb-3 text-blue-300"
                />
                <h3 className="font-bold mb-2">
                  {isZh ? "官网" : "Website"}
                </h3>
                <p className="text-blue-200 text-sm">www.hsvy.com.cn</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:19819833123"
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {isZh ? "电话咨询" : "Phone Consultation"}
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
