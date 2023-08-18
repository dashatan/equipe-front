import { configureStore } from "@reduxjs/toolkit"
import { mainApi } from "./services"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { authReducer, authSlice } from "@/features/users/slices/auth"
import { SearchSlice } from "./slices"

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [authSlice.name]: authReducer,
    [SearchSlice.name]: SearchSlice.reducer,
  },
  middleware: (defMid) => defMid().concat(mainApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
