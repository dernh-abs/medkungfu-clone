import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { FAQAccordion, type FAQItem } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/FAQAccordion";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

export const metadata: Metadata = {
  title: "Painless Endoscopy - Advanced Gastrointestinal Examination | MedKungFu",
  description:
    "Premium international painless endoscopy in China. Deep digestive screening, painless gastroscopy and colonoscopy, same-day completion, international standards.",
};

const WHY_CHOOSE_ITEMS = [
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

const STATS = [
  { value: "3-5 Days", label: "Fastest Arrangement" },
  { value: "3-4 Hours", label: "Total Duration" },
  { value: "Same Day", label: "Preliminary Report" },
  { value: "75 Countries", label: "Visa-Free/On-Arrival" },
];

const DETECTABLE_ISSUES = [
  "Inflammation",
  "Erosion",
  "Ulcer",
  "Polyps",
  "Early Cancer",
];

const WHO_IS_IT_FOR = [
  "Age ≥40 (recommended by international guidelines for routine screening)",
  "Family history of gastric or colorectal cancer",
  "Digestive symptoms (acid reflux, abdominal pain, blood in stool, changes in bowel habits)",
  "Long-term use of aspirin or non-steroidal anti-inflammatory drugs",
  "Previous history of polyps requiring follow-up",
];

const NOT_SUITABLE = [
  "Severe cardiopulmonary disease",
  "Uncorrected coagulation disorders",
  "Acute intestinal obstruction",
  "Other conditions determined by physician assessment",
];

const PROCESS_STEP_1 = [
  "Chinese-English health advisors remotely collect health information, medical history, medication details, allergy history",
  "Gastroenterologist + anesthesiologist jointly assess and develop personalized examination plan",
  "Guide safe discontinuation of anticoagulants, provide low-fiber diet guidance and split-dose bowel preparation",
  "Issue official medical visa invitation letter",
  "Assist with booking partner hotels near the hospital",
];

const PROCESS_STEP_2 = [
  "Dinner: low-fiber meal (congee, white bread, noodles, peeled melons)",
  "Take split-dose bowel preparation as per written instructions (once in evening, once early morning on examination day)",
  "No solid food after dinner, clear water allowed until 4 hours before examination",
  "Receive detailed bilingual preparation guide",
];

const PROCESS_TIMELINE = [
  { time: "9:00", text: "Arrive at VIP International Medical Center, personal reception, sign bilingual informed consent, change clothes" },
  { time: "9:30", text: "Establish IV access, anesthesiologist administers propofol - fall asleep within 30 seconds" },
  { time: "9:45", text: "Gastroscopy (5-8 min) + colonoscopy (15-20 min) - completely painless" },
  { time: "10:15", text: "If ≤3 small polyps found → immediate cold snare resection, painless, no memory" },
  { time: "10:30", text: "Wake up in recovery room, professional nurses continuously monitor vital signs for ~45 minutes" },
  { time: "11:30", text: "Light refreshments provided, attending physician explains preliminary endoscopy report face-to-face (with color images)" },
  { time: "12:00", text: "Discharge (advised not to drive, drink alcohol, or operate precision instruments on the same day)" },
];

const PROCESS_STEP_4 = [
  "Within 24 hours: dedicated health advisor calls/messages with precautions",
  "Remote follow-up (video or voice), assess recovery and provide further recommendations",
  "Establish lifetime electronic health records",
  "If issues requiring further treatment are found, activate green referral channel to top-tier hospitals",
];

const PACKAGE_INCLUDES = [
  "Anesthesia assessment + IV anesthesia",
  "Combined gastroscopy + colonoscopy",
  "Biopsy (≤3 sites)",
  "C13 breath test (Helicobacter pylori)",
  "ECG + coagulation function + CBC/biochemistry",
  "Cold snare polyp resection (≤3 polyps)",
  "Extended post-operative recovery room monitoring",
  "Bilingual reports + 24-hour emergency contact",
];

const QUALITY_STANDARDS = [
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

const FAQ_ITEMS: FAQItem[] = [
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

export default function PainlessEndoscopyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
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
                  Endoscopy Programme
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Premium International Painless Endoscopy
                </h1>
                <p className="text-xl md:text-2xl text-teal-200 mb-4">无痛内镜套餐</p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
                  Deep Digestive Screening · Painless &amp; Worry-Free · Same-Day
                  Completion · International Standards
                </p>
                <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
                  For global executives and high-net-worth individuals seeking
                  high-quality, cost-effective combined painless gastroscopy and
                  colonoscopy in China
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Painless &amp; Comfortable
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Same-Day Completion
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    Examination as Treatment
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    International Standards
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#packages"
                    className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
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

          {/* WHY CHOOSE CHINA FOR PAINLESS ENDOSCOPY */}
          <section id="intro" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal x={-30}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                    Why Choose China for Painless Endoscopy?
                  </h2>
                  <div className="space-y-6">
                    {WHY_CHOOSE_ITEMS.map((item) => (
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
                    {STATS.map((stat) => (
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
                  What is &quot;Painless Endoscopy&quot;?
                </h2>
              </Reveal>
              <div className="grid lg:grid-cols-2 gap-12">
                <Reveal x={-30} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    Examination Process
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Under short-acting IV anesthesia (propofol), complete combined
                    gastroscopy (upper digestive tract) and colonoscopy (lower
                    digestive tract) in one session. You will enter a comfortable sleep
                    state for about 20-30 minutes while experienced gastroenterologists
                    perform detailed examination of esophagus, stomach, duodenum, and
                    entire colon and rectum.
                  </p>
                  <div className="bg-teal-50 rounded-xl p-4">
                    <p className="text-teal-700 font-medium">
                      If ≤3 small polyps are found, they are removed immediately using
                      &quot;cold snare resection&quot; technique - examination becomes
                      treatment, no second appointment needed.
                    </p>
                  </div>
                </Reveal>
                <Reveal x={30}>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    What Issues Can Be Detected and Treated?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {DETECTABLE_ISSUES.map((issue) => (
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
                    Who Is It For?
                  </h2>
                  <div className="space-y-4">
                    {WHO_IS_IT_FOR.map((item) => (
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
                    Not Suitable For
                  </h2>
                  <div className="bg-rose-50 rounded-2xl p-6">
                    <ul className="space-y-3">
                      {NOT_SUITABLE.map((item) => (
                        <li key={item} className="flex items-center text-gray-700">
                          <Icons.alertCircle className="text-rose-500 mr-3 h-5 w-5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-500 text-sm mt-4 pt-4 border-t">
                      Specific contraindications determined by physician assessment.
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
                  One-Stop Professional Service Process
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
                        Pre-Arrival Remote Medical Customization
                      </h3>
                      <span className="text-teal-400 text-sm">
                        7-14 days in advance
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROCESS_STEP_1.map((item) => (
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
                        Day Before Examination (Self-Preparation)
                      </h3>
                      <span className="text-teal-400 text-sm">
                        24 hours before examination
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROCESS_STEP_2.map((item) => (
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
                      <h3 className="text-xl font-bold">Examination Day</h3>
                      <span className="text-teal-400 text-sm">Total 3-4 hours</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {PROCESS_TIMELINE.map((entry) => (
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
                        Post-Examination Medical Follow-up
                      </h3>
                      <span className="text-teal-400 text-sm">
                        Ongoing after examination
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROCESS_STEP_4.map((item) => (
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
                  Package &amp; Pricing
                </h2>
              </Reveal>
              <Reveal
                y={20}
                className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">
                  Premium Painless Endoscopy Package
                </h3>
                <div className="text-4xl font-bold mb-6">$900 – $1,200</div>
                <p className="text-teal-100 mb-6">
                  All-inclusive pricing, no hidden fees
                </p>
                <h4 className="font-bold mb-4">Includes:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {PACKAGE_INCLUDES.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Icons.checkCircle className="text-teal-200 h-[18px] w-[18px] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-teal-100 text-sm mt-6 pt-4 border-t border-teal-400">
                  *Additional costs will be disclosed in advance for extra polyp
                  removal (&gt;3) or special treatments
                </p>
                <p className="text-teal-100/70 text-sm mt-2">
                  *Specific costs subject to final hospital assessment.
                </p>
              </Reveal>
            </div>
          </section>

          {/* INTERNATIONAL QUALITY & SAFETY STANDARDS */}
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal y={20} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  International Quality &amp; Safety Standards
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {QUALITY_STANDARDS.map((standard) => (
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
                  Frequently Asked Questions (FAQ)
                </h2>
              </Reveal>
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </section>

          {/* SEAMLESS INTERNATIONAL MEDICAL TRAVEL SUPPORT */}
          <section className="py-20 lg:py-32 bg-slate-50">
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
                  Start Your Painless Endoscopy Journey
                </h2>
                <p className="text-teal-200 mb-8">
                  Painless, efficient, precise - morning examination, afternoon report,
                  professional closed-loop management
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:contact@medkungfu.com"
                    className="px-8 py-4 bg-white text-teal-900 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
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
