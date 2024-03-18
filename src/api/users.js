import { apiPayload } from '@/api/apiPayload'
import request from './request'
import axios from 'axios'

export const getAllUsers = async () => {
  console.log('getAllUsers')
  // const requestPayloadForAllUsers = apiPayload('/users', 'GET')
  // console.log('requestPayloadForAllUsers', requestPayloadForAllUsers)
  // const usersData = await request(requestPayloadForAllUsers)

  // normal GET request
  try {
    const response = await fetch('http://localhost:7777/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    // console.log('data', data)
    return data
  } catch (error) {
    console.error('error in request', error)
  }
  // return usersData.data
}
