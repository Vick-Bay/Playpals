import { Tabs } from 'expo-router'
import { Colors } from '@/common/Colors'
import TabBar from '@/components/TabBar'

export default function TabScreen() {
  return <TabLayout />
}

function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="leaderboard"
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
    </Tabs>
  )
}
