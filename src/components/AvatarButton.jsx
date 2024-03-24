import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import ReanimatedImage from '@/components/ReanimatedImage/ReanimatedImage'
import { useRouter } from 'expo-router'

const AvatarButton = ({ avatarUri, user }) => {
  const router = useRouter()
  const handleUserIconPress = () => {
    router.push(`/(modals)/code-input/${user.id}?userEmail=${user.email}`)
  }
  return (
    <View className="flex flex-col w-1/2 mb-3 shadow">
      <TouchableOpacity
        onPress={handleUserIconPress}
        className="relative p-2 mx-auto"
      >
        <View className="p-1">
          <View className="shadow-md">
            <ReanimatedImage
              source={avatarUri}
              style={{ width: 100, height: 100, borderRadius: 20 }}
            />
            <View className="w-2/3 left-4 absolute bottom-1 inset-0 bg-black/20 rounded-lg mx-auto">
              <Text className="flex align-middle text-center text-sm font-semibold text-white mt-1">
                {user.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvatarButton
