// Content structures for MedKungFu homepage (site-key: www-medkungfu-com-363c9bc1)

export interface Service {
  icon: "building" | "languages" | "users";
  title: string;
  description: string;
  href: string;
}

export interface TrustStat {
  icon: "building" | "map-pin" | "message-circle" | "clock";
  label: string;
}

export interface PromiseValue {
  icon: "shield" | "zap" | "user-check" | "file-text";
  title: string;
  description: string;
}

export interface MedicalProject {
  icon: "activity" | "dna" | "leaf" | "stethoscope";
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface ProcessStep {
  icon: "clipboard-check" | "stethoscope" | "file-text" | "plane" | "map-pin" | "building";
  stepNumber: string;
  title: string;
  progress: number; // 0-100
}

export interface PatientStory {
  quote: string;
  image: string;
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
