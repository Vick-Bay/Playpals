import React from 'react'
import { View, Image } from 'react-native'
import { useRouter } from 'expo-router'
import background from '@/assets/images/backgrounds/background_welcome.png'
import BigText from '@/components/Texts/BigText'
import Button from '@/components/Button/Button'
import RegularText from '@/components/Texts/RegularText'

const Welcome = () => {
  const router = useRouter()
  return (
    <>
      <View className="h-full w-full justify-between bg-tertiary pb-6">
        <View className="max-h-[55%] w-full flex-1">
          <Image
            source={background}
            resizeMode="stretch"
            className="h-full w-full"
          />
        </View>
        <View className="w-full flex-1 justify-end p-[25px]">
          <BigText textStyles="mb-[25px] w-[100%]">Hello Lexoper!</BigText>
          <BigText textStyles="text-[20px] mb-[25px] w-[100%]">
            Wanna have fun with your colleagues?
          </BigText>
          <RegularText textStyles="mb-[25px] w-[100%]">
            Let's get you started by signing in
          </RegularText>

          <Button
            onPress={() => {
              router.push('screens/auth')
            }}
          >
            Get Started
          </Button>
        </View>
      </View>
    </>
  )
}

export default Welcome
