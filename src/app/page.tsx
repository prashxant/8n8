



import { requireAuth } from "@/lib/auth-utils";
import { Logout } from "./Logout";
import { authClient } from "@/lib/auth-client";
import { caller } from "@/trpc/server";

const Page = async () => {
await requireAuth()

const data = await caller.getUsers()

  return(
    <div className="min-h-screen flex-col min-w-screen justify-center items-center flex ">
   protected server
   <div className="w-4xl">
    {JSON.stringify(data,null,2)}
    <Logout/>
   </div>
    </div>
  )
}
export default Page
