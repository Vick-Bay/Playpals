import Button from '@/components/Button/Button'
import { Text, View } from 'react-native'

export const RegisterScreen = ({ pageToShow, setPageToShow }) => {
  return (
    <View>
      <Text>Register</Text>
      <Button
        className="mt-6 flex-row items-center justify-center"
        onPress={() => setPageToShow('login')}
      >
        <Text className="font-rubik text-sm text-black">
          Sudah punya akun?{' '}
          <Text className="text-main font-semibold text-sky-800">Login</Text>
        </Text>
      </Button>
    </View>
  )
}
