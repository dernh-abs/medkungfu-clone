import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const treatments = [
  {
    title: "Nasopharyngeal Cancer",
    description:
      "World's largest particle center for nasopharyngeal cancer heavy ion therapy",
    highlight: "5-year OS rate 93.8% for newly diagnosed patients",
  },
  {
    title: "Lung Cancer",
    description: "85% of lung cancer patients receive heavy ion therapy",
    highlight: "Stage I NSCLC 5-year OS rate 73.8%",
  },
  {
    title: "Pancreatic Cancer",
    description:
      "Pioneer in pure heavy ion therapy for locally recurrent cases",
    highlight: "3-year OS 33.1%, median survival 26.8 months",
  },
  {
    title: "Prostate Cancer",
    description:
      "Pure heavy ion therapy for localized prostate cancer",
    highlight:
      "5-year OS 97.2%, prostate-specific survival 100%",
  },
  {
    title: "Breast Cancer",
    description: "Primarily proton therapy",
    highlight: "5-year OS rate 97.3%",
  },
  {
    title: "Liver Cancer",
    description:
      "Precise tumor cell destruction with maximum liver protection",
    highlight:
      "Significant clinical advantages in unresectable liver cancer and metastases",
  },
];

export function TreatmentFeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Technical Features &amp; Advantageous Treatments
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The hospital specializes in heavy ion radiotherapy, with 75% of
            clinical patients receiving pure heavy ion or combined heavy
            ion-proton therapy
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Reveal
              key={treatment.title}
              y={20}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {treatment.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {treatment.description}
              </p>
              <p className="text-blue-600 font-medium text-sm">
                {treatment.highlight}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
