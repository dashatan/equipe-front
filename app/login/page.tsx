import LoginCard from "@/features/users/components/Login"
import Image from "next/image"
import banner from "@/public/banner-white.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-[500px] md:min-w-[500px] p-2 shadow-md flex flex-col gap-4">
        <Image src={banner} alt="" priority className="pointer-events-none" />
        <LoginCard />
        <Link href={"/register"}>
          <Button variant="default" className="w-full">Register</Button>
        </Link>
      </div>
      <div className="w-full hidden md:flex from-orange-300 to-fuchsia-600 bg-gradient-to-r"></div>
    </div>
  )
}
