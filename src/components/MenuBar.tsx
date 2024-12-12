import { NavigationItems } from "./navigation/NavigationItems"
import { AuthButtons } from "./navigation/AuthButtons"
import { Logo } from "./navigation/Logo"

export const MenuBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Logo />
        <NavigationItems />
        <AuthButtons />
      </div>
    </div>
  )
}