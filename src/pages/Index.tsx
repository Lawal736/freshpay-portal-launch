import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { TrustedPartners } from "@/components/TrustedPartners";
import { MenuBar } from "@/components/MenuBar";
import { PoweringGrowth } from "@/components/PoweringGrowth";
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare, Phone } from "lucide-react";

const Index = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://m.facebook.com/profile.php?id=61556072782923&name=xhp_nt__fb__action__open_user", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/freshpayc?s=21", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gofreshpay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
    { icon: MessageSquare, href: "#", label: "Telegram" },
    { icon: Phone, href: "skype:live:lawalm?chat", label: "Skype" }
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
                  target="_blank"
                  rel="noopener noreferrer"
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