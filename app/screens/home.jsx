import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { logout } from '@/store/authSlice'
import { logout as ApiLogout } from '@/api/auth'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const handleLogout = async () => {
    await ApiLogout()
    dispatch(logout())
  }
  return (
    <View className="pt-16 flex-1 justify-center items-center w-full bg-main">
      <Text className="text-2xl text-center text-black">
        Welcome to the Home Screen
      </Text>
      <TouchableOpacity
        className="bg-main px-4 pt-1 rounded-full h-[40px] w-1/3"
        onPress={handleLogout}
      >
        <Text className="text-white text-center text-lg">Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
