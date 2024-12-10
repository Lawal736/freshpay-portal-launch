import { ChartBar, Lock, Wallet } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Seamless Payments",
      description:
        "Accept payments quickly and securely with our optimized checkout experience",
    },
    {
      icon: ChartBar,
      title: "Business Insights",
      description:
        "Get detailed analytics and reports to understand your business better",
    },
    {
      icon: Lock,
      title: "Secure Platform",
      description:
        "Enterprise-grade security with 24/7 fraud monitoring and prevention",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary">
            Everything you need to grow your business
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to help you manage payments and grow your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
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