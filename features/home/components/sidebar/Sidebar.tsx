"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGetUserQuery } from "@/features/users/services/users"
import { useAppSelector } from "@/store/store"
import DropdownMenu from "./DropdownMenu"
import { Separator } from "@/components/ui/seperator"
import { useRouter } from "next/navigation"
import { menuItems } from "../../static/menuItems"

export default function Sidebar() {
  const store = useAppSelector((x) => x)
  const token = store.auth.token
  const { data: user } = useGetUserQuery({ token })
  const router = useRouter()

  if (!user) return <></>
  return (
    <div className="flex flex-col">
      <div id="Avatar" className="flex justify-between items-center p-4">
        <Avatar
          className="w-16 h-16 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          <AvatarImage src={user?.avatar} />
          <AvatarFallback>{user?.name.slice(0, 1).toLocaleUpperCase()}</AvatarFallback>
        </Avatar>
        <DropdownMenu />
      </div>
      <div className="px-4">
        <Separator className="bg-slate-300" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              className="w-full cursor-pointer hover:bg-slate-300 flex items-center p-4 gap-4 rounded-md"
              onClick={() => router.push(item.url)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
