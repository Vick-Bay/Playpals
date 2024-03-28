import React from 'react'

import { View, Pressable, Dimensions, StyleSheet } from 'react-native'

import NavigationIcon from './NavigationIcon'

const { width } = Dimensions.get('window')

const TabBar = ({ state, navigation }) => {
  // order state routes so that home is first
  state.routes.sort((a, b) => {
    if (a.name === 'leaderboard') return -1
    if (b.name === 'leaderboard') return 1
    return 0
  })

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <View key={index} style={styles.mainItemContainer}>
            <Pressable
              onPress={onPress}
              style={{
                backgroundColor: isFocused ? '#b3e0dc' : '#81cdc6',
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 15,
                }}
              >
                <NavigationIcon route={route.name} active={isFocused} />
              </View>
            </Pressable>
          </View>
        )
      })}
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#81cdc6',
    borderRadius: 25,
    marginHorizontal: width * 0.05,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
})
