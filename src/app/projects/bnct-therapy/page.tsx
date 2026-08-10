import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { ImmunotherapyProjectPage, type ImmunotherapyProjectConfig } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/ImmunotherapyProjectPage";

export const metadata: Metadata = {
  title: "China Boron Neutron Capture Therapy (BNCT) | MedKungFu",
  description:
    "BNCT Boron Neutron Capture Therapy in China — precise 'Cell Knife' precision radiotherapy for refractory tumors, with 1-2 session treatment courses and head and neck cancer ORR of 80.5%.",
};

const CONFIG: ImmunotherapyProjectConfig = {
  ariaLabel: "BNCT Boron Neutron Capture Therapy - Precision Radiotherapy",
  hero: {
    badge: "Precision Oncology Treatment",
    title: "China Boron Neutron Capture Therapy (BNCT)",
    subtitle: "Precise “Cell Knife”, Reshaping Refractory Tumor Treatment Landscape",
    primaryBtn: "Schedule Consultation",
    secondaryBtn: "Learn About Treatment Process",
  },
  stickyNav: [
    "Introduction",
    "Core Advantages",
    "Indications",
    "Treatment Process",
    "Efficacy Data",
    "Case Studies",
  ],
  intro: {
    heading: "What is BNCT?",
    paragraphs: [
      <p key="p1" className="text-lg text-gray-700 leading-relaxed mb-6">
        Boron Neutron Capture Therapy (BNCT) is a revolutionary precision
        targeted radiotherapy technology. Due to its particle killing range
        being only at the cellular scale, BNCT is called{" "}
        <span className="font-semibold text-[#1B4D3E]">&quot;Cell Knife&quot;</span>,
        possessing unique advantages of precise targeting, high relative
        biological effectiveness, and clinical irradiation typically requiring
        only one to two sessions to complete the course.
      </p>,
      <p key="p2" className="text-lg text-gray-700 leading-relaxed">
        BNCT is positioned as an important tumor treatment method following
        surgery, radiotherapy, chemotherapy and immunotherapy, demonstrating
        significant clinical value globally.
      </p>,
    ],
  },
  advantages: {
    heading: "Core Advantages - Why Choose BNCT in China?",
    bg: "bg-white",
    items: [
      {
        icon: Icons.globe,
        title: "Global Leading Clinical Approval Progress",
        description:
          "China is the second country globally with officially approved BNCT clinical treatment institutions",
      },
      {
        icon: Icons.clock,
        title: "Extremely Short Treatment Course, Low Radiation Dose",
        description:
          "BNCT's unique “Cell Knife” characteristic, clinical irradiation usually requires only 1-2 sessions to complete the course, treatment time 30-50 minutes, no repeated hospitalization needed, patients experience easy and painless treatment",
      },
      {
        icon: Icons.target,
        title: "Precise Targeting, Minimal Side Effects",
        description:
          "BNCT causes minimal damage to surrounding normal tissues, no severe neurotoxicity or systemic toxicity, superior to traditional radiotherapy and systemic chemotherapy, significantly improving patient quality of life",
      },
      {
        icon: Icons.trendingUp,
        title: "Excellent Efficacy, Rewriting Rules for Refractory Cancer Treatment",
        description:
          "Overseas real-world data shows: head and neck cancer ORR 80.5%, angiosarcoma CR rate 50% (ESMO 2025 data), meningioma BNCT treatment group 2-year survival rate 90.9%",
      },
      {
        icon: Icons.zap,
        title: "Policy Pioneer, Global Integration",
        description:
          "Leveraging Hainan Boao Lecheng “Pilot First” policy, international cutting-edge BNCT technology introduced synchronously with priority access, no need to wait for lengthy approvals",
      },
    ],
  },
  indications: {
    heading: "Indications",
    intro:
      "BNCT is particularly suitable for tumor patients unresponsive to conventional chemoradiotherapy, with recurrence/refractory conditions, or located in important functional areas.",
    listItems: [
      "Head and neck malignant tumors (including nasopharyngeal carcinoma, oral cancer, laryngeal cancer, tongue cancer, gingival cancer, parotid gland cancer and more than ten subtypes)",
      "High-grade glioma (GBM, including newly diagnosed and recurrent)",
      "Malignant meningioma (recurrent)",
    ],
    sideCard: {
      heading: "Suitable Patients",
      bullets: [
        "Patients with locally advanced tumors unresponsive to conventional surgery/radiotherapy or with recurrence",
        "Patients resistant to traditional chemoradiotherapy and inoperable",
        "Pediatric tumors (significantly reducing impact on growth and development)",
        "Patients with recurrent high-grade brain tumors",
      ],
      note: "Note: Whether suitable for BNCT treatment requires comprehensive individualized assessment by a multidisciplinary expert team.",
    },
  },
  treatmentContent: {
    heading: "Treatment Content",
    subtitle: "BNCT treatment typically includes the following key steps",
    bg: "bg-white",
    items: [
      {
        title: "Multidisciplinary Team Assessment & Screening",
        description:
          "MDT team composed of oncology experts, radiation physicists, nuclear medicine specialists comprehensively evaluates patient tumor characteristics and treatment suitability",
      },
      {
        title: "18F-BPA PET Imaging Assessment",
        description:
          "Through internationally leading boron drug tracer imaging technology, precisely evaluates biological distribution and concentration of boron-containing drugs in tumors",
      },
      {
        title: "Personalized Treatment Plan Design",
        description:
          "Based on patient tumor 3D morphology, boron drug distribution data and organ risks, uses specialized treatment planning system to develop personalized irradiation plans",
      },
      {
        title: "Boron-containing Drug Intravenous Injection",
        description:
          "Patients receive intravenous injection of targeted boron-containing drugs hours to days before irradiation, drugs selectively accumulate in tumor cells",
      },
      {
        title: "Neutron Beam Irradiation Treatment",
        description:
          "On treatment day, patients receive neutron beam irradiation on treatment bed. Entire treatment is painless, patients can listen to music or chat during 30-50 minutes",
      },
      {
        title: "Hospital Monitoring & Supportive Care",
        description:
          "After irradiation completion, doctors closely monitor patient condition. Most patients require only 1-2 irradiations, hospital stay significantly shorter than traditional radiotherapy",
      },
    ],
  },
  process: {
    heading: "Treatment Process",
    subtitle: "Approximately 2-4 weeks from initial diagnosis to recovery",
    steps: [
      {
        title: "Remote Consultation & Initial Screening",
        duration: "2-5 days",
        description:
          "Submit medical records, multidisciplinary expert team remotely evaluates BNCT indication criteria",
      },
      {
        title: "Visa & Travel Arrangements",
        duration: "1-2 weeks",
        description:
          "Medical visa invitation letters, international insurance coordination, itinerary planning and accommodation arrangements",
      },
      {
        title: "Arrival in China & Examination Assessment",
        duration: "2-3 days",
        description:
          "Comprehensive physical assessment, 18F-BPA PET-CT imaging, target volume delineation, treatment plan review",
      },
      {
        title: "BNCT Irradiation Treatment",
        duration: "1-2 sessions, 30-50 minutes each",
        description:
          "Boron-containing drug injection + neutron beam irradiation treatment, painless, non-invasive, no surgery required",
      },
      {
        title: "Short-term Hospital Monitoring",
        duration: "3-7 days",
        description: "Close monitoring of adverse reactions, rehabilitation support care",
      },
      {
        title: "Discharge & Long-term Follow-up",
        duration: "Ongoing",
        description: "Regular re-examination, remote follow-up management",
      },
    ],
    summaryNote: (
      <>
        From arrival in China to treatment completion, the entire process
        typically requires only{" "}
        <span className="font-semibold text-[#1B4D3E]">2-4 weeks</span>, with
        extremely short treatment cycle.
      </>
    ),
  },
  efficacy: {
    heading: "Efficacy Data",
    subtitle: "Overseas clinical data (Japan real-world insurance coverage data, for reference)",
    bg: "bg-white",
    table: {
      wrapClassName: "-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0",
      tableClassName: "w-full min-w-[680px] bg-white rounded-2xl shadow-sm overflow-hidden",
      headers: ["Indication", "Study Type", "Indicator", "Data"],
      rows: [
        {
          bg: "bg-white",
          cells: [
            { text: "Locally Advanced/Recurrent Unresectable Head and Neck Cancer", className: "px-6 py-4 text-gray-700" },
            { text: "Real-world Study (69 cases)", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "Objective Response Rate (ORR)", className: "px-6 py-4 text-gray-700" },
            { text: "80.5%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "Same as above", className: "px-6 py-4 text-gray-700" },
            { text: "Real-world Study", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "1-Year Overall Survival Rate", className: "px-6 py-4 text-gray-700" },
            { text: "75.4%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Angiosarcoma (Rare Skin Malignancy)", className: "px-6 py-4 text-gray-700" },
            { text: "Phase II Clinical Trial (ESMO 2025)", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "Complete Response Rate", className: "px-6 py-4 text-gray-700" },
            { text: "50%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "Recurrent High-Grade Meningioma", className: "px-6 py-4 text-gray-700" },
            { text: "Phase II Randomized Controlled Trial", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "Progression-Free Survival", className: "px-6 py-4 text-gray-700" },
            { text: "BNCT Group: 14.4 months vs Control Group: Only 1.4 months", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Recurrent High-Grade Meningioma", className: "px-6 py-4 text-gray-700" },
            { text: "Phase II Randomized Controlled Trial", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "2-Year Survival Rate", className: "px-6 py-4 text-gray-700" },
            { text: "BNCT Treatment Group: 90.9%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
      ],
    },
    footnote:
      "Data sources: Cancer Medicine 2024, 2025 ESMO Conference, Osaka Medical and Pharmaceutical University Phase II Trial",
  },
  cases: {
    heading: "Case Studies",
    items: [
      {
        title: "Recurrent Nasopharyngeal Carcinoma Patient",
        description:
          "A Chinese recurrent nasopharyngeal carcinoma patient under 40 years old was diagnosed in 2016 and received radical chemoradiotherapy. After disease recurrence in 2024, immunotherapy intervention was performed, but progressed again in 2025 with conventional treatments ineffective. In August 2025, he received BNCT clinical trial treatment. Within just 3-4 days after treatment, original symptoms were greatly relieved. Eight months later, MRI and PET-CT imaging results were encouraging: tumor metabolic indicators dropped below diagnostic standards, efficacy evaluated as complete response (CR), and the patient has successfully returned to normal work and life.",
      },
      {
        title: "Domestic Multi-center BNCT Clinical Trials",
        description:
          "In BNCT Phase I clinical trials, more enrolled patients showed good clinical improvement: a head and neck tumor patient's facial pain and lip numbness significantly improved; an oral cancer patient's left cheek bleeding and swelling were effectively controlled; a skull giant cell tumor patient's right ear hearing improved and vision became clearer.",
      },
      {
        title: "BNCT First Successful Treatment of Rare Chondrosarcoma",
        description:
          "A 31-year-old male was diagnosed with rare mesenchymal chondrosarcoma in 2018, experienced local recurrence in 2021, refused secondary surgery due to concerns about facial disfigurement and functional impairment, and subsequent anti-PD-1 monoclonal antibody treatment was ineffective. The patient received AB-BNCT system “Jifengdao” and boron-containing drug treatment in 2022. Tumor-induced bleeding stopped within 24 hours after first treatment, ulcer surface significantly reduced within one week. Tumor volume significantly decreased after two irradiations, with efficacy and safety validated by international authoritative journals.",
      },
    ],
  },
  cost: {
    heading: "Reference Treatment Costs",
    intro:
      "BNCT treatment costs have significant advantages compared to other advanced radiotherapy methods (proton/heavy ion therapy).",
    label: "Based on patient condition, single course treatment cost is approximately",
    amount: "$43,000 - $72,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    variant: "white",
    items: [
      {
        icon: Icons.stethoscope,
        title: "Direct Access to China's Top BNCT Centers",
        description: "Established partnerships with multiple top-tier institutions",
      },
      {
        icon: Icons.globe,
        title: "Global Leading Clinical Approval Progress",
        description:
          "China is the second country globally with officially approved BNCT clinical treatment institutions",
      },
      {
        icon: Icons.trendingUp,
        title: "Significant Efficacy, Solid Data",
        description:
          "BNCT head and neck cancer real-world ORR 80.5%, China IIT clinical study ORR 71% (90 days)",
      },
      {
        icon: Icons.shield,
        title: "Transparent Pricing, No Middleman Markup",
        description: "Medical fees paid directly to hospital, platform does not handle or markup",
      },
      {
        icon: Icons.clock,
        title: "Efficient Scheduling, Rapid Admission",
        description:
          "Completed within 2-4 weeks, avoiding waiting periods where Western technology is not yet widespread",
      },
      {
        icon: Icons.users,
        title: "Full Bilingual Service",
        description:
          "Medical record translation, on-site interpretation, international insurance coordination, one-stop support",
      },
    ],
  },
  notice: {
    text:
      "BNCT therapy has significant efficacy but is not suitable for all tumor patients. Treatment effects vary by individual differences, all patients must undergo comprehensive medical assessment before treatment and sign informed consent. BNCT is currently mainly positioned for populations with recurrence, refractory conditions, or limited standard treatment options. Whether suitable for BNCT treatment requires strict, individualized assessment by a multidisciplinary expert team.",
    bg: "bg-white",
  },
  cta: {
    heading: "Begin Your BNCT Treatment Journey",
    subtitle:
      "Contact our professional team for personalized BNCT treatment assessment and plans",
    primary: { label: "Schedule Consultation", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

export default function BnctTherapyProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ImmunotherapyProjectPage config={CONFIG} />
      </main>
      <SiteFooter />
    </>
  );
}
