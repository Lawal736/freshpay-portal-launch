import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface MobileAuthSectionProps {
  onItemClick: () => void
  onContactClick: () => void
}

export const MobileAuthSection = ({ onItemClick, onContactClick }: MobileAuthSectionProps) => {
  return (
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
          onContactClick();
          onItemClick();
        }}
      >
        Become a Merchant
      </Button>
    </div>
  )
}