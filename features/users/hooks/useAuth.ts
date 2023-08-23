import { useToast } from "@/components/ui/use-toast"
import {
  useDeleteTokenMutation,
  useLoginMutation,
  useRegisterMutation,
  useSetTokenMutation,
} from "../services/auth"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/store/store"
import { authSlice } from "../slices/auth"

export default function useAuth() {
  const [Login, loginRes] = useLoginMutation()
  const [Register, registerRes] = useRegisterMutation()
  const [setToken, setTokenRes] = useSetTokenMutation()
  const [deleteToken, deleteTokenRes] = useDeleteTokenMutation()
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const router = useRouter()

  async function login(values: Partial<User>) {
    try {
      const { jwt } = await Login(values).unwrap()
      await setToken({ token: jwt }).then(() => {
        dispatch(authSlice.actions.token(jwt))
        router.push("/")
      })
    } catch (err: any) {
      console.log(err)
      const message = err?.data?.message
      toast({ title: message, variant: "error" })
    }
  }
  async function register(values: Partial<User>) {
    try {
      const { jwt } = await Register(values).unwrap()
      await setToken({ token: jwt }).then(() => {
        dispatch(authSlice.actions.token(jwt))
        router.push("/")
      })
    } catch (err: any) {
      console.log(err)
      const message = err?.data?.message
      toast({ title: message, variant: "error" })
    }
  }
  async function logout() {
    try {
      await deleteToken()
      router.push("/auth")
    } catch (err: any) {
      console.log(err)
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
