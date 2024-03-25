import React from 'react'
import { Text } from 'react-native'

const BigText = ({ textStyles, children }) => {
  return (
    <Text
      style={{ fontFamily: 'Lato-Bold' }}
      className={`text-left text-[37px] text-white ${textStyles}`}
    >
      {children}
    </Text>
  )
}

export default BigText
