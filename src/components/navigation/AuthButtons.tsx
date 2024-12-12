import { Link } from "react-router-dom"
import { CountryFlags } from "./CountryFlags"

export const AuthButtons = () => {
  return (
    <div className="ml-auto flex items-center space-x-4">
      <Link to="/signin" className="text-sm font-medium hover:text-primary">
        Sign in
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to="/create-account"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Become a Merchant
        </Link>
        <CountryFlags />
      </div>
    </div>
  )
}