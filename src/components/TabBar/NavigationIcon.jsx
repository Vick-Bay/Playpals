import { Text, View } from 'react-native'

const ROUTES = {
  leaderboard: { icon: '🏆', text: 'Board' },
  game: { icon: '🎮', text: 'Game' },
  profile: { icon: '👤', text: 'Profile' },
}

const NavigationIcon = ({ route }) => {
  return (
    <View className="flex-1 justify-center items-center w-[50px]">
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-center">{ROUTES[route].icon}</Text>
      </View>
      <Text className="text-xs text-teal-800 mt-1">{ROUTES[route].text}</Text>
    </View>
  )
}

export default NavigationIcon
