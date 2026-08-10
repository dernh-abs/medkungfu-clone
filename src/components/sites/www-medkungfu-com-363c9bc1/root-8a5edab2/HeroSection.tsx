// Hero section (below fixed nav) matching MedKungFu's homepage.
// Big green-tinted hero: trust badge, headline, copy, stat bullets, dual CTAs,
// and a floating doctor image card with partner-hospital figcaption.
import Link from "next/link";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const STATS = [
  ["Trusted by expats across China"],
  ["100+ Foreigner-friendly Hospitals"],
  ["6+ Major Cities Covered"],
] as const;

export function HeroSection() {
  return (
    <header
      role="banner"
      aria-label="Hero Section"
      className="relative min-h-[700px] md:min-h-[800px] flex items-center overflow-hidden bg-[#F5F7FA]"
    >
      {/* decorations */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8F5E9]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-custom relative z-10 px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="text-left">
            <Reveal y={20}>
              <div className="inline-flex items-center gap-2 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Icons.checkCircle className="h-4 w-4" />
                <span>TRUSTED BY EXPATS ACROSS CHINA</span>
              </div>
            </Reveal>
            <Reveal y={20}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E] mb-6 font-montserrat">
                Your Personal
                <span className="text-[#1B4D3E]"> Healthcare Guide</span>
                <br />in China
              </h1>
            </Reveal>
            <Reveal y={20}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                We care about your health as much as you do. Connecting global
                patients with China&apos;s top medical resources through
                personalized, concierge-level service.
              </p>
            </Reveal>
            <Reveal y={20}>
              <ul className="flex flex-wrap gap-4 mb-10 list-none">
                {STATS.map((s) => (
                  <li
                    key={s[0]}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-[#7CB342] rounded-full" />
                    <span>{s[0]}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal y={20}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-md hover:bg-[#143D30] transition-all duration-300"
                >
                  Explore Medical Projects
                  <Icons.arrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4D3E] border-2 border-[#1B4D3E] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#1B4D3E]/5 transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <Reveal y={20} className="hidden lg:block">
            <figure className="relative hidden lg:block">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static hero asset, intentional */}
                  <img
                    src="/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/medkungfu-doctor-hero.jpg"
                    alt="Professional Chinese female doctor providing medical consultation"
                    className="w-full h-[500px] object-cover object-top"
                    width={904}
                    height={1200}
                  />
                </div>
                <figcaption className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1B4D3E] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">100+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A2E]">
                        Partner Hospitals
                      </p>
                      <p className="text-sm text-gray-500">
                        Across 6 major cities
                      </p>
                    </div>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
