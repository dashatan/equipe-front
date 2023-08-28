import { MultiSelectProps, MultiSelect as PrimeMultiSelect } from "primereact/multiselect"
import "./style.css"

export default function MultiSelect(props: MultiSelectProps) {
  return <PrimeMultiSelect {...props} />
}
