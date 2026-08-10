// Data for /projects/pulmonary-fibrosis-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/pulmonary-fibrosis-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const pulmonaryFibrosis: StemCellPageData = {
  ariaLabel: "Pulmonary Fibrosis Stem Cell Therapy - Slow Disease Progression",

  hero: {
    eyebrow: "Regenerative Medicine · Stem Cell Therapy",
    title: "Stem Cell Therapy for Pulmonary Fibrosis",
    description:
      "Leveraging the multi-target regulatory capabilities of Mesenchymal Stem Cells (MSCs) to intervene in the pathological process of pulmonary fibrosis at multiple levels, delaying or even reversing lung function decline",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    primaryCta: { label: "Explore Core Advantages", href: "#advantages" },
    secondaryCta: { label: "Consult Now", href: "/contact" },
    primaryCtaClass:
      "px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
    secondaryCtaClass:
      "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors",
  },

  productIntro: {
    title: "Product Overview",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6",
    paragraphClass: "text-gray-700 leading-relaxed mb-6",
    pyClass: "py-20",
    centerWrapper: true,
    paragraphs: [
      {
        text: "Pulmonary Fibrosis is a severe respiratory disease characterized by progressive scarring of lung tissue, where normal alveolar structures are replaced by proliferating fibrous tissue, leading to stiffened lungs and respiratory failure.",
      },
      {
        text: "For this condition, lung transplantation is currently the only potentially curative option, but its clinical application is limited by donor scarcity, post-operative infection risks, and prohibitive costs.",
      },
      {
        text: "Mesenchymal Stem Cells (MSCs) intervene in the pathological process of pulmonary fibrosis at multiple levels by modulating immune responses to suppress excessive inflammation, inhibiting abnormal fibroblast activation, and secreting anti-fibrotic factors to promote alveolar epithelial repair.",
        callout: true,
        calloutClass: "bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600",
      },
    ],
  },

  advantages: {
    id: "advantages",
    title: "Core Advantages",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Why choose Mesenchymal Stem Cell therapy for Pulmonary Fibrosis",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    cardClass:
      "bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
    cardLayout: "stacked",
    iconTileClass:
      "w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6",
    titleClass: "text-xl font-bold text-[#1A1A2E] mb-3",
    descClass: "text-gray-600 leading-relaxed",
    revealOffset: 30,
    items: [
      {
        icon: "activity",
        title: "Multi-Target Regulation",
        description:
          "MSCs are not single-target inhibitors. Through paracrine effects, they simultaneously exert anti-inflammatory, anti-fibrotic, immunomodulatory and tissue repair functions, fundamentally regulating the fibrotic microenvironment.",
      },
      {
        icon: "trendingUp",
        title: "Reverse Lung Function Decline",
        description:
          "Clinical studies show that patients in the MSC treatment group experienced a 7.8% increase in Forced Vital Capacity (FVC) compared to baseline over a 12-month follow-up period.",
      },
      {
        icon: "shield",
        title: "Excellent Safety Profile",
        description:
          "Multi-country clinical trials confirm no serious treatment-related adverse events with IV infusion of MSCs. Blood counts, liver/kidney function, and inflammatory markers remain normal with no severe allergic or rejection reactions.",
      },
      {
        icon: "users",
        title: "No Immune Rejection Risk",
        description:
          "MSCs derived from umbilical cord and menstrual blood have extremely low immunogenicity, enabling allogeneic transplantation without matching, avoiding the trauma and limitations of autologous stem cell extraction.",
      },
      {
        icon: "droplets",
        title: "Minimally Invasive & Quick Recovery",
        description:
          "Treatment is primarily administered via IV infusion or nebulized inhalation. Compared to major surgeries like lung transplantation, it is minimally invasive with no hospitalization burden, allowing outpatient treatment.",
      },
    ],
  },

  indications: {
    title: "Indications",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-12",
    subtitle: "This product is suitable for patients with the following respiratory conditions",
    subtitleClass: "text-gray-600",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: false,
    simpleList: {
      listClass: "space-y-4",
      itemClass: "flex items-start gap-4 bg-purple-50 rounded-xl p-6",
      iconClass: "text-purple-600 flex-shrink-0 mt-1",
      textClass: "text-gray-800 leading-relaxed",
      items: [
        "Idiopathic Pulmonary Fibrosis (IPF), especially patients who continue to progress despite anti-fibrotic medication",
        "Various secondary pulmonary fibrosis, including connective tissue disease-associated interstitial lung disease and drug-induced pulmonary fibrosis",
        "Post-COVID-19 pulmonary fibrosis changes",
        "Other eligible interstitial lung diseases, particularly patients with significant lung function decline (FVC ≥ 40%, DLCO ≥ 20%)",
      ],
    },
  },

  treatmentDetails: {
    title: "Treatment Details",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",
    cardClass: "bg-white rounded-2xl p-8 shadow-sm",
    cardLayout: "header-block",
    iconTileClass:
      "w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center",
    titleClass: "text-xl font-bold text-[#1A1A2E]",
    descClass: "text-gray-600 leading-relaxed",
    items: [
      {
        icon: "droplets",
        title: "Cell Type",
        description:
          "Umbilical Cord MSCs (UC-MSCs) or Menstrual Blood MSCs (MenSCs) injection. MenSCs offer stable tissue source, fewer ethical concerns, and rich secretome profiles.",
      },
      {
        icon: "syringe",
        title: "Cell Dosage",
        description: "Total dosage per course is approximately 9 × 10⁷ cells, administered in 3 IV infusions.",
      },
      {
        icon: "activity",
        title: "Administration Route",
        description:
          "IV infusion is the mainstream route, where cells actively migrate to lung inflammation and injury sites through \"homing\" effect. Some techniques also use nebulized exosome administration for cell-free therapy.",
      },
      {
        icon: "calendar",
        title: "Treatment Schedule",
        description:
          "A complete course includes multiple administrations (typically 3 infusions), spaced weeks to months apart, individually adjusted based on patient condition.",
      },
    ],
  },

  treatmentProcess: {
    title: "Treatment Process",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Standardized six-step treatment process ensuring safety and efficacy",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-16",
    wrapClass: "max-w-5xl mx-auto",
    stepCardClass: "bg-[#F5F7FA] rounded-2xl p-6 hover:shadow-md transition-shadow",
    stepLayoutClass: "flex gap-6",
    numberWrap: true,
    numberClass:
      "w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold",
    iconClass: "text-purple-600",
    stepTitleClass: "text-xl font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 leading-relaxed",
    revealOffset: 30,
    steps: [
      {
        icon: "stethoscope",
        title: "Initial Assessment",
        description:
          "Comprehensive assessment through medical history, pulmonary function tests (including FVC and DLCO), 6-minute walk test (6MWT), and high-resolution CT scans.",
      },
      {
        icon: "fileText",
        title: "Laboratory Screening",
        description:
          "Blood counts, liver/kidney function, coagulation profile, viral screening, and immunological tests to ensure patient eligibility.",
      },
      {
        icon: "droplets",
        title: "Cell Preparation",
        description:
          "Preparation of quality-standard MSC injections in GMP-certified laboratories with rigorous quality control testing.",
      },
      {
        icon: "syringe",
        title: "IV Infusion",
        description:
          "Patients receive stem cell IV infusion on an outpatient basis, with each infusion lasting approximately 30-60 minutes. Vital signs are monitored throughout.",
      },
      {
        icon: "heartPulse",
        title: "Efficacy Evaluation & Follow-up",
        description:
          "Regular post-treatment reviews of pulmonary function, 6-minute walk distance, quality of life, and imaging indicators to dynamically track efficacy and safety.",
      },
      {
        icon: "calendar",
        title: "Consolidation Treatment",
        description:
          "Based on disease progression and initial treatment response, physicians will evaluate whether additional treatment cycles are needed.",
      },
    ],
  },

  efficacy: {
    title: "Clinical Efficacy",
    subtitle: "Supported by data from multiple international clinical studies",
    pyClass: "py-20",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    headingWrapClass: "text-center mb-16",
    headingClass: "text-3xl md:text-4xl font-bold mb-4",
    subtitleClass: "text-purple-200",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    cardClass: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center",
    iconTileClass:
      "w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",
    statClass: "text-3xl font-bold text-yellow-300 mb-2",
    itemTitleClass: "text-lg font-semibold mb-2",
    descClass: "text-sm text-purple-200",
    statFirst: true,
    items: [
      {
        icon: "trendingUp",
        stat: "+7.8%",
        title: "Lung Function Reversal",
        description: "12-month FVC increase vs baseline in MSC treatment group",
      },
      {
        icon: "activity",
        stat: "Significant",
        title: "Exercise Capacity Improvement",
        description: "6MWD showed significant improvement at 13 weeks, sustained at 26 and 39 weeks",
      },
      {
        icon: "heartPulse",
        stat: "Most Patients",
        title: "Symptom Relief",
        description: "Reduced dyspnea and cough, improved exercise capacity and quality of life",
      },
      {
        icon: "shield",
        stat: "60 Weeks",
        title: "Long-term Safety",
        description:
          "US AETHER study: No serious treatment-related adverse events observed after 60-week follow-up",
      },
    ],
  },

  caseStudies: {
    title: "Case Studies",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Real patient treatment outcomes",
    pyClass: "py-20",
    bgClass: "bg-white",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    cardClass:
      "bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",
    revealOffset: 30,
    cases: [
      {
        location: "Texas, USA",
        locationMeta: "68yo Male",
        title: "IPF",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "Pre-treatment FVC", value: "52%", valueClass: "font-semibold text-red-600" },
          { label: "Post-treatment FVC", value: "61%", valueClass: "font-semibold text-green-600" },
          { label: "Pre-treatment Oxygen", value: ">16 hours/day" },
          {
            label: "Post-treatment Oxygen",
            value: "Reduced to 6 hours",
            valueClass: "font-semibold text-green-600",
          },
        ],
        callout:
          "Significantly improved self-care ability, can now walk 30 minutes weekly without rest",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "Significant reduction in oxygen dependency",
        footerClass: "text-purple-600",
      },
      {
        location: "United Kingdom",
        locationMeta: "72yo Retired Engineer",
        title: "IPF + COPD",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "Pre-treatment 6MWT", value: "280m" },
          { label: "Post-treatment 6MWT", value: "350m", valueClass: "font-semibold text-green-600" },
          { label: "SGRQ", value: "-34%", valueClass: "font-semibold text-green-600" },
        ],
        callout:
          "Successfully reduced home oxygen therapy, resumed gardening hobby, significantly improved quality of life",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "25% improvement in 6MWD",
        footerClass: "text-purple-600",
      },
      {
        location: "Australia",
        locationMeta: "55yo Female",
        title: "Post-COVID PF",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "Pre-treatment Oxygen", value: "24-hour oxygen" },
          {
            label: "Post-treatment Oxygen",
            value: "Successfully weaned off oxygen",
            valueClass: "font-semibold text-green-600",
          },
          { label: "Walking Distance", value: "400m+", valueClass: "font-semibold text-green-600" },
        ],
        callout:
          "Can independently walk over 400 meters, demonstrating promising results for virus-induced secondary pulmonary fibrosis",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "Complete independence from oxygen devices",
        footerClass: "text-purple-600",
      },
    ],
  },

  cost: {
    pyClass: "py-20",
    bgClass: "bg-[#F5F7FA]",
    body: {
      variant: "card",
      wrapClass: "max-w-3xl mx-auto",
      cardClass: "bg-white rounded-2xl p-10 shadow-lg text-center",
      icon: "dollarSign",
      iconClass: "mx-auto text-purple-600 mb-6",
      title: "Reference Treatment Cost",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
      price: "~$20,000 USD",
      priceClass: "text-5xl font-bold text-purple-600 mb-4",
      subtitle: "Pulmonary Fibrosis MSC Treatment Fee",
      note: "*Final cost subject to hospital assessment",
      cta: { label: "Get Detailed Quote", href: "/contact" },
      btnClass:
        "inline-flex items-center gap-2 mt-8 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg",
    },
  },

  cta: {
    pyClass: "py-20",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    sectionClass: "text-white",
    containerClass: "container-custom px-4 text-center",
    wrapClass: "",
    buttonsClass: "flex flex-col sm:flex-row items-center justify-center gap-4",
    title: "Start Your Recovery Journey",
    titleClass: "text-3xl md:text-4xl font-bold mb-6",
    desc: "Our medical team will provide you with a personalized treatment plan to help you regain healthy breathing",
    descClass: "text-lg text-purple-200 mb-8 max-w-2xl mx-auto",
    primary: {
      label: "Book Consultation Now",
      href: "/contact",
      class: "px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
    },
    secondary: {
      label: "Back to Projects",
      href: "/projects",
      class: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors",
    },
  },
};
