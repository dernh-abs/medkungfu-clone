// CAR-T Cell Therapy project detail page.
// Transcribed verbatim from docs/research/www-medkungfu-com-363c9bc1/cart-therapy/rendered.html
// (purple theme, max-w-7xl container, distinct section structure).
import Link from "next/link";

import { Icons } from "../../shared/icons";
import { Reveal } from "../../shared/Reveal";

const HERO_PILLS = [
  "6,000+ Clinical Infusions",
  "96.4% Response Rate",
  "2-4 Week Scheduling",
  "NMPA Approved Products",
];

const INDICATIONS = [
  "Multiple Myeloma",
  "Diffuse Large B-Cell Lymphoma",
  "Acute Lymphoblastic Leukemia",
  "Mantle Cell Lymphoma",
  "Other High-Grade Lymphomas",
];

const TREATMENT_CONTENT = [
  "Pre-treatment evaluation – PET-MR, bone marrow biopsy, blood tests, T-cell function testing",
  "T-cell collection – Collecting patient T-cells through leukapheresis",
  "CAR-T cell preparation – Genetic modification and expansion in GMP-certified laboratory",
  "Lymphocyte depletion – Mild chemotherapy in preparation for infusion",
  "CAR-T cell infusion – One-day intravenous infusion",
  "Hospital monitoring and supportive care – Managing cytokine release syndrome, neurotoxicity and other side effects",
];

interface Advantage {
  icon: typeof Icons.activity;
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Icons.trendingUp,
    title: "World-Class Clinical Outcomes",
    description:
      "Multiple myeloma ORR up to 96.4%, high-grade lymphoma 83%, ALL complete remission rate 95.1%. Chinese clinical data comprehensively reaches international leading level.",
  },
  {
    icon: Icons.shield,
    title: "Significant Cost Advantage",
    description:
      "Total medical cost approximately $200,000-$250,000 (including evaluation, cell preparation, hospitalization and basic medications), far lower than equivalent treatment in Europe/US (usually over $500,000). Savings cover round-trip flights, full translation and accommodation.",
  },
  {
    icon: Icons.clock,
    title: "Minimal Waiting Time",
    description:
      "Enrollment in 2-4 weeks, priority arrangement through MedKungfu green channel. Similar treatments in Europe/US typically require 6-12 months waiting. For urgent patients, waiting time often means missing the optimal treatment window.",
  },
  {
    icon: Icons.globe,
    title: "Comprehensive International Patient Services",
    description:
      "Partner hospitals have dedicated English-speaking international departments and convenient international patient channels, with dedicated staff for admission procedures and examination arrangements, ensuring barrier-free medical care for overseas patients.",
  },
  {
    icon: Icons.microscope,
    title: "Flexible Clinical Trial Access",
    description:
      "China is one of the countries with the most CAR-T clinical trials globally, with more flexible indication scope. For patients deemed \"difficult to treat\" or unresponsive to standard therapies in other countries, China's clinical trial channels provide additional opportunities.",
  },
  {
    icon: Icons.users,
    title: "Extensive Real-World Experience",
    description:
      "As of 2026, partner hospitals have completed over 4,000 infusions, accumulating extensive real-world data for patients with different subtypes and disease stages. The medical team is experienced in managing common side effects such as cytokine release syndrome (CRS).",
  },
];

interface ProcessStep {
  title: string;
  duration: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Pre-Treatment Evaluation",
    duration: "2-3 days",
    description:
      "PET-MR, bone marrow biopsy, blood tests, T-cell function testing. Comprehensive evaluation of disease staging, organ function and CAR-T treatment indications to confirm patient eligibility. MedKungfu provides bilingual accompaniment throughout, assisting with all examination appointments and result interpretation.",
  },
  {
    title: "T-Cell Collection",
    duration: "1 day",
    description:
      "T-cells are collected from patient peripheral blood through leukapheresis (single collection), taking approximately 2-4 hours, no anesthesia required, completed same day. After collection, cells are sent to GMP-certified laboratory for genetic modification.",
  },
  {
    title: "CAR-T Cell Preparation",
    duration: "2-3 weeks",
    description:
      "Collected T-cells are sent to GMP-certified laboratory for chimeric antigen receptor gene viral vector transduction and cell expansion. During this phase, patients may temporarily leave the hospital or rest nearby while waiting for cell preparation completion. MedKungfu assists with arranging nearby accommodation and rest plans.",
  },
  {
    title: "Lymphocyte Depletion Chemotherapy",
    duration: "3-5 days",
    description:
      "Mild chemotherapy (FC regimen: fludarabine + cyclophosphamide) is performed before infusion to clear existing lymphocytes in the body, creating space for CAR-T cell expansion. This phase is completed under hospital monitoring, with MedKungfu providing full accompaniment and communication assistance.",
  },
  {
    title: "CAR-T Cell Infusion",
    duration: "1 day",
    description:
      "CAR-T cells are infused back into the body through a single intravenous infusion, taking approximately 30-60 minutes. This is the core step of the entire treatment process. After infusion, the modified T-cells will continue to expand in the body, precisely identifying and attacking cancer cells.",
  },
  {
    title: "Hospital Monitoring &amp; Discharge Follow-up",
    duration: "2-4 weeks",
    description:
      "Close hospital monitoring with focus on managing side effects such as cytokine release syndrome (CRS) and immune effector cell-associated neurotoxicity (ICANS). Medical team on standby 24 hours with comprehensive supportive care. Patients can be discharged when stable, with MedKungfu coordinating 3-24 months of remote follow-up.",
  },
];

const EFFICACY_ROWS = [
  {
    cells: [
      { text: "Multiple Myeloma", className: "py-4 px-4 text-white" },
      { text: "96.4%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "80.4%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "Not specified", className: "py-4 px-4 text-gray-300" },
    ],
  },
  {
    cells: [
      {
        text: "High-Grade Lymphoma (DLBCL etc.)",
        className: "py-4 px-4 text-white",
      },
      { text: "83%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "58%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "84%", className: "py-4 px-4 text-gray-300" },
    ],
  },
  {
    cells: [
      { text: "Leukemia (B-ALL)", className: "py-4 px-4 text-white" },
      {
        text: "Not specified",
        className: "py-4 px-4 text-purple-300 font-bold",
      },
      { text: "95.1%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "73.6%", className: "py-4 px-4 text-gray-300" },
    ],
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Compliant Operations · Fund Security",
    description:
      "Company directly signs and collects payments, ensuring fund security. Direct hospital connection, no middleman markup, medical fees paid directly to hospital, fully transparent.",
  },
  {
    title: "2-4 Week Green Channel",
    description:
      "Through MedKungfu partnership channels, priority enrollment evaluation arrangement, significantly reducing waiting time and securing valuable windows for urgent patients.",
  },
  {
    title: "Full Bilingual Support",
    description:
      "Dedicated bilingual medical coordinators accompany throughout, covering examination appointments, medical record translation, doctor-patient communication, in-hospital accompaniment and discharge procedures.",
  },
  {
    title: "Transparent Pricing · Refund Guarantee",
    description:
      "Detailed quotation provided, full or proportional refunds available in 7 scenarios, protecting patient rights with no hidden charges.",
  },
  {
    title: "Pre-Travel Planning · Arrival Assistance",
    description:
      "Assistance with visa invitation letters, airport transfers, nearby accommodation arrangements, ensuring patients and families have no worries from day one of arrival.",
  },
  {
    title: "Long-Term Follow-up Management",
    description:
      "Continuous coordination of 3-24 months remote follow-up after discharge, regular tracking of efficacy assessment, connecting subsequent treatment plans.",
  },
];

export function CartTherapyPage() {
  return (
    <main
      role="main"
      aria-label="CAR-T Cell Therapy - Immunotherapy for Blood Cancers"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <p className="text-lg text-purple-200 mb-4 tracking-wider">
              Immunotherapy Programme
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              CAR-T Cell Therapy for Hematologic Malignancies
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4">
              CAR-T血液恶性肿瘤治疗
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary Personalized Immunotherapy · Engineering Immune
              Cells to Precisely Target Cancer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {HERO_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
              >
                Consult Now
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

      {/* WHAT IS CAR-T */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal y={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                What is CAR-T Therapy?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                CAR-T (Chimeric Antigen Receptor T-cell) therapy is a
                revolutionary personalized immunotherapy. The treatment team
                extracts the patient&apos;s own T-cells and genetically modifies
                them in a GMP-certified laboratory to carry chimeric antigen
                receptors (CAR) that can precisely identify and attack cancer
                cells. The modified CAR-T cells are expanded and infused back
                into the patient&apos;s body, forming a &quot;living drug&quot; that
                continuously exerts anti-tumor effects. The entire process uses
                the patient&apos;s own cells as raw material, making it one of the
                most advanced treatment methods in the field of hematologic
                malignancies.
              </p>
              <p className="text-gray-600 mb-6">
                As of 2026, China has completed over 6,000 CAR-T cell
                infusions, with multiple commercial products approved by the
                National Medical Products Administration (NMPA). All partner
                hospitals use NMPA-approved CAR-T products, complete cell
                preparation in GMP-certified laboratories, and have dedicated
                international patient service channels in Grade 3A hospitals.
                This means patients will receive treatment within a formal
                regulatory framework, with institutional guarantees for safety
                and traceability.
              </p>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      6,000+
                    </div>
                    <p className="text-gray-600 text-sm">Clinical Infusions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      NMPA
                    </div>
                    <p className="text-gray-600 text-sm">Approved Products</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal y={0} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element -- static hero asset, intentional */}
              <img
                src="/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160550-2173dba999ef-w800.jpg"
                alt="CAR-T Therapy"
                className="rounded-2xl shadow-2xl w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CHINA */}
      <section className="py-20 lg:py-32 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Why Choose China?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six core advantages making CAR-T treatment more efficient and
              economical
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv) => (
              <Reveal key={adv.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <adv.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {adv.title}
                </h3>
                <p className="text-gray-600">{adv.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDICATIONS + TREATMENT CONTENT */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal y={0}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                Indications (Hematologic Malignancies)
              </h2>
              <p className="text-gray-600 mb-6">
                CAR-T therapy is mainly suitable for relapsed/refractory:
              </p>
              <div className="space-y-4">
                {INDICATIONS.map((item) => (
                  <div
                    key={item}
                    className="bg-purple-50 rounded-xl p-4 flex items-center gap-3"
                  >
                    <Icons.checkCircle
                      className="h-5 w-5 text-purple-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6">
                Whether suitable for CAR-T treatment requires individualized
                assessment by our partner medical team.
              </p>
            </Reveal>
            <Reveal y={0} className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Treatment Content</h3>
              <div className="space-y-4">
                {TREATMENT_CONTENT.map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">{i + 1}.</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Treatment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Approximately 3-6 weeks from arrival to discharge
            </p>
          </Reveal>
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-bold text-[#1A1A2E] text-lg">
                        {step.title}
                      </h3>
                      <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
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

      {/* EFFICACY TABLE */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Efficacy &ndash; Chinese Clinical Data
            </h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    Cancer Type
                  </th>
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    Overall Response Rate (ORR)
                  </th>
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    &ge;Complete Response (CR) Rate
                  </th>
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    1-Year Overall Survival
                  </th>
                </tr>
              </thead>
              <tbody>
                {EFFICACY_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    {row.cells.map((cell, j) => (
                      <td key={j} className={cell.className}>
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Case Study</h2>
            <h3 className="text-xl font-bold mb-4">
              South African Olympic Champion (62) &ndash; High-Risk Multiple
              Myeloma
            </h3>
            <p className="text-purple-100 mb-6">
              Deemed &quot;difficult to treat&quot; in multiple countries. Traveled to
              Shanghai Ruijin Hospital for comprehensive evaluation and
              successfully underwent CAR-T treatment. Successfully completed
              treatment with support from China&apos;s advanced CAR-T medical
              system.
            </p>
            <p className="text-purple-200 font-medium">
              Thousands of international patients have chosen to come to China
              for CAR-T treatment &ndash; you can be one of them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COSTS + WHY CHOOSE US */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal y={0}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                Reference Treatment Costs
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">
                      Medical fees (direct-pay hospital: evaluation, CAR-T
                      therapy, up to 28 days hospitalization, basic
                      medications)
                    </span>
                    <span className="text-purple-600 font-bold">
                      $200,000-$250,000
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  *Specific costs subject to final hospital assessment.
                </p>
              </div>
            </Reveal>
            <Reveal y={0}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-purple-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 lg:py-32 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your CAR-T Treatment Journey
            </h2>
            <p className="text-purple-200 mb-8">
              Revolutionary immunotherapy bringing new hope to hematologic
              malignancy patients
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@medkungfu.com"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Email Consultation
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
  );
}
