"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Logout() {
  const router = useRouter()
  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" }).then(() => {
      router.push("/login")
    })
  }
  return <Button onClick={handleLogout}>LogOut</Button>
}
