import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "../ListItem";

interface ProductsSectionProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const ProductsSection = ({ isMobile, onItemClick = () => {} }: ProductsSectionProps) => {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      onItemClick();
    }
  };

  if (isMobile) {
    return (
      <>
        <Link to="#" onClick={scrollToFeatures} className="block px-2 py-1 text-sm">
          Payments
        </Link>
        <Link to="#" onClick={scrollToFeatures} className="block px-2 py-1 text-sm">
          Transfers
        </Link>
      </>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <Link
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                to="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  FreshPay Platform
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Unified payments platform for your business growth
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
          <ListItem 
            to="#" 
            title="Payments" 
            onClick={scrollToFeatures}
          >
            Accept payments online with multiple options
          </ListItem>
          <ListItem 
            to="#" 
            title="Transfers" 
            onClick={scrollToFeatures}
          >
            Send money across borders seamlessly
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};