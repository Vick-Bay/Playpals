import React, { useState } from 'react'
import { LoginScreen } from './login'
import { RegisterScreen } from './register'

const Auth = () => {
  const [pageToShow, setPageToShow] = useState('login')

  return (
    <>
      {pageToShow === 'register' ? (
        <RegisterScreen pageToShow={pageToShow} setPageToShow={setPageToShow} />
      ) : (
        <LoginScreen pageToShow={pageToShow} setPageToShow={setPageToShow} />
      )}
    </>
  )
}

export default Auth
