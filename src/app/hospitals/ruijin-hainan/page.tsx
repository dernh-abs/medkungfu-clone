import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title:
    "Ruijin Hospital Hainan Branch, Shanghai Jiao Tong University School of Medicine | MedKungFu",
  description:
    "The only public medical institution in Boao Lecheng Pilot Zone · National Regional Medical Center. Four Licensed Policies, 219 licensed drugs & devices, major diseases treated on island.",
};

export default function RuijinHainanPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
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
              alt="Ruijin Hospital Hainan exterior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/85 via-teal-950/70 to-cyan-950/80"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Ruijin Hospital Hainan Branch, Shanghai Jiao Tong University
                  School of Medicine
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  Hainan Boao Research Hospital
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                  The only public medical institution in Boao Lecheng Pilot Zone
                  · National Regional Medical Center
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Four Licensed Policies
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    219 Licensed Drugs &amp; Devices
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Major Diseases Treated on Island
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="px-8 py-3 bg-white text-cyan-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
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
                <Reveal className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    2022
                  </div>
                  <p className="text-gray-600 text-sm">Official Operation</p>
                </Reveal>
                <Reveal className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    500 beds
                  </div>
                  <p className="text-gray-600 text-sm">Phase I Approved Beds</p>
                </Reveal>
                <Reveal className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    219项
                  </div>
                  <p className="text-gray-600 text-sm">
                    Licensed Drugs &amp; Devices
                  </p>
                </Reveal>
                <Reveal className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    151项
                  </div>
                  <p className="text-gray-600 text-sm">First in China</p>
                </Reveal>
                <Reveal className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    33,000+
                  </div>
                  <p className="text-gray-600 text-sm">Patients Served</p>
                </Reveal>
              </div>
              <Reveal className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Ruijin Hospital Hainan Branch, Shanghai Jiao Tong University
                  School of Medicine (Hainan Boao Research Hospital) is located
                  in Hainan Boao Lecheng International Medical Tourism Pilot
                  Zone. It is the only public medical institution in the Lecheng
                  Pilot Zone and also a National Regional Medical Center. The
                  hospital started trial operation in December 2021 and
                  officially began operation in March 2022, with 500 approved
                  beds in Phase I, and Phase II is under simultaneous
                  construction.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The hospital is built by the Hainan Provincial People&apos;s
                  Government, transferring Shanghai Ruijin Hospital&apos;s
                  &quot;technology, talent, management and brand&quot;, with
                  Hainan Provincial People&apos;s Hospital as the supporting
                  unit, achieving medical homogenization with the Shanghai main
                  hospital. As of March 2026, 219 licensed drugs, devices and
                  new biomedical technologies have been implemented, including
                  151 first-in-China implementations, serving over 33,000
                  patients, and was awarded as an Advanced Collective in the
                  National Health System.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ===== KEY POLICY & RESOURCE ADVANTAGES ===== */}
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Key Policy &amp; Resource Advantages
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Relying on the &quot;Four Licensed&quot; policies of Boao
                  Lecheng Pilot Zone, internationally newly approved drugs and
                  devices can be clinically applied here first
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center text-cyan-600">
                    <Icons.shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    Licensed Medical Care
                  </h3>
                  <p className="text-sm text-gray-600">
                    Internationally newly approved drugs and devices can be
                    clinically applied here first
                  </p>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center text-cyan-600">
                    <Icons.activity className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    Licensed Research
                  </h3>
                  <p className="text-sm text-gray-600">
                    Conduct frontier medical research and clinical trials
                  </p>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center text-cyan-600">
                    <Icons.trendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    Licensed Operation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Introduce international advanced medical management models
                  </p>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center text-cyan-600">
                    <Icons.globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    Licensed International Medical Exchange
                  </h3>
                  <p className="text-sm text-gray-600">
                    Promote international medical cooperation and exchange
                  </p>
                </Reveal>
              </div>
              <Reveal className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Strong Alliance of Shanghai-Hainan Quality Medical Resources
                </h3>
                <p className="text-cyan-100 max-w-3xl mx-auto">
                  In addition to transferring over 1,000 &quot;migratory
                  bird&quot; experts from Shanghai Ruijin Hospital for rotating
                  consultations, the hospital also cooperates deeply with Hainan
                  Provincial People&apos;s Hospital. Outpatient visits reached
                  15,000 in the first half of 2024, and over 400 Shanghai Ruijin
                  experts have traveled between Shanghai and Hainan for surgery,
                  ward rounds and consultations in the past three years.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ===== KEY SPECIALTIES ===== */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Key Specialties
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensively transfer Shanghai Ruijin Hospital&apos;s
                  quality medical resources, focusing on high-quality diagnosis
                  and treatment services around three key discipline clusters
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-cyan-50">
                  <div className="mb-5 flex flex-col gap-3">
                    <span className="w-fit px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                      International Innovative Drug &amp; Device Channel
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-cyan-700">
                      Oncology &amp; Hematology Cluster
                    </h3>
                    <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                      Through Boao licensed drug/device policy, patients can
                      access the latest global anti-cancer drugs and cutting-edge
                      equipment
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Unique advantages in surgical and conversion treatment of
                        pancreatic, hepatobiliary and retroperitoneal tumors
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Can perform robot-assisted high-difficulty minimally
                        invasive surgery
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Hematology department has rich experience in lymphoma,
                        multiple myeloma, acute/chronic leukemia diagnosis and
                        treatment
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Can conduct frontier technologies such as CAR-T cell
                        immunotherapy
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-cyan-50">
                  <div className="mb-5 flex flex-col gap-3">
                    <span className="w-fit px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                      Leading in Cardiovascular Intervention
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-cyan-700">
                      Cardiovascular &amp; Metabolic Disease Cluster
                    </h3>
                    <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                      Featured in cardiovascular diseases such as hypertension,
                      coronary heart disease, arrhythmia
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Coronary intervention diagnosis and treatment technology
                        is leading in complex coronary lesions
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Radiofrequency ablation, cardiac pacemaker and leadless
                        pacemaker implantation
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Renal artery denervation ablation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Neurology has significant advantages in early diagnosis
                        and treatment of cerebrovascular disease, epilepsy,
                        neurodegenerative diseases and Parkinson&apos;s disease
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-cyan-50">
                  <div className="mb-5 flex flex-col gap-3">
                    <span className="w-fit px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                      Comprehensive Neurological Disease Diagnosis &amp; Treatment
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-cyan-700">
                      Neuroscience Cluster
                    </h3>
                    <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                      Relying on Shanghai Ruijin Hospital&apos;s strong
                      neurology and neurosurgery resources
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Covers cerebrovascular disease, nervous system infectious
                        diseases
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Neurodegenerative diseases, epilepsy, Parkinson&apos;s
                        disease and movement disorders
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Comprehensive diagnosis and treatment of neurological
                        diseases such as sleep disorders
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Minimally invasive interventional treatment of various
                        cerebrovascular diseases (intracranial aneurysm, carotid
                        stenosis, arteriovenous malformation, etc.)
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-cyan-50">
                  <div className="mb-5 flex flex-col gap-3">
                    <span className="w-fit px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                      Strong Alliance of Shanghai-Hainan Experts
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-cyan-700">
                      General Internal Medicine &amp; Featured Specialties
                    </h3>
                    <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                      Has expert teams from Shanghai Ruijin Hospital and Hainan
                      Provincial People&apos;s Hospital
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Gastroenterology, Nephrology, Respiratory Medicine
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        TCM Department, Ophthalmology, Orthopedics, Gynecology
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Dermatology, ENT, Stomatology</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Icons.checkCircle className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Tumor intervention, peripheral vascular intervention and
                        comprehensive intervention
                      </span>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== EXPERT TEAM ===== */}
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Expert Team
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Shanghai Ruijin Hospital continuously sends &quot;migratory
                  bird&quot; experts for regular consultations, ward rounds and
                  high-difficulty surgeries between Shanghai and Hainan
                </p>
              </Reveal>
              <div className="space-y-12">
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
                  Expert Teams by Department
                </h3>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-cyan-600 mb-6">
                    Oncology &amp; Hematology Cluster
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Jin Jiabin
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Surgical and conversion treatment of various pancreatic,
                        hepatobiliary and retroperitoneal tumors
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Wang Yanliang
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Minimally invasive treatment of liver, gallbladder,
                        pancreas, spleen, stomach, colorectal tumors
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Zhao Juping
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Associate Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Urological tumors (kidney cancer, adrenal minimally
                        invasive treatment)
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        You Jianhua
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Associate Chief Physician, Director of Hematology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Nutritional anemia, immune thrombocytopenic purpura
Lymphoma, multiple myeloma, acute/chronic leukemia diagnosis and treatment`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Shi Wenbo
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician, Medical Oncology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Chemotherapy, targeted therapy, immunotherapy for solid
                        tumors such as breast cancer, lung cancer, thymoma,
                        esophageal cancer
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Han Liang</h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Attending Physician, Breast Surgery
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Comprehensive treatment of breast cancer including
                        surgery, chemotherapy, endocrine therapy
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-cyan-600 mb-6">
                    Cardiovascular &amp; Metabolic Disease Cluster
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Wu Liqun
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician, Director of Cardiology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Arrhythmia, cardiac pacemaker implantation and
                        cardiovascular interventional treatment
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Qi Shuying
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician, Cardiology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Interventional diagnosis and treatment of complex coronary lesions, radiofrequency ablation
Cardiac pacemaker implantation, renal artery stent implantation
Renal artery denervation ablation, etc.`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Kang Wenyan
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician, Neurology
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Parkinson's disease and movement disorders
Diagnosis and treatment of cerebrovascular disease and sleep disorders`}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-cyan-600 mb-6">
                    Neuroscience Cluster
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Huang Peijian
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Associate Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Cerebrovascular disease, nervous system infectious diseases
Neurodegenerative diseases, epilepsy, etc.`}
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Ni Hongyang
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Attending Physician, Neurosurgery
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {`Minimally invasive interventional treatment of various cerebrovascular diseases
Intracranial aneurysm, carotid stenosis, arteriovenous malformation, etc.`}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                  <h4 className="text-xl font-bold text-cyan-600 mb-6">
                    General Departments
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Sui Liang
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Associate Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Focus on emergency biliary tract diseases, ERCP surgery
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        Zhao Liangchao
                      </h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Associate Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Surgical treatment of digestive system tumors, minimally
                        invasive surgery of liver, gallbladder and pancreas
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                      <h5 className="font-bold text-[#1A1A2E] mb-1">Wu Ning</h5>
                      <p className="text-sm text-cyan-600 mb-3">
                        Chief Physician
                      </p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        Tumor intervention, peripheral vascular intervention and
                        comprehensive intervention
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Major Diseases Treated on Island · No Need to Go Abroad
                </h2>
                <p className="text-xl text-cyan-100 mb-8">
                  Address: Hainan Boao Lecheng International Medical Tourism
                  Pilot Zone
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
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
