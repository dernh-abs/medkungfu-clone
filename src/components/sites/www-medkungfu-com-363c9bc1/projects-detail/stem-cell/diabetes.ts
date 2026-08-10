// Data for /projects/diabetes-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/diabetes-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const diabetes: StemCellPageData = {
  ariaLabel: "Diabetes Stem Cell Therapy - Improve Pancreatic Function",

  hero: {
    eyebrow: "First Registered Diabetes Stem Cell Therapy",
    title: "Type 2 Diabetes\nUmbilical Cord MSC Therapy",
    description:
      "Intervening at the root pathological level for functional repair rather than mere disease maintenance",
    gradient: "from-emerald-900 via-teal-900 to-emerald-900",
    stats: [
      { value: "-1.06%", label: "Avg HbA1c Reduction" },
      { value: "61.6%", label: "Complete Insulin Discontinuation" },
      { value: "334 Patients", label: "Clinical Trial Validated" },
    ],
  },

  productIntro: {
    title: "Product Introduction",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "Human Umbilical Cord-derived Mesenchymal Stem Cells (UC-MSCs) are derived from neonatal umbilical cord Wharton's jelly, representing a class of allogeneic universal adult stem cells with extremely low immunogenicity and strong proliferative capacity. Unlike conventional treatments focused on expanding insulin dosage, MSC therapy intervenes at the root pathological level of Type 2 diabetes through multiple pathways including differentiation into insulin-secreting-like cells, secretion of anti-inflammatory and reparative cytokines, and immunomodulation.",
      },
    ],
  },

  advantages: {
    title: "Core Advantages",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle:
      "Providing safe and effective functional repair solutions for diabetes based on top-tier international clinical research",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600",
    titleClass: "text-lg font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    items: [
      {
        icon: "award",
        title: "Rigorous Clinical Evidence Support",
        description:
          "A Phase II clinical trial involving 91 patients showed a 27.78% reduction in insulin dosage after UC-MSC treatment with good safety profile. A 2025 systematic review and meta-analysis based on 8 clinical trials with 334 patients (172 MSC-treated) further confirmed: average HbA1c reduction of 1.06%, significant improvement in C-peptide levels, decreased insulin requirements, with no serious adverse events related to UC-MSC treatment reported.",
      },
      {
        icon: "globe",
        title: "Allogeneic Universal, No Matching Required",
        description:
          "UC-MSCs have extremely low immunogenicity, enabling allogeneic transplantation without HLA matching. Patients avoid traumatic autologous cell extraction and lengthy cell expansion waiting periods. Once assessed as suitable, patients can quickly enter standardized treatment protocols, facilitating precise travel planning for international patients.",
      },
      {
        icon: "target",
        title: "Target Root Causes for Functional Repair",
        description:
          "Unlike traditional glucose-lowering approaches that passively reduce blood sugar, UC-MSCs secrete various bioactive factors (HGF, IGF-1, etc.) to inhibit pancreatic and systemic low-grade chronic inflammation, protecting residual pancreatic β-cells; some differentiate into insulin-secreting-like cells, directly compensating for insulin deficiency; simultaneously improving insulin resistance systemically by promoting macrophage transformation from pro-inflammatory M1 to anti-inflammatory M2 phenotype. Multiple large-scale domestic and international clinical trials and systematic reviews demonstrate that UC-MSCs significantly elevate C-peptide levels, offering potential for functional repair rather than mere disease maintenance.",
      },
      {
        icon: "shield",
        title: "Excellent Safety Record with Minimal Side Effects",
        description:
          "In multiple randomized double-blind clinical trials involving hundreds of patients, the MSC treatment group experienced no serious adverse events, no liver/kidney function impairment, immune rejection, or tumor marker abnormalities. A small number of patients experienced transient low-grade fever after infusion, which resolved spontaneously within 24 hours. No severe hypoglycemic events occurred during the study period, demonstrating good treatment tolerance.",
      },
    ],
  },

  indications: {
    title: "Indications",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
    pyClass: "py-16",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: true,
    boxedList: {
      boxClass: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8",
      extraClass: "mb-8",
      iconClass: "text-emerald-600",
      textClass: "text-gray-700",
      items: [
        "Patients using at least 3 glucose-lowering medications (with or without insulin) still showing suboptimal glycemic control, assessed by specialists as having no absolute contraindications",
        "Fasting C-peptide > 0.4 ng/mL (indicating some residual pancreatic islet function)",
        "Disease duration ≤ 10 years (main enrollment population in this study; longer durations require individualized assessment)",
        "Age 18-75 years, without severe cardiac, hepatic, or renal insufficiency and active malignant tumors",
        "Informed consent and willingness to comply with complete treatment course and follow-up plan",
      ],
    },
    contraindications: {
      title: "Contraindications (Currently Not Applicable)",
      titleClass: "text-xl font-bold text-[#1A1A2E] mb-4",
      boxClass: "bg-red-50 rounded-2xl p-8 border border-red-200",
      icon: "thermometer",
      iconClass: "text-red-600",
      textClass: "text-gray-700 text-sm",
      items: [
        "Type 1 diabetes (pancreatic β-cells completely destroyed, different therapeutic pathway required)",
        "Gestational diabetes",
        "Severe active infection",
        "Uncontrolled severe hypertension",
        "Advanced uremia",
        "History of active malignant tumors (cases cured for more than 5 years require individual assessment)",
      ],
      footerNote:
        "Patients with newly diagnosed diabetes or those with preserved but suboptimal insulin function benefit most clearly.",
    },
  },

  treatmentDetails: {
    title: "Treatment Details",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "Cell Type",
        description:
          "Human Umbilical Cord-derived Mesenchymal Stem Cells (UC-MSCs) injection, extracted from healthy newborn umbilical cord tissue, expanded and quality-controlled in GMP-standard laboratories.",
      },
      {
        icon: "fileText",
        title: "Cell Specification",
        description:
          "Standard unit specification: 5×10⁷ cells/2.5ml preparation. Preparation method approved by Lecheng Medical Drug Administration, with strict testing for cell viability, sterility, and potency.",
      },
      {
        icon: "syringe",
        title: "Single Dosage",
        description:
          "Calculated at 1×10⁶ cells/kg body weight (adult weight 50-90kg, approximately 5×10⁷ cells per infusion).",
      },
      {
        icon: "activity",
        title: "Administration Route",
        description:
          "Intravenous infusion, approximately 30-60 minutes, with continuous vital signs monitoring, completable in outpatient or inpatient settings.",
      },
      {
        icon: "calendar",
        title: "Treatment Schedule",
        description:
          "Each complete course consists of 3 intravenous infusions, once per week for 3 consecutive weeks.",
      },
      {
        icon: "clock",
        title: "Follow-up & Prognosis Management",
        description:
          "Regular follow-ups at 84 days, 20 weeks, and 48 weeks post-treatment after completing all 3 infusions.",
      },
    ],
  },

  treatmentProcess: {
    title: "Treatment Process",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Standardized six-step treatment process ensuring safety and efficacy",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    wrapClass: "max-w-4xl mx-auto space-y-6",
    stepCardClass: "relative bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-600",
    stepLayoutClass: "flex items-start gap-4",
    numberClass:
      "flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold",
    iconClass: "text-emerald-600",
    stepTitleClass: "text-lg font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    steps: [
      {
        icon: "fileText",
        title: "Online Preliminary Screening & Assessment",
        description:
          "Patients provide recent medical records including blood glucose and HbA1c monitoring records, fasting C-peptide test results, glucose-lowering medication history (including insulin usage), liver/kidney function and viral screening reports. Specialists preliminarily assess treatment eligibility.",
      },
      {
        icon: "stethoscope",
        title: "Arrival & Baseline Examination",
        description:
          "Upon hospital arrival, patients complete admission assessment, echocardiography, insulin resistance testing (HOMA-IR/glucose clamp) to confirm eligibility, and sign informed consent.",
      },
      {
        icon: "droplets",
        title: "Cell Preparation & Matching Exemption",
        description:
          "Hospital matches pre-screened UC-MSC preparations (5×10⁷ cells/dose) from standard preparation centers following GMP standards, completing quality control testing. Due to extremely low immunogenicity, no HLA matching required, eliminating additional waiting time for overseas patients.",
      },
      {
        icon: "syringe",
        title: "IV Infusion Treatment",
        description:
          "1st infusion: ~45 minutes with continuous ECG/blood pressure monitoring, initial blood glucose measurement and tolerance assessment before discharge. 2nd infusion: One week later, continuing vital signs and blood glucose fluctuation observation. 3rd infusion: Another week later, completing the current full course.",
      },
      {
        icon: "heartPulse",
        title: "Follow-up & Medication Reduction Guidance",
        description:
          "After completing 3 infusions, medical team conducts regular follow-ups at 84 days, 20 weeks, and 48 weeks (local tests can be completed online with reports submitted). Based on glycemic control and pancreatic function recovery indicators, physicians gradually guide glucose-lowering medication/insulin reduction plans.",
      },
      {
        icon: "calendar",
        title: "Long-term Disease Management",
        description:
          "Based on individual efficacy assessment, some patients may require additional consolidation cycles. Specific protocols are comprehensively developed by attending physicians considering initial treatment response and future glycemic status.",
      },
    ],
  },

  efficacy: {
    title: "Clinical Efficacy Data",
    subtitle: "Treatment outcomes based on real-world cases",
    pyClass: "py-16",
    gradient: "from-emerald-900 to-teal-900",
    headingWrapClass: "text-center mb-12",
    headingClass: "text-3xl font-bold mb-4",
    subtitleClass: "text-white/80",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto",
    cardClass: "bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center",
    iconTileClass:
      "w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4",
    statClass: "text-3xl font-bold text-yellow-400 mb-2",
    itemTitleClass: "text-lg font-bold mb-2",
    descClass: "text-sm text-white/80",
    statFirst: false,
    items: [
      {
        icon: "trendingUp",
        title: "Significant HbA1c Reduction",
        stat: "-1.06%",
        description: "Meta-analysis shows overall average HbA1c reduction",
      },
      {
        icon: "activity",
        title: "Medication Discontinuation",
        stat: "61.6%",
        description: "45 patients completely discontinued insulin, longest 12 months",
      },
      {
        icon: "heartPulse",
        title: "Pancreatic Function Recovery",
        stat: "+40-50%",
        description: "C-peptide levels increased from baseline, proving restored autonomous secretion",
      },
      {
        icon: "shield",
        title: "Medication Reduction >50%",
        stat: "84天",
        description: "Glucose-lowering medication reduced by >50% within 84 days after 3 infusions",
      },
    ],
  },

  caseStudies: {
    title: "Case Studies",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Real treatment cases from patients worldwide",
    pyClass: "py-16",
    bgClass: "bg-[#F5F7FA]",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
    cardClass: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow",
    revealOffset: 20,
    cases: [
      {
        location: "Canada",
        age: "59 years old",
        title: "Entrepreneur",
        subtitle: "Type 2 Diabetes for 8+ years",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Before HbA1c", value: "9.2%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After HbA1c", value: "7.0%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Insulin Reduction", value: "53%", boxClass: "bg-blue-50", valueClass: "text-blue-600", colSpan: true },
        ],
        body: "At 3-month follow-up, HbA1c dropped to 7.0%, insulin usage reduced by 53%, oral medications reduced from 3 to 2. Fasting blood glucose remained stable at 6-month follow-up.",
        quote: `"Blood sugar used to fluctuate like a roller coaster, now I finally feel the long-lost stability"`,
        quoteBorderClass: "border-emerald-600",
        footerIcon: "trendingUp",
        footerLabel: "First overseas patient at Boao Lecheng",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
      {
        location: "Indonesia",
        age: "43 years old",
        title: "Male",
        subtitle: "Obesity with Type 2 Diabetes & Hyperuricemia",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Before HbA1c", value: ">8%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After HbA1c", value: "5.1%", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "Three months post-treatment, fasting blood glucose dropped to 91 mg/dL (5.1 mmol/L), HbA1c decreased to 5.1%, triglycerides reduced from abnormal levels to 151 mg/dL, uric acid to 4.9 mg/dL. Clinical symptoms including nocturia, fatigue, and neuropathic pain significantly improved, with complete resolution of dry skin and heel cracking.",
        footerIcon: "trendingUp",
        footerLabel: "UC-MSCs combined with exosome therapy",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
      {
        location: "Australia",
        age: "62 years old",
        title: "Retired Nurse",
        subtitle: "Type 2 Diabetes for 12 years",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Before HbA1c", value: "8.2-9.5%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After HbA1c", value: "6.9%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Insulin Reduction", value: "~40%", boxClass: "bg-blue-50", valueClass: "text-blue-600", colSpan: true },
          { label: "C-Peptide Increase", value: ">30%", boxClass: "bg-purple-50", valueClass: "text-purple-600", colSpan: true },
        ],
        body: "At 3-month follow-up, fasting C-peptide levels increased over 30% from baseline, HbA1c dropped to 6.9% within target range. Successfully reduced insulin usage by nearly 40%, with significantly improved overall vitality and no severe postprandial blood glucose fluctuations during thrice-weekly swimming.",
        footerIcon: "trendingUp",
        footerLabel: "C-peptide increase >30%",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
    ],
  },

  cost: {
    pyClass: "py-16",
    bgClass: "bg-white",
    body: {
      variant: "table",
      wrapClass: "max-w-4xl mx-auto",
      title: "Reference Treatment Cost",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
      tableWrapClass: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8",
      headerBorderClass: "border-b-2 border-emerald-200",
      rowBorderClass: "border-b border-emerald-100",
      accentClass: "text-emerald-600",
      rows: [
        {
          item: "UC-MSC Therapy for Type 2 Diabetes",
          perSessionMain: "¥58,000 CNY",
          perSessionSub: "~$9,000 USD",
          totalCourseMain: "¥174,000 CNY",
          totalCourseSub: "~$27,000 USD",
          notes: "1 complete course includes 3 infusions, once per week",
        },
      ],
      notesWrapClass: "mt-6 space-y-2",
      notes: [
        {
          label: "Note",
          text: "Cost covers UC-MSC cell preparation, 3 IV infusions, post-infusion inpatient/outpatient monitoring, and 84-day key follow-up assessment medical expenses.",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
        {
          text: "Cost does not include additional examination items and other medical expenses required for personal complications. Specific costs are subject to final hospital assessment.",
          boxClass: "bg-gray-50 rounded-lg border border-gray-200",
        },
      ],
    },
  },

  cta: {
    pyClass: "py-16",
    gradient: "from-emerald-900 to-teal-900",
    containerClass: "container-custom px-4",
    wrapClass: "text-center text-white max-w-3xl mx-auto",
    buttonsClass: "flex flex-col sm:flex-row gap-4 justify-center",
    title: "Start Your Diabetes Functional Repair Journey",
    titleClass: "text-3xl font-bold mb-4",
    desc: "Providing innovative treatment solutions for your blood glucose health based on top-tier international clinical research",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "Book Consultation",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "Back to Projects",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};
