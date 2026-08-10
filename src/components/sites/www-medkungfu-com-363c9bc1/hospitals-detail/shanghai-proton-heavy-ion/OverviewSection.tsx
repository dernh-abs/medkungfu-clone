import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

const stats = [
  { value: "10 hectares", label: "Area" },
  { value: "220 beds", label: "Beds" },
  { value: "50+ types", label: "Treatable Diseases" },
  { value: "9,317 cases", label: "Total Patients" },
  { value: "1,000+/year", label: "Annual Cases" },
];

export function OverviewSection() {
  return (
    <section id="intro" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Hospital Overview
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Shanghai Proton Heavy Ion Hospital (Fudan University Affiliated) is
            located in Zhangjiang Science City, Pudong New Area. It is
            China&apos;s first specialized oncology institution offering both
            proton and heavy ion advanced radiotherapy technologies.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {stats.map((stat) => (
            <Reveal
              key={stat.label}
              y={20}
              className="bg-blue-50 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal y={20} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <p className="text-gray-700 leading-relaxed">
            The hospital covers 10 hectares with 220 approved beds. Since
            official operation began in May 2015, leveraging precise proton and
            heavy ion radiotherapy technology, treatable diseases have expanded
            to over 50 types, covering the vast majority of common malignant
            tumors in China.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
