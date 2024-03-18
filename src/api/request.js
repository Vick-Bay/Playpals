import axios from 'axios'
import { baseURL } from './constants'
import { getAccessToken } from '@/api/asyncStore'

export const client = axios.create({
  baseURL: baseURL,
})

client.interceptors.request.use(
  (config) => {
    const token = getAccessToken()

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },

  async (error) => {
    console.log('error', error)

    return Promise.reject(error)
  },
)

const request = (options) => {
  return client(options)
}
export default request
