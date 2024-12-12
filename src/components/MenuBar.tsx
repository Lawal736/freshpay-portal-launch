import { NavigationItems } from "./navigation/NavigationItems"
import { AuthButtons } from "./navigation/AuthButtons"
import { Logo } from "./navigation/Logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationItems />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] pt-16">
              <NavigationItems isMobile={true} onItemClick={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          <AuthButtons />
        </div>
      </div>
    </div>
  )
}