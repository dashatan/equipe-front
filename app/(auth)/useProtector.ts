"use client"

import { useAppSelector } from "@/store/store"
import { redirect } from "next/navigation"

export default function useProtector() {
  const store = useAppSelector((x) => x)
  const token = store.auth.token
  if (token) {
    redirect("profile")
  }
}
