import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";

interface AccountInfoSectionProps {
  form: UseFormReturn<any>;
}

export const AccountInfoSection = ({ form }: AccountInfoSectionProps) => {
  return (
    <>
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
    </>
  );
};