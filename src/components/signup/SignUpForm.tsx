import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";
import { BusinessInfoSection } from "./BusinessInfoSection";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { AccountInfoSection } from "./AccountInfoSection";
import { LegalSection } from "./LegalSection";

const formSchema = z.object({
  country: z.string(),
  businessName: z.string().min(2),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  countryCode: z.string(),
  password: z.string().min(8),
  businessType: z.enum(["starter", "registered"]),
  isDeveloper: z.enum(["yes", "no"]),
});

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "CD",
      countryCode: "+243",
      businessType: "starter",
      isDeveloper: "no",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <BusinessInfoSection form={form} />
        <PersonalInfoSection form={form} />
        <AccountInfoSection form={form} />
        <LegalSection />
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Create My Account
        </Button>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};