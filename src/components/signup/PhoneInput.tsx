import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

const africanCountryCodes = [
  { code: "+243", country: "DR Congo" },
  { code: "+237", country: "Cameroon" },
  { code: "+234", country: "Nigeria" },
  { code: "+221", country: "Senegal" },
];

interface PhoneInputProps {
  form: UseFormReturn<any>;
  selectedCountryCode: string;
}

export const PhoneInput = ({ form, selectedCountryCode }: PhoneInputProps) => {
  return (
    <div className="space-y-2">
      <FormLabel>Phone Number</FormLabel>
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="countryCode"
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              value={selectedCountryCode}
            >
              <FormControl>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select code" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white z-[100]">
                {africanCountryCodes.map((country) => (
                  <SelectItem
                    key={country.code}
                    value={country.code}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {country.code} ({country.country})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormControl>
              <Input {...field} className="flex-1" placeholder="802 123 4567" />
            </FormControl>
          )}
        />
      </div>
    </div>
  );
};