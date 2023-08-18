import RegisterCard from "@/features/users/components/Register"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  return (
    <>
      <RegisterCard />
      <Link href={"/login"}>
        <Button variant="default" className="w-full">
          Login
        </Button>
      </Link>
    </>
  )
}
