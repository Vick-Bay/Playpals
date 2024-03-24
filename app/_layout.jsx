import FontAwesome from '@expo/vector-icons/FontAwesome'
import NetInfo from '@react-native-community/netinfo'
import * as SplashScreen from 'expo-splash-screen'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { onlineManager } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Link, Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { QueryProvider } from '@/api'
import { Colors } from '@/common/Colors'
import { Ionicons } from '@expo/vector-icons'

export { ErrorBoundary } from 'expo-router'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected)
  })
})

const InitialLayout = () => {
  const isSignedIn = false
  // const segments = useSegments();
  const router = useRouter()
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
    }
  }, [loaded])

  useEffect(() => {
    // if (!isLoaded) return;
    // const inTabsGroup = segments[0] === '(auth)';
    // if (isSignedIn && !inTabsGroup) {
    //   router.replace('/(tabs)/chats');
    // } else if (!isSignedIn) {
    //   router.replace('/');
    // }
  }, [isSignedIn])

  if (!loaded) {
    return <View />
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/*  <Stack.Screen*/}
      {/*    name="otp"*/}
      {/*    options={{*/}
      {/*      headerTitle: 'Enter Your Phone Number',*/}
      {/*      headerBackVisible: false,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name="verify/[phone]"*/}
      {/*    options={{*/}
      {/*      title: 'Verify Your Phone Number',*/}
      {/*      headerShown: true,*/}
      {/*      headerBackTitle: 'Edit number',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />*/}
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
    </Stack>
  )
}

const RootLayoutNav = () => {
  return (
    <QueryProvider>
      <ThemeProvider value={DefaultTheme}>
        <InitialLayout />
        <Toast />
      </ThemeProvider>
    </QueryProvider>
  )
}

export default RootLayoutNav
