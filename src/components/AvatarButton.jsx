import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'

const AvatarButton = ({ onPress, avatarUri, name }) => {
  return (
    <View className="flex flex-col w-1/2 mb-4">
      <TouchableOpacity onPress={onPress} className="rounded-lg p-2 mx-auto">
        <View className="p-1 rounded-lg">
          <View className="shadow-md rounded-lg">
            <Image
              source={{ uri: avatarUri }}
              className="w-24 h-24 rounded-lg"
            />
            <Text className="text-center text-sm font-semibold text-white mt-1">
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvatarButton
