import React from 'react'
import { FlatList, Text, View } from 'react-native'
import AvatarButton from '@/components/AvatarButton'

const UsersList = ({ users }) => {
  const renderItem = ({ item }) => (
    <AvatarButton avatarUri={item.image_url} name={item.name} />
  )

  return (
    <View className="flex-1 justify-center items-center w-full bg-main">
      <FlatList
        data={users}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default UsersList
