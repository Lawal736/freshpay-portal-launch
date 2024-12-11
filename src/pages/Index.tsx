import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { TrustedPartners } from "@/components/TrustedPartners";
import { MenuBar } from "@/components/MenuBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <MenuBar />
      <Hero />
      <Features />
      <TrustedPartners />
      <Stats />
      <Footer />
    </main>
  );
};

export default Index;