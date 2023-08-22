import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const mainApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: () => ({}),
})

export const localApi = createApi({
  reducerPath: "local",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3080/api/" }),
  endpoints: () => ({}),
})
