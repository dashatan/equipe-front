import * as z from "zod"

export const createEquipeSchema = z.object({
  name: z.string(),
  description: z.string(),
  age: z.number().array(),
  categories: z.string().array(),
  city: z.string(),
  images: z.string(),
})

export type CreateEquipeSchemaType = z.infer<typeof createEquipeSchema>

export const inputTypes = {
  age: "range",
  categories: "select",
  city: "select",
  image: "file",
}
