import { Button } from "@/components/ui/button"
import { ListItem } from "../ListItem"
import { Globe, ShoppingCart } from "lucide-react"
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

interface ProductsSectionProps {
  isMobile?: boolean
  onItemClick?: () => void
}

export const ProductsSection = ({ isMobile, onItemClick = () => {} }: ProductsSectionProps) => {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('section.py-16.md\\:py-24.bg-white');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      onItemClick();
    }
  };

  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="text-sm font-medium">Products</div>
        <div className="pl-4 space-y-3">
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={scrollToFeatures}
          >
            Payments
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={scrollToFeatures}
          >
            Transfers
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={scrollToFeatures}
          >
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Commerce</span>
            </div>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={scrollToFeatures}
          >
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Global Reach</span>
            </div>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-background">Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
          <ListItem href="#features" title="Payments" onClick={scrollToFeatures}>
            Accept payments from multiple channels
          </ListItem>
          <ListItem href="#features" title="Transfers" onClick={scrollToFeatures}>
            Send money across borders
          </ListItem>
          <ListItem href="#features" title="Commerce" onClick={scrollToFeatures}>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Launch your online business</span>
            </div>
          </ListItem>
          <ListItem href="#features" title="Global Reach" onClick={scrollToFeatures}>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Expand to new markets</span>
            </div>
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}