import { localApi, mainApi } from "@/store/services"

export const authApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ jwt: string }, Partial<User>>({
      query: (body) => ({ url: "users/login", method: "POST", body }),
    }),
    register: builder.mutation<{ jwt: string }, Partial<User>>({
      query: (body) => ({ url: "users", method: "POST", body }),
    }),
  }),
})

export const tokenApi = localApi.injectEndpoints({
  endpoints: (builder) => ({
    setToken: builder.mutation<string, { token: string }>({
      query: (body) => ({ url: "auth", method: "POST", body }),
    }),
    deleteToken: builder.mutation<string, void>({
      query: () => ({ url: "auth", method: "DELETE" }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
export const { useSetTokenMutation, useDeleteTokenMutation } = tokenApi
