import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";

const Page = async () => {

const queryClient = getQueryClient();

void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  return(
    <div className="min-h-screen min-w-screen justify-center items-center flex ">
     <HydrationBoundary state={dehydrate(queryClient)}>
      <Client/>
     </HydrationBoundary>
    </div>
  )
}
export default Page
