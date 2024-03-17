import { apiPayload } from '@/api/apiPayload'
import request from './request'

export const getAllUsers = async () => {
  const requestPayloadForAllUsers = apiPayload('/users', 'GET')
  const usersData = await request(requestPayloadForAllUsers)
  return usersData.data
}
