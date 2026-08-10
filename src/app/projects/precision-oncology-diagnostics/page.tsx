import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

export const metadata: Metadata = {
  title: "Precision Oncology Diagnostics - Tumor Molecular Diagnosis & Genetic Risk Assessment",
  description:
    "Precision Oncology Diagnostics by MedKungFu: tumor molecular diagnosis, genetic risk assessment, precision typing and medication guidance through the MICM-P integrated diagnostic model at a CAP + ISO15189 dual-certified partner diagnostic center.",
};

export default function PrecisionOncologyDiagnosticsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Precision Oncology Diagnostics - Tumor Molecular Diagnosis &amp; Genetic Risk Assessment"
          className="min-h-screen bg-white"
        >
          {/* HERO */}
          <section className="relative bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1B4D3E] rounded-full blur-3xl"></div>
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                  MedKungfu HEALTHCARE · CONCIERGE
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Precision Oncology Diagnostics
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Tumor Molecular Diagnosis · Genetic Risk Assessment · Precision Typing &amp; Medication
                  Guidance
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    MICM-P Integrated Diagnosis
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    CAP + ISO15189 Dual Certification
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    1500+ Testing Items
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">7</div>
                    <div className="text-xs md:text-sm text-gray-300">Operating Hospitals</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">1500+</div>
                    <div className="text-xs md:text-sm text-gray-300">Testing Items</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">~20 Types</div>
                    <div className="text-xs md:text-sm text-gray-300">Covered Disease Types</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">CAP+ISO</div>
                    <div className="text-xs md:text-sm text-gray-300">
                      International Dual Certification
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20} className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6 text-center">
                  About Gaobo Diagnostic Center
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our partner diagnostic center is China&apos;s leading clinically-oriented
                    precision oncology diagnostics institution, adopting the international standard
                    MICM-P integrated diagnosis model (Morphology, Immunology, Cytogenetics,
                    Molecular Biology, Pathology), focusing on precision diagnosis, treatment
                    evaluation and translational research for hematologic malignancies and complex
                    solid tumors.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The diagnostic center covers three major regions: Beijing, Shanghai, and
                    Guangdong, with multiple reference laboratories and central laboratories,
                    totaling over 7,000 square meters. The core team has over 30 years of testing
                    and diagnostic research experience, conducting approximately 30 R&amp;D projects
                    annually, with more than ten utility model patents.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For overseas patients unable to visit in person, the diagnostic center supports
                    remote services: pathology consultation and genetic testing applications can be
                    submitted by mailing paraffin-embedded samples or pathology slides.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* IMPORTANT NOTICE */}
          <section className="py-8 bg-yellow-50">
            <div className="container-custom">
              <Reveal
                y={20}
                className="max-w-4xl mx-auto bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-xl"
              >
                <div className="flex items-start">
                  <Icons.alertCircle className="text-yellow-600 mr-4 flex-shrink-0 mt-1 h-6 w-6" />
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-2">Important Notice</h3>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      This diagnostic service is for tumor risk assessment and precision diagnosis,
                      not replacing clinical diagnosis. All test results must be combined with
                      pathology, imaging and comprehensive clinical doctor evaluation to serve as
                      diagnostic basis. Negative results do not mean no risk.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* PACKAGES */}
          <section id="packages" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
                  Four Precision Diagnostic Packages
                </h2>
              </Reveal>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Based on patient visit pathways and existing specimen conditions, the diagnostic
                center provides customized precision diagnostic plans. The following four packages
                correspond to different stages of diagnostic needs and can be selected individually
                or used in combination.
              </p>
              <div className="space-y-8">
                {/* Package 01 */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        01
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                        Precision Tumor Diagnosis Package
                      </h3>
                      <p className="text-gray-600 mb-4 italic">
                        Cases with imaging abnormalities, pathological suspicions, recurrence or
                        difficult typing
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Pathology consultation: HE staining + immunohistochemistry (qualitative
                            pathology review)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            600+ gene NGS testing: tumor molecular typing, prognosis assessment
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Integrated diagnostic report: combining molecular diagnosis results with
                            pathological conclusions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Treatment direction reference suggestions: providing recommendations
                            based on typing results
                          </span>
                        </li>
                      </ul>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                        <p className="text-sm text-yellow-800">
                          <span className="font-bold">⚠️ </span>
                          Test results do not replace pathological diagnosis; final diagnosis
                          requires combination of imaging and clinical doctor&apos;s recommendations
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Reference Duration: Pathology consultation 5-7 working days; NGS genetic
                        testing 10-15 working days
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Package 02 */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        02
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                        Tumor Genetic Risk Assessment Package
                      </h3>
                      <p className="text-gray-600 mb-4 italic">
                        Individuals or family members with family history, early-onset tumor
                        history, or previous tumor history
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Tumor genetic susceptibility gene testing (900+ gene panel)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Covers genetic susceptibility genes related to hematologic tumors and
                            solid tumors (NCCN/CSCO recommended)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Genetic risk assessment report and follow-up recommendation plan
                          </span>
                        </li>
                      </ul>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                        <p className="text-sm text-yellow-800">
                          <span className="font-bold">⚠️ </span>
                          This package is for genetic risk assessment; negative results do not mean
                          no risk; further evaluation by clinical doctors is required
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Reference Duration: 18-23 working days
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Package 03 */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        03
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                        Difficult Tumor Second Opinion Package
                      </h3>
                      <p className="text-gray-600 mb-4 italic">
                        Patients with unclear diagnoses from other hospitals who wish to obtain a
                        second opinion
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Review of original pathological materials (slides, paraffin embedding,
                            pathology reports)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Pathology slide re-review (HE + immunohistochemistry, supplementary
                            items if original testing is insufficient)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Molecular testing completion (supplement NGS, FISH, etc. if original
                            testing is incomplete)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Multidisciplinary expert opinion (integrating all test results, providing
                            clinical recommendations)
                          </span>
                        </li>
                      </ul>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                        <p className="text-sm text-yellow-800">
                          <span className="font-bold">⚠️ </span>
                          The opinion letter is for reference only and does not replace the formal
                          pathological diagnosis report; final diagnosis still requires clinical
                          doctor confirmation
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Reference Duration: Issued in stages based on material completeness; please
                        confirm specific timeline with staff
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Package 04 */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        04
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                        Pre-treatment Molecular Typing Package
                      </h3>
                      <p className="text-gray-600 mb-4 italic">
                        Patients with confirmed tumors preparing to select medications or develop
                        treatment plans
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            800+ gene NGS (ctDNA blood or tissue): full tumor target and typing
                            analysis
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            MSI/TMB testing: potential benefit assessment for immunotherapy
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            PD-L1 protein expression: reference for immune checkpoint antibody
                            medication
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Drug targets, drug resistance, PARP inhibitor-related gene analysis
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            Organoid chip drug sensitivity testing (optional): personalized
                            medication reference
                          </span>
                        </li>
                      </ul>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                        <p className="text-sm text-yellow-800">
                          <span className="font-bold">⚠️ </span>
                          Test results provide molecular reference basis for treatment decisions;
                          final medication plan requires confirmation by attending physician
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Reference Duration: NGS 10-20 working days; PD-L1 8 working days; organoid
                        chip 15-20 working days
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
                  Reference Prices for Major Testing Items
                </h2>
              </Reveal>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                The following are reference prices for major individual testing items (USD). Actual
                costs vary depending on sample type and combination plans. FFPE paraffin block
                samples incur an additional basic processing fee of $310 + $20 per block. Please
                contact us for package pricing.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-2 bg-[#1B4D3E] text-white">
                    <div className="p-6 font-bold">Testing Item</div>
                    <div className="p-6 font-bold text-center">Reference Price (USD)</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Pathology Consultation (Standard)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$1,800</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Pathology Consultation (Expert Level)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$2,300</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Pan-Cancer 600+ Gene Panel (Tissue)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$2,500</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Pan-Cancer 800+ Gene Panel (Tissue)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$3,900</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Pan-Cancer 800+ Gene Panel (ctDNA Blood)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$4,300</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      321 Gene Panel (Tissue)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$2,700</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      321 Gene Panel (ctDNA Blood)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$3,100</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      PD-L1 Protein Expression Testing
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$1,000</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Tumor Fusion/Rearrangement RNA Testing
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$2,500</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Whole Exome Sequencing (WES, Tissue)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$6,000</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Hematologic Tumor Deep Sequencing (339 Genes)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$1,900</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Tumor Transcriptome Sequencing (RNA-seq)
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$1,700</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      Organoid Chip Drug Sensitivity Testing
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">$6,400</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 text-center">
                  * The above prices are in USD for reference only; final quotes are subject to
                  laboratory confirmation. MedKungfu can assist with quote arrangement and payment
                  processes.
                </p>
              </div>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section id="capabilities" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
                  Technical Capabilities &amp; Qualifications
                </h2>
              </Reveal>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                MICM-P integrated diagnosis is the core methodology of this partner diagnostic
                center: Morphology (M) + Immunology (I) + Cytogenetics (C) + Molecular Biology (M)
                + Pathology (P) collaborative diagnosis across dimensions, rather than single
                testing indicators. This model can effectively reduce the risk of misdiagnosis and
                missed diagnosis, and provide more accurate diagnostic directions for patients with
                complex or rare conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal x={-30} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.award className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">01</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        CAP + ISO15189 International Dual Certification
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Dual certification by the College of American Pathologists (CAP) and
                        International Organization for Standardization (ISO15189), one of the
                        highest standards for laboratory quality worldwide. Each testing item
                        undergoes strict internal validation and multidisciplinary practice to
                        ensure result reliability.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal x={30} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.testTube className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">02</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        1500+ Testing Items Covering Hematologic &amp; Solid Tumors
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Covers hematologic tumors (lymphoma, multiple myeloma, leukemia, etc.) and
                        nearly 20 types of solid tumors, from pathology consultation to whole exome
                        sequencing, available as individual items or packages.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal x={-30} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.globe className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">03</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Remote Specimen Mailing Service Supported
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        For overseas patients unable to visit in person, MedKungfu can coordinate
                        mailing of paraffin-embedded samples or pathology slides for testing; no
                        need to travel to Beijing in person.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal x={30} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.microscope className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">04</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Organoid Chip Platform (Optional Enhancement)
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        The organoid chip platform can perform personalized drug sensitivity testing
                        on tumor tissues, simulating the actual efficacy of various treatment plans,
                        providing more personalized references for treatment decisions.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* SUITABLE */}
          <section id="suitable" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Typical Scenarios Suitable for Consultation
                </h2>
              </Reveal>
              <div className="max-w-4xl mx-auto">
                <ul className="space-y-4">
                  <Reveal x={-20} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Imaging shows mass or nodule, nature not yet clear, needs further typing
                    </span>
                  </Reveal>
                  <Reveal x={-20} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      External hospital pathology report indicates high-grade or complex subtype,
                      seeking professional review opinion
                    </span>
                  </Reveal>
                  <Reveal x={-20} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Confirmed malignant tumor, wishing to understand targets and
                      immunotherapy-related biomarkers
                    </span>
                  </Reveal>
                  <Reveal x={-20} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Recurrence or drug resistance after first-line treatment, need to re-evaluate
                      molecular typing to adjust plan
                    </span>
                  </Reveal>
                  <Reveal x={-20} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Family history of tumors, wishing to understand personal genetic susceptibility
                      risk and develop follow-up plan
                    </span>
                  </Reveal>
                  <Reveal x={-20} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Unclear diagnosis at other institutions, seeking independent second opinion
                      from professional precision diagnostics center
                    </span>
                  </Reveal>
                </ul>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
                  Service Process · International Patient Exclusive Channel
                </h2>
              </Reveal>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                MedKungfu provides comprehensive coordination services for each patient from
                material organization to report interpretation.
              </p>
              <div className="space-y-6">
                <Reveal y={20} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Data Organization &amp; Preliminary Assessment
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Submit medical records, pathology reports and imaging data; MedKungfu
                        assists in organizing and transferring to diagnostic center for preliminary
                        assessment to confirm suitable package combination.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        3-5 working days
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Expert Confirmation of Plan
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Diagnostic center experts conduct remote consultation to confirm specific
                        testing item combinations and specimen requirements, providing patients with
                        required materials list.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        5-7 working days
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Specimen Mailing (Paraffin Embedding / Slides)
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        For overseas patients unable to visit in person, international mailing of
                        paraffin-embedded samples or pathology slides is available; MedKungfu
                        assists in confirming mailing requirements and全程 tracking.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Depends on logistics
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Laboratory Testing &amp; Report
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Diagnostic center laboratory receives specimens and conducts testing,
                        issuing molecular diagnostic reports within the cycle. If additional
                        specimens are needed or quality is substandard, notification will be provided
                        immediately.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Depends on testing items
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Report Interpretation &amp; Follow-up
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Specialists provide clinical recommendations based on diagnostic results;
                        MedKungfu assists with translation and summary, and coordinates follow-up
                        plans.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        After report issuance
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* WHY US */}
          <section id="why-us" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Why Choose MedKungfu?
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal scale={0.95} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.fileText className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Medical Record Organization &amp; Translation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bilingual professional coordinators assist in organizing medical record
                    materials, ensuring barrier-free communication between patients and diagnostic
                    teams.
                  </p>
                </Reveal>
                <Reveal scale={0.95} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Specimen Mailing Coordination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Assists in confirming international mailing requirements and quality control
                    standards, coordinating with local hospitals for slide/paraffin embedding
                    discharge procedures.
                  </p>
                </Reveal>
                <Reveal scale={0.95} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.checkCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Report Chinese Interpretation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Diagnostic reports are primarily issued in Chinese; MedKungfu can arrange
                    specialist-level interpretation of reports to ensure patients fully understand
                    the results.
                  </p>
                </Reveal>
                <Reveal scale={0.95} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.arrowRight className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Subsequent Treatment Referral
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If patients wish to pursue further treatment (CAR-T therapy, neurosurgery, bone
                    marrow transplantation, etc.), internal green channel referrals can be arranged.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white">
            <div className="container-custom">
              <Reveal y={30} className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contact Us · Reply Within One Hour
                </h2>
                <p className="text-xl mb-4 text-gray-200">
                  Begin Your Precision Oncology Diagnostics Journey
                </p>
                <p className="text-gray-300 mb-8">
                  Contact us for a free preliminary assessment. Submit your medical records and
                  imaging data, and we will arrange for specialists to conduct remote pre-screening.
                </p>
                <a
                  href="mailto:contact@medkungfu.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#1B4D3E] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  contact@medkungfu.com
                  <Icons.arrowRight className="ml-2 h-5 w-5" />
                </a>
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-400">MK · EST. 2026</p>
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
