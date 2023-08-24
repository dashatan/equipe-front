import {
  DropdownMenu as Dropdown,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAuth from "@/features/users/hooks/useAuth"
import { Edit, LogOut, MoreVertical } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DropdownMenu() {
  const { logout } = useAuth()
  const router = useRouter()
  return (
    <Dropdown>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-slate-300 rounded-full transition-all">
          <MoreVertical />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={()=>router.push('/profile/edit')}>
            <Edit size={16} />
            <span>Edit Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>
            <LogOut className="text-red-500" size={16} />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </Dropdown>
  )
}
