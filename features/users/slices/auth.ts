import { createSlice } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const initialState = {
  token: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    token: (state, action) => {
      state.token = action.payload
    },
  },
})

const persistConfig = { key: "auth", version: 1, storage }
export const authReducer = persistReducer(persistConfig, authSlice.reducer)
