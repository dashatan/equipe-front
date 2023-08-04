"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLoginMutation } from "../services/user"
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

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "username should have at least 4 character"),
})

export default function LoginCard() {
  const [login, result] = useLoginMutation()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  })

  function handleSubmit(values: z.infer<typeof schema>) {
    console.log(values)
    login(values).then((res) => {
      console.log(res)
    })
  }

  return (
    <Card className="pt-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="flex flex-col gap-4 py-4">
            {Object.keys(schema.shape).map((key: any) => (
              <FormField
                control={form.control}
                name={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="p-2">{key}</FormLabel>
                    <FormControl>
                      <Input {...field} type={key}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-20" type="submit">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
