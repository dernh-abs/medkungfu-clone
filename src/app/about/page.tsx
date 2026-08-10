import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  AboutIntro,
  MissionSection,
  ValuesSection,
  TeamSection,
} from "@/components/sites/www-medkungfu-com-363c9bc1/about-979bddc4/AboutSections";

export const metadata: Metadata = {
  title: "About MedKungfu 康福来 | Cross-Border Healthcare Concierge",
  description:
    "MedKungFu China is a specialized international medical placement service connecting global patients with China's world-class healthcare system.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="About MedKungFu"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <div className="text-center mb-16">
              <Reveal>
                <h1 className="text-4xl font-bold text-[#1A1A2E] mb-8 font-montserrat">
                  About MedKungFu
                </h1>
              </Reveal>
              <AboutIntro />
            </div>
            <MissionSection />
            <ValuesSection />
            <TeamSection />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
