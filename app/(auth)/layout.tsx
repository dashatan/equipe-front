
import Image from "next/image"
import banner from "@/public/banner-white.png"
import { cookies } from "next/headers"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-[500px] md:min-w-[500px] p-2 shadow-md flex flex-col gap-4">
        <Image src={banner} alt="" priority className="pointer-events-none" />
        {cookieStore.getAll.length}
        {children}
      </div>
      <div className="w-full hidden md:flex from-orange-300 to-fuchsia-600 bg-gradient-to-r"></div>
    </div>
  )
}
