// SiteFooter — dark green footer matching MedKungFu's homepage.
// Brand column + social, Quick Links, Support, Contact Us, medical notices,
// and legal bar. Bilingual via the site translation dictionary (footer.* and
// contact.* keys).
"use client";
import Link from "next/link";

import type { ComponentType, ReactNode } from "react";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import {
  FacebookIcon,
  Icons,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";

interface FooterLinkItem {
  href: string;
  label: string;
}

interface SocialLink {
  label: string;
  icon: ComponentType<{ className?: string }>;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Twitter", icon: TwitterIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Instagram", icon: InstagramIcon },
];

const QUICK_LINKS: FooterLinkItem[] = [
  { label: "Medical Projects", href: "/projects" },
  { label: "Our Services", href: "/services" },
  { label: "Partner Hospitals", href: "/hospitals" },
  { label: "Patient Stories", href: "/stories" },
  { label: "Why China Medical", href: "/why-china" },
];

const SUPPORT_LINKS: FooterLinkItem[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/70 hover:text-[#7CB342] transition-colors duration-300 text-sm flex items-center gap-2 group"
    >
      <Icons.arrowRight
        className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 h-3.5 w-3.5"
        aria-hidden="true"
      />
      {children}
    </Link>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1B4D3E] text-white">
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-montserrat tracking-wide block">
                MedKungfu
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/70 block -mt-1">
                {t("HEALTHCARE · CONCIERGE")}
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t("Your trusted healthcare concierge in China. Connecting global patients with top-tier medical resources through personalized, professional service.")}
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CB342] transition-colors duration-300"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-montserrat">
              {t("Quick Links")}
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{t(l.label)}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-montserrat">
              {t("Support")}
            </h4>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{t(l.label)}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT US */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-montserrat">
              {t("Contact Us")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icons.mail className="text-[#7CB342] mt-0.5 flex-shrink-0 h-[18px] w-[18px]" />
                <div>
                  <p className="text-sm text-white/50 mb-1">{t("Email")}</p>
                  <a
                    href="mailto:contact@medkungfu.com"
                    className="text-white hover:text-[#7CB342] transition-colors"
                  >
                    contact@medkungfu.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icons.phone className="text-[#7CB342] mt-0.5 flex-shrink-0 h-[18px] w-[18px]" />
                <div>
                  <p className="text-sm text-white/50 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/16462968491"
                    className="text-white hover:text-[#7CB342] transition-colors"
                  >
                    +1- 646-296-8491
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icons.mapPin className="text-[#7CB342] mt-0.5 flex-shrink-0 h-[18px] w-[18px]" />
                <div>
                  <p className="text-sm text-white/50 mb-1">{t("Office")}</p>
                  <p className="text-white/70 text-sm">
                    {t("Shanghai, China")}
                    <br />
                    <span className="text-white/50">
                      {t("Serving patients across 6 major cities")}
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NOTICES */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs leading-relaxed text-white/60">
            <p>
              {t("Medical notice: MedKungfu provides cross-border medical resource recommendation, record organization, process coordination, interpretation, escort, visa and accommodation support, and follow-up assistance. It does not directly provide diagnosis, treatment, or outcome guarantees. Diagnosis, treatment plans, indications, risks, costs, and timelines are subject to final assessment by medical institutions and specialists.")}
            </p>
            <p>
              {t("Entity note: MedKungFu's corporate entity is MEDTECH CHINA LIMITED. The contracting entity, payment entity, service responsibilities, and refund rules are subject to formal agreements, payment documents, and official statements.")}
            </p>
          </div>
        </div>
      </div>
      {/* LEGAL */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">{t("footer.rights")}</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {t("Privacy Policy")}
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {t("Terms of Service")}
              </Link>
              <Link
                href="/refund"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {t("Refund Policy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
