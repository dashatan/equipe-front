import { configureStore } from "@reduxjs/toolkit"
import { localApi, mainApi } from "./services"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { authReducer, authSlice } from "@/features/users/slices/auth"
import { SearchSlice } from "./slices"

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [localApi.reducerPath]: localApi.reducer,
    [authSlice.name]: authReducer,
    [SearchSlice.name]: SearchSlice.reducer,
  },
  middleware: (defMid) =>
    defMid({
      serializableCheck: { ignoredActions: ["persist/REHYDRATE", "persist/PERSIST"] },
    })
      .concat(mainApi.middleware)
      .concat(localApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
