import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Center } from '@gluestack-ui/themed'
import ReanimatedImage from '@/components/ReanimatedImage/ReanimatedImage'
import { useRouter } from 'expo-router'
import RegularText from '@/components/Texts/RegularText'

const AvatarButton = ({ avatarUri, user }) => {
  const router = useRouter()
  const handleUserIconPress = () => {
    router.push(`/(modals)/code-input/${user.id}?userEmail=${user.email}`)
  }
  return (
    <View className="flex flex-col w-1/2 mb-3">
      <TouchableOpacity
        onPress={handleUserIconPress}
        className="relative p-2 mx-auto"
      >
        <View className="p-1">
          <View>
            <ReanimatedImage
              source={avatarUri}
              style={{ width: 100, height: 100, borderRadius: 20 }}
            />
            <Center h={10} w={100}>
              <View className="w-2/3 absolute bottom-3 inset-0 bg-black/20 rounded-md">
                <RegularText textStyles="text-white text-center text-[12px]">
                  {user.name}
                </RegularText>
              </View>
            </Center>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvatarButton
