'use client'

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const Logout = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/login')
          },
          onError: (ctx) => {
            console.error('Logout error:', ctx.error)
          }
        }
      })
    } catch (error) {
      console.error('Logout failed:', error)
      // Force redirect even if there's an error
      router.push('/login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Button
        onClick={handleLogout}
        disabled={isLoading}
      >
        {isLoading ? 'Logging out...' : 'Logout'}
      </Button>
    </div>
  )
}
