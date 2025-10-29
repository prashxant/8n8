
import { SigninForm } from '@/features/auth/components/register-form'
import { requireUnAuth } from '@/lib/auth-utils'
import React from 'react'

 const Page = async() => {
  await requireUnAuth()
  return (
    <div>
      <SigninForm/>
    </div>
  )
}
export default Page
