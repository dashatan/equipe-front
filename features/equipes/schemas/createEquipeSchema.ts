import * as z from "zod"

export const createEquipeSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  age: z.number().array().optional(),
  categories: z.string().array(),
  city: z.string().optional(),
  images: z.instanceof(File),
})

export type CreateEquipeSchemaType = z.infer<typeof createEquipeSchema>

export const inputTypes = {
  age: "range",
  categories: "select",
  city: "select",
  image: "file",
}
