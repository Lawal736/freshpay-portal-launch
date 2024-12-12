import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Globe, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { ListItem } from "./ListItem"
import { EmailDialog } from "../EmailDialog"
import { useState } from "react"
import { Button } from "../ui/button"

export const NavigationItems = ({ 
  isMobile = false,
  onItemClick = () => {}
}: { 
  isMobile?: boolean
  onItemClick?: () => void
}) => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('section.py-24.bg-white');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    onItemClick();
  };

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4 px-2">
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

        <div className="space-y-4">
          <div className="text-sm font-medium">Developers</div>
          <div className="pl-4 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing", "_blank");
                onItemClick();
              }}
            >
              Documentation
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing", "_blank");
                onItemClick();
              }}
            >
              API Reference
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium">Resources</div>
          <div className="pl-4 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                window.location.href = "skype:live:lawalm?chat";
                onItemClick();
              }}
            >
              Support
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                setShowEmailDialog(true);
                onItemClick();
              }}
            >
              Contact
            </Button>
          </div>
        </div>

        <Link 
          to="/pricing" 
          className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
          onClick={onItemClick}
        >
          Pricing
        </Link>

        {/* Mobile Auth Buttons */}
        <div className="pt-4 border-t">
          <Link 
            to="/signin" 
            className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
            onClick={onItemClick}
          >
            Sign in
          </Link>
          <Button
            className="w-full mt-2"
            onClick={() => {
              setShowEmailDialog(true);
              onItemClick();
            }}
          >
            Become a Merchant
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
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

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-background">Developers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
                <ListItem 
                  href="https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing" 
                  title="Documentation"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing", "_blank");
                  }}
                >
                  Detailed guides and API references
                </ListItem>
                <ListItem 
                  href="https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing" 
                  title="API Reference"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing", "_blank");
                  }}
                >
                  Complete API documentation
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-background">Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 bg-white">
                <ListItem href="skype:live:lawalm?chat" title="Support" className="w-full">
                  Get help from our support team
                </ListItem>
                <div className="w-full">
                  <button
                    onClick={() => setShowEmailDialog(true)}
                    className="w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Contact</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get in touch with us
                    </p>
                  </button>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Pricing
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <EmailDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </>
  );
};