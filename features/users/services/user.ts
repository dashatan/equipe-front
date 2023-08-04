import { mainApi } from "@/store/services"

export const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, { email: string; password: string }>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = userApi
