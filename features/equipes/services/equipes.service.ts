import { mainApi } from "@/store/services"
import { CreateEquipeSchemaType } from "../schemas/createEquipeSchema"

export const equipesApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getEquipes: builder.query<Equipe[], void>({
      query: () => "equipes",
    }),
    createEquipe: builder.mutation<Equipe, CreateEquipeSchemaType>({
      query: (body) => ({ url: "equipes", method: "POST", body }),
    }),
  }),
})

export const { useGetEquipesQuery, useCreateEquipeMutation } = equipesApi
