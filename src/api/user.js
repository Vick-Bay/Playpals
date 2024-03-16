import AsyncStorage from '@react-native-async-storage/async-storage'

const USER = Symbol('USER').toString()

export async function getUserInfo() {
  try {
    const value = await AsyncStorage.getItem(USER)
    if (value) {
      return JSON.parse(value)
    } else {
      return null
    }
  } catch (e) {
    console.error('Error loading items', e)
  }
}
