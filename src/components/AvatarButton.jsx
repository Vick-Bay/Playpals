import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Link } from 'expo-router'
import ReanimatedImage from '@/components/ReanimatedImage/ReanimatedImage'

const AvatarButton = ({ avatarUri, name }) => {
  return (
    <View className="flex flex-col w-1/2 mb-3 shadow">
      <Link href={'/(modals)/code-input'} asChild>
        <TouchableOpacity className="relative p-2 mx-auto">
          <View className="p-1">
            <View className="shadow-md">
              <ReanimatedImage
                source={avatarUri}
                style={{ width: 100, height: 100, borderRadius: 20 }}
              />
              <View className="w-2/3 left-4 absolute bottom-1 inset-0 bg-black/20 rounded-lg mx-auto">
                <Text className="flex align-middle text-center text-sm font-semibold text-white mt-1">
                  {name}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default AvatarButton
