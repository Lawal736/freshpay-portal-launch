import { MenuBar } from "@/components/MenuBar";
import { SignUpForm } from "@/components/signup/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-white">
      <MenuBar />
      <div className="h-16 bg-primary"></div>
      <div className="container max-w-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-center mb-8">CREATE YOUR ACCOUNT</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;