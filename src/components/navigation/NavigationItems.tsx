import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { EmailDialog } from "../EmailDialog"
import { useState } from "react"
import { ProductsSection } from "./sections/ProductsSection"
import { DevelopersSection } from "./sections/DevelopersSection"
import { ResourcesSection } from "./sections/ResourcesSection"
import { MobileAuthSection } from "./sections/MobileAuthSection"

export const NavigationItems = ({ 
  isMobile = false,
  onItemClick = () => {}
}: { 
  isMobile?: boolean
  onItemClick?: () => void
}) => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4 px-2">
        <ProductsSection isMobile onItemClick={onItemClick} />
        <DevelopersSection isMobile onItemClick={onItemClick} />
        <ResourcesSection 
          isMobile 
          onItemClick={onItemClick} 
          onContactClick={() => setShowEmailDialog(true)} 
        />

        <Link 
          to="/pricing" 
          className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
          onClick={onItemClick}
        >
          Pricing
        </Link>

        <MobileAuthSection 
          onItemClick={onItemClick} 
          onContactClick={() => setShowEmailDialog(true)} 
        />
        
        <EmailDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
      </div>
    );
  }

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <ProductsSection />
          <DevelopersSection />
          <ResourcesSection onContactClick={() => setShowEmailDialog(true)} />
          <Link 
            to="/pricing" 
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          >
            Pricing
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
      <EmailDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </>
  );
};