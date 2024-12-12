import React from "react";

export const PoweringGrowth = () => {
  const brands = [
    {
      name: "PayAngel",
      logo: "/lovable-uploads/103903a1-0366-457c-9f45-9484226e5d65.png",
      alt: "PayAngel logo"
    },
    {
      name: "1xbet",
      logo: "/lovable-uploads/09dab7fb-1173-44c8-a7fc-16c7e914c9f5.png",
      alt: "1xbet logo"
    },
    {
      name: "PremierBet",
      logo: "/lovable-uploads/a8ccc5a9-540c-49ae-b54b-1b2328eaf415.png",
      alt: "PremierBet logo"
    },
    {
      name: "Mulasport",
      logo: "/lovable-uploads/57e92fc3-5982-40df-9210-54652f9bd107.png",
      alt: "Mulasport logo"
    },
    {
      name: "IZIChange",
      logo: "/lovable-uploads/f6f18448-d13f-462d-9ebe-c04d9241a573.png",
      alt: "IZIChange logo"
    },
    {
      name: "BetandU",
      logo: "/placeholder.svg",
      alt: "BetandU logo"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Powering growth for amazing businesses
          </h2>
          <p className="text-lg text-gray-600">
            FreshPay is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="w-full max-w-[160px] h-[80px] flex items-center justify-center p-4"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};