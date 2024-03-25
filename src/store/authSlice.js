import { createSlice } from '@reduxjs/toolkit'

// Initial state
const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
}

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isLoggedIn = true
    },
    loginFailure(state) {
      state.isLoggedIn = false
      state.user = null
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
    },
    setUser(state, action) {
      state.user = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    },
  },
})

export const { setToken, loginSuccess, setUser, loginFailure, logout } =
  authSlice.actions

export default authSlice.reducer
