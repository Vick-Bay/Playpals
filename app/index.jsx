import React from 'react'
import { useSelector } from 'react-redux'
import UsersForAuth from '@/components/usersForAuth'
import Welcome from '@/components/Welcome/Welcome'

const WelcomeScreen = () => {
  const isExistingUser = useSelector((state) => state.auth.hasLoggedInBefore)
  return <>{isExistingUser ? <UsersForAuth /> : <Welcome />}</>
}

export default WelcomeScreen
