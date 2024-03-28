import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Text, View } from 'react-native'

const ROUTES = {
  home: { icon: 'home', text: 'Home' },
  game: { icon: 'gamepad', text: 'Game' },
}

const NavigationIcon = ({ route, active }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <FontAwesome
        name={ROUTES[route].icon}
        size={28}
        style={{ marginBottom: -3, color: active ? '#FFF' : '#05998c' }}
      />
      <Text className="text-xs text-teal-800 mt-1">{ROUTES[route].text}</Text>
    </View>
  )
}

export default NavigationIcon
