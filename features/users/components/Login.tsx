"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLoginMutation, useSetTokenMutation } from "../services/auth"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { authSlice } from "../slices/auth"
import { SearchSlice } from "@/store/slices"
import { useRouter } from "next/navigation"
import { cookies } from "next/headers"
import useAuth from "../hooks/useAuth"
import { Icons } from "@/components/ui/Icons"

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password should have at least 8 character"),
})

export default function Login() {
  const { login, loginRes, setTokenRes } = useAuth()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  async function handleSubmit(values: z.infer<typeof schema>) {
    login(values)
  }

  const loading = loginRes.isLoading || setTokenRes.isLoading

  return (
    <Card className="pt-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="flex flex-col gap-4 py-4">
            {Object.keys(schema.shape).map((key: any) => (
              <FormField
                key={key}
                control={form.control}
                name={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="p-2">{key}</FormLabel>
                    <FormControl>
                      <Input {...field} type={key} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="destructive" type="submit">
              {loading ? <Icons.spinner className="animate-spin" /> : <span>Submit</span>}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
