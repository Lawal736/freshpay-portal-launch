import { Link } from "react-router-dom"

export const AuthButtons = () => {
  return (
    <div className="ml-auto flex items-center space-x-4">
      <Link to="/signin" className="text-sm font-medium hover:text-primary">
        Sign in
      </Link>
      <Link
        to="/create-account"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Create Merchant Account
      </Link>
    </div>
  )
}