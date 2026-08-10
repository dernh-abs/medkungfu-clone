import type { Metadata } from "next";

import { StemCellDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/StemCellDetailPage";
import { copdIld } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/copdIld";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "COPD / ILD Airway Basal Stem Cell Therapy | MedKungFu",
  description:
    "Repairing lung structure from the root for fundamental pulmonary function improvement.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <StemCellDetailPage data={copdIld} />
      </main>
      <SiteFooter />
    </>
  );
}
