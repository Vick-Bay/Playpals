import React from 'react'
import FastImage from 'react-native-fast-image'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

// Create an animated version of FastImage
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)

const ReanimatedImage = ({ source, style }) => {
  const opacity = useSharedValue(0) // Initial opacity

  const imageSource = typeof source === 'string' ? { uri: source } : source

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 500, // Adjust the duration as needed
      }),
    }
  })

  React.useEffect(() => {
    opacity.value = 1 // Trigger the fade-in effect
  }, [])

  return (
    <AnimatedFastImage
      style={[style, animatedStyles]} // Apply the animated styles here
      source={imageSource}
    />
  )
}

export default ReanimatedImage
