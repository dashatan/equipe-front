import { useAppSelector } from "@/store/store"
import { redirect } from "next/navigation"

export default function useAuth(url?: string) {
  const store = useAppSelector((x) => x)
  const token = store.auth.token
}
