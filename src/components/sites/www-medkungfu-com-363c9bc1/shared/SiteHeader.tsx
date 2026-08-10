"use client";

// Fixed top navigation bar matching MedKungFu's header.
// Green brand color #1B4D3E, accent #7CB342. Mobile menu toggles below lg.
import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { X } from "lucide-react";

import { Icons } from "./icons";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Medical Projects" },
  { href: "/services", label: "Services" },
  { href: "/hospitals", label: "Hospitals" },
  { href: "/stories", label: "Patient Stories" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B4D3E] text-white shadow-md">
      <div className="container-custom h-[72px] flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start">
          <span className="text-2xl font-bold font-montserrat tracking-wide">
            MedKungfu
          </span>
          <span className="text-[10px] tracking-[0.2em] text-white/80 -mt-1">
            HEALTHCARE · CONCIERGE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                isActive(link.href, pathname) ? "text-[#7CB342]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="bg-[#7CB342] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#689F38] transition-colors"
          >
            Book Consultation
          </Link>
          <button className="flex items-center space-x-1 text-sm hover:text-[#7CB342]">
            <Icons.globe className="h-4 w-4" />
            <span>EN</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden bg-[#1B4D3E] border-t border-white/10 px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/90 hover:text-[#7CB342]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block bg-[#7CB342] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#689F38] transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
