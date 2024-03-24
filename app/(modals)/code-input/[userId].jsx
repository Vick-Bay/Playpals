import { useMemo, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useMutation, useIsMutating } from '@tanstack/react-query'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { login } from '@/api'
import Toast from 'react-native-toast-message'

const CELL_COUNT = 4

const Page = () => {
  const [code, setCode] = useState('')
  const { userEmail } = useLocalSearchParams()

  const isMutating = useIsMutating()
  const isLoading = useMemo(() => isMutating > 0, [isMutating])

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  })

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => login({ user: { email, password } }),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text2: 'Login successful',
        text2Style: { fontSize: 18 },
      })
    },
    onError: (err) => {
      console.log('login error', err)
      Toast.show({
        type: 'error',
        text2: err?.response?.data?.message || 'Something went wrong 👋',
        text2Style: { fontSize: 18 },
      })
    },
  })

  const onSubmit = async ({ email, password }) => {
    console.log('onSubmit', { email, password })
    await loginMutation.mutate({ email, password })
  }

  const handleLogin = async () => {
    console.log('handleLogin', { email: userEmail, password: code })
    onSubmit({ email: userEmail, password: code }).then(() => {
      console.log('login successful')
    })
  }

  return (
    <View className="flex-1 items-center p-5 bg-white space-y-5">
      <Stack.Screen options={{ title: 'Code Verification' }} />
      <Text className="text-base text-center text-black">
        Input your code below to log into the platform
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={
              isFocused
                ? { ...styles.focusCell, ...styles.cellRoot }
                : styles.cellRoot
            }
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        className="bg-main px-4 pt-1 rounded-full h-[40px] w-1/3"
        onPress={handleLogin}
        // disabled={isLoading}
      >
        <Text className="text-white text-center text-lg">Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  legal: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    width: '100%',
    alignItems: 'center',
  },

  codeFieldRoot: {
    marginTop: 50,
    width: 260,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
    gap: 4,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
  },
  focusCell: {
    paddingBottom: 4,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
})

export default Page
