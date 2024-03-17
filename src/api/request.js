import axios from 'axios'
import { baseURL } from './constants'
import { getAccessToken } from '@/api/asyncStore'

export const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || baseURL,
})

client.interceptors.request.use(
  (config) => {
    const token = getAccessToken()

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  },
)

const request = (options) => {
  return client(options)
}

export default request
