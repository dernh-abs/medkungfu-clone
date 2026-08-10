import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Longhua Hospital Affiliated to Shanghai University of TCM | MedKungFu",
  description:
    "One of the Four Earliest Established TCM Clinical Bases Nationwide. Grade 3A TCM hospital integrating medical care, teaching and research · National Demonstration TCM Hospital.",
};

export default function LonghuaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
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
              alt="Longhua Hospital exterior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/85 via-orange-950/70 to-amber-950/80"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Longhua Hospital Affiliated to Shanghai University of TCM
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  One of the Four Earliest Established TCM Clinical Bases
                  Nationwide
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  Grade 3A TCM Hospital integrating medical care, teaching and
                  research · National Demonstration TCM Hospital
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Founded in 1960
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    #1 in 2022 National TCM Hospital Performance
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    1,750 Beds
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="px-8 py-3 bg-white text-amber-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                  <Link
                    href="/contact"
                    className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                  >
                    Book Consultation
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
                  Hospital Overview
                </h2>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                <Reveal className="bg-amber-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    1960
                  </div>
                  <p className="text-gray-600 text-sm">Founded</p>
                </Reveal>
                <Reveal className="bg-amber-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    1,750 beds
                  </div>
                  <p className="text-gray-600 text-sm">Total Beds</p>
                </Reveal>
                <Reveal className="bg-amber-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    3000+
                  </div>
                  <p className="text-gray-600 text-sm">Staff</p>
                </Reveal>
                <Reveal className="bg-amber-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    5.36M+
                  </div>
                  <p className="text-gray-600 text-sm">2025 Outpatient Visits</p>
                </Reveal>
                <Reveal className="bg-amber-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    #1 in China
                  </div>
                  <p className="text-gray-600 text-sm">
                    2022 TCM Hospital Performance
                  </p>
                </Reveal>
              </div>
              <Reveal className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Longhua Hospital Affiliated to Shanghai University of TCM was
                  established in July 1960. It is one of the four earliest TCM
                  clinical bases established nationwide, and a Grade 3A TCM
                  hospital integrating medical care, teaching and research, as
                  well as a National Demonstration TCM Hospital. The hospital has
                  three campuses: Xuhui, Shangnan and Hangtou, with a total of
                  1,750 approved beds and over 3,000 staff. In 2025, outpatient
                  and emergency visits reached 5.36 million, with 96,800
                  discharged patients.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The hospital adheres to the development strategy of
                  &quot;Famous Doctors, Famous Departments, Famous Hospital,
                  Famous Medicines&quot;. It has significant advantages in TCM
                  treatment of malignant tumors, bone degenerative diseases,
                  nephropathy and other fields. The hospital has 2 TCM Masters, 4
                  Changjiang Scholars, 4 Qihuang Scholars, and 44 Famous Shanghai
                  TCM Doctors. It ranked first among comprehensive TCM hospitals
                  in the 2022 National Public Hospital Performance Assessment.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ===== KEY SPECIALTIES ===== */}
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Key Specialties
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Significant advantages in TCM treatment of malignant tumors,
                  bone degenerative diseases, nephropathy and other fields
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-600">Oncology</h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                      National TCM Clinical Research Base
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Largest TCM &amp; integrated tumor prevention research base
                    nationwide
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        TCM Master Liu Jiaxiang pioneered &quot;Fu Zheng Zhi
                        Ai&quot; theory in 1972
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Leading in advanced lung cancer, gastric cancer,
                        colorectal cancer treatment
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Intervention window moved to early-mid stage and
                        precancerous lesions
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Systematic TCM intervention for pulmonary nodules and
                        other precancerous lesions
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Independently developed 3 new drugs (Jinfukang oral
                        liquid, Qitian Fuzheng capsules, Chanwu gel plaster)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Peak annual outpatient visits reached 540,000, annual
                        discharges 14,000
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-600">
                      Orthopedics &amp; Traumatology
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                      #2 Among National TCM Hospitals
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Founded by Mr. Shi Xiaoshan, integrating four major Shanghai
                    trauma schools
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Leading nationwide in TCM treatment of degenerative spine
                        and joint diseases
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Established integrated diagnosis &amp; treatment system
                        for cervical spondylotic myelopathy
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Clinical efficacy improved by 15%, promoted in 25 medical
                        institutions nationwide
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Combining TCM characteristics with modern technology
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-600">
                      Nephrology
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                      Leading TCM Nephrology Discipline
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Represented by Prof. Chen Yiping, famous Shanghai TCM doctor
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Innovatively proposed &quot;Harmonizing Triple
                        Burner&quot; kidney treatment theory with specialized
                        formulas
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Unique system for treating refractory nephropathies:
                        membranous nephropathy, IgA nephropathy, diabetic
                        nephropathy
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Research achievements won First Prize of National Science
                        and Technology Progress Award
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Significantly improved clinical efficacy</span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-600">
                      Proctology
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                      #1 Academic Influence in Proctology among TCM Hospitals
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Important part of Haipai TCM Gu&apos;s Surgery
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Inheriting Gu&apos;s surgical academic thoughts</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Significant advantages in anorectal disease diagnosis and
                        treatment
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-600">
                      Gastroenterology
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                      Key Specialty of NTCM
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Remarkable efficacy in atrophic gastritis and gastric
                    precancerous lesion treatment
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Focus on integrated Chinese-Western treatment of digestive
                        system diseases
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Unique advantages in gastric precancerous lesion
                        intervention
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-600">
                      Pulmonology
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap ml-2">
                      Shanghai TCM Respiratory Disease Advantage Specialty
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Established in 1965, first among national TCM hospital systems
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Rich experience in respiratory system disease diagnosis
                        and treatment
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Integrated Chinese-Western treatment of pulmonary diseases
                      </span>
                    </li>
                  </ul>
                </Reveal>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">
                  Other Featured Specialties
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 text-sm">
                      TCM Surgery (Gu&apos;s School, chronic non-healing wounds,
                      diabetic foot, peripheral vascular disease)
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 text-sm">TCM Breast Department</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 text-sm">
                      Acupuncture (including &quot;Lu&apos;s Acupuncture&quot;
                      National Intangible Cultural Heritage)
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 text-sm">Cardiology</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-700 text-sm">Cholelithiasis</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== EXPERT TEAM ===== */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Expert Team
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Gathering top experts including TCM Masters, Changjiang
                  Scholars, and Qihuang Scholars
                </p>
              </Reveal>
              <div className="space-y-12">
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
                  Core Experts by Department
                </h3>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-amber-600 mb-6">
                    Oncology
                  </h4>
                  <div className="mb-6 bg-amber-50 rounded-xl p-6">
                    <h5 className="font-bold text-amber-700 mb-2">Liu Jiaxiang</h5>
                    <p className="text-sm text-gray-600">
                      TCM Master, Academic Leader
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Li Hegen</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Level-2 Chief Physician, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Current Director of Oncology & Third Oncology Dept
Head of National TCM Clinical Research Base (Malignant Tumors)
Head of Shanghai TCM Oncology Clinical Medical Center
Chairman of Shanghai TCM Association Oncology Branch`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Zhou Lei</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Executive Director of Oncology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Exploring lung cancer precancerous lesions and early
                        prevention
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Xu Zhenye
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Lifetime Professor, PhD Supervisor, Famous Shanghai TCM
                        Doctor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Vice President of World Federation of Chinese Medicine Societies Oncology Committee
Expert in integrated treatment of lung cancer, liver cancer, breast cancer
7 invention patents`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Liu Lingshuang
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Deputy Director of Oncology & Director of Sixth Oncology Dept
Studied under TCM Master Prof. Liu Jiaxiang
Served nearly 300,000 patients
Research reduced postoperative recurrence/metastasis risk of stage IIIA NSCLC by 62.2%`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Wang Zhongqi
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Master Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Director of Second Oncology Dept, studied under Prof. Xu
                        Zhenye
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Shen Keping
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Master Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Deputy Director of Oncology & Director of Fifth Oncology Dept
Studied under Prof. Qiu Jiaxin
33 years in digestive tract malignant tumor prevention and treatment`}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-amber-600 mb-6">
                    Orthopedics &amp; Traumatology
                  </h4>
                  <div className="mb-6 bg-amber-50 rounded-xl p-6">
                    <h5 className="font-bold text-amber-700 mb-2">Shi Qi</h5>
                    <p className="text-sm text-gray-600">
                      TCM Master, Academic Founder
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Mo Wen</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Level-2 Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Administrative Director of Orthopedics
Deputy Director of Spine Disease Institute, Shanghai University of TCM
Studied under TCM Master Prof. Shi Qi
Representative inheritor of Shanghai Intangible Cultural Heritage Shi's Trauma Therapy
Established complete technical system of "Yi Qi Hua Yu Bu Shen Method" for cervical spondylotic myelopathy
Won 6 awards including National Science and Technology Progress Award`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Wang Yongjun
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, Researcher, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Chief Scientist of National "973" Program, Changjiang Scholar Distinguished Professor
Recipient of National Outstanding Youth Science Fund
Director of Spine Disease Institute
Mainly engaged in applied and basic research of TCM prevention and treatment of bone degenerative diseases
Expert in cervical/lumbar diseases, spinal tumors, osteoporosis`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Ge Jinghua
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, Master Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Long-term engagement in orthopedic clinical practice,
                        research and teaching
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Wu Xuequn
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Deputy Administrative Director of Orthopedics, Head of Trauma Group
Studied under Prof. Shi Qi and Teacher Gong Zhengfeng
Expert in fracture trauma, neck/back pain, osteoarthritis`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Hou Baoxing
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Expert in diagnosis and treatment of cervical spondylosis,
                        lumbar disease, osteoarthritis, ankylosing spondylitis
                        and other difficult cases
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-amber-600 mb-6">
                    Nephrology
                  </h4>
                  <div className="mb-6 bg-amber-50 rounded-xl p-6">
                    <h5 className="font-bold text-amber-700 mb-2">Chen Yiping</h5>
                    <p className="text-sm text-gray-600">
                      Lifetime Professor, PhD Supervisor, Famous Shanghai TCM
                      Doctor
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Chen Yiping
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        One of the founders of Chinese integrative nephrology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Guiding teacher of National Famous Old TCM Expert Inheritance Studio
Creatively proposed "Harmonizing Triple Burner" kidney treatment theory`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Deng Yueyi
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of Nephrology
Academic leader of TCM nephrology, Shanghai University of TCM
Vice Chairman of Kidney Disease Professional Committee, China Association of Integrative Medicine
Guiding teacher of 7th batch National Old TCM Expert Academic Experience Inheritance
Studied under Prof. Chen Yiping`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Zhong Yifei
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of First Nephrology Dept
Deputy Director of Nephrology Institute, Shanghai University of TCM
"Young Qihuang Scholar" of National Administration of Traditional Chinese Medicine
Vice President of Nephrology Professional Committee, World Federation of Chinese Medicine Societies
Research focus: diabetic nephropathy, IgA nephropathy`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Wang Lin</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of Nephrology, Longhua Hospital Shangnan Campus
Head of Chen Yiping National Famous Old TCM Inheritance Studio`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Zhu Rong</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Expert in integrated treatment of hypertensive nephropathy,
                        gouty nephropathy, chronic pyelonephritis
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-amber-600 mb-6">
                    Other Department Core Experts
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Cao Yongqing
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of Proctology
Comprehensively responsible for medical, teaching and research work`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Wang Chen</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Standing Committee Member of Proctology Professional Committee, World Federation of Chinese Medicine Societies
Expert in difficult cases like high horseshoe perianal abscess`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Zhang Huiyong
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Discipline leader of Pulmonology
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Que Huafa
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Level-2 Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Discipline leader of Key Specialty, National Administration of Traditional Chinese Medicine
Fifth generation academic inheritor of Shanghai Gu's Surgery School
Shanghai Medical Craftsman
Expert in diabetic foot, varicose ulcers, peripheral vascular disease, thyroid and breast diseases`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Fang Bangjiang
                      </h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of Emergency Department
Discipline leader of Ministry of Health National Key Clinical Specialty`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Chen Wei</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor, PhD Supervisor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of Critical Care Medicine
Visiting scholar at Harvard University, USA`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Xia Xiang</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Expert in integrated treatment of chronic gastritis,
                        chronic enteritis, coronary heart disease, hypertension,
                        post-stroke sequelae
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Peng Sheng</h5>
                      <p className="text-sm text-amber-600 mb-3">
                        Chief Physician, Professor
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Director of Anesthesiology
Person in charge of National First-class Anesthesiology Course
Long-term commitment to perioperative brain protection and brain function regulation research`}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Famous Doctors &amp; Departments · Inheritance &amp; Innovation
                </h2>
                <p className="text-xl text-amber-100 mb-8">
                  Address: No. 725 Wanping South Road, Xuhui District, Shanghai
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Book Consultation Now
                </Link>
              </Reveal>
            </div>
          </section>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
