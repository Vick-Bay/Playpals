import React from 'react'
import { Text } from 'react-native'

const RegularText = ({ textStyles, children }) => {
  return (
    <Text
      style={{ fontFamily: 'Lato-Bold' }}
      className={`text-left text-[15px] text-white ${textStyles}`}
    >
      {children}
    </Text>
  )
}

export default RegularText
