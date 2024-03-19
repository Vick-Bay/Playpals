import { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
const CELL_COUNT = 4

const Page = () => {
  const [code, setCode] = useState('')

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  })

  useEffect(() => {
    if (code.length === 4) {
      console.log('verify', code)

      if (signin === 'true') {
        console.log('signin')
        veryifySignIn()
      } else {
        verifyCode()
      }
    }
  }, [code])

  const verifyCode = async () => {
    console.log('verifyCode', code)
  }

  const veryifySignIn = async () => {
    console.log('veryifySignIn', code)
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
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        className="bg-main px-4 pt-1 rounded-full h-[40px] w-1/3"
        onPress={() => {}}
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
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    paddingBottom: 4,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
})

export default Page
