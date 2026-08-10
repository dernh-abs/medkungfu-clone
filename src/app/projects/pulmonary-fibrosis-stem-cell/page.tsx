import type { Metadata } from "next";

import { StemCellDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/StemCellDetailPage";
import { pulmonaryFibrosis } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/pulmonaryFibrosis";
import { pulmonaryFibrosisZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/pulmonaryFibrosisZh";
import { pulmonaryFibrosisRu } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/pulmonaryFibrosisRu";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Stem Cell Therapy for Pulmonary Fibrosis | MedKungFu",
  description:
    "Leveraging the multi-target regulatory capabilities of Mesenchymal Stem Cells (MSCs) to intervene in the pathological process of pulmonary fibrosis at multiple levels, delaying or even reversing lung function decline.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <StemCellDetailPage data={pulmonaryFibrosis} zhConfig={pulmonaryFibrosisZh} ruConfig={pulmonaryFibrosisRu} />
      </main>
      <SiteFooter />
    </>
  );
}
