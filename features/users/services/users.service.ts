import { mainApi } from "@/store/services"

export const usersApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User, undefined>({
      query: () => "users",
    }),
    getUser: builder.query<User, string | void>({
      query: (id) => `users/${id}`,
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({ url: "users", method: "PUT", body }),
    }),
    deleteUser: builder.mutation<User, string>({
      query: (id) => ({ url: "users", method: "PUT", body: { id } }),
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
  useUpdateUserMutation,
} = usersApi
