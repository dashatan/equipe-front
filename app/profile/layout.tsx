import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Logout from "@/features/users/components/Logout"
import Sidebar from "@/features/profile/components/Sidebar"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const authToken = cookies().get("authToken")?.value
  if (!authToken) redirect("/login")

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="w-[300px] bg-slate-200">
        <Sidebar/>
      </div>
      <div className="w-[calc(100vw_-_300px)] bg-white h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
