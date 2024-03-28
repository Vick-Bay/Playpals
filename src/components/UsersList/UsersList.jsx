import React from 'react'
import { FlatList, View } from 'react-native'
import AvatarButton from '@/components/AvatarButton'

const UsersList = ({ users }) => {
  const renderItem = ({ item }) => (
    <AvatarButton avatarUri={item.image_url} user={item} />
  )

  return (
    <View className="pt-24 flex-1 justify-center items-center w-full bg-primary">
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
