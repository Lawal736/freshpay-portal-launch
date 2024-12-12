import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Globe, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { ListItem } from "./ListItem"
import { EmailDialog } from "../EmailDialog"
import { useState } from "react"

export const NavigationItems = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-background">Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                <ListItem href="/payments" title="Payments">
                  Accept payments from multiple channels
                </ListItem>
                <ListItem href="/transfers" title="Transfers">
                  Send money across borders
                </ListItem>
                <ListItem href="/commerce" title="Commerce">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Launch your online business</span>
                  </div>
                </ListItem>
                <ListItem href="/global" title="Global Reach">
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
                <ListItem href="/documentation" title="Documentation">
                  Detailed guides and API references
                </ListItem>
                <ListItem href="/api-reference" title="API Reference">
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
  )
}