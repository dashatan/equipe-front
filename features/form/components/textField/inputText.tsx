import { InputText as PrimeInputText, InputTextProps } from "primereact/inputtext"
import { InputTextarea as PrimeInputTextarea, InputTextareaProps } from "primereact/inputtextarea"
import "./style.css"

export default function InputText(props: InputTextProps) {
  return <PrimeInputText {...props} />
}
export function InputTextarea(props: InputTextareaProps) {
  return <PrimeInputTextarea {...props} />
}
