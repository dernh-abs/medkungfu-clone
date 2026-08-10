import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import AcupunctureBeautyContent from "./AcupunctureBeautyContent";

export const metadata: Metadata = {
  title: "Acupuncture Beauty and Skin Tightening Therapy | MedKungFu",
  description:
    "Harmonize Qi and Blood, Rejuvenate Beauty from Within — MedKungFu's acupuncture facial rejuvenation programme offers non-invasive facial tightening, complexion improvement and anti-aging, with bilingual accompaniment.",
};

export default function AcupunctureBeautyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <AcupunctureBeautyContent />
      </main>
      <SiteFooter />
    </>
  );
}
