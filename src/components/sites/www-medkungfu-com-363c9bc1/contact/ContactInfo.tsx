// Contact information cards for the /contact page (Email / WhatsApp /
// Headquarters / Working Hours). Matches the source site's aside column.
import { Icons, type LucideIcon } from "../shared/icons";

interface ContactItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

const ITEMS: ContactItem[] = [
  { label: "Email", value: "contact@medkungfu.com", icon: Icons.mail },
  { label: "WhatsApp", value: "+1- 646-296-8491", icon: Icons.phone },
  { label: "Headquarters", value: "Shanghai, China", icon: Icons.mapPin },
  {
    label: "Working Hours",
    value: "Mon-Sun: 9:00 AM - 9:00 PM (Beijing Time)",
    icon: Icons.clock,
  },
];

export function ContactInfo() {
  return (
    <aside aria-label="Contact Information" className="lg:col-span-1 space-y-6">
      {ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <dl
            key={item.label}
            className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4"
          >
            <dt className="sr-only">{item.label}</dt>
            <dd
              className="p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg"
              aria-hidden="true"
            >
              <Icon className="h-6 w-6" />
            </dd>
            <div>
              <dt className="font-bold text-[#1A1A2E]">{item.label}</dt>
              <dd className="text-gray-500 text-sm">{item.value}</dd>
            </div>
          </dl>
        );
      })}
    </aside>
  );
}
