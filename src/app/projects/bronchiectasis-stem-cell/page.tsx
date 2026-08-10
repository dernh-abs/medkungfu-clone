import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import BronchiectasisStemCellContent from "./BronchiectasisStemCellContent";

export const metadata: Metadata = {
  title: "Bronchiectasis Stem Cell Therapy | MedKungFu",
  description:
    "Airway basal stem cell therapy for bronchiectasis utilizes patients' own airway basal stem cells to repair damaged bronchial structures and break the vicious cycle of infection-inflammation-damage. Explore core advantages, the five-step treatment process, comparison with traditional treatment, and FAQs.",
};

export default function BronchiectasisStemCellPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <BronchiectasisStemCellContent />
      </main>
      <SiteFooter />
    </>
  );
}
