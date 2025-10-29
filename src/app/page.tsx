


import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
await requireAuth()
const {data } = authClient.useSession()

  return(
    <div className="min-h-screen min-w-screen justify-center items-center flex ">
   {JSON.stringify(data)}
    {data && (  <Button onClick={()=>(authClient.signOut)}>
    Logut
   </Button>)}
    </div>
  )
}
export default Page
