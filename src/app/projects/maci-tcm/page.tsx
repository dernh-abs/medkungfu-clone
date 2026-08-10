import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/ProjectDetailPage";
import { maciTcmPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/maci-tcm";
import { maciTcmPageZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/maci-tcm-zh";

export const metadata: Metadata = {
  title: "MACI-TCM Joint Regeneration Therapy",
  description:
    "Autologous chondrocyte transplantation (MACI) combined with TCM synergistic treatment — the cartilage repair gold standard, TCM throughout, zero waiting, and a 4-5x price advantage.",
};

export default function MaciTcmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ProjectDetailPage data={maciTcmPage} zhConfig={maciTcmPageZh} />
      </main>
      <SiteFooter />
    </>
  );
}
