import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { ClosingCtaSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/shanghai-proton-heavy-ion/ClosingCtaSection";
import { ExpertTeamSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/shanghai-proton-heavy-ion/ExpertTeamSection";
import { HeroSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/shanghai-proton-heavy-ion/HeroSection";
import { OverviewSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/shanghai-proton-heavy-ion/OverviewSection";
import { TreatmentFeaturesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/shanghai-proton-heavy-ion/TreatmentFeaturesSection";

export const metadata: Metadata = {
  title: "Shanghai Proton Heavy Ion Hospital | MedKungFu",
  description:
    "Shanghai Proton Heavy Ion Hospital (Fudan University Affiliated) — China's first specialized oncology institution offering both proton and heavy ion advanced radiotherapy technologies, located in Zhangjiang Science City, Pudong New Area.",
};

export default function ShanghaiProtonHeavyIonPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Shanghai Proton and Heavy Ion Center"
          className="min-h-screen bg-white"
        >
          <HeroSection />
          <OverviewSection />
          <TreatmentFeaturesSection />
          <ExpertTeamSection />
          <ClosingCtaSection />
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
