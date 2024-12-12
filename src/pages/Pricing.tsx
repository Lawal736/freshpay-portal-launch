import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, TikTok } from "lucide-react";

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

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: TikTok, href: "#", label: "TikTok" },
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
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-16">
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

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="space-y-4 text-center">
              <p className="text-lg">
                <a href="mailto:info@gofreshpay.com" className="text-primary hover:underline">
                  info@gofreshpay.com
                </a>
              </p>
              <p className="text-gray-700">
                Avenue Colonel Ebeya N°1430 / Immeuble ICM / Commune de la Gombe,<br />
                Kinshasa RDC
              </p>
              <p className="text-gray-700">
                Tel: <a href="tel:+243898900066" className="text-primary hover:underline">+243 898 900 066</a>
              </p>
              
              <div className="flex justify-center space-x-6 mt-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;