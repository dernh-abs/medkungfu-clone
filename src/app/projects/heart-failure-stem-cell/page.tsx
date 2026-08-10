import type { Metadata } from "next";

import { StemCellDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/StemCellDetailPage";
import { heartFailure } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/heartFailure";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Heart Failure Stem Cell Therapy | MedKungFu",
  description:
    "Based on PRIME-HFrEF clinical research, utilizing umbilical cord mesenchymal stem cells to improve cardiac function and quality of life.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <StemCellDetailPage data={heartFailure} />
      </main>
      <SiteFooter />
    </>
  );
}
