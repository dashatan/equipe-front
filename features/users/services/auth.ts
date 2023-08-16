import { mainApi } from "@/store/services"

export const authApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
