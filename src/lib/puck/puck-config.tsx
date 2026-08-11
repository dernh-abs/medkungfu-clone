// Puck component configuration — registers all 10 home page sections.
//
// Each component's `render` function wraps the actual site component in a
// studio-mode div. The components self-fetch their data via useSectionData()
// from ContentRuntime, so no props need to be passed — the data flow goes:
//   Puck onChange → puckToUcd → commitDocument → useSectionData re-renders
//
// Fields are defined to match each section's UCD schema, enabling the Puck
// property panel to edit section data.
//
// NOTE: For complex nested types (arrays of objects), we use textarea with
// JSON editing. This is a pragmatic choice — the fields can be refined later
// with custom Puck field components for better UX.

import type { Config } from "@measured/puck";

import { HeroSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/HeroSection";
import { CityStrip } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CityStrip";
import { ServicesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServicesSection";
import { TrustStatsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/TrustStatsSection";
import { OurPromiseSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/OurPromiseSection";
import { MedicalProjectsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/MedicalProjectsSection";
import { ServiceProcessSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServiceProcessSection";
import { PatientStoriesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/PatientStoriesSection";
import { FeaturedFAQSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/FeaturedFAQSection";
import { CTASection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CTASection";

/** Studio wrapper — adds hover outline for visual feedback in the canvas. */
function studioWrap(children: React.ReactNode) {
  return (
    <div className="studio-mode relative group/section">
      <div className="absolute inset-0 ring-2 ring-transparent group-hover/section:ring-blue-400 rounded pointer-events-none transition-all z-50" />
      {children}
    </div>
  );
}

export const puckConfig: Config = {
  components: {
    hero: {
      label: "Hero",
      fields: {
        image: { type: "text", label: "Image URL" },
        imageAlt: { type: "text", label: "Image Alt Text" },
        statKeys: { type: "textarea", label: "Stat Keys (one per line)" },
        ctaLinks: {
          type: "object",
          label: "CTA Links",
          objectFields: {
            explore: { type: "text", label: "Explore Link" },
            book: { type: "text", label: "Book Link" },
          },
        },
      },
      defaultProps: {
        statKeys: "hero.trustPoint1\nhero.trustPoint2\nhero.trustPoint3",
        image: "/sites/www-medkungfu-com-363c9bc1/medkungfu-doctor-hero.jpg",
        imageAlt: "Doctor hero image",
        ctaLinks: { explore: "/projects", book: "/contact" },
      },
      render: () => studioWrap(<HeroSection />),
    },

    cityStrip: {
      label: "City Strip",
      fields: {
        heading: { type: "text", label: "Heading" },
        cities: { type: "textarea", label: "Cities (JSON)" },
      },
      defaultProps: {
        heading: "Serving patients across",
        cities: '[{"name":"Beijing","dimmed":false}]',
      },
      render: () => studioWrap(<CityStrip />),
    },

    services: {
      label: "Services",
      fields: {
        linkHref: { type: "text", label: "Link URL" },
        viewAllKey: { type: "text", label: "View All Key" },
        items: { type: "textarea", label: "Service Items (JSON)" },
      },
      defaultProps: {
        items: "[]",
        linkHref: "/services",
        viewAllKey: "home.viewAllServices",
      },
      render: () => studioWrap(<ServicesSection />),
    },

    trustStats: {
      label: "Trust Stats",
      fields: {
        items: { type: "textarea", label: "Trust Stats (JSON)" },
      },
      defaultProps: { items: "[]" },
      render: () => studioWrap(<TrustStatsSection />),
    },

    ourPromise: {
      label: "Our Promise",
      fields: {
        headingKey: { type: "text", label: "Heading Key" },
        items: { type: "textarea", label: "Promise Items (JSON)" },
      },
      defaultProps: { headingKey: "promise.heading", items: "[]" },
      render: () => studioWrap(<OurPromiseSection />),
    },

    medicalProjects: {
      label: "Medical Projects",
      fields: {
        heading: { type: "text", label: "Heading" },
        linkHref: { type: "text", label: "Link URL" },
        items: { type: "textarea", label: "Project Items (JSON)" },
      },
      defaultProps: { heading: "", linkHref: "/projects", items: "[]" },
      render: () => studioWrap(<MedicalProjectsSection />),
    },

    serviceProcess: {
      label: "Service Process",
      fields: {
        headingKey: { type: "text", label: "Heading Key" },
        items: { type: "textarea", label: "Process Steps (JSON)" },
      },
      defaultProps: { headingKey: "process.heading", items: "[]" },
      render: () => studioWrap(<ServiceProcessSection />),
    },

    patientStories: {
      label: "Patient Stories",
      fields: {
        heading: { type: "text", label: "Heading" },
        items: { type: "textarea", label: "Story Items (JSON)" },
      },
      defaultProps: { heading: "", items: "[]" },
      render: () => studioWrap(<PatientStoriesSection />),
    },

    featuredFaq: {
      label: "Featured FAQ",
      fields: {
        heading: { type: "text", label: "Heading" },
        subtitle: { type: "text", label: "Subtitle" },
        linkText: { type: "text", label: "Link Text" },
        linkHref: { type: "text", label: "Link URL" },
        items: { type: "textarea", label: "FAQ Items (JSON)" },
      },
      defaultProps: {
        heading: "",
        subtitle: "",
        linkText: "View All",
        linkHref: "/faq",
        items: "[]",
      },
      render: () => studioWrap(<FeaturedFAQSection />),
    },

    cta: {
      label: "CTA",
      fields: {
        messagePlaceholder: { type: "text", label: "Message Placeholder" },
        interestOptions: { type: "textarea", label: "Interest Options (JSON)" },
      },
      defaultProps: {
        interestOptions: "[]",
        messagePlaceholder: "Your message",
      },
      render: () => studioWrap(<CTASection />),
    },
  },
};
