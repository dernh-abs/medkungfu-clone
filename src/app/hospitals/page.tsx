import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { HospitalsHero } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-3a6d0730/HospitalsHero";
import { HospitalDirectory } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-3a6d0730/HospitalDirectory";

export const metadata: Metadata = {
  title: "Partner Hospitals and Medical Resources in China | MedKungFu",
  description:
    "MedKungFu partners with China's most prestigious hospitals — Shanghai Proton & Heavy Ion Center, Ruijin Hospital Hainan, Longhua Hospital, and more across Beijing, Shanghai, Guangzhou and Hainan.",
};

export default function HospitalsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Partner Hospitals"
          className="min-h-screen bg-[#F5F7FA]"
        >
          <HospitalsHero />
          <HospitalDirectory />
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
