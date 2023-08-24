import { Form } from "@/components/ui/form"
import { equipeForm } from "../schemas/create"

export default function EquipeForm() {
  function handleSubmit() {}
  return (
    <div>
      <Form {...equipeForm}>
        <form onSubmit={equipeForm.handleSubmit(handleSubmit)}>
            
        </form>
      </Form>
    </div>
  )
}
