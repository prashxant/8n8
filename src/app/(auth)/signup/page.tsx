
import { SigninForm } from '@/features/auth/components/register-form'
import { requireUnAuth } from '@/lib/auth-utils'

 const Page = async() => {
  await requireUnAuth()
  return (

      <SigninForm/>

  )
}
export default Page
