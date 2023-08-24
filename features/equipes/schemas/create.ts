import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const createEquipeSchema = z.object({
  name: z.string(),
  description: z.string(),
  age: z.number().array(),
  categories: z.string().array(),
  city: z.string(),
  image: z.instanceof(File),
})

export const equipeForm = useForm<z.infer<typeof createEquipeSchema>>({
    resolver: zodResolver(createEquipeSchema),
  })