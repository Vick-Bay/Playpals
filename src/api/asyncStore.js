import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeAccessToken = async (token) => {
  try {
    await AsyncStorage.setItem('@access_token', token)
  } catch (error) {
    // Error saving token
    console.log(error)
  }
}

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('@access_token')
  } catch (error) {
    // Error retrieving token
    console.log(error)
    return null
  }
}

export const storeUserInfo = async (user) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(user))
  } catch (error) {
    // Error saving user
    console.log(error)
  }
}

export const getUserInfo = async () => {
  try {
    const user = await AsyncStorage.getItem('@user')
    return JSON.parse(user)
  } catch (error) {
    // Error retrieving user
    console.log(error)
    return null
  }
}
