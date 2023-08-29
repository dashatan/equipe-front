import { Trash } from "lucide-react"

export interface RemoveBtnProps {
  onClick: () => void
}

const rmBtn = [
  "w-6",
  "h-6",
  "bg-light-2",
  "absolute",
  "-top-2",
  "-right-2",
  "flex",
  "justify-center",
  "items-center",
  "rounded-full",
].join(" ")

export default function RemoveBtn({ onClick }: RemoveBtnProps) {
  return (
    <div className={rmBtn} onClick={() => onClick()}>
      <Trash className="w-4 text-red-500" />
    </div>
  )
}
