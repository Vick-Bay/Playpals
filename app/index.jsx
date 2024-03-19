import React from 'react'
import UsersForAuth from './screens/usersForAuth'
import { View } from 'react-native'

const WelcomeScreen = () => {
  return (
    <View className="pt-16 flex-1 justify-center items-center w-full bg-main">
      <UsersForAuth />
    </View>
  )
}

export default WelcomeScreen
