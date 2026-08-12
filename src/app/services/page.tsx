import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ServiceOfferingsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/services-3b1aeccb/ServiceOfferingsSection";
import {
  ServicesHero,
  ServiceProcessSection,
} from "@/components/sites/www-medkungfu-com-363c9bc1/services-3b1aeccb/ServiceProcessSection";
import { WhyChooseUsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/services-3b1aeccb/WhyChooseUsSection";
import { RefundPolicySection } from "@/components/sites/www-medkungfu-com-363c9bc1/services-3b1aeccb/RefundPolicySection";
import { PaymentMethodsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/services-3b1aeccb/PaymentMethodsSection";

export const metadata: Metadata = {
  title: "Cross-Border Medical Coordination Services | MedKungFu",
  description:
    "MedKungFu's comprehensive medical tourism services: expert video consultation, full-process coordination, visa & travel assistance, translation & escort, and rehabilitation follow-up.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Our Services"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <ServicesHero />
            <ServiceOfferingsSection />
            <ServiceProcessSection />
            <WhyChooseUsSection />
            <RefundPolicySection />
            <PaymentMethodsSection />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
