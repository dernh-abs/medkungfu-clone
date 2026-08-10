// "Payment Methods" — 3 white cards in a 3-col grid, scale reveal.
// Matches /services.
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface PaymentMethod {
  icon: LucideIcon;
  title: string;
  description: string;
}

const METHODS: PaymentMethod[] = [
  {
    icon: Icons.creditCard,
    title: "International Credit Card",
    description: "Visa / Mastercard",
  },
  {
    icon: Icons.refreshCw,
    title: "Bank Transfer",
    description: "Wire transfer to HK account",
  },
  {
    icon: Icons.shield,
    title: "Secure Payment",
    description: "Encrypted transactions",
  },
];

export function PaymentMethodsSection() {
  return (
    <section aria-labelledby="payment-methods-heading">
      <h2
        id="payment-methods-heading"
        className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]"
      >
        Payment Methods
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none" role="list">
        {METHODS.map((method) => {
          const Icon = method.icon;
          return (
            <Reveal key={method.title} scale={0.95} className="flex">
              <li className="bg-white p-8 rounded-xl shadow-sm text-center card-hover w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-4"
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A2E]">
                  {method.title}
                </h3>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
