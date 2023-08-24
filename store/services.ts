import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "./store"
export const mainApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) headers.set("Authorization", `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: () => ({}),
})

export const localApi = createApi({
  reducerPath: "local",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3080/api/" }),
  endpoints: () => ({}),
})
