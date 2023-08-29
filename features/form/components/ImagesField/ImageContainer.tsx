import { ReactNode } from "react"

export interface IMageContainerProps {
  label: string
  children: ReactNode
}
export default function ImageContainer({ label, children }: IMageContainerProps) {
  return (
    <>
      <div className="px-2">{label}</div>
      <div className="flex flex-wrap gap-4 p-2 border rounded-lg">{children}</div>
    </>
  )
}
