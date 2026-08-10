import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { ImmunotherapyProjectPage, type ImmunotherapyProjectConfig } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/ImmunotherapyProjectPage";

export const metadata: Metadata = {
  title: "Autologous NK Cell Adjuvant Therapy for Solid Tumors | MedKungFu",
  description:
    "Autologous NK Cell Therapy in China for solid tumors — broad-spectrum innate immunotherapy with advanced liver cancer DCR of 81.8%, no genetic modification, and excellent safety.",
};

const CONFIG: ImmunotherapyProjectConfig = {
  ariaLabel: "NK Cell Therapy - Immunotherapy for Solid Tumors",
  hero: {
    badge: "Precision Oncology Treatment",
    title: "Autologous NK Cell Adjuvant Therapy for Solid Tumors",
    subtitle: "Awaken Innate Immunity, Reshape Solid Tumor Treatment Landscape",
    primaryBtn: "Schedule Consultation",
    secondaryBtn: "Learn About Treatment Process",
  },
  stickyNav: [
    "Introduction",
    "Core Advantages",
    "Indications",
    "Treatment Process",
    "Case Studies",
  ],
  intro: {
    heading: "What is Autologous NK Cell Therapy?",
    paragraphs: [
      <p key="p1" className="text-lg text-gray-700 leading-relaxed mb-6">
        Natural Killer Cells (NK cells) are core members of the human innate
        immune system, known as the body&apos;s first line of defense against
        cancer cells and viral infections. Unlike other immune cells,{" "}
        <span className="font-semibold text-[#1B4D3E]">
          NK cells can directly kill cancer cells without pre-recognition of
          tumor antigens
        </span>
        , and possess broad-spectrum anti-tumor activity.
      </p>,
      <p key="p2" className="text-lg text-gray-700 leading-relaxed">
        Unlike gene-modified cell therapies such as CAR-T, NK cell therapy
        technology does not require genetic modification of cells, only
        requiring in vitro activation and expansion. Its mechanism of action is
        closer to the body&apos;s natural immune response, with higher safety.
      </p>,
    ],
  },
  advantages: {
    heading: "Core Advantages - Why Choose Autologous NK Cell Therapy in China?",
    bg: "bg-white",
    items: [
      {
        icon: Icons.target,
        title: "Broad-Spectrum Anti-Tumor, Covering Multiple Solid Tumors",
        description:
          "NK cells can non-specifically recognize and kill various tumor cells without relying on specific antigen expression, suitable for liver cancer, lung cancer, breast cancer, gastric cancer, kidney cancer, colorectal cancer, pancreatic cancer and other solid tumors",
      },
      {
        icon: Icons.shield,
        title: "Excellent Safety Profile",
        description:
          "Autologous cells have no risk of immune rejection; no genetic modification required, no carcinogenic risk; no treatment-related deaths reported in clinical trials, serious adverse reactions are rare",
      },
      {
        icon: Icons.trendingUp,
        title: "Impressive Efficacy Data",
        description:
          "Studies show advanced liver cancer DCR reaches 81.8%, median OS 41.6 months; advanced kidney cancer ORR reaches 76.67%, DCR 86.67%, significantly superior to targeted monotherapy",
      },
      {
        icon: Icons.syringe,
        title: "No Lymphocyte Depletion Required",
        description:
          "Compared to CAR-T and other therapies, autologous NK cell therapy generally does not require lymphocyte depletion chemotherapy, reducing additional toxicity burden with better patient tolerance",
      },
      {
        icon: Icons.clock,
        title: "Convenient Administration",
        description:
          "Administered via intravenous infusion, can be completed in outpatient or short-term hospitalization without affecting patients' normal life",
      },
      {
        icon: Icons.zap,
        title: "Can Be Combined with Multiple Therapies",
        description:
          "NK cells can be combined with chemotherapy, targeted therapy, immune checkpoint inhibitors etc. to exert synergistic anti-tumor effects. Studies show combination with PD-1 inhibitors can significantly extend long-term survival in advanced NSCLC patients",
      },
      {
        icon: Icons.mapPin,
        title: "Leveraging Boao Lecheng Pilot Zone Policy",
        description:
          "Enjoying “Pilot First” policy, autologous NK cell therapy technology has been officially approved with transparent pricing, international patients can receive compliant treatment",
      },
      {
        icon: Icons.award,
        title: "Significant Price Advantage",
        description:
          "Only 1/5-1/3 of the cost of similar treatments in Europe and America",
      },
    ],
  },
  indications: {
    cardHeading:
      "Indications - Which Solid Tumor Patients Are Suitable for Autologous NK Cell Therapy?",
    cardSubtitle:
      "Autologous NK cell therapy is mainly suitable for solid tumor patients who still have recurrence risk or treatment failure after standard treatment, as adjuvant or combination therapy",
    cards: [
      {
        title: "Hepatocellular Carcinoma (HCC)",
        description: "Studies show disease control rate 81.8%, median OS 41.6 months",
      },
      {
        title: "Advanced Renal Cell Carcinoma",
        description:
          "Clinical trials show ORR 76.67%, DCR 86.67%, significantly superior to targeted monotherapy; simultaneously improves patient immune function and tumor marker levels",
      },
      {
        title: "Non-Small Cell Lung Cancer",
        description:
          "Combined with PD-1 inhibitor (sintilimab) as second-line treatment, can significantly extend survival",
      },
      {
        title: "Advanced Pancreatic Cancer",
        description:
          "NK cells combined with first-line chemotherapy, DCR reaches 73.7%, median OS 10.8 months, significantly superior to traditional treatment regimens",
      },
    ],
  },
  process: {
    heading: "Treatment Process",
    subtitle: "Approximately 2-4 weeks from initial diagnosis to recovery",
    bg: "bg-white",
    steps: [
      {
        title: "Remote Consultation & Initial Screening",
        duration: "2-5 days",
        description:
          "Submit medical records, multidisciplinary expert team remotely evaluates treatment indications and feasibility",
      },
      {
        title: "Visa & Travel Arrangements",
        duration: "1-2 weeks",
        description:
          "Medical visa invitation letters, international insurance coordination, itinerary planning and accommodation arrangements",
      },
      {
        title: "Arrival in China & Comprehensive Assessment",
        duration: "2-3 days",
        description:
          "Comprehensive physical examination, tumor burden assessment, immune function testing, treatment plan determination",
      },
      {
        title: "Mononuclear Cell Collection",
        duration: "1 day",
        description: "Leukapheresis to collect peripheral blood mononuclear cells",
      },
      {
        title: "NK Cell GMP Preparation",
        duration: "2-3 weeks",
        description: "NK cell activation, expansion and quality control in GMP laboratory",
      },
      {
        title: "Intravenous Infusion Treatment",
        duration: "30-60 minutes each",
        description:
          "One course typically includes 3-6 infusions, each interval approximately 2-4 weeks, most treatments can be completed in outpatient setting",
      },
      {
        title: "Hospital Monitoring",
        duration: "3-7 days (first time)",
        description:
          "Short-term hospital monitoring after first infusion, subsequent treatments can be done outpatient",
      },
      {
        title: "Long-term Follow-up Management",
        duration: "Ongoing",
        description:
          "Regular re-examination, tumor marker monitoring, remote follow-up",
      },
    ],
  },
  cases: {
    heading: "Case Studies",
    items: [
      {
        title: "Advanced Liver Cancer Patient",
        description:
          "A 62-year-old male advanced liver cancer patient whose condition continued to progress after multiple interventional treatments and targeted drug therapy. Received autologous NK cell therapy in 2024, completing 6 infusions. Three-month follow-up showed tumor marker AFP decreased from 856 ng/mL before treatment to 125 ng/mL, imaging assessment showed tumor shrinkage over 50%. Patient's physical condition significantly improved, quality of life markedly enhanced.",
      },
      {
        title: "Advanced Kidney Cancer Combination Therapy",
        description:
          "A 55-year-old female advanced renal cell carcinoma patient who had previously received targeted drug therapy but developed resistance. Started NK cell combined with PD-1 inhibitor treatment in 2024, assessment after 4 cycles showed stable disease (SD), with some lesions significantly reduced. Patient had no obvious adverse reactions, good tolerance, continuing maintenance treatment.",
      },
      {
        title: "Pancreatic Cancer Comprehensive Treatment",
        description:
          "A 68-year-old male advanced pancreatic cancer patient unable to undergo surgical resection. Received NK cell combined with gemcitabine + albumin-bound paclitaxel chemotherapy regimen, assessment after 3 cycles showed disease control (DCR), tumor marker CA19-9 decreased from 1250 U/mL before treatment to 380 U/mL. Patient's abdominal pain symptoms significantly relieved, appetite improved, weight increased.",
      },
    ],
  },
  cost: {
    heading: "Reference Treatment Costs",
    intro:
      "NK cell therapy costs have significant price advantages compared to similar treatments in Europe and America.",
    label: "Based on treatment plan, total cost is approximately",
    amount: "$30,000 - $60,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    variant: "white",
    items: [
      {
        icon: Icons.stethoscope,
        title: "Direct Access to China's Top Cell Therapy Centers",
        description:
          "Established partnerships with multiple top-tier institutions, providing safe and reliable NK cell therapy services for international patients",
      },
      {
        icon: Icons.shield,
        title: "Technology Officially Approved for Clinical Application",
        description:
          "Autologous NK cell adjuvant therapy for solid tumors has been included in Hainan Boao Lecheng official fee schedule, compliant, transparent and safe",
      },
      {
        icon: Icons.trendingUp,
        title: "Solid Clinical Data Across Multiple Cancer Types",
        description:
          "Advanced liver cancer DCR 81.8%, median OS 41.6 months; advanced kidney cancer ORR 76.67%; pancreatic cancer DCR 73.7%",
      },
      {
        icon: Icons.heart,
        title: "Excellent Safety Profile",
        description:
          "No genetic modification required, no serious toxicity reports, generally no lymphocyte depletion needed, good patient tolerance",
      },
      {
        icon: Icons.award,
        title: "Transparent Pricing, No Middleman Markup",
        description:
          "Medical fees paid directly to hospital, platform does not handle or markup, registered prices publicly transparent",
      },
      {
        icon: Icons.clock,
        title: "Efficient Scheduling, Convenient Medical Care",
        description:
          "Treatment can start within 2-3 weeks, avoiding long waiting periods in Europe and America",
      },
      {
        icon: Icons.users,
        title: "Full Bilingual Service",
        description:
          "Medical record translation, on-site interpretation, international insurance coordination, one-stop support",
      },
      {
        icon: Icons.mapPin,
        title: "Leveraging Boao Lecheng Pilot Zone Policy",
        description:
          "Enjoying national “Pilot First” special policy, ensuring compliant medical care for international patients",
      },
      {
        icon: Icons.activity,
        title: "Long-term Follow-up Management",
        description:
          "Continuous remote follow-up after treatment, uninterrupted disease monitoring",
      },
    ],
  },
  notice: {
    text:
      "As an adjuvant therapy, NK cell therapy efficacy varies by individual differences. All patients must undergo comprehensive medical assessment before treatment and sign informed consent. NK cell therapy is mainly positioned for patient populations with recurrence risk or treatment failure after standard treatment. Whether suitable for NK cell therapy requires strict, individualized assessment by a multidisciplinary expert team.",
    bg: "bg-white",
  },
  cta: {
    heading: "Begin Your NK Cell Therapy Journey",
    subtitle:
      "Contact our professional team for personalized NK cell therapy assessment and plans",
    primary: { label: "Schedule Consultation", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

export default function NkTherapyProjectPage() {
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
