// Data for /projects/copd-ild-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/copd-ild-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const copdIld: StemCellPageData = {
  ariaLabel: "COPD/ILD Stem Cell Therapy - Improve Lung Function",

  hero: {
    eyebrow: "World's First Autologous Lung Regeneration",
    title: "COPD / Interstitial Lung Disease\nAirway Basal Stem Cell Therapy",
    description:
      "Repairing lung structure from the root for fundamental pulmonary function improvement",
    gradient: "from-cyan-900 via-teal-900 to-cyan-900",
    stats: [
      { value: "+19%", label: "DLCO Improvement" },
      { value: "100%", label: "CAT Improvement Rate" },
      { value: "100+", label: "Successful Cases" },
    ],
  },

  productIntro: {
    title: "Product Introduction",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "Chronic Obstructive Pulmonary Disease (COPD) and Interstitial Lung Disease (ILD) are two major categories of chronic lung diseases seriously threatening respiratory health worldwide. According to WHO data, COPD has become the third leading cause of death globally. Traditional treatments such as bronchodilators and steroids mainly focus on relieving airway obstruction and controlling inflammation, but have lacked effective repair methods for the core pathological changes - destruction of alveolar structures and loss of gas exchange units (i.e., emphysema) - making it difficult to reverse the progressive decline in patients' lung function.",
      },
      {
        text: "ILD is a group of diffuse lung diseases characterized by lung interstitial inflammation and fibrosis, including Idiopathic Pulmonary Fibrosis (IPF), Connective Tissue Disease-associated ILD, and others.",
      },
      {
        text: "Airway Basal Stem Cells (BSCs) are adult stem cells of the airway, playing an important role in airway renewal and regenerative repair after injury. Unlike traditional mesenchymal stem cells (MSCs) that exert anti-inflammatory and immunomodulatory effects through paracrine mechanisms, airway basal stem cell therapy directly regenerates damaged alveolar and bronchial epithelial structures, repairing lung parenchyma from the root, aiming to achieve fundamental improvement in lung function.",
      },
    ],
  },

  advantages: {
    title: "Core Advantages",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle:
      "World's first autologous lung regeneration technology, repairing lung structure from the root",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600",
    titleClass: "text-lg font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    items: [
      {
        icon: "globe",
        title: "World's First - Autologous Lung Regeneration",
        description:
          "Unlike traditional mesenchymal stem cells that primarily rely on paracrine effects for anti-inflammatory action, Airway Basal Stem Cells (BSCs) use patients' own airway basal stem cells. Through their unique directed differentiation capability, they directly regenerate damaged alveolar and bronchial epithelial structures, providing a new therapeutic paradigm for COPD and ILD previously considered \"irreversible\".",
      },
      {
        icon: "trendingUp",
        title: "Phase II Trial Confirmed - Fundamental DLCO Improvement",
        description:
          "Clinical trials confirmed that the key efficacy endpoint - lung diffusion capacity (DLCO) - showed sustained and significant improvement in the cell therapy group, with statistically significant improvements compared to control group at 24 and 52 weeks post-transplantation.",
      },
      {
        icon: "microscope",
        title: "First Imaging Evidence - Alveolar Structure Repair",
        description:
          "Corresponding to DLCO improvement, alveolar volume (VA) in the cell therapy group significantly increased compared to control at 24 and 52 weeks. Through 3D CT reconstruction analysis, increased functional lung volume and partial repair of emphysema areas (especially in lower lobes) were observed for the first time, providing direct imaging evidence that \"structural repair leads to functional improvement\".",
      },
      {
        icon: "heartPulse",
        title: "Comprehensive Quality of Life Improvement",
        description:
          "The cell therapy group showed statistically significant improvements in COPD Assessment Test (CAT) scores and modified Medical Research Council (mMRC) dyspnea scores compared to control. At 24 weeks post-treatment, 100% of patients achieved clinical stability or improvement in CAT assessment.",
      },
      {
        icon: "shield",
        title: "Autologous Cells - No Immune Rejection",
        description:
          "Using patients' own autologous airway basal stem cells eliminates the risk of immune rejection associated with allogeneic cells. During the study, the overall adverse event rate was comparable between treatment and control groups, demonstrating the safety and feasibility of bronchoscopic transplantation.",
      },
      {
        icon: "users",
        title: "Real-World Validation - Over 100 Successful Cases",
        description:
          "As of April 2026, over 100 patients have received airway basal stem cell therapy at Ruijin Hospital Hainan. Patients experienced significant reduction in cough and sputum symptoms, with marked improvement in lung diffusion function.",
      },
    ],
  },

  indications: {
    title: "Indications",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
    pyClass: "py-16",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: true,
    groups: [
      {
        boxClass: "bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6",
        titleIcon: "activity",
        iconClass: "text-cyan-600",
        title: "Chronic Obstructive Pulmonary Disease (COPD)",
        itemIconClass: "text-cyan-600",
        items: [
          "Moderate to severe COPD patients (GOLD stage 2-4) with persistent symptoms or declining lung function despite standard medical therapy",
          "Patients with significant emphysema and reduced lung diffusion capacity",
        ],
      },
      {
        boxClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6",
        titleIcon: "heartPulse",
        iconClass: "text-blue-600",
        title: "Interstitial Lung Disease (ILD)",
        itemIconClass: "text-blue-600",
        items: [
          "Idiopathic Pulmonary Fibrosis (IPF)",
          "Connective Tissue Disease-associated ILD (CTD-ILD)",
          "Other causes of fibrotic interstitial lung disease",
        ],
      },
      {
        boxClass: "bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6",
        titleIcon: "target",
        iconClass: "text-green-600",
        title: "Other Indications",
        itemIconClass: "text-green-600",
        items: ["Bronchiectasis"],
      },
    ],
    contraindications: {
      title: "Contraindications",
      titleClass: "text-xl font-bold text-red-700 mb-4",
      boxClass: "bg-red-50 rounded-2xl p-6 border border-red-200",
      icon: "bullet",
      textClass: "text-gray-700 text-sm",
      items: [
        "Active malignant tumors",
        "Severe uncontrolled infection",
        "Severe coagulation disorders",
        "Pregnant or breastfeeding women",
        "Other conditions deemed unsuitable for bronchoscopic procedures by specialists",
      ],
    },
  },

  treatmentDetails: {
    title: "Treatment Details",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "Cell Type",
        description: "Autologous Airway Basal Stem Cells, derived from patient's own airway tissue",
      },
      {
        icon: "users",
        title: "Cell Source",
        description:
          "Obtained through bronchoscopic brushing to collect minimal healthy epithelial tissue samples from patient's own airway, followed by in vitro isolation, cloning, and expansion",
      },
      {
        icon: "syringe",
        title: "Administration Route",
        description:
          "Bronchoscopic transplantation, precisely delivering stem cell suspension to damaged lung areas",
      },
      {
        icon: "calendar",
        title: "Treatment Protocol",
        description: "Single transplantation treatment with regular 52-week follow-up",
      },
      {
        icon: "clock",
        title: "Preparation Period",
        description: "Approximately 3-5 weeks from sample collection to cell preparation completion",
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
    stepCardClass: "relative bg-white rounded-xl p-6 shadow-sm border-l-4 border-cyan-600",
    stepLayoutClass: "flex items-start gap-4",
    numberClass:
      "flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold",
    iconClass: "text-cyan-600",
    stepTitleClass: "text-lg font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    steps: [
      {
        icon: "stethoscope",
        title: "Initial Assessment & Eligibility Screening",
        description:
          "Comprehensive medical history and physical examination upon arrival, pulmonary function tests (including DLCO, FVC, FEV1), high-resolution CT (HRCT), 6-minute walk test (6MWT), COPD Assessment Test (CAT), and modified MRC dyspnea score. Respiratory specialists comprehensively assess treatment eligibility.",
      },
      {
        icon: "microscope",
        title: "Airway Tissue Sample Collection",
        description:
          "Eligible patients undergo bronchoscopic brushing to collect minimal healthy epithelial tissue samples from their own airway. This minimally invasive, high-safety procedure can be completed in outpatient or day surgery settings.",
      },
      {
        icon: "droplets",
        title: "Cell Preparation & Expansion",
        description:
          "Collected samples are sent to GMP-standard laboratories for in vitro isolation, cloning, and expansion using the R-Clone® progenitor cell expansion platform. Preparation takes approximately 3-5 weeks, with strict quality control (cell viability, sterility, potency testing) before release.",
      },
      {
        icon: "syringe",
        title: "Bronchoscopic Cell Transplantation",
        description:
          "Patients receive bronchoscopic stem cell transplantation, precisely delivering REGEND001 stem cell suspension to damaged lung areas. The procedure is performed under sedation or anesthesia with continuous vital signs monitoring.",
      },
      {
        icon: "heartPulse",
        title: "Post-operative Observation & Discharge",
        description:
          "Brief observation after transplantation completion, discharge if no abnormalities. The entire process is minimally invasive, requiring no thoracotomy, with quick recovery.",
      },
      {
        icon: "calendar",
        title: "Long-term Follow-up & Efficacy Evaluation",
        description:
          "Regular follow-ups at 4, 24, and 52 weeks post-transplantation. Follow-up includes pulmonary function rechecks (DLCO, FVC), HRCT imaging assessment, 6MWT, CAT and mMRC scores, dynamically tracking efficacy and safety.",
      },
    ],
  },

  efficacy: {
    title: "Clinical Efficacy Data",
    subtitle: "Treatment outcomes based on real-world cases",
    pyClass: "py-16",
    gradient: "from-cyan-900 to-teal-900",
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
        title: "Significant DLCO Improvement",
        stat: "+19%",
        description: "Case studies show 19% improvement in lung diffusion capacity",
      },
      {
        icon: "activity",
        title: "CAT Score Improvement",
        stat: "100%",
        description: "100% clinical stability or improvement at 24 weeks",
      },
      {
        icon: "microscope",
        title: "Alveolar Volume Increase",
        stat: "Significant",
        description: "VA significantly increased vs control at 24 and 52 weeks",
      },
      {
        icon: "users",
        title: "Real-World Validation",
        stat: "100+",
        description: "Over 100 patients successfully treated",
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
        location: "Shanghai, China",
        age: "68 years old",
        title: "Male",
        subtitle: "COPD",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
        introItalic: "Chronic cough and wheezing, severely affecting daily life and sleep quality",
        body: "At 24-week follow-up, CAT score significantly improved, cough symptoms nearly disappeared, breathing markedly improved, sleep quality greatly enhanced. Condition continued to improve through 6-month follow-up with no adverse events.",
        footerIcon: "trendingUp",
        footerLabel: "Cough symptoms nearly eliminated",
        footerClass: "text-cyan-600",
        footerBoxClass: "bg-cyan-50 rounded-lg p-3",
      },
      {
        location: "Xinjiang, China",
        age: "56 years old",
        title: "Female",
        subtitle: "COPD",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
        statBoxCols: 3,
        statBoxes: [
          { label: "Before DLCO", value: "62%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After DLCO", value: "74%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Improvement", value: "+19%", boxClass: "bg-blue-50", valueClass: "text-blue-600" },
        ],
        body: "Follow-up at 2 months post-treatment showed: lung diffusion capacity (DLCO) increased from 62% pre-treatment to 74%, a 19% improvement rate; DLCO/VA returned to normal levels.",
        footerIcon: "trendingUp",
        footerLabel: "19% DLCO improvement rate",
        footerClass: "text-cyan-600",
        footerBoxClass: "bg-cyan-50 rounded-lg p-3",
      },
      {
        location: "Malaysia",
        age: "53 years old",
        title: "Female",
        subtitle: "Interstitial Lung Disease (ILD)",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
        body: "Traditional medication had limited effect with progressive symptoms. After receiving autologous bronchial basal cell transplantation in January 2026, pulmonary function indicators significantly improved, exercise tolerance markedly increased, and quality of life fundamentally improved.",
        footerIcon: "trendingUp",
        footerLabel: "Fundamental quality of life improvement",
        footerClass: "text-cyan-600",
        footerBoxClass: "bg-cyan-50 rounded-lg p-3",
      },
    ],
  },

  cost: {
    pyClass: "py-16",
    bgClass: "bg-white",
    body: {
      variant: "price",
      wrapClass: "max-w-4xl mx-auto",
      title: "Reference Treatment Cost",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
      tableWrapClass: "bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8",
      price: "¥150,000 CNY",
      priceClass: "text-4xl font-bold text-cyan-600 mb-2",
      priceSub: "~$22,000 USD",
      priceCaption: "per treatment",
      notes: [
        {
          label: "Cost includes",
          text: "Airway tissue sample collection, cell preparation and expansion, bronchoscopic cell transplantation procedure, post-operative short-term observation, and core follow-up assessments within 52 weeks.",
          boxClass: "bg-white rounded-lg border border-cyan-200",
        },
        {
          label: "Note",
          text: "Cost does not include additional medical expenses required for personal complications. Specific costs are subject to final hospital assessment.",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
      ],
    },
  },

  cta: {
    pyClass: "py-16",
    gradient: "from-cyan-900 to-teal-900",
    containerClass: "container-custom px-4",
    wrapClass: "text-center text-white max-w-3xl mx-auto",
    buttonsClass: "flex flex-col sm:flex-row gap-4 justify-center",
    title: "Start Your Lung Function Recovery Journey",
    titleClass: "text-3xl font-bold mb-4",
    desc: "World's first autologous lung regeneration technology, repairing lung structure from the root",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "Book Consultation",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "Back to Projects",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};
