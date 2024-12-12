import { CreditCard, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "./EmailDialog";
import { useState } from "react";

export const Hero = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container relative z-10">
        <div className="text-center">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-primary">Fresh</span>
            <span className="text-secondary">Pay</span>{" "}
            <span className="block mt-2">for growing businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-8 text-gray-600 [animation-delay:200ms]">
            Accept payments, send payouts, and manage your business's entire
            financial operations with FreshPay's powerful platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="h-12 px-6 bg-primary hover:bg-primary/90"
              onClick={() => setShowEmailDialog(true)}
            >
              Create free account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-6 border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => setShowEmailDialog(true)}
            >
              Contact sales
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "Accept payments from customers anywhere in the world",
            },
            {
              icon: ShieldCheck,
              title: "Enterprise Security",
              description:
                "Bank-grade security to keep your business and customers safe",
            },
            {
              icon: CreditCard,
              title: "Multiple Payment Methods",
              description:
                "Cards, bank transfers, mobile money, and more payment options",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="rounded-2xl bg-white p-4 shadow-md">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <EmailDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </div>
  );
};