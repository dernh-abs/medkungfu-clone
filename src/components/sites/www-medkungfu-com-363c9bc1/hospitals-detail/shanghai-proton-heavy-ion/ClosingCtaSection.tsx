import Link from "next/link";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";

export function ClosingCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal y={20}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excellence in Particle Radiotherapy · Focused on Oncology Care
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Location: Zhangjiang Science City, Pudong New Area, Shanghai
          </p>
          <Link
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            href="/contact"
          >
            Book Consultation Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
