import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import TcmProctologyContent from "./TcmProctologyContent";

export const metadata: Metadata = {
  title: "TCM-Integrated Proctology Surgery | MedKungFu",
  description:
    "Gu's Surgical Heritage · TCM-Western Integration · Minimally Invasive — sphincter-preserving treatment for complex anal fistulas and mixed hemorrhoids with proprietary formulations, VAAFT/FiLaC technology and full-process accompaniment.",
};

export default function TcmProctologyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <TcmProctologyContent />
      </main>
      <SiteFooter />
    </>
  );
}
