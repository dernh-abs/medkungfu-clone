import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/ProjectDetailPage";
import { prpTcmPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/prp-tcm";
import { prpTcmPageZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/prp-tcm-zh";
import { prpTcmPageRu } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/prp-tcm-ru";

export const metadata: Metadata = {
  title: "PRP-TCM Joint Regeneration Therapy",
  description:
    "PRP (Platelet-Rich Plasma) TCM Joint Regeneration Therapy combines modern regenerative medicine with traditional Chinese medicine — East-West integration, root & symptom treatment, zero wait, safe & compliant.",
};

export default function PrpTcmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ProjectDetailPage data={prpTcmPage} zhConfig={prpTcmPageZh} ruConfig={prpTcmPageRu} />
      </main>
      <SiteFooter />
    </>
  );
}
