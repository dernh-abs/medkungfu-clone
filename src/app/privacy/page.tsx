import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { PrivacyHero } from "@/components/sites/www-medkungfu-com-363c9bc1/privacy-0ece7f7c/PrivacyHero";
import { PrivacyPolicy } from "@/components/sites/www-medkungfu-com-363c9bc1/privacy-0ece7f7c/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | MedKungFu",
  description:
    "MedKungfu's Privacy Policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Privacy Policy"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom max-w-4xl mx-auto px-4 md:px-8">
            <PrivacyHero />
            <PrivacyPolicy />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
