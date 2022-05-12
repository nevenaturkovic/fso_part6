import { createSlice } from "@reduxjs/toolkit"

const initialState = ""
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilter(state, action) {
      return action.payload
    },
    clearFilter(state, action) {
      return ""
    },
  },
})


export const { searchFilter, clearFilter } = filterSlice.actions
export default filterSlice.reducer
