import { requireAuth } from "@/lib/auth-utils";
import { Logout } from "./Logout";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth()

  const data = await caller.getUsers()

  return (
    <div className="min-h-screen flex-col min-w-screen justify-center items-center flex">
      <h1 className="text-2xl font-bold mb-4">Protected Server Page</h1>
      <div className="w-4xl max-w-4xl">
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
        <div className="mt-4">
          <Logout />
        </div>
      </div>
    </div>
  )
}
export default Page
