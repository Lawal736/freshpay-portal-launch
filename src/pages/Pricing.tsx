import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "No monthly fees",
    "No setup fees",
    "Easy to set up and start receiving payments",
    "Access to all merchant back-office features",
    "Simple setup and real-time statistics",
    "Accept online payments in over 4 countries and 5 currencies",
    "Make withdrawal requests at your own pace, according to your preferences"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A transparent pricing structure with no hidden fees. No minimum fees or hidden charges. 
              With FreshPay, you only pay for successful transactions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;