import { Link } from "react-router-dom";

export const LegalSection = () => {
  return (
    <div className="space-y-4 text-sm text-gray-600">
      <p>
        By clicking the "Create your account" button, you agree to FreshPay's{" "}
        <Link to="#" className="text-blue-600">terms of acceptable use</Link> and{" "}
        <Link to="#" className="text-blue-600">Data Processing Agreement</Link>.
      </p>
      <p>
        To learn more about how FreshPay collects, uses and discloses your personal data, please read our{" "}
        <Link to="#" className="text-blue-600">Privacy Policy</Link>.
      </p>
    </div>
  );
};