import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '@/api/users'
import Toast from 'react-native-toast-message'
import UsersList from '@/components/UsersList/UsersList'
import { Colors } from '@/common/Colors'

const UsersForAuth = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getAllUsers(),
    refetchOnWindowFocus: true,
  })

  // console.log('users', users)

  if (error) {
    Toast.show({
      type: 'error',
      text2: error?.response?.data?.message || 'Something went wrong 👋',
      text2Style: { fontSize: 18 },
    })
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="auto" color={Colors.primary} />
      ) : (
        <UsersList users={users} />
      )}
    </>
  )
}

export default UsersForAuth
