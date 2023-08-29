"use client"
import { Camera, Trash2, X } from "lucide-react"
import { Button } from "primereact/button"
import { useEffect, useRef, useState } from "react"
type fileInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export default function ImageField(props: fileInputType) {
  const ref = useRef<any>()
  const [files, setFiles] = useState<FileList | null>()
  const url = files && URL.createObjectURL(files[0])

  return (
    <div
      className="border-2 border-dashed border-gray-200 bg-teal-50 rounded-3xl h-32 w-32 
                 flex items-center justify-center cursor-pointer relative ng-cover bg-center "
      onClick={() => {
        if (!files && ref?.current) ref.current.click()
      }}
    style={{backgroundImage:`url(${url})`}}
    >
      {files ? (
        <>
          {/* <img src={URL.createObjectURL(files[0])} alt="" className="w-full" /> */}
          <Button
            rounded
            severity="danger"
            className="absolute -top-1 -left-1 !p-1"
            size="small"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setFiles(undefined)
              ref.current.value = ""
            }}
          >
            <X className="text-white" size={12} />
          </Button>
        </>
      ) : (
        <Camera className="text-teal-500" size={64} />
      )}

      <input
        {...props}
        ref={ref}
        hidden
        type="file"
        onChange={(e) => {
          setFiles(e.target.files)
          props.onChange && props.onChange(e)
        }}
      />
    </div>
  )
}
