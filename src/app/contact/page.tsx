import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ContactHeader, ContactInfo } from "@/components/sites/www-medkungfu-com-363c9bc1/contact/ContactInfo";
import { ContactForm } from "@/components/sites/www-medkungfu-com-363c9bc1/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact MedKungfu for Medical Resource Assessment | MedKungFu",
  description:
    "Contact MedKungfu for a free consultation. Reach us by email, WhatsApp, or through our inquiry form — our team responds within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Contact Us"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <ContactHeader />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}
