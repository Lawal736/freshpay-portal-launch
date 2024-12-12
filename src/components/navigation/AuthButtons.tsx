import { Link } from "react-router-dom"
import { CountryFlags } from "./CountryFlags"
import { EmailDialog } from "../EmailDialog"
import { useState } from "react"
import { Button } from "../ui/button"

export const AuthButtons = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  return (
    <div className="ml-auto flex items-center space-x-4">
      <Link to="/signin" className="text-sm font-medium hover:text-primary">
        Sign in
      </Link>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setShowEmailDialog(true)}
          className="whitespace-nowrap"
        >
          Become a Merchant
        </Button>
        <CountryFlags />
      </div>
      <EmailDialog open={showEmailDialog} onOpenChange={setShowEmailDialog} />
    </div>
  )
}