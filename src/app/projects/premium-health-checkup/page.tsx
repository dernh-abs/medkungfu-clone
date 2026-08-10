import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

export const metadata: Metadata = {
  title: "Premium Health Checkup - Comprehensive Health Screening | MedKungFu",
  description:
    "Premium international health checkup in China. One checkup, six deep screenings, complete privacy — world-class equipment, AI-assisted diagnosis, same-day reports.",
};

const BASE_PACKAGE_ITEMS = [
  "General examination (height/weight/BMI, blood pressure, pulse)",
  "Physical examination: internal medicine, surgery, ophthalmology, ENT, dentistry",
  "Routine tests: complete blood count, urinalysis + sediment, fecal occult blood",
  "Comprehensive biochemistry: 12 liver function items, 5 kidney function items, 8 lipid profile items (including ApoA, ApoB, ApoE, Lp(a)), fasting glucose + HbA1c",
  "Myocardial injury markers: troponin, cardiac enzyme panel",
  "Immunity & inflammation: rheumatism panel, immunoglobulins, hs-CRP",
  "Infectious disease screening: Hepatitis B/C, syphilis, HIV",
];

const DEEP_SCREENING_MODULES = [
  {
    title: "1. Cardiovascular Deep Screening",
    items: [
      "256-slice spectral CT coronary CTA",
      "CT-FFR functional assessment (non-invasive myocardial ischemia judgment, accuracy >95%)",
      "Echocardiography + 3D reconstruction",
      "24-hour Holter ECG (optional), arteriosclerosis detection",
      "Carotid ultrasound + intima-media thickness (IMT) measurement",
      "Cardiac enzyme panel, troponin, homocysteine",
    ],
  },
  {
    title: "2. Cerebrovascular Deep Screening",
    items: [
      "3.0T ultra-high-field brain MRI plain scan + DWI",
      "Brain MRA (vascular stenosis, aneurysm, malformation)",
      "Carotid plaque stability assessment, transcranial Doppler (TCD)",
      "Alzheimer's disease-related proteins + APOE genotyping",
      "Brain wave stress analysis + cognitive function scale",
    ],
  },
  {
    title: "3. Cervical & Lumbar Spine Deep Screening",
    items: [
      "70cm large-bore 3.0T research-grade cervical spine MRI, lumbar spine MRI",
      "Dual-energy X-ray bone density (DXA) - whole body + spine + hip",
      "Osteoporosis three serum markers (25-OH vitamin D, TRAP 5b, CTX-I)",
    ],
  },
  {
    title: "4. Knee Joint Deep Screening",
    items: [
      "Knee MRI (meniscus, ligaments, cartilage, patellofemoral joint)",
      "Bone density + bone lesion assessment",
      "Comprehensive joint function assessment (range of motion, gait analysis)",
      "Key bone metabolism indicators: vitamin D, K, etc.",
    ],
  },
  {
    title: "5. Tumor Deep Screening",
    items: [
      "Complete tumor marker panel (CEA, AFP, CA19-9, CA125, PSA, etc.)",
      "Seven lung cancer autoantibodies + VEGF",
      "Low-dose chest spiral CT - gold standard for early lung cancer screening",
      "Fully digital PET-CT whole-body scan or 3.0T whole-body diffusion-weighted imaging",
      "Liquid biopsy multi-cancer early screening (ctDNA methylation analysis)",
      "Whole exome sequencing (WES)",
    ],
  },
  {
    title: "6. Digestive Tract Deep Screening",
    items: [
      "Painless sleep gastroscopy/colonoscopy (imported anesthesia, synchronous polyp removal)",
      "Or magnetic-controlled capsule endoscopy (non-invasive, painless)",
      "C13/C14 breath test (Helicobacter pylori)",
      "Stool SDC2 gene methylation test (early colorectal cancer screening)",
    ],
  },
];

const EXTENSION_MODULES = [
  "Functional medicine integrated analysis (vitamin groups, amino acid profiles, trace elements, gut microbiota)",
  "Complete allergen panel (17 inhalation + 14 food items)",
  "Autoimmune disease screening (antinuclear antibody panel)",
  "Cardiovascular drug genetic testing",
  "Cervical cancer PAX1/JAM3 gene methylation test",
];

const VIP_PROCESS = [
  {
    step: "1",
    title: "Before Arrival - Personalized Customization",
    items: [
      "Remote consultation with dedicated health advisor",
      "Online health questionnaire + AI risk assessment",
      'Generate personalized "1+X+Y" plan',
      "Assist with medical visa invitation letter",
    ],
  },
  {
    step: "2",
    title: "Checkup Day - Efficient Luxury",
    items: [
      "VIP independent examination area, completely separated from regular areas",
      "One-on-one accompaniment throughout (fluent English-speaking health advisor)",
      "Gender-separated zones + independent examination rooms",
      "Intelligent guidance system plans shortest route",
      "Elegant lounge: soft sofas, exquisite refreshments",
    ],
  },
  {
    step: "3",
    title: "Post-Checkup - Immediate & Long-term",
    items: [
      "Same-day preliminary report + one-on-one interpretation by chief-level experts",
      "MDT multidisciplinary consultation (for complex abnormalities)",
      "Green channel for major positive findings",
      "Lifetime electronic health records",
    ],
  },
];

const PREMIUM_FEATURES = [
  "Base package + all six deep screening modules",
  "Coronary CTA, knee MRI",
  "APOE gene, arteriosclerosis detection",
  "Painless gastroscopy/colonoscopy OR capsule endoscopy",
  "PET-CT (based on risk assessment)",
];

const ULTIMATE_FEATURES = [
  "All Premium package contents",
  "CT-FFR functional assessment",
  "Liquid biopsy multi-cancer early screening",
  "Whole exome sequencing",
  "Whole-body PET-CT",
  "Residential VIP experience",
  "Year-round health management",
];

const TRAVEL_SUPPORT = [
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

export default function PremiumHealthCheckupPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Premium Health Checkup - Comprehensive Health Screening"
          className="min-h-screen bg-white"
        >
          {/* HERO */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
              <div>
                <p className="text-lg text-blue-200 mb-4 tracking-wider">
                  Health Checkup Programme
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Premium International Health Checkup
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-4">
                  高端国际健康筛查
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
                  Comprehensive Panoramic Package
                </p>
                <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
                  Designed for high-end visitors to China | One checkup · Six deep
                  screenings · Complete privacy
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    World-Class Equipment
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    AI-Assisted Diagnosis
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Same-Day Reports
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Complete Privacy
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#packages"
                    className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Packages
                  </a>
                  <a
                    href="#intro"
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE CHINA */}
          <section id="intro" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal x={-30}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                    Why Choose China for Your Health Checkup?
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    China&apos;s top medical centers are now equipped with world-class
                    advanced equipment and AI-assisted diagnostic systems.
                  </p>
                  <p className="text-gray-600 mb-6">
                    You can perfectly combine your annual in-depth checkup with a
                    luxury trip. Fastest: morning checkup, afternoon report, immediate
                    expert review, enjoy the rest of your journey.
                  </p>
                  <div className="flex items-center space-x-4 text-blue-600">
                    <Icons.checkCircle className="h-6 w-6" />
                    <span className="font-semibold">
                      Precision Checkup + Luxury Travel in One Stop
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* CORE ADVANTAGES */}
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Core Advantages
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Why choose our premium health checkup service
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icons.microscope className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    World-Class Advanced Equipment
                  </h3>
                  <p className="text-gray-600">
                    Equipped with 256-slice spectral CT, 3.0T ultra-high-field MRI,
                    fully digital PET-CT, and AI-assisted diagnostic systems, improving
                    small lesion detection rate by 50%.
                  </p>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icons.dollarSign className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    Significant Cost Advantage
                  </h3>
                  <p className="text-gray-600">
                    For equivalent quality checkup packages, pricing in mainland China
                    is only 35%-45% of US prices.
                  </p>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icons.clock className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    Ultimate Efficiency Experience
                  </h3>
                  <p className="text-gray-600">
                    Full appointment-based process with same-day core examination
                    reports and expert interpretation. Fastest: morning checkup,
                    afternoon report, immediate expert review.
                  </p>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icons.shield className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    Privacy Protection First
                  </h3>
                  <p className="text-gray-600">
                    VIP independent examination area completely separated from regular
                    areas, one-on-one private communication, gender-separated zones,
                    highest-level encryption for health data.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* WHO IS IT FOR */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Who Is It For?
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Global corporate executives, entrepreneurs, high-net-worth family members",
                  "Aged 30-65, concerned about cardiovascular, skeletal, tumor, and digestive health",
                  "Long-term desk work, high-pressure jobs, cervical/lumbar spine health issues",
                  "Family history of tumors, cardiovascular/cerebrovascular diseases, or digestive disorders",
                  "Want to combine precision checkup with luxury travel, highly value privacy and efficiency",
                ].map((item, index) => (
                  <Reveal
                    y={20}
                    key={item}
                    className="bg-blue-50 rounded-xl p-6 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CORE CUSTOMIZATION SYSTEM: 1+X+Y */}
          <section className="py-20 lg:py-32 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Core Customization System: &quot;1+X+Y&quot;
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Essential base package + Six deep screening modules + Personalized
                  extension modules
                </p>
              </Reveal>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  &quot;1&quot; - Essential Base Package
                </h3>
                <div className="bg-slate-800 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {BASE_PACKAGE_ITEMS.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Icons.checkCircle className="text-blue-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  &quot;X&quot; - Six Deep Screening Modules
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {DEEP_SCREENING_MODULES.map((module) => (
                    <div key={module.title} className="bg-slate-800 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-4 text-white">
                        {module.title}
                      </h4>
                      <ul className="space-y-2">
                        {module.items.map((item) => (
                          <li
                            key={item}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-blue-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  &quot;Y&quot; - Personalized Extension Modules (Optional)
                </h3>
                <div className="bg-slate-800 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {EXTENSION_MODULES.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold">+</span>
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ONE-STOP VIP SERVICE PROCESS */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  One-Stop VIP Service Process
                </h2>
              </Reveal>
              <div className="space-y-8">
                {VIP_PROCESS.map((block) => (
                  <Reveal y={20} key={block.step} className="bg-slate-50 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {block.step}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A2E]">{block.title}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {block.items.map((item) => (
                        <div key={item} className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* PACKAGE VERSIONS & PRICING */}
          <section id="packages" className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Package Versions &amp; Pricing
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose the checkup package that suits you
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Reveal y={20} className="rounded-2xl p-8 bg-white shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <div className="text-3xl font-bold mb-6 text-blue-600">
                    $2,500 – $4,800
                  </div>
                  <ul className="space-y-3">
                    {PREMIUM_FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Icons.checkCircle className="text-blue-500 h-5 w-5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal y={20} className="rounded-2xl p-8 bg-blue-600 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
                  <div className="text-3xl font-bold mb-6 text-white">$4,800 – $8,000</div>
                  <ul className="space-y-3">
                    {ULTIMATE_FEATURES.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Icons.checkCircle className="text-blue-200 h-5 w-5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <Reveal
                y={20}
                className="text-center mt-12 bg-blue-100 rounded-2xl p-8 max-w-3xl mx-auto"
              >
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">Cost Advantage</h3>
                <p className="text-gray-600">
                  For equivalent quality checkup packages, pricing in mainland China is
                  only 35%-45% of US prices.
                </p>
                <p className="text-gray-500 text-sm mt-4">
                  *Specific costs subject to final hospital assessment.
                </p>
              </Reveal>
            </div>
          </section>

          {/* SEAMLESS INTERNATIONAL MEDICAL TRAVEL SUPPORT */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Seamless International Medical Travel Support
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {TRAVEL_SUPPORT.map((item) => (
                  <Reveal
                    y={20}
                    key={item.title}
                    className="bg-slate-50 rounded-2xl p-6 text-center"
                  >
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
          <section className="py-20 lg:py-32 bg-blue-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Your &quot;Checkup + Travel&quot; Premium Journey
                </h2>
                <p className="text-blue-200 mb-8">
                  One in-depth checkup, six-dimensional insights, full-cycle health
                  protection. Transform annual health management into a luxurious
                  journey of physical and mental renewal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:contact@medkungfu.com"
                    className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Email Inquiry
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
