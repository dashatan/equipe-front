import { mainApi } from "@/store/services"

export const usersApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User, undefined>({
      query: () => "users",
    }),
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: "users",
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: "users",
        method: "PUT",
        body: {id},
      }),
    }),
  }),
})

export const {} = usersApi
