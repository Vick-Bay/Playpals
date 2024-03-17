import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

const UserList = ({ users }) => {
  const renderItem = ({ item }) => (
    <View className="flex-row items-center p-4">
      <Image
        source={{ uri: item.image_url }}
        className="h-12 w-12 rounded-full mr-4"
      />
      <View>
        <Text className="text-base font-bold">{item.name}</Text>
        <Text className="text-sm text-gray-600">{item.email}</Text>
      </View>
    </View>
  )

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      className="bg-white"
    />
  )
}

export default UserList
