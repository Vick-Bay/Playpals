import { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import { Colors } from '@/common/Colors'
import TabBar from '@/components/TabBar'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const { data } = useQuery(["userInfo"], getUserInfo);

  const data = []

  console.log(data)

  useEffect(() => {
    if (data) {
      setIsLoggedIn(true)
    }
  }, [data])

  return <>{isLoggedIn && <TabLayout />}</>
}

function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      initialRouteName={'home'}
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          // headerRight: () => (
          //   <Link href="/game" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      {/*<Tabs.Screen*/}
      {/*  name="game"*/}
      {/*  options={{*/}
      {/*    title: 'Game',*/}
      {/*    headerShown: false,*/}
      {/*    tabBarIcon: ({ color }) => (*/}
      {/*      <TabBarIcon name="plus-square" color={color} />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<Tabs.Screen*/}
      {/*  name="home"*/}
      {/*  options={{*/}
      {/*    title: 'Authentication',*/}
      {/*    headerShown: false,*/}
      {/*    tabBarIcon: ({ color }) => (*/}
      {/*      <TabBarIcon name="plus-square" color={color} />*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}
    </Tabs>
  )
}
