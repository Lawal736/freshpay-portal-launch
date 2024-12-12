import { CreditCard, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "./EmailDialog";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showEmailDialog, setShowEmailDialog] = useState(
    location.state?.openEmailDialog || false
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pt-16 pb-12 md:pt-32 md:pb-24">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center">
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            <span className="text-primary">Fresh</span>
            <span className="text-secondary">Pay</span>{" "}
            <span className="block mt-2">for growing businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base md:text-lg leading-7 text-gray-600 [animation-delay:200ms] px-4">
            Accept payments, send payouts, and manage your business's entire
            financial operations with FreshPay's powerful platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 animate-fade-up [animation-delay:400ms] px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-12 px-6 bg-primary hover:bg-primary/90"
              onClick={() => navigate("/create-account")}
            >
              Create free account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-12 px-6 border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => navigate("/contact-sales")}
            >
              Contact sales
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 px-4">
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