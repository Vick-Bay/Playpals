import { useState } from 'react'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { GestureResponderEvent } from 'react-native'
import { addItem } from '@/api'
import Auth from '../screens/auth'

export default function AuthTab() {
  const [text, onChangeText] = useState('')
  // const queryClient = useQueryClient()

  // const { mutate } = useMutation({
  //   mutationFn: addItem,
  // onSuccess: () => {
  //   queryClient.invalidateQueries(["items"]);
  // },
  // })

  async function addNewItem(event) {
    // mutate({ id: Math.random(), content: text })
    onChangeText('')
  }

  return <Auth />
}
