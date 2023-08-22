import { useToast } from "@/components/ui/use-toast"
import {
  useDeleteTokenMutation,
  useLoginMutation,
  useRegisterMutation,
  useSetTokenMutation,
} from "../services/auth"
import { useRouter } from "next/navigation"

export default function useAuth() {
  const [Login, loginRes] = useLoginMutation()
  const [Register, registerRes] = useRegisterMutation()
  const [setToken, setTokenRes] = useSetTokenMutation()
  const [deleteToken, deleteTokenRes] = useDeleteTokenMutation()
  const { toast } = useToast()
  const router = useRouter()

  async function login(values: Partial<User>) {
    try {
      const { jwt } = await Login(values).unwrap()
      await setToken({ token: jwt }).then(() => router.push("/profile"))
    } catch (err: any) {
      const message = err?.data?.message
      toast({ title: message, variant: "error" })
    }
  }
  async function register(values: Partial<User>) {
    try {
      const { jwt } = await Register(values).unwrap()
      await setToken({ token: jwt })
      router.push("/profile")
    } catch (err: any) {
      const message = err?.data?.message
      toast({ title: message, variant: "error" })
    }
  }
  async function logout() {
    try {
      await deleteToken()
      router.push("/login")
    } catch (err: any) {
      const message = err?.data?.message
      toast({ title: message, variant: "error" })
    }
  }
  return {
    login,
    Login,
    loginRes,
    register,
    Register,
    registerRes,
    logout,
    setToken,
    setTokenRes,
    deleteToken,
    deleteTokenRes,
  }
}
