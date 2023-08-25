"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CreateEquipeSchemaType, createEquipeSchema } from "../schemas/createEquipeSchema"
import { Input, Textarea } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCreateEquipeMutation } from "../services/equipes.service"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ImageField from "@/features/form/components/ImageField"

export default function EquipeForm() {
  const [createEquip, { isLoading }] = useCreateEquipeMutation()
  const { toast } = useToast()

  const equipeForm = useForm<CreateEquipeSchemaType>({
    resolver: zodResolver(createEquipeSchema),
  })

  async function handleSubmit(values: CreateEquipeSchemaType) {
    try {
      const res = await createEquip(values).unwrap()
      console.log(res)
    } catch (error: any) {
      console.log(error)
      const message = error?.data?.message
      toast({ title: message, variant: "error" })
    }
  }
  return (
    <div className="flex flex-col p-2 md:p-10">
      <Form {...equipeForm}>
        <form
          onSubmit={equipeForm.handleSubmit(handleSubmit)}
          className="flex flex-col w-full md:gap-10 md:grid md:grid-cols-2 "
        >
          <div className="md:max-w-lg">
            <FormField
              name="images"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <ImageField
                      label="Image"
                      maxFiles={1}
                      maxSize={10}
                      minDimension={[600, 400]}
                      name="file"
                      control={equipeForm.control}
                      onChange={(key, value) => {
                        field.onChange(value)
                        console.log(key, value)
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <Button variant={"destructive"} type="submit" className="my-6 ">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <span> Create Equipe</span>
              )}
            </Button>
          </div>
          <div className="flex flex-col gap-10 md:max-w-lg">
            <FormField
              name="name"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="description"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="h-40" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
        </form>
      </Form>
    </div>
  )
}
