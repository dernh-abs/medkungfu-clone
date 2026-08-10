import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { ImmunotherapyProjectPage, type ImmunotherapyProjectConfig } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/ImmunotherapyProjectPage";

export const metadata: Metadata = {
  title: "DC Vaccine Therapy for EBV-related Hematologic Tumors | MedKungFu",
  description:
    "EBV-related DC Vaccine Therapy (KSD-101) in China — the world's first broad-spectrum EBV-targeted dendritic cell vaccine with FDA IND, FTD and RMAT designations, ORR 91.67%.",
};

const CONFIG: ImmunotherapyProjectConfig = {
  ariaLabel: "EBV-Related DC Vaccine Therapy",
  hero: {
    badge: "Precision Oncology",
    title: "DC Vaccine Therapy for EBV-related Hematologic Tumors",
    subtitle: "Awaken Autoimmunity, Precisely Eliminate EBV-driven Hematologic Tumors",
    primaryBtn: "Book Consultation",
    secondaryBtn: "Learn About Treatment Process",
  },
  stickyNav: [
    "Introduction",
    "Core Advantages",
    "Indications",
    "Treatment Process",
    "Efficacy Data",
  ],
  intro: {
    heading: "What is EBV-related DC Vaccine Therapy?",
    paragraphs: [
      <p key="p1" className="text-lg text-gray-700 leading-relaxed mb-6">
        Epstein-Barr Virus (EBV) is the first confirmed human tumor-related
        virus worldwide, with approximately{" "}
        <span className="font-semibold text-[#1B4D3E]">200,000 cancer cases</span>{" "}
        caused by EBV infection annually.
      </p>,
      <p key="p2" className="text-lg text-gray-700 leading-relaxed mb-6">
        <span className="font-semibold text-[#1B4D3E]">KSD-101</span> is a
        global first-in-class autologous dendritic cell (DC) vaccine,
        specifically developed for EBV-related hematologic tumors.
      </p>,
      <p key="p3" className="text-lg text-gray-700 leading-relaxed">
        KSD-101 is the first Chinese original dendritic cell (DC) vaccine
        product to receive US FDA IND approval and FDA Fast Track Designation
        (FTD). In 2026, the product further received US FDA Regenerative
        Medicine Advanced Therapy (RMAT) designation for treating relapsed or
        refractory EBV-positive lymphoma.
      </p>,
    ],
  },
  advantages: {
    heading: "Core Advantages – Why Choose DC Vaccine Therapy in China?",
    bg: "bg-white",
    items: [
      {
        icon: Icons.globe,
        title: "World's First Technology, Dual Approval from China & US",
        description:
          "KSD-101 is the world's first broad-spectrum EBV-targeted DC vaccine, simultaneously approved by China NMPA for clinical trials and US FDA IND, with FTD and RMAT designations, leading international recognition",
      },
      {
        icon: Icons.trendingUp,
        title: "Breakthrough Clinical Efficacy",
        description:
          "Clinical study data shows ORR up to 91.67%, CR 83.33%, DCR 100%, remarkable efficacy",
      },
      {
        icon: Icons.shield,
        title: "Excellent Safety Profile",
        description:
          "Adverse reactions are mainly mild (injection site reactions, fever, lymph node enlargement), all grade 1-2, no ≥grade 3 toxicity or dose-limiting toxicity (DLT) observed",
      },
      {
        icon: Icons.syringe,
        title: "Convenient Administration, No Lymphocyte Depletion",
        description:
          "Subcutaneous injection every 2 weeks, 3-5 sessions total, good patient tolerance and compliance; no pre-treatment lymphocyte depletion or prophylactic medication required, simplified treatment process",
      },
      {
        icon: Icons.target,
        title: "Breaks HLA Limitations, Broad Applicability",
        description:
          "Breaks through limitations of traditional immunotherapy in HLA matching and narrow antigen spectrum, effectively presents multiple viral epitopes including LMP2 and EBNA1, significantly broadening immune recognition range",
      },
      {
        icon: Icons.zap,
        title: "Dual Therapeutic Effects",
        description:
          "Simultaneously exerts dual antiviral and anti-tumor therapeutic effects, clearing virus-infected tumor cells while rebuilding durable immune memory to prevent recurrence",
      },
      {
        icon: Icons.mapPin,
        title: "Hainan Boao Pilot Zone Advantage",
        description:
          "Leveraging Lecheng “Pilot First” policy, KSD-101 has been implemented at Ruijin Hospital Hainan Branch, providing eligible patients with this globally leading treatment technology",
      },
    ],
  },
  indications: {
    heading: "Indications",
    intro:
      "KSD-101 is mainly suitable for EBV-related hematologic tumor patients who have failed standard treatment or relapsed. Subtypes currently validated by clinical research include:",
    listItems: [
      "EBV-positive Diffuse Large B-Cell Lymphoma (EBV+DLBCL)",
      "EBV-associated NK/T-cell Lymphoma (NKTCL, nasal/peripheral type)",
      "Hodgkin Lymphoma (HL, EBV-positive)",
      "Angioimmunoblastic T-cell Lymphoma (AITL)",
      "Chronic Active EBV Infection (CAEBV)",
      "EBV-associated Hemophagocytic Lymphohistiocytosis (EBV-HLH)",
      "EBV-positive Nodal T-follicular Helper Cell Lymphoma (nTFHL-AI type)",
      "Burkitt Lymphoma (BL, EBV-positive)",
    ],
    sideCard: {
      heading: "Assessment Notes",
      description:
        "Whether suitable for DC vaccine therapy requires comprehensive individualized assessment by a multidisciplinary expert team. Studies suggest patients with poor tolerance to traditional chemotherapy may benefit more.",
      listHeading: "Treatment Features",
      features: [
        "Autologous cell therapy, high safety",
        "No lymphocyte depletion pretreatment required",
        "Subcutaneous injection, easy to operate",
        "Subsequent injections can be completed outpatient",
      ],
    },
  },
  treatmentContent: {
    heading: "Treatment Content",
    subtitle: "DC vaccine therapy includes the following core components",
    bg: "bg-white",
    items: [
      {
        title: "Multidisciplinary Team Assessment & Screening",
        description:
          "MDT team composed of hematology-oncology experts, immunology experts, etc., comprehensively evaluates patient EBV infection status, tumor characteristics and treatment indications",
      },
      {
        title: "Monocyte Collection",
        description:
          "Collect sufficient monocytes from patient peripheral blood through leukapheresis, send to GMP-certified laboratory for subsequent preparation",
      },
      {
        title: "Personalized DC Vaccine Preparation",
        description:
          "In GMP-certified laboratory, collected monocytes are induced to differentiate into dendritic cells in vitro and loaded with EBV-specific composite antigens to prepare personalized therapeutic vaccines",
      },
      {
        title: "DC Vaccine Subcutaneous Injection",
        description:
          "Prepared vaccine is returned to patient body via subcutaneous injection, closely observe reactions after each injection. No lymphocyte depletion pretreatment or prophylactic medication required throughout the process",
      },
      {
        title: "Regular Follow-up & Immune Monitoring",
        description:
          "Regular follow-up after treatment, monitor EBV DNA levels and immune response, evaluate efficacy and safety",
      },
    ],
  },
  process: {
    heading: "Treatment Process",
    subtitle: "Approximately 2-3 months from initial consultation to recovery",
    steps: [
      {
        title: "Remote Consultation & Initial Screening",
        duration: "2-5 days",
        description:
          "Submit medical records for remote evaluation by multidisciplinary expert team to determine eligibility for DC vaccine therapy",
      },
      {
        title: "Visa & Travel Arrangements",
        duration: "1-2 weeks",
        description:
          "Medical visa invitation letter, international insurance coordination, itinerary planning and accommodation arrangements",
      },
      {
        title: "Arrival in China & Comprehensive Assessment",
        duration: "2-3 days",
        description:
          "Comprehensive physical examination, EBV DNA testing, immunological function assessment, tumor burden evaluation",
      },
      {
        title: "Monocyte Collection",
        duration: "1 day",
        description: "Collect patient peripheral blood monocytes through leukapheresis",
      },
      {
        title: "DC Vaccine Preparation",
        duration: "2-3 weeks",
        description:
          "Induce dendritic cell differentiation and load EBV antigens in GMP laboratory",
      },
      {
        title: "Subcutaneous Injection Treatment",
        duration: "6-10 weeks",
        description: "Subcutaneous injection every 2 weeks, 3-5 sessions total",
      },
      {
        title: "Hospitalization Monitoring & Discharge",
        duration: "3-7 days (after first injection)",
        description:
          "Short-term hospitalization for close monitoring after first injection, subsequent injections can be completed outpatient",
      },
      {
        title: "Long-term Follow-up Management",
        duration: "Ongoing",
        description:
          "Regular follow-up examinations, remote consultations, immune response monitoring",
      },
    ],
    summaryNote: (
      <>
        From arrival in China to completion of all injection treatments, the
        entire process typically takes{" "}
        <span className="font-semibold text-[#1B4D3E]">8-12 weeks</span>,
        shorter cycle and higher convenience compared to traditional
        radiotherapy and chemotherapy.
      </>
    ),
  },
  efficacy: {
    heading: "Efficacy Data",
    subtitle: "Overview of core efficacy data (latest data published by EHA 2025)",
    bg: "bg-white",
    stats: [
      {
        label: "Objective Response Rate (ORR)",
        value: "91.67%",
        note: "Multi-line relapsed/refractory EBV-related hematologic tumor patients",
      },
      {
        label: "Complete Response Rate (CR)",
        value: "83.33%",
        note: "Multi-line relapsed/refractory EBV-related hematologic tumor patients",
      },
      {
        label: "Disease Control Rate (DCR)",
        value: "100%",
        note: "Multi-line relapsed/refractory EBV-related hematologic tumor patients",
      },
      {
        label: "Median Follow-up",
        value: "42.7周",
        note: "Most patients achieved and maintained complete response (CR)",
      },
    ],
    safetyHeading: "Safety Data",
    table: {
      headers: ["Adverse Reaction Type", "Incidence Rate", "Severity"],
      rows: [
        {
          bg: "bg-white",
          cells: [
            { text: "Injection Site Reactions", className: "px-6 py-4 text-gray-700" },
            { text: "~91%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Grade 1, mild", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "Fever", className: "px-6 py-4 text-gray-700" },
            { text: "May occur", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "≤Grade 2, mild-moderate", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Lymph Node Enlargement", className: "px-6 py-4 text-gray-700" },
            { text: "May occur", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Grade 1, mild", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "≥Grade 3 Toxicity", className: "px-6 py-4 text-gray-700" },
            { text: "0%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Not observed", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Dose-Limiting Toxicity (DLT)", className: "px-6 py-4 text-gray-700" },
            { text: "0%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Not observed", className: "px-6 py-4 text-gray-600" },
          ],
        },
      ],
    },
  },
  cost: {
    heading: "Reference Treatment Cost",
    label: "Total treatment cost approximately",
    amount: "$110,000 - $150,000",
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    variant: "muted",
    bg: "bg-white",
    items: [
      {
        icon: Icons.stethoscope,
        title: "Direct Access to China's Top DC Vaccine Centers",
        description:
          "Collaboration with multiple top institutions to provide safe and reliable DC vaccine therapy services",
      },
      {
        icon: Icons.globe,
        title: "World's First Chinese Original Technology",
        description:
          "KSD-101 is the world's first broad-spectrum EBV-targeted DC vaccine, approved by both China and US IND, with FDA FTD and RMAT designations",
      },
      {
        icon: Icons.trendingUp,
        title: "Internationally Leading Efficacy Data",
        description:
          "ORR 91.67%, CR 83.33%, DCR 100%, excellent performance in relapsed/refractory EBV-related hematologic tumors",
      },
      {
        icon: Icons.shield,
        title: "Safety Far Superior to Chemotherapy and CAR-T",
        description:
          "Treatment-related adverse events are all mild-moderate, no ≥grade 3 toxicity, no lymphocyte depletion required, excellent tolerance",
      },
      {
        icon: Icons.syringe,
        title: "Convenient Administration, Outpatient Possible",
        description:
          "Subcutaneous injection is simple to operate, subsequent injections can be completed without hospitalization, high patient compliance",
      },
      {
        icon: Icons.mapPin,
        title: "Leveraging Hainan Boao Lecheng Pilot Zone Policy",
        description:
          "Enjoy “Pilot First” policy, priority access to international cutting-edge therapies, compliant, safe, efficient",
      },
      {
        icon: Icons.award,
        title: "Transparent Pricing, No Middleman Markup",
        description: "Medical fees paid directly to hospital, platform does not handle or markup",
      },
      {
        icon: Icons.users,
        title: "Full Bilingual Service",
        description: "Medical record translation, on-site interpretation, one-stop support",
      },
      {
        icon: Icons.heart,
        title: "Long-term Follow-up Management",
        description:
          "Continuous remote follow-up after treatment, uninterrupted immune monitoring",
      },
    ],
  },
  notice: {
    text:
      "DC vaccine therapy has significant efficacy, but is not suitable for all tumor patients. Treatment effects vary due to individual differences, and all patients must undergo comprehensive medical assessment and sign informed consent before treatment. DC vaccines are currently mainly positioned for EBV-related hematologic tumor patients who are relapsed, refractory, or have poor response to standard treatment. Whether suitable for treatment requires strict, individualized assessment by a multidisciplinary expert team.",
  },
  cta: {
    heading: "Start Your DC Vaccine Therapy Journey",
    subtitle:
      "Contact our professional team to get personalized DC vaccine therapy assessment and plan",
    primary: { label: "Book Consultation", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

export default function EbvDcVaccineProjectPage() {
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
