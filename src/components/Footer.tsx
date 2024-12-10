export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-white font-bold mb-4">FreshPay</h3>
            <p className="text-sm">
              Modern payment solutions for growing businesses
            </p>
          </div>
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Integration", "Documentation"],
            },
            {
              title: "Company",
              links: ["About", "Customers", "Careers", "Press"],
            },
            {
              title: "Resources",
              links: ["Blog", "Help Center", "Contact", "Terms"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          © {new Date().getFullYear()} FreshPay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};