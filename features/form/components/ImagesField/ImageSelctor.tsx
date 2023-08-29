import { Camera } from "lucide-react"
import { ChangeEvent, useRef } from "react"

export interface ImageBoxProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const box = [
  "w-16",
  "h-16",
  "p-0.5",
  "flex",
  "justify-center",
  "items-center",
  "border-2",
  "border-dashed",
  "rounded-lg",
].join(" ")

export default function ImageSelector({ onChange }: ImageBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  function handleClick() {
    if (fileInputRef.current) fileInputRef.current.click()
  }
  return (
    <>
      <div className={box} onClick={handleClick}>
        <Camera className="w-8" />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={onChange}
      />
    </>
  )
}
