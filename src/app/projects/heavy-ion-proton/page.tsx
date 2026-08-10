import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";


export const metadata: Metadata = {
  title: "Heavy Ion/Proton Therapy | MedKungFu",
  description:
    "Heavy ion (carbon ion) and proton therapy are internationally recognized as the most advanced tumor radiotherapy technologies, achieving sub-millimeter targeted demolition of tumors while maximizing protection of surrounding normal tissue. Discover China's particle therapy core advantages, suitable indications, treatment services, process, 2026 clinical efficacy data, case studies, and costs.",
};

const coreAdvantages = [
  {
    title: "World-Class Clinical Efficacy",
    description:
      "5-year overall survival rate of 70.4% for particle therapy patients, 93.8% for nasopharyngeal carcinoma, and 97.2% for localized prostate cancer, reaching international leading levels",
  },
  {
    title: "Short Treatment Cycle & Fast Scheduling",
    description:
      "Multiple centers offer VIP green channels, prioritizing overseas patients with waiting times reduced to within 3-5 days",
  },
  {
    title: "Significant Cost-Effectiveness",
    description:
      "Using the same international top-tier equipment (Varian ProBeam, Mevion, etc.), total treatment costs are only 1/4 to 1/5 of developed countries",
  },
  {
    title: "High International Service Standards",
    description:
      "Hundreds of overseas patients come to China for treatment, with hospitals providing English/multilingual services and international insurance direct payment systems",
  },
];

const indications: {
  bgClass: string;
  titleClass: string;
  bulletClass: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    bgClass: "bg-red-50",
    titleClass: "text-red-700",
    bulletClass: "text-red-500",
    title: "Head & Neck",
    icon: Icons.target,
    items: [
      "Nasopharyngeal, oropharyngeal, and laryngeal cancer",
      "Intracranial/skull base tumors (meningioma, chordoma, etc.)",
      "Medulloblastoma, ependymoma, etc.",
    ],
  },
  {
    bgClass: "bg-orange-50",
    titleClass: "text-orange-700",
    bulletClass: "text-orange-500",
    title: "Thoracic & Abdominal",
    icon: Icons.heart,
    items: [
      "Lung cancer (non-small cell)",
      "Breast cancer",
      "Esophageal cancer",
      "Liver cancer",
    ],
  },
  {
    bgClass: "bg-purple-50",
    titleClass: "text-purple-700",
    bulletClass: "text-purple-500",
    title: "Pelvic & Others",
    icon: Icons.shield,
    items: [
      "Prostate cancer",
      "Pancreatic cancer",
      "Bone and soft tissue tumors (osteosarcoma, chordoma, etc.)",
      "Kidney and rectal cancer",
    ],
  },
  {
    bgClass: "bg-green-50",
    titleClass: "text-green-700",
    bulletClass: "text-green-500",
    title: "Special Recommendations",
    icon: Icons.award,
    items: [
      "Pediatric tumors (globally recognized preferred option)",
      "Recurrent/refractory tumors",
      "Complex tumors near critical functional areas",
    ],
  },
];

const treatmentServices: { title: string; icon: LucideIcon; items: string[] }[] =
  [
    {
      title: "Core Medical Services",
      icon: Icons.checkCircle,
      items: [
        "Multidisciplinary consultation and evaluation by MDT teams",
        "High-precision simulation and positioning using CT/MRI imaging",
        "Personalized treatment planning with advanced planning systems",
        "Custom immobilization device fabrication for each patient",
        "Ion beam therapy implementation – 15-30 minutes per session, 1-3 minutes actual irradiation",
        "Professional nursing and close monitoring during treatment",
      ],
    },
    {
      title: "Premium Support Services",
      icon: Icons.award,
      items: [
        "Full-course medical services from initial consultation to treatment completion",
        "Comprehensive examinations including PET-CT/MR and laboratory tests",
        "Premium private/suite-level wards with professional nursing teams",
        "Symptomatic supportive treatment and auxiliary medications",
        "Post-discharge rehabilitation guidance and long-term follow-up",
      ],
    },
  ];

const processSteps = [
  {
    num: 1,
    title: "1. Remote Consultation & Screening",
    duration: "2-5 days",
    description:
      "Submit medical records for remote MDT evaluation and preliminary treatment planning",
  },
  {
    num: 2,
    title: "2. Visa & Travel Arrangements",
    duration: "1-2 weeks",
    description:
      "Medical visa invitation letter, international insurance coordination, travel planning",
  },
  {
    num: 3,
    title: "3. Arrival & Admission Assessment",
    duration: "2-3 days",
    description:
      "Comprehensive physical examination, imaging positioning, direct VIP ward admission",
  },
  {
    num: 4,
    title: "4. Treatment Planning",
    duration: "3-5 days",
    description:
      "Target delineation, dose calculation, treatment plan review and verification",
  },
  {
    num: 5,
    title: "5. Treatment Implementation",
    duration: "5-6 weeks",
    description:
      "Daily proton/heavy ion irradiation, painless throughout, professional care",
  },
  {
    num: 6,
    title: "6. Rehabilitation & Follow-up",
    duration: "Ongoing",
    description: "Regular post-discharge check-ups, remote follow-up management",
  },
];

const efficacyStats = [
  { value: "70.4%", label: "5-Year Overall Survival Rate" },
  { value: "83.8%", label: "Stage 0-I 5-Year Survival" },
  { value: "82.1%", label: "Stage II 5-Year Survival" },
  { value: "4.2%", label: "Grade 3 Adverse Events" },
];

const whyChoose = [
  {
    title: "World-Class Excellence",
    description:
      "Clinical efficacy reaches international advanced levels, multiple centers JCI accredited",
  },
  {
    title: "Heavy Ion Technology Leader",
    description:
      "China is the global leader in heavy ion clinical application with proprietary systems",
  },
  {
    title: "Direct Access to Top Centers",
    description:
      "Formal partnerships with top centers in Shanghai, Shandong, Guangzhou, Wuhan, Gansu, Anhui",
  },
  {
    title: "Transparent Pricing",
    description:
      "All-inclusive medical package, direct hospital payment, no hidden fees",
  },
  {
    title: "VIP Ward Experience",
    description:
      "Private/suite-level wards throughout with professional nursing teams",
  },
  {
    title: "Efficient Scheduling",
    description:
      "Initial evaluation and treatment start within 2-3 weeks, avoiding long waits",
  },
  {
    title: "Full Bilingual Support",
    description:
      "Medical record translation, on-site interpretation, international insurance coordination",
  },
  {
    title: "Long-term Follow-up",
    description:
      "Continuous remote follow-up after treatment with uninterrupted monitoring",
  },
];

export default function HeavyIonProtonPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Heavy Ion and Proton Therapy - Advanced Cancer Treatment"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            {/* HERO */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Icons.activity className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
                Heavy Ion/Proton Therapy
              </h1>
              <p className="text-xl text-[#1B4D3E] font-medium mb-4">
                Precision &quot;Targeted Demolition&quot; of Tumors, Guarding
                the Light of Life
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Heavy ion (carbon ion) and proton therapy are internationally
                recognized as the most advanced tumor radiotherapy
                technologies. Precisely concentrated on tumors, achieving
                sub-millimeter &quot;targeted demolition&quot; while maximizing
                protection of surrounding normal tissue and significantly
                reducing treatment side effects. China has joined the
                international advanced ranks in particle radiotherapy and
                become a global leader in heavy ion clinical application
                innovation.
              </p>
            </div>

            {/* CORE ADVANTAGES */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
                Core Advantages – Why Choose China?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreAdvantages.map((adv) => (
                  <div
                    key={adv.title}
                    className="p-6 bg-[#F5F7FA] rounded-xl"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                        <Icons.award className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A1A2E] mb-2">
                          {adv.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* INDICATIONS */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
                Indications – Which Tumors Are Suitable?
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Heavy ion and proton therapy are especially suitable for tumors
                resistant to conventional radiotherapy, located near vital
                organs, or pediatric/adolescent patients. Currently treats over
                50 types of common tumors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {indications.map((ind) => (
                  <div key={ind.title} className={`p-6 ${ind.bgClass} rounded-xl`}>
                    <h3
                      className={`font-bold ${ind.titleClass} mb-4 flex items-center`}
                    >
                      <ind.icon className="h-5 w-5 mr-2" />
                      {ind.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {ind.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className={`${ind.bulletClass} mr-2`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6 text-center">
                Note: Suitability for heavy ion/proton therapy requires
                individualized evaluation by a multidisciplinary expert team.
              </p>
            </section>

            {/* TREATMENT SERVICES */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
                Treatment Services (Medical Care)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {treatmentServices.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-lg font-bold text-[#1B4D3E] mb-4 flex items-center">
                      <group.icon className="h-5 w-5 mr-2" />
                      {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <span className="text-[#1B4D3E] mr-2 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* TREATMENT PROCESS */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
                Treatment Process (From Initial Consultation to Recovery)
              </h2>
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <Reveal key={step.num} x={i % 2 === 0 ? -20 : 20}>
                    <div className="flex items-start space-x-4 p-4 bg-[#F5F7FA] rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-[#1A1A2E]">
                            {step.title}
                          </h3>
                          <span className="text-sm text-[#1B4D3E] font-medium bg-[#1B4D3E]/10 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                From arrival to treatment completion, the entire process
                typically takes 6-8 weeks.
              </p>
            </section>

            {/* EFFICACY */}
            <section className="bg-gradient-to-br from-[#1B4D3E] to-[#2E7D32] rounded-2xl p-10 shadow-sm mb-12 text-white">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Efficacy – China Clinical Data (2026 Edition)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {efficacyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 bg-white/10 rounded-xl"
                  >
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm opacity-70 mt-6">
                Data Source: Shanghai Proton and Heavy Ion Hospital 2026
                Survival Report, 9,317 patients treated as of May 2026
              </p>
            </section>

            {/* CASE STUDIES */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
                Case Studies
              </h2>
              <div className="space-y-6">
                <Reveal y={20}>
                  <div className="p-6 bg-[#F5F7FA] rounded-xl">
                    <h3 className="font-bold text-[#1B4D3E] mb-3 flex items-center">
                      <Icons.users className="h-5 w-5 mr-2" />
                      Case 1: Aron&apos;s 7,000km Journey of Hope from Iraq
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Aron from Iraq suffered from meningioma that recurred
                      after three craniotomies. According to NCCN guidelines,
                      proton therapy is the preferred option for brain tumors
                      near critical areas. After transoceanic video
                      consultation, Chinese experts formulated a precise proton
                      treatment plan. After completing 30 sessions, Aron rang
                      the &quot;recovery bell&quot; - &quot;7,000 kilometers of
                      trust from Iraq to China brought a rebirth of life.&quot;
                    </p>
                  </div>
                </Reveal>
                <Reveal y={20}>
                  <div className="p-6 bg-[#F5F7FA] rounded-xl">
                    <h3 className="font-bold text-[#1B4D3E] mb-3 flex items-center">
                      <Icons.users className="h-5 w-5 mr-2" />
                      Case 2: Indonesian Chordoma Patient&apos;s Chinese
                      &quot;Salvation&quot;
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rafi, a 30-year-old Indonesian diagnosed with chordoma
                      (incidence of only one in a million), was advised to
                      undergo proton therapy but no equipment was available
                      locally. After comparing costs globally, they chose a
                      Chinese hospital - total cost less than half of
                      Singapore. With an integrated &quot;surgery +
                      proton&quot; plan by the MDT team, Rafi successfully
                      completed treatment.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* TREATMENT COST */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#1A1A2E]">
                Treatment Cost
              </h2>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  China offers all-inclusive premium medical service packages
                  for proton/heavy ion therapy with transparent pricing,
                  covering consultations, examinations, treatment, medications,
                  premium wards, and full nursing care with no hidden fees.
                </p>
                <div className="inline-block bg-[#1B4D3E]/10 text-[#1B4D3E] px-8 py-4 rounded-xl">
                  <span className="text-sm">
                    Reference Total Treatment Cost:
                  </span>
                  <span className="text-2xl font-bold ml-2">
                    $28,000 – $42,000 USD
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  (Actual costs subject to final hospital evaluation.)
                </p>
              </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E] flex items-center justify-center">
                <Icons.checkCircle className="h-7 w-7 mr-3 text-[#1B4D3E]" />
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChoose.map((item) => (
                  <Reveal key={item.title} scale={0.95}>
                    <div className="p-5 bg-[#F5F7FA] rounded-xl text-center">
                      <h3 className="font-bold text-[#1A1A2E] mb-2 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* CTA */}
            <Reveal y={20}>
              <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2E7D32] rounded-2xl p-10 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Start Your Heavy Ion/Proton Therapy Journey
                </h2>
                <p className="mb-6 opacity-90">
                  Contact our professional team for a free remote evaluation
                  and treatment plan
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-[#1B4D3E] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us Now
                  <Icons.arrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </Reveal>
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
