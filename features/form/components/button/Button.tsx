import { cn } from "@/lib/utils"
import { ButtonProps, Button as PrimeButton } from "primereact/button"

export default function Button(props: ButtonProps) {
  return (
    <PrimeButton
      {...props}
      className={cn("", props.className)}
    />
  )
}
