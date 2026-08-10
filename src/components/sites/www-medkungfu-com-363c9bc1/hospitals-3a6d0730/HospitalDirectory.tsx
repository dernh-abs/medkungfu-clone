"use client";

// "Hospital Directory" — interactive city filter + 7 hospital cards.
// Clicking a city filters the grid and updates the count. Matches /hospitals.
// Fully bilingual: zh uses per-field Chinese (nameZh/pillsZh/descriptionZh,
// etc., captured verbatim from the source zh page); ru resolves each English
// string through the merged RU map, falling back to English when a string is
// not covered. The city filter state stays on English values so filtering is
// language-independent; only the rendered labels translate.
import { useState } from "react";

import Link from "next/link";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { RU } from "@/lib/i18n/ru";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface HospitalStat {
  value: string;
  label: string;
}

interface Hospital {
  slug: string;
  name: string;
  /** Chinese name shown in zh mode (verbatim from the source zh page). */
  nameZh: string;
  subtitle?: string;
  /** Chinese subtitle shown in zh mode. The source zh page only shows a
      subtitle for Ruijin, so only that card carries a subtitleZh. */
  subtitleZh?: string;
  grade: string;
  /** Chinese grade badge shown in zh mode (verbatim from the source zh page). */
  gradeZh: string;
  description: string;
  /** Chinese description shown in zh mode (verbatim from the source zh page). */
  descriptionZh: string;
  location: string;
  /** Chinese location shown in zh mode (verbatim from the source zh page). */
  locationZh: string;
  specialties: string;
  /** Chinese specialties shown in zh mode (verbatim from the source zh page). */
  specialtiesZh: string;
  pills: string[];
  /** Chinese pills shown in zh mode (verbatim from the source zh page). */
  pillsZh: string[];
  stat1: HospitalStat;
  /** Chinese stat1 value+label shown in zh mode. */
  stat1Zh: HospitalStat;
  stat2: HospitalStat;
  /** Chinese stat2 value+label shown in zh mode. */
  stat2Zh: HospitalStat;
  image: string;
  city: string;
}

const CITIES = ["All Cities", "Beijing", "Shanghai", "Guangzhou", "Chengdu", "Hainan"];

/** Chinese labels for the city filter buttons (verbatim from the source zh page). */
const CITY_ZH: Record<string, string> = {
  "All Cities": "全部城市",
  Beijing: "北京",
  Shanghai: "上海",
  Guangzhou: "广州",
  Chengdu: "成都",
  Hainan: "海南",
};

const HOSPITALS: Hospital[] = [
  {
    slug: "shanghai-proton-heavy-ion",
    name: "Shanghai Proton & Heavy Ion Center",
    nameZh: "上海市质子重离子医院",
    grade: "Grade A Tertiary",
    gradeZh: "三级甲等",
    description:
      "China's first tumor specialty medical institution offering both proton and heavy ion advanced radiotherapy, treating over 50 conditions",
    descriptionZh: "国内首家同时开展质子、重离子两种先进放疗技术的肿瘤专科医疗机构，可治疗病种拓展至50余种",
    location: "Shanghai",
    locationZh: "上海",
    specialties: "Heavy Ion Therapy, Proton Therapy",
    specialtiesZh: "重离子治疗、质子治疗",
    pills: ["First in China", "9,317+ Cases", "50+ Conditions"],
    pillsZh: ["国内首家", "9317+例治疗", "50+种病种"],
    stat1: { value: "9,317 cases", label: "Total Treated" },
    stat1Zh: { value: "9317例", label: "累计治疗" },
    stat2: { value: "1,000+/year", label: "Annual Volume" },
    stat2Zh: { value: "1000+例/年", label: "年治疗量" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-shanghai-proton.jpg",
    city: "Shanghai",
  },
  {
    slug: "ruijin-hainan",
    name: "Ruijin Hospital Hainan",
    nameZh: "上海瑞金医院海南医院",
    subtitle: "Ruijin Hospital Hainan Branch, SJTU School of Medicine",
    subtitleZh: "上海交通大学医学院附属瑞金医院海南医院",
    grade: "National Regional Medical Center",
    gradeZh: "国家区域医疗中心",
    description:
      "The only public medical institution in Lecheng Pilot Zone, transferring Shanghai Ruijin Hospital resources, main channel for international innovative drugs entering China",
    descriptionZh: "乐城先行区唯一公立医疗机构，平移上海瑞金医院资源，国际创新药械进入中国的主要通道",
    location: "Hainan Boao",
    locationZh: "海南博鳌",
    specialties: "Oncology, Cardiology, Neuroscience",
    specialtiesZh: "肿瘤科、心血管内科、神经脑科学",
    pills: ["Four Licensed Policies", "219 Licensed Drugs", "Major Diseases on Island"],
    pillsZh: ["四大特许政策", "219项特许药械", "大病不出岛"],
    stat1: { value: "219 items", label: "Licensed Drugs/Devices" },
    stat1Zh: { value: "219项", label: "落地特许药械" },
    stat2: { value: "151 items", label: "First in China" },
    stat2Zh: { value: "151项", label: "全国首落" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-ruijin-hainan.jpg",
    city: "Hainan",
  },
  {
    slug: "longhua",
    name: "Longhua Hospital",
    nameZh: "上海中医药大学附属龙华医院",
    subtitle: "Longhua Hospital Affiliated to Shanghai University of TCM",
    grade: "Grade A Tertiary",
    gradeZh: "三级甲等",
    description:
      "One of the four earliest TCM clinical bases nationwide, with significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy",
    descriptionZh: "全国最早建立的四大中医临床基地之一，在中医药治疗恶性肿瘤、骨退行性病变、肾病等领域具有显著优势",
    location: "Shanghai",
    locationZh: "上海",
    specialties: "TCM Oncology, Orthopedics, Nephrology",
    specialtiesZh: "中医肿瘤、骨伤科、肾病科",
    pills: ["#1 TCM Performance", "2 TCM Masters", "1,750 Beds"],
    pillsZh: ["全国中医绩效第一", "国医大师2名", "1750张床位"],
    stat1: { value: "5.36M+", label: "Outpatient Visits" },
    stat1Zh: { value: "536万+", label: "门急诊人次" },
    stat2: { value: "96,800", label: "Discharged Patients" },
    stat2Zh: { value: "9.68万", label: "出院患者" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-longhua.jpg",
    city: "Shanghai",
  },
  {
    slug: "sun-yat-sen-memorial",
    name: "Sun Yat-sen Memorial Hospital",
    nameZh: "中山大学孙逸仙纪念医院",
    subtitle: "Sun Yat-sen Memorial Hospital, SYSU",
    grade: "Grade A Tertiary",
    gradeZh: "三级甲等",
    description:
      "Founded in 1835, birthplace of Western medicine in China, breast tumor center with 57% breast-conserving rate",
    descriptionZh: "创建于1835年，中国西医学和西医教育的发源地，乳腺肿瘤中心保乳率高达57%",
    location: "Guangzhou",
    locationZh: "广州",
    specialties: "Breast Oncology, Cardiology, Urology",
    specialtiesZh: "乳腺肿瘤、心血管内科、泌尿外科",
    pills: ["First Western Hospital in China", "7 National Key Disciplines", "4 Organ Transplants"],
    pillsZh: ["中国第一家西医医院", "7个国家重点学科", "四大器官移植资质"],
    stat1: { value: "7", label: "National Key Disciplines" },
    stat1Zh: { value: "7个", label: "国家重点学科" },
    stat2: { value: "17", label: "Clinical Key Specialties" },
    stat2Zh: { value: "17个", label: "临床重点专科" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-sun-yatsen.jpg",
    city: "Guangzhou",
  },
  {
    slug: "guanghua",
    name: "Guanghua Hospital",
    nameZh: "上海中医药大学附属光华医院",
    subtitle: "Guanghua Hospital Affiliated to Shanghai University of TCM",
    grade: "Grade A Tertiary",
    gradeZh: "三级甲等",
    description:
      "One of the four earliest TCM clinical bases nationwide, with significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy",
    descriptionZh: "全国最早建立的四大中医临床基地之一，在中医药治疗恶性肿瘤、骨退行性病变、肾病等领域具有显著优势",
    location: "Shanghai",
    locationZh: "上海",
    specialties: "Joint Disease, Rheumatology, TCM-Integrated",
    specialtiesZh: "关节病、风湿免疫、中西医结合",
    pills: ["#1 TCM Performance", "2 TCM Masters", "1,750 Beds"],
    pillsZh: ["全国中医绩效第一", "国医大师2名", "1750张床位"],
    stat1: { value: "5.36M+", label: "Outpatient Visits" },
    stat1Zh: { value: "536万+", label: "门急诊人次" },
    stat2: { value: "96,800", label: "Discharged Patients" },
    stat2Zh: { value: "9.68万", label: "出院患者" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-guanghua.jpg",
    city: "Shanghai",
  },
  {
    slug: "beijing-gaobo",
    name: "Beijing Gaobo Hospital",
    nameZh: "北京高博医院",
    grade: "International Research Hospital",
    gradeZh: "国际研究型医院",
    description:
      "Beijing's first international research hospital, focusing on solid tumors, hematologic diseases, and brain science, with deep cooperation with Mass General Brigham and Mayo Clinic",
    descriptionZh: "北京市首个国际研究型医院，聚焦实体肿瘤、血液系统疾病、脑科学三大核心领域，与Mass General Brigham、Mayo Clinic建立深度合作",
    location: "Beijing",
    locationZh: "北京",
    specialties: "Solid Tumors, Hematologic Diseases, Neuroscience",
    specialtiesZh: "实体肿瘤、血液系统疾病、脑科学",
    pills: ["Beijing's First International Research Hospital", "179 Clinical Trials", "Serving 10+ Countries"],
    pillsZh: ["北京市首个国际研究型医院", "179项临床试验", "10+国家服务"],
    stat1: { value: "100,000㎡", label: "Total Building Area" },
    stat1Zh: { value: "10万㎡", label: "总建筑面积" },
    stat2: { value: "500 beds", label: "Planned Beds" },
    stat2Zh: { value: "500张", label: "规划床位" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-beijing-gaobo.jpg",
    city: "Beijing",
  },
  {
    slug: "shenzhen-hengsheng",
    name: "Shenzhen Hengsheng Hospital",
    nameZh: "深圳恒生医院",
    grade: "National Tertiary General Hospital",
    gradeZh: "国家三级综合医院",
    description:
      "National Grade 3 comprehensive hospital, Fosun Health member, integrating medical care, research, teaching, rehabilitation and preventive healthcare, with ART qualification",
    descriptionZh: "国家三级综合医院，复星健康成员医院，集医疗、科研、教学、康复和预防保健于一体的大型现代化医院，具备人类辅助生殖技术资质",
    location: "Shenzhen Bao'an",
    locationZh: "深圳宝安",
    specialties:
      "Reproductive Medicine, Gastroenterology, Orthopaedics, International Medical Center",
    specialtiesZh: "生殖医学科、消化内科、骨科、国际医疗中心",
    pills: ["Fosun Health Member", "ISO15189 Accredited", "ART Qualification"],
    pillsZh: ["复星健康成员", "ISO15189认可", "辅助生殖资质"],
    stat1: { value: "1,100+", label: "Staff" },
    stat1Zh: { value: "1100+", label: "职工人数" },
    stat2: { value: "38", label: "Departments" },
    stat2Zh: { value: "38个", label: "医技科室" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-shenzhen-hengsheng.webp",
    city: "Shenzhen",
  },
];

function HospitalCard({ hospital }: { hospital: Hospital }) {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";

  const name = zh ? hospital.nameZh : ru ? (RU[hospital.name] ?? hospital.name) : hospital.name;
  const grade = zh ? hospital.gradeZh : ru ? (RU[hospital.grade] ?? hospital.grade) : hospital.grade;
  const subtitle = zh
    ? hospital.subtitleZh
    : ru
      ? hospital.subtitle
        ? (RU[hospital.subtitle] ?? hospital.subtitle)
        : undefined
      : hospital.subtitle;
  const description = zh
    ? hospital.descriptionZh
    : ru
      ? (RU[hospital.description] ?? hospital.description)
      : hospital.description;
  const location = zh
    ? hospital.locationZh
    : ru
      ? (RU[hospital.location] ?? hospital.location)
      : hospital.location;
  const specialties = zh
    ? hospital.specialtiesZh
    : ru
      ? (RU[hospital.specialties] ?? hospital.specialties)
      : hospital.specialties;
  const stat1Value = zh
    ? hospital.stat1Zh.value
    : ru
      ? (RU[hospital.stat1.value] ?? hospital.stat1.value)
      : hospital.stat1.value;
  const stat1Label = zh
    ? hospital.stat1Zh.label
    : ru
      ? (RU[hospital.stat1.label] ?? hospital.stat1.label)
      : hospital.stat1.label;
  const stat2Value = zh
    ? hospital.stat2Zh.value
    : ru
      ? (RU[hospital.stat2.value] ?? hospital.stat2.value)
      : hospital.stat2.value;
  const stat2Label = zh
    ? hospital.stat2Zh.label
    : ru
      ? (RU[hospital.stat2.label] ?? hospital.stat2.label)
      : hospital.stat2.label;
  const viewDetails = zh ? "查看详情" : ru ? (RU["View Details"] ?? "View Details") : "View Details";
  const viewDetailsAria = zh
    ? `查看详情 - ${hospital.nameZh}`
    : ru
      ? (RU[`View Details - ${hospital.name}`] ?? `View Details - ${hospital.name}`)
      : `View Details - ${hospital.name}`;
  const featuredAria = zh
    ? "推荐医院"
    : ru
      ? (RU["Featured Hospital"] ?? "Featured Hospital")
      : "Featured Hospital";
  const featuredText = zh ? "推荐医院" : ru ? (RU["Featured"] ?? "Featured") : "Featured";
  const locationSr = zh ? "Location" : ru ? (RU["Location"] ?? "Location") : "Location";
  const specialtiesSr = zh ? "Specialties" : ru ? (RU["Specialties"] ?? "Specialties") : "Specialties";

  return (
    <li className="group relative" role="listitem">
      <Link
        href={`/hospitals/${hospital.slug}`}
        aria-label={viewDetailsAria}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4D3E]/20 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7CB342]/25"
      >
        <div
          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
          aria-label={featuredAria}
        >
          <Icons.star className="h-3 w-3" aria-hidden="true" />
          {featuredText}
        </div>
        <figure className="h-52 overflow-hidden relative">
          <img
            src={hospital.image}
            alt={`${name} - ${grade}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#1B4D3E] shadow-md">
            {grade}
          </div>
        </figure>
        <article className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-1 group-hover:text-[#1B4D3E] transition-colors duration-300">
            {name}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
          )}
          <ul className="flex flex-wrap gap-2 mb-4 list-none" role="list">
            {hospital.pills.map((pill, pillIdx) => (
              <li
                key={pill}
                className="px-2.5 py-1 bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs rounded-md font-medium"
                role="listitem"
              >
                {zh ? hospital.pillsZh[pillIdx] : ru ? (RU[pill] ?? pill) : pill}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <dl className="space-y-2.5 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Icons.mapPin className="mr-2 text-[#1B4D3E] flex-shrink-0 h-4 w-4" />
              <dt className="sr-only">{locationSr}</dt>
              <dd className="truncate">{location}</dd>
            </div>
            <div className="flex items-start text-sm text-gray-600">
              <Icons.award className="mr-2 text-[#1B4D3E] flex-shrink-0 mt-0.5 h-4 w-4" />
              <dt className="sr-only">{specialtiesSr}</dt>
              <dd className="line-clamp-2">{specialties}</dd>
            </div>
          </dl>
          <dl className="grid grid-cols-2 gap-3 mb-5 p-3 bg-gradient-to-br from-[#1B4D3E]/5 to-[#2E7D5A]/5 rounded-xl border border-[#1B4D3E]/10">
            <div className="text-center">
              <dt className="text-lg font-bold text-[#1B4D3E]">{stat1Value}</dt>
              <dd className="text-xs text-gray-500">{stat1Label}</dd>
            </div>
            <div className="text-center">
              <dt className="text-lg font-bold text-[#1B4D3E]">{stat2Value}</dt>
              <dd className="text-xs text-gray-500">{stat2Label}</dd>
            </div>
          </dl>
          <span className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B4D3E] py-3 text-center font-medium text-white shadow-md transition-all duration-300 group-hover:bg-[#143D30] group-hover:shadow-lg">
            {viewDetails}
            <Icons.arrowRight className="group-hover:translate-x-1 transition-transform duration-300 h-4 w-4" aria-hidden="true" />
          </span>
        </article>
      </Link>
    </li>
  );
}

export function HospitalDirectory() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";
  const [city, setCity] = useState("All Cities");

  const filtered =
    city === "All Cities" ? HOSPITALS : HOSPITALS.filter((h) => h.city === city);

  const cityLabel = zh ? (CITY_ZH[city] ?? city) : ru ? (RU[city] ?? city) : city;

  return (
    <section
      aria-labelledby="hospitals-list-heading"
      className="container-custom px-4 py-16"
    >
      <nav
        aria-label={ru ? (RU["City filter"] ?? "City filter") : "City filter"}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-3 justify-center" role="list">
          {CITIES.map((c) => {
            const active = c === city;
            return (
              <button
                key={c}
                aria-pressed={active}
                role="listitem"
                onClick={() => setCity(c)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#1B4D3E] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-[#1B4D3E]/10 hover:text-[#1B4D3E] border border-gray-200"
                }`}
              >
                {zh ? (CITY_ZH[c] ?? c) : ru ? (RU[c] ?? c) : c}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="text-center mb-8" role="status" aria-live="polite">
        <p className="text-gray-600">
          {zh ? "显示 " : ru ? "Показывать " : "Showing "}
          <span className="font-semibold text-[#1B4D3E]">{filtered.length}</span>
          {zh ? " 家医院" : ru ? " больницы" : " hospitals"}
          {city !== "All Cities" && (
            <span>
              {zh ? " 位于 " : " in "}
              <span className="font-semibold text-[#1B4D3E]">{cityLabel}</span>
            </span>
          )}
        </p>
      </div>

      <h2 id="hospitals-list-heading" className="sr-only">
        {ru ? (RU["Hospital Directory"] ?? "Hospital Directory") : "Hospital Directory"}
      </h2>

      {filtered.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none" role="list">
          {filtered.map((hospital) => (
            <Reveal key={hospital.slug} y={30} className="flex">
              <HospitalCard hospital={hospital} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-[#1A1A2E] mb-2">
            {zh ? "未找到医院" : "No hospitals found"}
          </p>
          <p className="text-gray-500">
            {zh ? "尝试选择其他城市筛选" : "Try selecting a different city filter"}
          </p>
        </div>
      )}
    </section>
  );
}
