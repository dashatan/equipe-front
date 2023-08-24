import { mainApi } from "@/store/services"

export const equipesApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getEquipes: builder.query<Equipe[], void>({
      query: () => "equipes",
    }),
  }),
})

export const { useGetEquipesQuery } = equipesApi
