import { Button } from "@/components/ui/button"
import { ListItem } from "../ListItem"
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

interface ResourcesSectionProps {
  isMobile?: boolean
  onItemClick?: () => void
  onContactClick: () => void
}

export const ResourcesSection = ({ isMobile, onItemClick = () => {}, onContactClick }: ResourcesSectionProps) => {
  if (isMobile) {
    return (
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
              onContactClick();
              onItemClick();
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    )
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-background">Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 bg-white">
          <ListItem href="skype:live:lawalm?chat" title="Support" className="w-full">
            Get help from our support team
          </ListItem>
          <div className="w-full">
            <button
              onClick={onContactClick}
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
  )
}