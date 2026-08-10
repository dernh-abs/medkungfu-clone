// Shared icon components for MedKungFu site (site-key: www-medkungfu-com-363c9bc1)
// Lucide icons match the source. Brand icons (Facebook/Twitter/LinkedIn/Instagram)
// were removed from lucide-react, so they are hand-extracted from the live site's DOM.
import {
  Activity,
  ArrowRight,
  Bone,
  Brain,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Dna,
  FileText,
  Globe,
  HelpCircle,
  Languages,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Quote,
  Scan,
  Shield,
  Sparkles,
  Stethoscope,
  UserCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type { LucideIcon };

type BrandIconProps = {
  className?: string;
  size?: number;
};

// --- Brand icons (extracted verbatim from www.medkungfu.com DOM) ---
function BrandSvg({
  size = 20,
  className,
  children,
}: BrandIconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function FacebookIcon({ size, className }: BrandIconProps) {
  return (
    <BrandSvg size={size} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </BrandSvg>
  );
}

export function TwitterIcon({ size, className }: BrandIconProps) {
  return (
    <BrandSvg size={size} className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </BrandSvg>
  );
}

export function LinkedInIcon({ size, className }: BrandIconProps) {
  return (
    <BrandSvg size={size} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </BrandSvg>
  );
}

export function InstagramIcon({ size, className }: BrandIconProps) {
  return (
    <BrandSvg size={size} className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </BrandSvg>
  );
}

export const Icons = {
  activity: Activity,
  arrowRight: ArrowRight,
  bone: Bone,
  brain: Brain,
  building: Building2,
  checkCircle: CheckCircle2,
  clipboardCheck: ClipboardCheck,
  clock: Clock,
  dna: Dna,
  fileText: FileText,
  globe: Globe,
  helpCircle: HelpCircle,
  languages: Languages,
  leaf: Leaf,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  messageCircle: MessageCircle,
  phone: Phone,
  plane: Plane,
  quote: Quote,
  scan: Scan,
  shield: Shield,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  userCheck: UserCheck,
  users: Users,
  zap: Zap,
} as const;

export type IconName = keyof typeof Icons;
