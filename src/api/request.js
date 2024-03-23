import axios from 'axios'
import { baseURL } from './constants'
import { getAccessToken } from '@/api/asyncStore'

export const client = axios.create({
  baseURL: baseURL,
})

client.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },

  async (error) => {
    return Promise.reject(error)
  },
)

const request = (options) => {
  return client(options)
}
export default request
