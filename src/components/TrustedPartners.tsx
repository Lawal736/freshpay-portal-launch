import React from "react";

export const TrustedPartners = () => {
  const partners = [
    {
      name: "Airtel Money",
      logo: "/lovable-uploads/bbf17dff-3a1a-41f3-9b00-70446ee6bd82.png",
    },
    {
      name: "M-Pesa",
      logo: "/lovable-uploads/77fd7ddd-536a-44fe-9a15-08582251bd61.png",
    },
    {
      name: "Orange Money",
      logo: "/lovable-uploads/4f0b7f90-a707-4144-a242-211883bbef93.png",
    },
    {
      name: "AfriMoney",
      logo: "/lovable-uploads/528bb447-4080-40a1-87fd-7bc81974fdff.png",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary">
            Trusted Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Integrated with leading mobile money operators in DRC and Cameroon
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Currently operating in the Democratic Republic of Congo and Cameroon
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 w-auto object-contain"
              />
              <p className="text-lg font-semibold text-secondary">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};