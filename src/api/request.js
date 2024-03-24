import axios from 'axios'
import { baseURL } from './constants'
import store from '@/store/store'
import Toast from 'react-native-toast-message'
import { logout } from '@/store/authSlice'

export const client = axios.create({
  baseURL: baseURL,
})

client.interceptors.request.use(
  (res) => {
    if (res.request?.responseURL === `${baseURL}/login.json`) {
      store.dispatch(logout())
      Toast.show({
        type: 'error',
        text2: 'Session expired, please login again',
        text2Style: { fontSize: 18 },
      })
      return Promise.reject(res)
    }
    return res
  },

  async (err) => {
    console.log('error', err)
    if (err.response?.data?.error) {
      const errors = err.response.data.error
      const errorMessages = Object.keys(errors).map((key) => {
        return errors[key]
      })
      Toast.show({
        type: 'error',
        text2: errorMessages.join(', '),
        text2Style: { fontSize: 18 },
      })
    }
    return Promise.reject(err)
  },
)

const request = (options) => {
  return client(options)
}
export default request
