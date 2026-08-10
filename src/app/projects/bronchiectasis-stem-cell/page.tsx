import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Bronchiectasis Stem Cell Therapy | MedKungFu",
  description:
    "Airway basal stem cell therapy for bronchiectasis utilizes patients' own airway basal stem cells to repair damaged bronchial structures and break the vicious cycle of infection-inflammation-damage. Explore core advantages, the five-step treatment process, comparison with traditional treatment, and FAQs.",
};

const coreAdvantages = [
  {
    title: "World's First - Airway Basal Stem Cell Directed Repair",
    icon: Icons.globe,
    description:
      "Bronchiectasis is a chronic respiratory disease characterized by permanent bronchial dilation and recurrent infections. Traditional treatments only control symptoms without repairing damaged airway structures. Airway Basal Stem Cells (BSCs) use patients' own airway basal stem cells to directly repair damaged bronchial epithelium through their unique regenerative capability, improving the condition from its root cause.",
  },
  {
    title: "Clinically Validated - Reduced Acute Exacerbation Frequency",
    icon: Icons.trendingUp,
    description:
      "Clinical studies show that patients receiving airway basal stem cell therapy experienced significantly reduced frequency of acute exacerbations, fewer hospitalizations, and decreased antibiotic usage. Patients' lung function indicators (FEV1, FVC) stabilized or improved, with significant improvements in quality of life scores.",
  },
  {
    title: "Precision Targeting - Restored Mucociliary Clearance",
    icon: Icons.microscope,
    description:
      "The core pathological mechanism of bronchiectasis is impaired mucociliary clearance leading to mucus accumulation and recurrent infections. Airway basal stem cells can differentiate into functional ciliated cells, restoring the airway's self-cleaning ability and breaking the vicious cycle of \"infection-inflammation-damage\".",
  },
  {
    title: "Comprehensive Benefits - Multi-dimensional Improvement",
    icon: Icons.heartPulse,
    description:
      "Beyond lung function improvement, patients reported reduced cough frequency, decreased sputum production, less dyspnea, and improved exercise tolerance. Long-term follow-up showed significantly slower disease progression in the treatment group, with some patients even showing structural improvements on imaging.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Comprehensive Assessment & Screening",
    description:
      "Including high-resolution CT, pulmonary function tests, sputum culture, blood tests, etc., to confirm diagnosis and assess disease severity. Exclude active infections and other contraindications.",
  },
  {
    num: "02",
    title: "Stem Cell Collection & Preparation",
    description:
      "Obtain patient's own airway basal stem cell samples via bronchoscopy, then isolate, culture, and expand them in GMP-standard laboratories to ensure cell quality and safety.",
  },
  {
    num: "03",
    title: "Personalized Treatment Plan",
    description:
      "Develop personalized cell dosage, administration route, and treatment cycle based on patient's age, disease severity, comorbidities, and other factors.",
  },
  {
    num: "04",
    title: "Stem Cell Transplantation",
    description:
      "Deliver prepared airway basal stem cells to diseased areas via nebulization inhalation or bronchoscopy-guided precise delivery, achieving high local concentration treatment.",
  },
  {
    num: "05",
    title: "Post-treatment Monitoring & Rehabilitation",
    description:
      "Regular follow-up to assess efficacy, including pulmonary function re-examination, imaging studies, quality of life assessment, etc. Combined with respiratory rehabilitation training to maximize treatment effects.",
  },
];

const comparisonRows: { aspect: string; traditional: string; stemCell: string }[] = [
  {
    aspect: "Treatment Principle",
    traditional: "Control symptoms, cannot repair structure",
    stemCell: "Regenerative repair, fundamental improvement",
  },
  {
    aspect: "Acute Exacerbation Frequency",
    traditional: "Frequent episodes, difficult to control",
    stemCell: "Significantly reduced, trending stable",
  },
  {
    aspect: "Lung Function Change",
    traditional: "Continuous decline",
    stemCell: "Stabilized or improved",
  },
  {
    aspect: "Quality of Life",
    traditional: "Gradually deteriorating",
    stemCell: "Significantly improved",
  },
  {
    aspect: "Long-term Prognosis",
    traditional: "Disease continues to progress",
    stemCell: "Slowed progression, partial reversal",
  },
];

const faqs = [
  {
    q: "What is Bronchiectasis?",
    a: "Bronchiectasis is a chronic respiratory disease characterized by permanent abnormal dilation of bronchi, leading to impaired mucus clearance, recurrent respiratory infections, and chronic inflammation. Common symptoms include chronic cough, excessive sputum production, recurrent lung infections, and dyspnea.",
  },
  {
    q: "How does Airway Basal Stem Cell therapy differ from traditional treatment?",
    a: "Traditional treatments mainly target symptom control (such as antibiotics, expectorants, bronchodilators) and cannot repair damaged airway structures. Airway basal stem cell therapy utilizes the patient's own stem cell regenerative capacity to directly repair damaged bronchial epithelium and ciliary structures, fundamentally improving the condition and breaking the vicious cycle of disease progression.",
  },
  {
    q: "Is the treatment process safe?",
    a: "Yes. The treatment uses the patient's own cells, avoiding immune rejection reactions. All procedures are conducted under strict quality control, meeting GMP standards. Clinical trial and real-world application data show that this treatment method has good safety and tolerability, with mild and controllable adverse reactions.",
  },
  {
    q: "How long until results are visible after treatment?",
    a: "Most patients begin to feel significant improvements within 3-6 months after treatment, including reduced cough, decreased sputum, and less dyspnea. Objective lung function indicators (such as FEV1, DLCO) typically reach optimal improvement at 6-12 months. Long-term follow-up shows that benefits can last for several years.",
  },
  {
    q: "Which patients are suitable for this treatment?",
    a: "Suitable for patients with mild to moderate bronchiectasis, especially those who experience frequent acute exacerbations despite standard treatment and have affected quality of life. Requires comprehensive assessment to exclude contraindications such as active infection and severe cardiopulmonary insufficiency. Specific indications should be determined by professional physicians.",
  },
];

export default function BronchiectasisStemCellPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Bronchiectasis Stem Cell Therapy"
          className="min-h-screen bg-[#F5F7FA]"
        >
          {/* HERO */}
          <section className="relative bg-gradient-to-br from-[#1B4D3E] to-[#2E7D5A] text-white py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Icons.wind className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Regenerative Medicine Breakthrough
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Airway Basal Stem Cell Therapy for Bronchiectasis
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Utilizing patients&apos; own airway basal stem cells to
                  fundamentally repair damaged bronchial structures, breaking
                  the vicious cycle of &quot;infection-inflammation-damage,&quot;
                  bringing new therapeutic hope to bronchiectasis patients.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-[#1B4D3E] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Consult Expert
                  </Link>
                  <a
                    href="#advantages"
                    className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CORE ADVANTAGES */}
          <section id="advantages" className="py-20 bg-white">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                  Core Advantages
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Why choose airway basal stem cell therapy for bronchiectasis
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreAdvantages.map((adv, i) => {
                  // First two cards were already revealed in the capture
                  // (opacity 1); the last two slide up (translateY 20).
                  const card = (
                    <div className="p-8 bg-[#F5F7FA] rounded-2xl hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-xl flex items-center justify-center mb-6">
                        <adv.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        {adv.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  );
                  return i < 2 ? (
                    <div key={adv.title} className="contents">
                      {card}
                    </div>
                  ) : (
                    <Reveal key={adv.title} y={20}>
                      {card}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TREATMENT PROCESS */}
          <section className="py-20 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Treatment Process
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Standardized, personalized five-step treatment protocol
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((step, i) => (
                  <Reveal key={step.num} y={20} className="relative">
                    <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-4">
                        {step.num}
                      </div>
                      <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <Icons.arrowRight className="h-6 w-6 text-[#1B4D3E]/30" />
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* TREATMENT COMPARISON */}
          <section className="py-20 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Treatment Comparison
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Traditional Treatment vs Airway Basal Stem Cell Therapy
                  </p>
                </div>
              </Reveal>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-sm">
                  <thead>
                    <tr className="bg-[#1B4D3E] text-white">
                      <th className="px-6 py-4 text-left">Aspect</th>
                      <th className="px-6 py-4 text-left">
                        Traditional Treatment
                      </th>
                      <th className="px-6 py-4 text-left">Stem Cell Therapy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.aspect} className={i % 2 === 0 ? "bg-[#F5F7FA]" : "bg-white"}>
                        <td className="px-6 py-4 font-semibold text-[#1A1A2E]">
                          {row.aspect}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {row.traditional}
                        </td>
                        <td className="px-6 py-4 text-[#1B4D3E] font-medium">
                          {row.stemCell}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    FAQ
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Common questions about airway basal stem cell therapy
                  </p>
                </div>
              </Reveal>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq) => (
                  <Reveal key={faq.q} y={20}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-[#1A1A2E] mb-3 flex items-start gap-3">
                        <span className="text-[#1B4D3E]">Q:</span>
                        {faq.q}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-8">
                        <span className="text-[#1B4D3E] font-semibold">A:</span>{" "}
                        {faq.a}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white">
            <div className="container-custom text-center">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Your Recovery Journey
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Our expert team will create a personalized treatment plan to
                  help you regain healthy breathing
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-[#1B4D3E] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Consult Now
                  </Link>
                  <Link
                    href="/projects"
                    className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    View More Projects
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
