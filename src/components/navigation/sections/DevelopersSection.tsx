import { Button } from "@/components/ui/button"
import { ListItem } from "../ListItem"
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

interface DevelopersSectionProps {
  isMobile?: boolean
  onItemClick?: () => void
}

export const DevelopersSection = ({ isMobile, onItemClick = () => {} }: DevelopersSectionProps) => {
  const handleExternalLink = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, "_blank");
    onItemClick();
  };

  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="text-sm font-medium">Developers</div>
        <div className="pl-4 space-y-3">
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={handleExternalLink("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing")}
          >
            Documentation
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={handleExternalLink("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing")}
          >
            API Reference
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            onClick={handleExternalLink("https://sandbox.gofreshpay.com/")}
          >
            Sandbox
          </Button>
        </div>
      </div>
    )
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-background">Developers</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
          <ListItem 
            href="https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing" 
            title="Documentation"
            onClick={handleExternalLink("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing")}
          >
            Detailed guides and API references
          </ListItem>
          <ListItem 
            href="https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing" 
            title="API Reference"
            onClick={handleExternalLink("https://drive.google.com/file/d/1pRVAOWYq6E9RF3CpPLAN4jKGXiuGkRQl/view?usp=sharing")}
          >
            Complete API documentation
          </ListItem>
          <ListItem 
            href="https://sandbox.gofreshpay.com/" 
            title="Sandbox"
            onClick={handleExternalLink("https://sandbox.gofreshpay.com/")}
          >
            Test your integration
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}