import LoginCard from "@/features/users/components/Login"
import Image from "next/image"
import banner from "@/public/banner-white.png"
import RegisterCard from "@/features/users/components/Register"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Register() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-[500px] md:min-w-[500px] p-2 shadow-md flex flex-col gap-4">
        <Image src={banner} alt="" priority className="pointer-events-none" />
        <RegisterCard />
        <Link href={"/login"}>
          <Button variant="default" className="w-full">
            Login
          </Button>
        </Link>
      </div>
      <div className="w-full hidden md:flex from-orange-300 to-fuchsia-600 bg-gradient-to-r"></div>
    </div>
  )
}
