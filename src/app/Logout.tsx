'use client'

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"


export const Logout = () => {
  return (
    <div>
      <Button onClick={()=>authClient.signOut}>
        Logout
      </Button>
    </div>
  )
}
