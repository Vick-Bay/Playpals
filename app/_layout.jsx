import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import * as SplashScreen from 'expo-splash-screen'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import NetInfo from '@react-native-community/netinfo'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { onlineManager } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Link, Stack, useRouter } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { QueryProvider } from '@/api'
import { Colors } from '@/common/Colors'
import { Ionicons } from '@expo/vector-icons'
import store, { persistor } from '@/store/store'

export { ErrorBoundary } from 'expo-router'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})

const InitialLayout = () => {
  // const segments = useSegments();
  const router = useRouter()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  console.log('isLoggedIn', isLoggedIn)

  const [loaded, error] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
      if (isLoggedIn) {
        router.replace('screens/home')
      } else if (!isLoggedIn) {
        router.replace('/')
      }
    }
  }, [loaded, isLoggedIn])

  if (!loaded) {
    return <View />
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/code-input/[userId]"
        options={{
          presentation: 'modal',
          title: 'Enter Code',
          headerTransparent: false,
          headerBlurEffect: 'regular',
          headerStyle: {
            backgroundColor: Colors.main,
          },
          headerRight: () => (
            <Link href={'/'} asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.main,
                  borderRadius: 20,
                  padding: 4,
                }}
              >
                <Ionicons name="close" color={Colors.softred} size={15} />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="screens/home" options={{ headerShown: false }} />
    </Stack>
  )
}

const RootLayoutNav = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryProvider>
          <ThemeProvider value={DefaultTheme}>
            <InitialLayout />
            <Toast />
          </ThemeProvider>
        </QueryProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default RootLayoutNav
