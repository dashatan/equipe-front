import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  text: "",
  city: "",
  category: "",
}

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    text: (state, action) => {
      state.text = action.payload
    },
    city: (state, action) => {
      state.city = action.payload
    },
    category: (state, action) => {
      state.category = action.payload
    },
  },
})
