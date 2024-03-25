import React from 'react'
import { useSelector } from 'react-redux'
import UsersForAuth from '@/components/usersForAuth'
import { View } from 'react-native'
import Welcome from '@/components/Welcome/Welcome'

const WelcomeScreen = () => {
  const isExistingUser = useSelector((state) => state.auth.token)
  return (
    <>
      {isExistingUser ? (
        <View className="pt-16 flex-1 justify-center items-center w-full bg-primary">
          <UsersForAuth />
        </View>
      ) : (
        <Welcome />
      )}
    </>
  )
}

export default WelcomeScreen
