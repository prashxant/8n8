"use client"

import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { authClient } from "@/lib/auth-client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";




const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1,"Password requried"),
  confirmpassword: z.string()

})
.refine((data) => data.password === data.confirmpassword, {
  message: "Passwords do not match",
  path: ["confirmpassword"],
})


type SignupFormValues = z.infer<typeof registerSchema>


export function SigninForm  (){
  const router = useRouter()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues:{
      email: "",
      password:"",
      confirmpassword:""
    }
  });

  const onSubmit = async (values : SignupFormValues) => {
    await authClient.signUp.email(
      {
      name: values.email,
      email: values.email,
      password: values.password,
      callbackURL:"/"
    },{
     onSuccess:()=>{
        router.push("/")
      },
      onError:(ctx)=> {
        toast.error(ctx.error.message)
      }
    }
    )
  }
  const isPending = form.formState.isSubmitting;

  return(
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>
            Get Started
          </CardTitle>
          <CardDescription>
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                   <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  disabled={isPending}
                  >
                  <Image src='/git.svg' width={20} height={20}alt="githhub" />
                    Continue With Github
                  </Button>
                  <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  disabled={isPending}
                  >
                  <Image src='/goo.svg' height={20} width={20} alt="google" />
                    Continue With Google
                  </Button>

                </div>
                <div className="grid gap-6">
                  <FormField
                  control={form.control}
                  name="email"
                  render={({field }) =>(
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input
                    type="email"
                    placeholder="prash@gmail.com"
                    {...field}
                    />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>)}
                  />
                  <FormField
                  control={form.control}
                  name="password"
                  render={({field }) =>(
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input
                    type="Password"
                    placeholder="********"
                    {...field}
                    />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>)}
                  />
                   <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({field }) =>(
                    <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                    <Input
                    type="Password"
                    placeholder="********"
                    {...field}
                    />
                    </FormControl>
                    <FormMessage/>
                    </FormItem>)}
                  />
                  <Button type="submit"
                  className="w-full"
                  disabled={isPending}>
                    Login
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account? {" "}
                  <Link href='/login'
                  className="underline underline-offset-4">
                  Login
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

    </div>
  )

}
