import request from './request'
import { storeAccessToken, storeUserInfo } from '@/api/asyncStore'
import { apiPayload } from '@/api/apiPayload'

export async function login(loginParams) {
  const requestPayloadForLogin = apiPayload('/login', 'POST', loginParams)
  const responseLogin = await request(requestPayloadForLogin)
  const token = responseLogin.headers.authorization
  if (token) {
    await storeAccessToken(token)
  }

  const requestPayloadForUser = apiPayload('/user-data', 'GET')
  const responseUser = await request(requestPayloadForUser)
  const user = responseUser.data
  if (user) {
    await storeUserInfo(user)
  }
}
//
// export async function register(data) {
//   const response = await request({
//     method: 'POST',
//     url: '/api/auth/register',
//     data,
//   })
//   return response.data
// }
//
// export async function verification(data) {
//   const response = await instance({
//     method: 'POST',
//     url: '/api/auth/activation',
//     data,
//   })
//   return response.data
// }
//
// export async function forgotPassword(data) {
//   try {
//     const response = await instance({
//       method: 'POST',
//       url: '/api/auth/forgot-password',
//       data,
//     })
//     return response.data
//   } catch (error) {
//     throw new Error(error.response.data.message)
//   }
// }
//
// export async function resetPassword(data) {
//   try {
//     const response = await instance({
//       method: 'POST',
//       url: '/api/auth/reset-password',
//       data,
//     })
//     return response.data
//   } catch (error) {
//     throw new Error(error.response.data.message)
//   }
// }
//
// export async function changePassword(data) {
//   const response = await instance({
//     method: 'POST',
//     url: '/api/auth/change-password',
//     data,
//   })
//   return response.data
// }
