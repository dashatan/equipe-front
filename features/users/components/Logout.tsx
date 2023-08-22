"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import useAuth from "../hooks/useAuth"

export default function Logout() {
  const { logout } = useAuth()

  return <Button onClick={logout}>LogOut</Button>
}
