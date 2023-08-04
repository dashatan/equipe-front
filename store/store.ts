import { configureStore } from "@reduxjs/toolkit"
import { mainApi } from "./services"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (defMid) => defMid().concat(mainApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
