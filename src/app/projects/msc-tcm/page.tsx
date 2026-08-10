import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/ProjectDetailPage";
import { mscTcmPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/msc-tcm";

export const metadata: Metadata = {
  title: "MSC Joint Regeneration Therapy",
  description:
    "Mesenchymal stem cell joint regeneration — root-level repair addressing both symptoms and root cause for knee osteoarthritis, with internationally evidence-based efficacy.",
};

export default function MscTcmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ProjectDetailPage data={mscTcmPage} />
      </main>
      <SiteFooter />
    </>
  );
}
