'use client'
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client"
import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { toast } from "sonner";


const Page =  () => {

  const trpc = useTRPC();
  // const queryClient = useQueryClient()
  // const {data} = useQuery(trpc.getwrokflows.queryOp)
  const testAi = useMutation( trpc.testAi.mutationOptions({
    onSuccess:()=>{
      toast.success("AI job queued")
    }
  }))



  return (
    <div className="min-h-screen flex-col min-w-screen justify-center items-center flex">
        <Button
        disabled={testAi.isPending}
        onClick={()=>testAi.mutate()}
        >Test AI</Button>
    </div>
  )
}
export default Page
