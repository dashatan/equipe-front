import { mainApi } from "@/store/services"

export const filesApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    tempFileUpload: builder.mutation<string, FormData>({
      query: (body) => ({ url: "files/tempUpload", method: "POST", body }),
    }),
    tempFileRemove: builder.mutation<string, string>({
      query: (body) => ({ url: "files/tempUpload", method: "DELETE", body }),
    }),
  }),
})

export const { useTempFileRemoveMutation, useTempFileUploadMutation } = filesApi
