import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectDetailPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/ProjectDetailPage";
import { microfractureTcmPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/microfracture-tcm";
import { microfractureTcmPageZh } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/microfracture-tcm-zh";
import { microfractureTcmPageRu } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/arthritis/data/microfracture-tcm-ru";

export const metadata: Metadata = {
  title: "Microfracture-TCM Cartilage Regeneration",
  description:
    "Arthroscopic microfracture combined with TCM synergistic treatment — minimally invasive surgery, TCM throughout, zero wait, and significant price advantage for knee cartilage repair.",
};

export default function MicrofractureTcmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ProjectDetailPage data={microfractureTcmPage} zhConfig={microfractureTcmPageZh} ruConfig={microfractureTcmPageRu} />
      </main>
      <SiteFooter />
    </>
  );
}
