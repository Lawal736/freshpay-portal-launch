import { Wallet, Globe, ShoppingCart, Bank } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Mobile Money Integration",
      description:
        "Direct integration with all major mobile money operators in DRC: Airtel Money, Orange Money, M-Pesa, and AfriMoney for seamless deposits and withdrawals",
    },
    {
      icon: Globe,
      title: "International Remittance",
      description:
        "Send money directly to FreshPay Wallet, Mobile Money Wallet, or Bank account from anywhere in the world",
    },
    {
      icon: ShoppingCart,
      title: "Merchant Collection",
      description:
        "Streamlined payment collection solutions for businesses of all sizes",
    },
    {
      icon: Bank,
      title: "Bank & Wallet Transfers",
      description:
        "Effortless transfers between bank accounts and digital wallets",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Integrated services that power your financial operations
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative flex flex-col items-center p-6 rounded-2xl border border-gray-200 transition-all duration-200 hover:shadow-lg"
            >
              <div className="rounded-xl bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary">{feature.title}</h3>
              <p className="mt-2 text-center text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};