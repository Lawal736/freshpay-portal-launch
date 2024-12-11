import { NavigationItems } from "./navigation/NavigationItems"
import { AuthButtons } from "./navigation/AuthButtons"
import { Logo } from "./navigation/Logo"

export const MenuBar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Logo />
        <NavigationItems />
        <AuthButtons />
      </div>
    </div>
  )
}