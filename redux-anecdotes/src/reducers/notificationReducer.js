import { createSlice } from "@reduxjs/toolkit"

const initialState = null
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification(state, action) {
      const { message, kind } = action.payload
      return { message, kind }
    },
    clearNotification(state, action) {
      return null
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export const createNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch(setNotification({ message, kind: "info" }))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout)
  }
}

export default notificationSlice.reducer
