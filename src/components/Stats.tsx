export const Stats = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { number: "10M+", label: "Transactions processed" },
            { number: "50k+", label: "Active merchants" },
            { number: "99.9%", label: "Uptime guaranteed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary">{stat.number}</div>
              <div className="mt-2 text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};