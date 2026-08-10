import type { Metadata } from "next";
import Link from "next/link";

import { Eye, Pill, Smile } from "lucide-react";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Shenzhen Hengsheng Hospital | MedKungFu",
  description:
    "National Grade 3 Comprehensive Hospital · Fosun Health Member Hospital. Shenzhen Hengsheng Hospital in Baoan District — Reproductive Medicine, Medical Gastroenterology, Ophthalmology, Orthopaedics, Rehabilitation Medicine and International Medical Center.",
};

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export default function ShenzhenHengshengHospitalPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
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
              alt="Shenzhen Hengsheng Hospital exterior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-indigo-950/70 to-blue-950/80"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
              <div>
                <p className="text-lg text-blue-200 mb-4 tracking-wider">
                  Fosun Health Member Hospital
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Shenzhen Hengsheng Hospital
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-4">
                  深圳恒生医院
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  National Grade 3 Comprehensive Hospital · Fosun Health Member
                  Hospital · Integrating Medical Care, Research, Teaching,
                  Rehabilitation and Preventive Healthcare
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    100,000㎡ Building Area
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    1,100+ Staff
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    38 Medical Departments
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    ISO15189 Accredited
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                    Consult Now
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ===== STATS STRIP ===== */}
          <section className="py-14 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-2 gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm md:grid-cols-4 lg:grid-cols-8 lg:gap-0 lg:divide-x lg:divide-blue-100">
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Total Building Area
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    100,000㎡
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Planned Beds
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    1,100 beds
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Medical Departments
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    38个
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Master/PhD Holders
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    80+
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Staff
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    1100+
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Open Beds
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    680+ beds
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Senior Titles
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    130+
                  </dd>
                </div>
                <div className="flex min-h-[112px] flex-col items-center justify-center px-3 py-4 text-center">
                  <dt className="min-h-[26px] text-xs font-medium leading-snug text-gray-500">
                    Drive to Border Crossing
                  </dt>
                  <dd className="mt-2 text-2xl font-bold leading-tight text-blue-700 md:text-3xl">
                    30 min
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* ===== INTRO ===== */}
          <section id="intro" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal x={-30}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                    National Grade 3 Comprehensive Hospital · Fosun Health
                    Member Hospital
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Shenzhen Hengsheng Hospital was approved by Guangdong
                    Provincial Health Commission. It is a large modern Grade 3
                    comprehensive hospital integrating medical care, research,
                    teaching, rehabilitation and preventive healthcare. It is
                    one of the medical institutions most qualified for human
                    assisted reproductive technology (the only one in western
                    Shenzhen, 8 in total in Shenzhen).
                  </p>
                  <p className="text-gray-600 mb-6">
                    As a Fosun Health member hospital, Hengsheng Hospital
                    integrates the group&apos;s quality medical resources,
                    introduces internationally advanced equipment and
                    technology, and provides high-quality, personalized medical
                    services for patients. The hospital has won many honors,
                    including Top 100 Hospitals in Ai Li Bi Social Medical
                    Practice · Single Hospital · Competitiveness Ranking.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-[#1A1A2E] mb-4">
                      Honors &amp; Qualifications
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-700 text-sm">
                        <Icons.award
                          size={16}
                          className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        Top 100 Hospitals in Ai Li Bi Social Medical Practice ·
                        Single Hospital · Competitiveness Ranking
                      </li>
                      <li className="flex items-start text-gray-700 text-sm">
                        <Icons.award
                          size={16}
                          className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        Hospital with Human Assisted Reproductive Technology
                        Qualification
                      </li>
                      <li className="flex items-start text-gray-700 text-sm">
                        <Icons.award
                          size={16}
                          className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        Obtained ISO15189 Medical Laboratory Accreditation (test
                        results mutually recognized by thousands of
                        international laboratories)
                      </li>
                      <li className="flex items-start text-gray-700 text-sm">
                        <Icons.award
                          size={16}
                          className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        National Chest Pain Center Certified Unit
                      </li>
                    </ul>
                  </div>
                </Reveal>
                <Reveal x={30} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured hospital image */}
                  <img
                    src={`${IMG}/shenzhen-dept-1.jpg`}
                    alt="Shenzhen Hengsheng Hospital"
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
                  Key &amp; Featured Specialties
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Ten core departments providing comprehensive professional
                  medical services
                </p>
              </Reveal>
              <div className="space-y-8">
                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.heart size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Reproductive Medicine Dept
                          </h3>
                          <p className="text-blue-600 text-sm">生殖医学科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Member institution of Greater Bay Area Reproductive
                        Medicine Alliance, chairman unit of Shenzhen Non-public
                        Medical Institution Industry Association Integrated
                        Chinese-Western Reproductive Health Committee.
                        Established in 2012, approved for assisted reproductive
                        technology in 2015, obtained embryology laboratory
                        qualification in 2019. Featured treatments:
                        &quot;Trilogy&quot; sequential therapy for ovarian
                        insufficiency and premature ovarian failure, precise
                        pregnancy preservation for recurrent miscarriage,
                        endometrial receptivity assessment and improvement.
                        Clinical pregnancy rate stably above 50%, pregnancy rate
                        for patients under 35 reaches 60.52%.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`}
                        alt="Reproductive Medicine Dept"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.activity size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Medical Gastroenterology
                          </h3>
                          <p className="text-blue-600 text-sm">消化内科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Chairman unit of Shenzhen Non-public Medical Institution
                        Industry Association Gastroenterology Professional
                        Committee, training base for digestive endoscopy
                        professional capability of China Non-public Medical
                        Institution Association. Equipped with internationally
                        advanced Olympus 290 series endoscopy system, completing
                        over 8,000 endoscopic diagnoses and treatments annually.
                        Featured techniques: ESD/EMR endoscopic minimally
                        invasive treatment, ERCP biliary-pancreatic disease
                        diagnosis and treatment, endoscopic ultrasound-guided
                        biopsy.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1551076805-e1869033e561-w600.jpg`}
                        alt="Medical Gastroenterology"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Eye size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Ophthalmology Dept
                          </h3>
                          <p className="text-blue-600 text-sm">眼科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Liao Pinzheng National TCM Master Studio, designated
                        alliance hospital for myopia high-risk population
                        screening in Shenzhen, science popularization and
                        education base for children and adolescent myopia
                        prevention and control in Shenzhen. Inheriting TCM
                        ophthalmology &quot;Five Wheels Theory&quot;, combined
                        with modern refractive surgery technology, performing
                        SMILE, ICL lens implantation, corneal cross-linking,
                        etc. Completing over 3,000 refractive surgeries
                        annually, covering over 100,000 people in adolescent
                        myopia prevention and control.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1579684385127-1ef15d508118-w600.jpg`}
                        alt="Ophthalmology Dept"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.bone size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Orthopaedics
                          </h3>
                          <p className="text-blue-600 text-sm">骨科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Member unit of Greater Bay Area Digital Orthopedics
                        Alliance, orthopedic collaboration department of Nanshan
                        District People&apos;s Hospital and Baoan District
                        People&apos;s Hospital. Led by Prof. Kong Qingkui
                        (National Key Discipline) from former Second Hospital of
                        Shanxi Medical University, developing sub-specialties
                        including spinal minimally invasive surgery, joint
                        replacement, sports medicine. Featured techniques:
                        transforaminal endoscopic nucleotomy, 3D-printed
                        personalized prosthesis replacement, platelet-rich
                        plasma (PRP) intra-articular injection.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1559757175-5700dde675bc-w600.jpg`}
                        alt="Orthopaedics"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.stethoscope size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Rehabilitation Medicine Dept
                          </h3>
                          <p className="text-blue-600 text-sm">康复医学科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Vice chairman unit of Shenzhen Non-public Medical
                        Association Rehabilitation Medicine Professional
                        Committee, designated hospital for work injury
                        rehabilitation, long-term medical care, and disabled
                        person rehabilitation services in Shenzhen. Has over
                        1,000㎡ rehabilitation treatment area, equipped with
                        advanced equipment such as German Hocoma Lokomat robot
                        gait training system, transcranial magnetic stimulator.
                        Featured programs: post-stroke rehabilitation, spinal
                        cord injury rehabilitation, post-operative bone and
                        joint rehabilitation, pediatric rehabilitation.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1571019613454-1cb2f99b2d8b-w600.jpg`}
                        alt="Rehabilitation Medicine Dept"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Pill size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Proctology
                          </h3>
                          <p className="text-blue-600 text-sm">肛肠科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Inheritor unit of Shenzhen Intangible Cultural Heritage
                        &quot;Du&apos;s Anorectal Therapy&quot;.
                        &quot;Du&apos;s Anorectal Therapy&quot; is a featured
                        therapy created by fourth-generation inheritor Chief
                        Physician Du Ping, based on ancestral skills and
                        integrated with modern anorectal surgical concepts.
                        Expertise: minimally invasive treatment of complex anal
                        fistula, high abscess, circular mixed hemorrhoids, rectal
                        prolapse. Completing over 2,000 anorectal surgeries
                        annually, with recurrence rate below 5%.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`}
                        alt="Proctology"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Smile size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Stomatology
                          </h3>
                          <p className="text-blue-600 text-sm">口腔科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Shenzhen clinical skills training base of China Dental
                        Prevention Foundation, vice president unit of Shenzhen
                        Stomatological Association, chairman unit of Shenzhen
                        Oral Prevention Foreign Expert Committee, Baoan District
                        oral health science popularization education base.
                        Includes dental implant center, early childhood
                        orthodontic center, orthodontic center, prosthodontic
                        center, etc. Equipped with German Kavo CBCT, iTero
                        intraoral scanner, microscopic root canal treatment
                        system. Completing over 1,500 dental implants annually.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1606811841689-23dfddce3e95-w600.jpg`}
                        alt="Stomatology"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.droplets size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Nephrology Dept
                          </h3>
                          <p className="text-blue-600 text-sm">肾内科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Chairman unit of Fosun Health Nephrology Medical
                        Community Specialty Alliance. Has hemodialysis center,
                        peritoneal dialysis center, chronic kidney disease
                        management center. Equipped with over 30 imported
                        hemodialysis machines and 2 CRRT machines, capable of
                        hemodialysis, hemofiltration, hemoperfusion, plasma
                        exchange and other treatment modes. Featured techniques:
                        autogenous arteriovenous fistula formation, long-term
                        catheter insertion, peritoneal dialysis catheterization.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1579154204601-01588f351e67-w600.jpg`}
                        alt="Nephrology Dept"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.sparkles size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            Endocrinology Dept
                          </h3>
                          <p className="text-blue-600 text-sm">内分泌科</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Member unit of Guangdong Obesity and Diabetes Specialty
                        Alliance / Obesity and Diabetes Clinical Remission Center
                        Adolescent Obesity Prevention and Control Base, one of
                        the first batch of obesity multidisciplinary diagnosis
                        and treatment centers in Guangdong. Adopts
                        &quot;Double C&quot; intensive treatment plan
                        (continuous subcutaneous insulin infusion + continuous
                        glucose monitoring), combined with comprehensive
                        management including nutritional intervention, exercise
                        prescription, behavioral correction. Diagnosing and
                        treating over 5,000 diabetic patients annually, with
                        diabetes remission rate above 30%.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`}
                        alt="Endocrinology Dept"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                          <Icons.globe size={40} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1A1A2E]">
                            International Medical Center
                          </h3>
                          <p className="text-blue-600 text-sm">国际医疗中心</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Committed to providing high-end health management and
                        medical services for domestic and international clients.
                        Gathering senior experts, equipped with dedicated
                        translators, providing one-stop services from
                        appointment, consultation, examination to
                        hospitalization. Covering general practice outpatient,
                        tumor screening, cardiovascular and cerebrovascular
                        assessment, anti-aging management, etc. Has established
                        direct payment cooperation with multiple international
                        commercial insurance companies, supporting multi-language
                        services.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                      <img
                        src={`${IMG}/photo-1519494026892-80bbd2d6fd0d-w600.jpg`}
                        alt="International Medical Center"
                        className="w-full h-full object-cover min-h-[200px]"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== RENOWNED SPECIALISTS FROM HONG KONG ===== */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-16">
                <p className="text-lg text-indigo-200 mb-2 tracking-wider">
                  International Medical Center · Distinguished Experts
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Renowned Specialists from Hong Kong
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  International Medical Center gathers renowned Hong Kong experts
                  to provide you with international diagnosis and treatment
                  services
                </p>
              </Reveal>
              <div className="space-y-8">
                <Reveal
                  x={-30}
                  className="bg-gradient-to-r from-purple-800/80 to-blue-800/80 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <div className="grid md:grid-cols-[200px_1fr] gap-0">
                    <div className="flex items-center justify-center p-8 bg-purple-900/50">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured specialist photo */}
                      <img
                        src={`${IMG}/shenzhen-dept-2.png`}
                        alt="Dr. Bai Zhancheng"
                        className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                        Dr. Bai Zhancheng
                      </h3>
                      <p className="text-indigo-200 mb-1">
                        <span className="font-semibold">Specialty:</span>{" "}
                        Orthopaedics
                      </p>
                      <p className="text-indigo-200 mb-4">
                        <span className="font-semibold">Areas of Focus:</span>{" "}
                        Hip and pelvic surgery
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Bachelor of Medicine and Bachelor of Surgery,
                          University of Birmingham, UK
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Postgraduate Diploma in Sports and Exercise Medicine,
                          University of Bath, UK
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Royal College of Surgeons of Edinburgh
                          (Orthopaedics)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Hong Kong Academy of Medicine
                          (Orthopaedics)
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  x={30}
                  className="bg-gradient-to-r from-blue-800/80 to-indigo-800/80 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <div className="grid md:grid-cols-[1fr_200px] gap-0">
                    <div className="p-8 order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                        Dr. Zhang Zhi
                      </h3>
                      <p className="text-indigo-200 mb-4">
                        <span className="font-semibold">Specialty:</span>{" "}
                        Obstetrics and Gynecology
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Bachelor of Medicine and Bachelor of Surgery,
                          University of Melbourne, Australia
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Royal College of Obstetricians and
                          Gynaecologists, UK
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Hong Kong College of Obstetricians and
                          Gynaecologists
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Hong Kong Academy of Medicine
                          (Obstetrics &amp; Gynaecology)
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center p-8 bg-blue-900/50 order-1 md:order-2">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured specialist photo */}
                      <img
                        src={`${IMG}/shenzhen-dept-3.png`}
                        alt="Dr. Zhang Zhi"
                        className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  x={-30}
                  className="bg-gradient-to-r from-purple-800/80 to-blue-800/80 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <div className="grid md:grid-cols-[200px_1fr] gap-0">
                    <div className="flex items-center justify-center p-8 bg-purple-900/50">
                      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured specialist photo */}
                      <img
                        src={`${IMG}/shenzhen-dept-4.png`}
                        alt="Dr. Zhou Hongcan"
                        className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                        Dr. Zhou Hongcan
                      </h3>
                      <p className="text-indigo-200 mb-1">
                        <span className="font-semibold">Specialty:</span>{" "}
                        Orthopaedics
                      </p>
                      <p className="text-indigo-200 mb-4">
                        <span className="font-semibold">Areas of Focus:</span>{" "}
                        Spinal surgery
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Bachelor of Medicine and Bachelor of Surgery,
                          University of Hong Kong
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Member of the Royal College of Surgeons of Edinburgh
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Hong Kong College of Orthopaedics
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Royal College of Surgeons of Edinburgh
                          (Orthopaedics)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Fellow of the Hong Kong Academy of Medicine
                          (Orthopaedics)
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== CONTACT US ===== */}
          <section id="contact" className="py-20 lg:py-32 bg-blue-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contact Us
                </h2>
                <p className="text-blue-200 mb-8">
                  Shenzhen Hengsheng Hospital International Medical Center
                  provides professional medical consultation services
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6">
                    <Icons.mapPin
                      size={32}
                      className="mx-auto mb-3 text-blue-300"
                    />
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-blue-200 text-sm">
                      No. 20 Yintian Road, Xixiang Street, Baoan District,
                      Shenzhen
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <Icons.phone
                      size={32}
                      className="mx-auto mb-3 text-blue-300"
                    />
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-blue-200 text-sm">19819833123</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <Icons.globe
                      size={32}
                      className="mx-auto mb-3 text-blue-300"
                    />
                    <h3 className="font-bold mb-2">Website</h3>
                    <p className="text-blue-200 text-sm">www.hsvy.com.cn</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:19819833123"
                    className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Phone Consultation
                  </a>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Online Inquiry
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
