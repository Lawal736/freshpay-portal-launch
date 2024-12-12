import { MenuBar } from "@/components/MenuBar";
import { ContactSalesForm } from "@/components/sales/ContactSalesForm";

const NigeriaInterest = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MenuBar />
      <div className="container max-w-3xl mx-auto py-16 px-4">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-4xl font-bold">Indicate your interest here</h1>
          <p className="text-lg text-gray-600">
            Interested in using FreshPay to collect online payments in Nigeria? Indicate your interest here and our team will reach out when we launch our services!
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <ContactSalesForm />
        </div>
      </div>
    </div>
  );
};

export default NigeriaInterest;