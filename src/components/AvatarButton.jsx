import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { Link } from 'expo-router'

const AvatarButton = ({ avatarUri, name }) => {
  return (
    <View className="flex flex-col w-1/2 mb-3 shadow">
      <Link href={'/(modals)/code-input'} asChild>
        <TouchableOpacity className="relative p-2 mx-auto">
          <View className="p-1">
            <View className="shadow-md">
              <Image
                source={{ uri: avatarUri }}
                className="w-24 h-24 rounded-2xl"
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
