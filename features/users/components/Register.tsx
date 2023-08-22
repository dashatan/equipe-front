"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  useLoginMutation,
  useRegisterMutation,
  useSetTokenMutation,
} from "../services/auth"
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
import { useRouter } from "next/navigation"
import useAuth from "../hooks/useAuth"

export const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "password should have at least 8 character"),
})

export default function Register() {
  const { register } = useAuth()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  async function handleSubmit(values: z.infer<typeof schema>) {
    register(values)
  }

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
            <Button className="w-full mt-8" type="submit" variant="destructive">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
