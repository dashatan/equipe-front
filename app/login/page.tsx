import LoginCard from "@/features/users/components/LoginCard"
import Image from "next/image"
import banner from "@/public/banner-white.png"

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-[500px] md:min-w-[500px] p-2 shadow-md flex flex-col gap-4">
        <Image src={banner} alt="" priority className="pointer-events-none" />
        <LoginCard />
      </div>
      <div className="w-full hidden md:flex from-orange-300 to-fuchsia-600 bg-gradient-to-r"></div>
    </div>
  )
}
