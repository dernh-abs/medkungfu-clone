import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import HeavyIonProtonContent from "./HeavyIonProtonContent";

export const metadata: Metadata = {
  title: "Heavy Ion/Proton Therapy | MedKungFu",
  description:
    "Heavy ion (carbon ion) and proton therapy are internationally recognized as the most advanced tumor radiotherapy technologies, achieving sub-millimeter targeted demolition of tumors while maximizing protection of surrounding normal tissue. Discover China's particle therapy core advantages, suitable indications, treatment services, process, 2026 clinical efficacy data, case studies, and costs.",
};

export default function HeavyIonProtonPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <HeavyIonProtonContent />
      </main>
      <SiteFooter />
    </>
  );
}
