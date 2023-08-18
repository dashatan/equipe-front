"use client"

import { persistStore } from "redux-persist"
import { store } from "./store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

export function Providers({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  )
}
