import type { Metadata } from "next";

import { StemCellDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/StemCellDetailPage";
import { diabetes } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/diabetes";
import { diabetesZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/stem-cell/diabetesZh";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Type 2 Diabetes Umbilical Cord MSC Therapy | MedKungFu",
  description:
    "Intervening at the root pathological level for functional repair rather than mere disease maintenance.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <StemCellDetailPage data={diabetes} zhConfig={diabetesZh} />
      </main>
      <SiteFooter />
    </>
  );
}
