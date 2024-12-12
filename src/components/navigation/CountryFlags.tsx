import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const countries = [
  { code: "CD", name: "DR Congo", flag: "/lovable-uploads/9ee27306-f972-4ceb-a009-a29730eaa458.png" },
  { code: "CM", name: "Cameroon", flag: "/lovable-uploads/7509201e-2ed9-4a00-ad3b-0d0435c1ed2f.png" },
  { code: "NG", name: "Nigeria", flag: "/lovable-uploads/923e1163-516f-4eab-b437-d4d2d5682200.png" },
  { code: "GH", name: "Ghana", flag: "/lovable-uploads/5c5c8d51-8a27-4e25-982e-e37d75ac8d1c.png" },
  { code: "SN", name: "Senegal", flag: "/lovable-uploads/7797037e-9c52-41c7-9a4d-969470a2946a.png" },
]

export const CountryFlags = () => {
  const navigate = useNavigate()
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country)
    setIsOpen(false)
    if (country.code === "NG") {
      navigate("/nigeria-interest")
    } else if (country.code === "GH") {
      navigate("/ghana-interest")
    }
  }

  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button className="p-0 h-8 w-8 rounded overflow-hidden hover:ring-2 hover:ring-primary focus:outline-none">
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} flag`}
              className="w-full h-full object-cover"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          {countries.map((country) => (
            <DropdownMenuItem
              key={country.code}
              onClick={() => handleCountrySelect(country)}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-100"
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
    </div>
  )
}