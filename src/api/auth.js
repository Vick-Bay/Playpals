import request from './request'
import { apiPayload } from '@/api/apiPayload'
import store from '@/store/store'
import { setUser, setToken } from '@/store/authSlice'

export async function login(loginParams) {
  const requestPayloadForLogin = apiPayload('/login', 'POST', loginParams)
  const responseLogin = await request(requestPayloadForLogin)
  const token = responseLogin.headers.authorization
  if (token) {
    store.dispatch(setToken(token))
  }

  const requestPayloadForUser = apiPayload('/user-data', 'GET')
  const responseUser = await request(requestPayloadForUser)
  const user = responseUser.data
  if (user) {
    store.dispatch(setUser(user))
  }
}

export const logout = async () => {
  const requestPayload = apiPayload('/logout', 'DELETE')
  await request(requestPayload)
}
