import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Pricing = () => {
  const [selectedCountry, setSelectedCountry] = useState("cd");

  const standardFeatures = [
    "Accept payments",
    "Recurring billing",
    "Payment links",
    "Virtual accounts",
    "Deposit & Payout options",
  ];

  const ecommerceFeatures = [
    "Accept payments",
    "Payment links",
    "Virtual accounts",
    "Deposit & Payout options",
  ];

  const getPricing = (country: string) => {
    switch (country) {
      case "cm":
        return {
          sportBetting: "3.0",
          ecommerceDeposit: "2.0",
          ecommercePayout: "1.5",
        };
      default:
        return {
          sportBetting: "3.5",
          ecommerceDeposit: "2.5",
          ecommercePayout: "2.0",
        };
    }
  };

  const pricing = getPricing(selectedCountry);

  return (
    <div className="min-h-screen">
      <MenuBar />
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl mb-8">
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cd">DR Congo</SelectItem>
                  <SelectItem value="cm">Cameroon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
              Simple, transparent pricing
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 md:max-w-4xl mx-auto">
            <div className="rounded-3xl p-8 ring-1 ring-gray-200 lg:p-12">
              <div className="flex-none">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Sport Betting</h3>
                <div className="mt-6 space-y-4">
                  <p className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{pricing.sportBetting}%</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">per transaction</span>
                  </p>
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {standardFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl p-8 ring-1 ring-gray-200 lg:p-12">
              <div className="flex-none">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">E-Commerce</h3>
                <div className="mt-6 space-y-4">
                  <p className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{pricing.ecommerceDeposit}%</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">per transaction for deposit</span>
                  </p>
                  <p className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{pricing.ecommercePayout}%</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">per transaction for payout</span>
                  </p>
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {ecommerceFeatures.map((feature) => (
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