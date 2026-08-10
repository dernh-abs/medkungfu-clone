const stats = [
  { value: "10万㎡", label: "Total Building Area" },
  { value: "500", label: "Planned Beds" },
  { value: "179", label: "Clinical Trials Launched" },
  { value: "10+", label: "Countries Served" },
];

const badges = [
  "Small Clinic, Big Research",
  "CAP + ISO Certified",
  "Serving Patients from 10+ Countries",
];

export function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-32 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured asset */}
      <img
        src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-beijing-gaobo.jpg"
        alt="Beijing Gaobo Hospital exterior"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E]/90 via-[#2D2D44]/75 to-[#1B4D3E]/85"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            MedKungfu HEALTHCARE · CONCIERGE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Beijing Gaobo Hospital
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Beijing&apos;s First International Research Hospital
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
