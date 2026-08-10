// Data for /projects/heart-failure-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/heart-failure-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const heartFailure: StemCellPageData = {
  ariaLabel: "Heart Failure Stem Cell Therapy - Improve Cardiac Function",

  hero: {
    eyebrow: "First Registered HF Stem Cell Therapy",
    title: "Heart Failure with Reduced\nEjection Fraction Stem Cell Therapy",
    description:
      "Based on PRIME-HFrEF clinical research, utilizing umbilical cord mesenchymal stem cells to improve cardiac function and quality of life",
    gradient: "from-blue-900 via-indigo-900 to-blue-900",
    stats: [
      { value: "LVEF ≤40%", label: "Indication" },
      { value: "3 Infusions", label: "Full Course" },
      { value: "IF=52.7", label: "Top Journal Published" },
    ],
  },

  productIntro: {
    title: "Product Introduction",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "Heart Failure with Reduced Ejection Fraction (HFrEF) refers to a subtype of heart failure characterized by left ventricular ejection fraction (LVEF) ≤40%, indicating severely impaired cardiac pumping function. Patients commonly present with decreased exercise tolerance, dyspnea, lower extremity edema, and recurrent hospitalizations, resulting in significantly reduced quality of life. HFrEF is the predominant type of heart failure globally. While current guideline-directed medical therapies (including ARNI, SGLT2i, etc.) can somewhat improve patient outcomes, there remains significant unmet medical needs.",
      },
      {
        text: "Umbilical Cord-derived Mesenchymal Stem Cells (UC-MSCs) are derived from neonatal umbilical cord tissue, belonging to allogeneic universal adult stem cells. They feature low immunogenicity, strong proliferative capacity, easy accessibility, and standardized production. This technology administers UC-MSCs via intravenous infusion, utilizing their paracrine effects to release various bioactive factors (such as VEGF, IGF-1, exosomes, etc.), inhibiting myocardial inflammatory responses, promoting microvascular neogenesis, and reducing myocardial fibrosis, thereby improving cardiac function.",
      },
      {
        text: "In China, this technology has been implemented as the first registered stem cell therapy project for heart failure. The standard protocol consists of 3 intravenous infusions per course, open to HFrEF patients worldwide.",
      },
    ],
  },

  advantages: {
    title: "Core Advantages",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle:
      "Based on clinical research published in top international journals, providing safe and effective cardiac repair solutions",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600",
    titleClass: "text-lg font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    items: [
      {
        icon: "award",
        title: "Rigorous Clinical Trial Validation",
        description:
          "The PRIME-HFrEF study is a single-center, randomized, double-blind, placebo-controlled clinical trial (ClinicalTrials.gov: NCT04992832), published in the prestigious journal Signal Transduction and Targeted Therapy (IF=52.7). The study enrolled 40 patients with 39 completing 360-day follow-up. Serious adverse events (SAEs) with multiple UC-MSC infusions showed no significant difference from placebo group, demonstrating acceptable overall safety.",
      },
      {
        icon: "globe",
        title: "Allogeneic Universal, No Matching Required",
        description:
          "UC-MSCs have extremely low immunogenicity, enabling allogeneic transplantation without HLA matching. Patients avoid waiting for donors or undergoing traumatic autologous stem cell extraction, allowing rapid treatment initiation. Compared to European autologous MSC therapies, China's allogeneic universal products offer better cost-effectiveness and accessibility.",
      },
      {
        icon: "target",
        title: "First to Address Right Heart Protection",
        description:
          "Traditional heart failure treatments focus on left ventricular function, but the PRIME-HFrEF study first systematically observed right heart benefits in stem cell therapy: RVESV improvement in the UC-MSC group was significantly better than placebo (P=0.033), TAPSE also showed improvement trends, with RVESV benefits sustained through 360-day follow-up. This provides unique therapeutic value for common right ventricular dysfunction in HFrEF patients.",
      },
      {
        icon: "zap",
        title: "Multi-Pathway Cardiac Repair Mechanisms",
        description:
          "UC-MSCs release various bioactive factors through paracrine effects, inhibiting myocardial inflammation, promoting angiogenesis, reducing fibrosis, and activating endogenous repair mechanisms by modulating the immune microenvironment. This improves cardiomyocyte survival and function, enhancing cardiac contractility and overall hemodynamics. UC-MSCs possess multiple properties including anti-fibrotic, anti-inflammatory, and pro-angiogenic effects.",
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
      boxClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8",
      iconClass: "text-blue-600",
      textClass: "text-gray-700",
      items: [
        "Left Ventricular Ejection Fraction (LVEF) ≤40%-33",
        "New York Heart Association (NYHA) functional class II-IV (patients with clear heart failure symptoms)",
        "Patients who have received guideline-directed medical therapy (GDMT) but show suboptimal cardiac function improvement",
        "Candidates awaiting heart transplantation who need bridging therapy to buy time and improve physical condition",
        "HFrEF patients without severe coagulation disorders, assessed by specialists as suitable for stem cell therapy",
      ],
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
      "flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "Cell Type",
        description: "Human Umbilical Cord-derived Mesenchymal Stem Cells (UC-MSCs) injection",
      },
      {
        icon: "users",
        title: "Cell Source",
        description:
          "Allogeneic source from healthy newborn umbilical cord tissue, expanded and quality-controlled in GMP-standard laboratories, no patient's own cells required, no matching needed",
      },
      {
        icon: "activity",
        title: "Administration Route",
        description:
          "Intravenous infusion. UC-MSCs home to cardiac injury sites through blood circulation, exerting paracrine repair effects",
      },
      {
        icon: "syringe",
        title: "Cell Dosage",
        description: "Approximately 2×10⁷ cells per infusion, total course includes 3 infusions",
      },
      {
        icon: "calendar",
        title: "Treatment Protocol",
        description: "One infusion per week, total of 3 infusions",
      },
      {
        icon: "clock",
        title: "Infusion Duration",
        description: "Approximately 30-60 minutes, can be completed in outpatient or inpatient settings",
      },
      {
        icon: "calendar",
        title: "Total Treatment Duration",
        description: "Approximately 3 weeks (from initial assessment to final infusion)",
      },
      {
        icon: "building",
        title: "Implementation Hospital",
        description: "West China Lecheng Hospital, Sichuan University",
      },
    ],
  },

  treatmentProcess: {
    title: "Treatment Process",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Standardized five-step treatment process ensuring safety and efficacy",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    wrapClass: "max-w-4xl mx-auto space-y-6",
    stepCardClass: "relative bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-600",
    stepLayoutClass: "flex items-start gap-4",
    numberClass:
      "flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold",
    iconClass: "text-blue-600",
    stepTitleClass: "text-lg font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    steps: [
      {
        icon: "stethoscope",
        title: "Pre-operative Assessment & Screening",
        description:
          "Comprehensive medical history collection and physical examination upon arrival, echocardiography to assess LVEF and right ventricular volume parameters, 6-minute walk test (6MWT), Minnesota Living with Heart Failure Questionnaire (MLHFQ) scoring, plus blood counts, coagulation function (including D-dimer), liver/kidney function, and viral screening. Specialists comprehensively evaluate treatment indications based on results.",
      },
      {
        icon: "fileText",
        title: "Pre-treatment Preparation",
        description:
          "After confirming patient eligibility, prepare quality-standard UC-MSC injections in GMP-certified laboratories with rigorous quality control (including cell viability, sterility, and potency testing), and obtain patient informed consent.",
      },
      {
        icon: "syringe",
        title: "IV Infusion Treatment",
        description:
          "Patients receive UC-MSC IV infusion, each lasting approximately 30-60 minutes. Vital signs monitoring throughout (heart rate, blood pressure, oxygen saturation), with 30-minute observation before discharge if no abnormalities. One infusion per week, total of 3 infusions.",
      },
      {
        icon: "heartPulse",
        title: "Follow-up & Efficacy Evaluation",
        description:
          "After completing all 3 infusions, regular follow-ups at 1, 3, 6, and 12 months post-treatment. Follow-up includes echocardiography for LVEF and right ventricular volume changes, 6MWT, MLHFQ scoring, coagulation function rechecks, and adverse event recording.",
      },
      {
        icon: "calendar",
        title: "Multi-course Management",
        description:
          "Based on first-course efficacy evaluation, some patients may require additional treatment, determined by attending physicians through comprehensive assessment of individual cardiac function improvement and coagulation status.",
      },
    ],
  },

  efficacy: {
    title: "Clinical Efficacy Data",
    subtitle: "Treatment outcomes based on real-world cases",
    pyClass: "py-16",
    gradient: "from-blue-900 to-indigo-900",
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
        title: "Significant LVEF Improvement",
        stat: "+9%",
        description: "Case studies show LVEF improvement from 32% to 41%",
      },
      {
        icon: "activity",
        title: "Exercise Capacity Improvement",
        stat: "+80m",
        description: "6MWD increased from 280m to 360m",
      },
      {
        icon: "heartPulse",
        title: "Right Heart Function Protection",
        stat: "P=0.033",
        description: "RVESV improvement significantly better than placebo",
      },
      {
        icon: "shield",
        title: "Quality of Life Improvement",
        stat: "-24分",
        description: "MLHFQ score reduced from 52 to 28 points",
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
        location: "United Kingdom",
        age: "71 years old",
        title: "Retired Construction Engineer",
        subtitle: "Chronic HF due to Ischemic Cardiomyopathy",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Before LVEF", value: "32%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After LVEF", value: "41%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before 6MWT", value: "280m", boxClass: "bg-orange-50", valueClass: "text-orange-600" },
          { label: "After 6MWT", value: "360m", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before NYHA", value: "III级", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "After NYHA", value: "II级", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "LVEF improved to 41% at 3 months, 6MWD increased from 280m to 360m. No heart failure hospitalizations through 6-month follow-up.",
        footerIcon: "trendingUp",
        footerLabel: "9 percentage point LVEF improvement",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
      {
        location: "China",
        age: "59 years old",
        title: "Male",
        subtitle: "Chronic HF from Dilated Cardiomyopathy for 10+ years",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Before NYHA", value: "III级", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "After NYHA", value: "II级", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before MLHFQ", value: "52分", boxClass: "bg-gray-50", valueClass: "text-gray-600" },
          { label: "After MLHFQ", value: "28分", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "At 3-month follow-up, RVESV significantly reduced from baseline, NYHA class improved from III to II, no significant breathlessness climbing two flights of stairs. MLHFQ score dropped from 52 to 28, significantly improving quality of life.",
        quote: `"I used to feel life was just cycling between taking medication and hospitalization, now I can finally see hope."`,
        quoteBorderClass: "border-blue-600",
        footerIcon: "trendingUp",
        footerLabel: "46% reduction in MLHFQ score",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
      {
        location: "United States",
        age: "67 years old",
        title: "Female",
        subtitle: "Chronic HFrEF from Hypertensive Heart Disease with CAD",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Before LVEF", value: "35%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After LVEF", value: "40%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before NYHA", value: "III级", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "After NYHA", value: "II级", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "At 6-month follow-up, LVEF improved to 40%, heart failure symptoms significantly reduced, NYHA class improved from III to II.",
        quote: `"Finally regained confidence to travel again"`,
        quoteBorderClass: "border-blue-600",
        footerIcon: "trendingUp",
        footerLabel: "Successful application in overseas patient",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
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
      tableWrapClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8",
      headerBorderClass: "border-b-2 border-blue-200",
      rowBorderClass: "border-b border-blue-100",
      accentClass: "text-blue-600",
      rows: [
        {
          item: "UC-MSC Therapy for Heart Failure",
          perSessionMain: "¥60,000 CNY",
          perSessionSub: "~$9,000 USD",
          totalCourseMain: "¥180,000 CNY",
          totalCourseSub: "~$27,000 USD",
          notes: "3 infusions total, once per week",
        },
      ],
      notes: [
        {
          label: "Note",
          text: "This fee does not include pre-treatment examination costs, hospitalization fees, and other medical expenses.",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
      ],
    },
  },

  cta: {
    pyClass: "py-16",
    gradient: "from-blue-900 to-indigo-900",
    containerClass: "container-custom px-4",
    wrapClass: "text-center text-white max-w-3xl mx-auto",
    buttonsClass: "flex flex-col sm:flex-row gap-4 justify-center",
    title: "Start Your Cardiac Recovery Journey",
    titleClass: "text-3xl font-bold mb-4",
    desc: "Providing innovative treatment solutions for your heart health based on top-tier international clinical research",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "Book Consultation",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "Back to Projects",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};
