import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const countries = [
  { code: "CD", name: "DR Congo", flag: "/lovable-uploads/drc-flag.png" },
  { code: "NG", name: "Nigeria", flag: "/lovable-uploads/nigeria-flag.png" },
  { code: "GH", name: "Ghana", flag: "/lovable-uploads/ghana-flag.png" },
  { code: "CM", name: "Cameroon", flag: "/lovable-uploads/cameroon-flag.png" },
  { code: "SN", name: "Senegal", flag: "/lovable-uploads/senegal-flag.png" },
]

export const CountryFlags = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 h-8 w-8">
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} flag`}
            className="w-full h-full object-cover rounded"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => setSelectedCountry(country)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-6 h-4 object-cover"
            />
            <span>{country.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}