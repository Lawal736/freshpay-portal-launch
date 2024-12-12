import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <img 
          src="/lovable-uploads/0ee92787-a6b7-4cef-96e3-83dd615b6e6b.png" 
          alt="FreshPay Logo" 
          className="h-12"
        />
      </div>
      
      <div className="w-full max-w-md bg-secondary p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white mb-8">
          LOG IN TO YOUR ACCOUNT
        </h1>
        
        <form className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Log in
          </Button>
          
          <div className="text-center">
            <button className="text-white/80 hover:text-white text-sm">
              Log in with passkey
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center space-y-2">
          <p className="text-white/80">
            New to FreshPay?{" "}
            <Link to="/create-account" className="text-white hover:underline">
              Sign up
            </Link>
          </p>
          <Link to="/forgot-password" className="text-white/80 hover:text-white text-sm block">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;