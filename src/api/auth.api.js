import { instance } from './instance'

export class Auth {
  static async login(data) {
    const response = await instance({
      method: 'POST',
      url: '/api/auth/login',
      data: {
        email: data.email,
        password: data.password,
      },
    })
    return response.data
  }

  static async register(data) {
    const response = await instance({
      method: 'POST',
      url: '/api/auth/register',
      data,
    })
    return response.data
  }

  static async verification(data) {
    const response = await instance({
      method: 'POST',
      url: '/api/auth/activation',
      data,
    })
    return response.data
  }

  static async forgotPassword(data) {
    try {
      const response = await instance({
        method: 'POST',
        url: '/api/auth/forgot-password',
        data,
      })
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message)
    }
  }

  static async resetPassword(data) {
    try {
      const response = await instance({
        method: 'POST',
        url: '/api/auth/reset-password',
        data,
      })
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message)
    }
  }

  static async changePassword(data) {
    const response = await instance({
      method: 'POST',
      url: '/api/auth/change-password',
      data,
    })

    return response.data
  }
}
