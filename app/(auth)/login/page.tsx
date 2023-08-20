import LoginCard from "@/features/users/components/Login"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cookies } from "next/headers"

export default function LoginPage() {
  const c = cookies()

  return (
    <>
      <LoginCard />
      <Link href={"/register"}>
        <Button variant="default" className="w-full">
          Register
        </Button>
      </Link>
    </>
  )
}
