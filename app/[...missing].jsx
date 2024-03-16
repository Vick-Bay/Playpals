import { Link, Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-xl font-bold">This screen doesn't exist.</Text>

        <Link href="/" className="mt-4 py-4">
          <Text className="text-sm text-gray-600">Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}

export default NotFoundScreen
