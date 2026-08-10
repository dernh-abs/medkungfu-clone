import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/ProjectDetailPage";
import { arthroplastyTcmPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/arthroplasty-tcm";
import { arthroplastyTcmPageZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/arthroplasty-tcm-zh";

export const metadata: Metadata = {
  title: "Precision Joint Replacement Combined with TCM Accelerated Recovery",
  description:
    "Deeply integrate surgical robot precision with TCM wisdom — joint replacement with robot-assisted accuracy, TCM accelerated recovery, zero waiting, and unmatched global price advantage.",
};

export default function ArthroplastyTcmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ProjectDetailPage data={arthroplastyTcmPage} zhConfig={arthroplastyTcmPageZh} />
      </main>
      <SiteFooter />
    </>
  );
}
