import { useState } from "react"
import ProgressBar from "./ProgressBar"
import RemoveBtn from "./RemoveBtn"
import Thumbnail from "./Thumbnail"
import { X } from "lucide-react"

export interface ImageCardProps {
  path: string
  onRemove: (path: string) => void
  progress?: number
  isValid?: boolean
  isUploading?: boolean
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
  "relative",
].join(" ")

export default function ImageCard({
  path,
  onRemove,
  progress,
  isValid,
  isUploading,
}: ImageCardProps) {
  return (
    <div className={box}>
      <RemoveBtn onClick={() => onRemove(path)} />
      <Thumbnail src={path}>
        {isUploading && <ProgressBar progress={progress || 0} />}
        {!isValid && <X className="w-12 text-red-500" />}
      </Thumbnail>
    </div>
  )
}
