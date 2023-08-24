"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useGetUserQuery } from "@/features/users/services/users.service"
import DropdownMenu from "./dropdownMenu"
import { Separator } from "@/components/ui/seperator"
import { useRouter } from "next/navigation"
import { menuItems } from "./static/menuItems"

export default function Sidebar() {
  const { data: user } = useGetUserQuery()
  const router = useRouter()

  return (
    <div className="flex flex-col">
      <div id="Avatar" className="flex items-center justify-between p-4">
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
      <div className="flex flex-col gap-4 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              className="flex items-center w-full gap-4 p-4 rounded-md cursor-pointer hover:bg-slate-300"
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
