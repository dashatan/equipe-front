import LoginCard from "@/features/users/components/Login"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  
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
