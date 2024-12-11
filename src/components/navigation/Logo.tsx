import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <div className="mr-4 flex">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="/lovable-uploads/0ee92787-a6b7-4cef-96e3-83dd615b6e6b.png" 
          alt="FreshPay Logo" 
          className="h-8"
        />
      </Link>
    </div>
  )
}