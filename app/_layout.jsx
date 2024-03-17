import FontAwesome from '@expo/vector-icons/FontAwesome'
import NetInfo from '@react-native-community/netinfo'
import * as SplashScreen from 'expo-splash-screen'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { onlineManager } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import Toast from 'react-native-toast-message'
import { QueryProvider } from '@/api'

export { ErrorBoundary } from 'expo-router'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  useEffect(() => {
    async function hideSplashScreen() {
      if (loaded) {
        try {
          await SplashScreen.hideAsync()
        } catch (e) {
          console.warn(e)
        }
      }
    }

    hideSplashScreen()
  }, [loaded])

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  return <>{loaded && <RootLayoutNav />}</>
}

function RootLayoutNav() {
  return (
    <QueryProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          {/*<Stack.Screen name="(tabs)" options={{ headerShown: false }} />*/}
          <Stack.Screen name="modal" options={{ title: 'Lexopers' }} />
        </Stack>
        <Toast />
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ThemeProvider>
    </QueryProvider>
  )
}
