import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Accept payments",
    "Recurring billing",
    "Payment links",
    "Virtual accounts",
  ];

  return (
    <div className="min-h-screen">
      <MenuBar />
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Simple, transparent pricing
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="rounded-3xl p-8 ring-1 ring-gray-200 lg:p-12">
              <div className="flex-none">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Pay as you go</h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">3.5%</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">per transaction</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;