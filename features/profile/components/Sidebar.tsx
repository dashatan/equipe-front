"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAuth from "@/features/users/hooks/useAuth"
import { useGetUserQuery } from "@/features/users/services/users"
import { useAppSelector } from "@/store/store"
import { Edit, LogOut, MoreVertical, Trash } from "lucide-react"

export default function Sidebar() {
  const store = useAppSelector((x) => x)
  const token = store.auth.token
  const { data: user, isFetching } = useGetUserQuery({ token })
  const { logout } = useAuth()
  console.log(isFetching)

  //   if (!user) return <></>
  return (
    <div className="flex flex-col">
      <div id="Avatar" className="flex justify-between">
        <Avatar>
          <AvatarImage src={user?.avatar} />
          <AvatarFallback>{user?.name.slice(0, 1).toLocaleUpperCase()}</AvatarFallback>
        </Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Edit />
                <span>Edit Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="text-red-500" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
