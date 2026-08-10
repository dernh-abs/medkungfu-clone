import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";

import PrecisionOncologyDiagnosticsContent from "./PrecisionOncologyDiagnosticsContent";

export const metadata: Metadata = {
  title: "Precision Oncology Diagnostics - Tumor Molecular Diagnosis & Genetic Risk Assessment",
  description:
    "Precision Oncology Diagnostics by MedKungFu: tumor molecular diagnosis, genetic risk assessment, precision typing and medication guidance through the MICM-P integrated diagnostic model at a CAP + ISO15189 dual-certified partner diagnostic center.",
};

export default function PrecisionOncologyDiagnosticsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <PrecisionOncologyDiagnosticsContent />
      </main>
      <SiteFooter />
    </>
  );
}
