import { createSlice } from "@reduxjs/toolkit"

const initialState = null
var timeoutID = null

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification(state, action) {
      const { message, kind } = action.payload
      return { message, kind }
    },
    removeNotification(state, action) {
      return null
    },
  },
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const createNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch(setNotification({ message, kind: "info" }))
    if (timeoutID != null) {
      clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(() => {
      dispatch(clearNotification())
    }, timeout)
  }
}

export const clearNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch(removeNotification())
    timeoutID = null
  }
}

export default notificationSlice.reducer
