import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

const countries = [
  { code: "CD", name: "DR Congo", phoneCode: "+243" },
  { code: "CM", name: "Cameroon", phoneCode: "+237" },
  { code: "NG", name: "Nigeria", phoneCode: "+234" },
  { code: "SN", name: "Senegal", phoneCode: "+221" },
];

interface CountrySelectProps {
  form: UseFormReturn<any>;
  onCountryChange: (phoneCode: string) => void;
}

export const CountrySelect = ({ form, onCountryChange }: CountrySelectProps) => {
  return (
    <FormField
      control={form.control}
      name="country"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Country</FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              const country = countries.find((c) => c.code === value);
              if (country) {
                onCountryChange(country.phoneCode);
              }
            }}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-white z-[100]">
              {countries.map((country) => (
                <SelectItem
                  key={country.code}
                  value={country.code}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};