"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
    <Card className="w-full pt-4">
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
