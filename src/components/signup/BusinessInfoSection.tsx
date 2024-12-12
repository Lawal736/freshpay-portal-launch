import { UseFormReturn } from "react-hook-form";
import { CountrySelect } from "./CountrySelect";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface BusinessInfoSectionProps {
  form: UseFormReturn<any>;
}

export const BusinessInfoSection = ({ form }: BusinessInfoSectionProps) => {
  return (
    <>
      <CountrySelect 
        form={form} 
        onCountryChange={(code) => {
          form.setValue("countryCode", code);
        }}
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
    </>
  );
};