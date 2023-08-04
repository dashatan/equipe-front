import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const mainApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: () => ({}),
})
