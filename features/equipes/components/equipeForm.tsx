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
import { useCreateEquipeMutation } from "../services/equipes.service"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Users, Users2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Slider } from "@/components/ui/slider"
import { MultiSelect } from "primereact/multiselect"
import Select from "@/features/form/components/selectField/select"
import InputText, { InputTextarea } from "@/features/form/components/textField/inputText"
import Button from "@/features/form/components/button/Button"
import ImageField from "@/features/form/components/ImageField/ImageField"

export default function EquipeForm() {
  const [createEquip, { isLoading }] = useCreateEquipeMutation()
  const { toast } = useToast()

  const equipeForm = useForm<CreateEquipeSchemaType>({
    resolver: zodResolver(createEquipeSchema),
  })

  async function handleSubmit(values: CreateEquipeSchemaType) {
    const fd = new FormData()
    for (const val in values) {
      fd.append(val, (values as any)[val])
    }
    try {
      const res = await createEquip(fd).unwrap()
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
          className="flex flex-col w-full "
        >
          <div className="flex flex-col relative gap-10 md:max-w-lg">
            <FormField
              name="images"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    {/* <ImageField
                      label="Image"
                      maxFiles={10}
                      maxSize={10}
                      minDimension={[600, 400]}
                      name="file"
                      control={equipeForm.control}
                      onChange={(key, value) => {
                        field.onChange(value)
                        console.log(key, value)
                      }}
                    /> */}
                    <ImageField
                      onChange={(e) =>
                        field.onChange(e.target.files ? e.target.files[0] : undefined)
                      }
                    />
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="name"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <InputText {...field} />
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
                  <FormItem className="flex flex-col">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <InputTextarea {...field} className="h-20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="age"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Age Range</FormLabel>
                    <FormControl>
                      <Slider
                        defaultValue={field.value || [18, 40]}
                        step={1}
                        min={1}
                        max={100}
                        onValueChange={(value) => field.onChange(value)}
                        className="!mt-4"
                        withPreview
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              name="city"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel>City</FormLabel>
                    <Select
                      id={field.name}
                      onChange={(e) => field.onChange(e.value)}
                      value={field.value}
                      filter
                      options={[
                        { label: "tabriz", value: "tabriz" },
                        { label: "tehran", value: "tehran" },
                        { label: "esfahan", value: "esfahan" },
                        { label: "shiraz", value: "shiraz" },
                        { label: "gilan", value: "gilan" },
                      ]}
                    />
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <FormField
              name="categories"
              control={equipeForm.control}
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col">
                    <FormLabel>Categories</FormLabel>
                    <MultiSelect
                      onChange={(e) => field.onChange(e.value)}
                      id={field.name}
                      value={field.value}
                      display="chip"
                      filter
                      options={[
                        { label: "friendship", value: "friendship" },
                        { label: "sports", value: "sports" },
                        { label: "conversation", value: "conversation" },
                        { label: "work", value: "work" },
                      ]}
                    />
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <div className="sticky bottom-0 left-0  bg-white">
              <Button
                type="submit"
                className="my-6 w-full"
                rounded
                outlined
                label="Create Equipe"
                icon={<Users2 />}
                loading={isLoading}
              ></Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
