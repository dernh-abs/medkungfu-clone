import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { AuthPage } from "@/components/sites/www-medkungfu-com-363c9bc1/login-7e93fba0/AuthCard";

export const metadata: Metadata = {
  title: "Secure Account Access | MedKungFu",
  description: "Sign in to your MedKungFu account to manage your medical journey.",
};

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <AuthPage />
      </main>
      <SiteFooter />
    </>
  );
}
