import { MenuBar } from "@/components/MenuBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const formSchema = z.object({
  country: z.string(),
  businessName: z.string().min(2),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  password: z.string().min(8),
  businessType: z.enum(["starter", "registered"]),
  isDeveloper: z.enum(["yes", "no"]),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "Nigeria",
      businessType: "starter",
      isDeveloper: "no",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 bg-primary"></div>
      <div className="container max-w-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-center mb-8">CREATE YOUR ACCOUNT</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <div className="flex justify-between items-center">
                      <Input {...field} />
                      <Link to="#" className="text-blue-600 text-sm ml-2">
                        Other countries
                      </Link>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input className="w-24" value="+234" readOnly />
                      <Input {...field} className="flex-1" placeholder="802 123 4567" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="password" {...field} />
                      <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What type of business do you own?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="starter" id="starter" />
                        <div>
                          <Label htmlFor="starter" className="font-normal">Starter Business</Label>
                          <p className="text-sm text-gray-500">
                            I'm testing my ideas with real customers, and preparing to register my company
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="registered" id="registered" />
                        <div>
                          <Label htmlFor="registered" className="font-normal">Registered Business</Label>
                          <p className="text-sm text-gray-500">
                            My business has the approval, documentation, and licences required to operate legally
                          </p>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isDeveloper"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you a software developer?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="font-normal">Yes, I am</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="font-normal">No, I'm not</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#3BB75E] hover:bg-[#3BB75E]/90">
              Create My Account
            </Button>

            <div className="space-y-4 text-sm text-gray-600">
              <p>
                By clicking the "Create your account" button, you agree to Paystack's{" "}
                <Link to="#" className="text-blue-600">terms of acceptable use</Link> and{" "}
                <Link to="#" className="text-blue-600">Data Processing Agreement</Link>.
              </p>
              <p>
                To learn more about how Paystack collects, uses and discloses your personal data, please read our{" "}
                <Link to="#" className="text-blue-600">Privacy Policy</Link>.
              </p>
            </div>

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
      </div>
    </div>
  );
};

export default SignUp;