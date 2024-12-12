import { MenuBar } from "@/components/MenuBar";
import { ContactSalesForm } from "@/components/sales/ContactSalesForm";

const ContactSales = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MenuBar />
      <div className="container max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Sales</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <ContactSalesForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSales;