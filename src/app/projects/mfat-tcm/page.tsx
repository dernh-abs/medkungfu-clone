import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/ProjectDetailPage";
import { mfatTcmPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/mfat-tcm";
import { mfatTcmPageZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/mfat-tcm-zh";

export const metadata: Metadata = {
  title: "MFAT Joint Regeneration Therapy",
  description:
    "Autologous fat micro-fragment (MFAT) joint regeneration — one collection with multiple uses, zero rejection, and long-lasting pain relief of 3-4 years.",
};

export default function MfatTcmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ProjectDetailPage data={mfatTcmPage} zhConfig={mfatTcmPageZh} />
      </main>
      <SiteFooter />
    </>
  );
}
