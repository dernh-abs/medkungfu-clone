import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import RuijinHainanContent from "./RuijinHainanContent";

export const metadata: Metadata = {
  title:
    "Ruijin Hospital Hainan Branch, Shanghai Jiao Tong University School of Medicine | MedKungFu",
  description:
    "The only public medical institution in Boao Lecheng Pilot Zone · National Regional Medical Center. Four Licensed Policies, 219 licensed drugs & devices, major diseases treated on island.",
};

export default function RuijinHainanPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <RuijinHainanContent />
      </main>
      <SiteFooter />
    </>
  );
}
