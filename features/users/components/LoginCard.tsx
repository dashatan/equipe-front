"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLoginMutation } from "../services/user"

export default function LoginCard() {
  const [login, result] = useLoginMutation()
  return (
    <Card className="pt-4 w-full">
      <CardContent className="flex flex-col gap-4">
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
      </CardContent>
      <CardFooter>
        <Button >Submit</Button>
      </CardFooter>
    </Card>
  )
}
