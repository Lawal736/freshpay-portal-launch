import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { TrustedPartners } from "@/components/TrustedPartners";
import { MenuBar } from "@/components/MenuBar";
import { PoweringGrowth } from "@/components/PoweringGrowth";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <main className="min-h-screen">
      <MenuBar />
      <Hero />
      <Features />
      <TrustedPartners />
      <PoweringGrowth />
      <Stats />
      
      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg">
                <a href="mailto:info@gofreshpay.com" className="text-primary hover:underline">
                  info@gofreshpay.com
                </a>
              </p>
              <p className="text-gray-600">
                Avenue Colonel Ebeya N°1430 / Immeuble ICM / Commune de la Gombe,<br />
                Kinshasa RDC
              </p>
              <p className="text-gray-600">
                Tel: <a href="tel:+243898900066" className="text-primary hover:underline">+243 898 900 066</a>
              </p>
            </div>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;