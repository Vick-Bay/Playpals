import React from 'react'
import { Text } from 'react-native'

const SmallText = ({ textStyles, children }) => {
  return (
    <Text
      style={{ fontFamily: 'Lato-Regular' }}
      className={`text-left text-[13px] text-gray ${textStyles}`}
    >
      {children}
    </Text>
  )
}

export default SmallText
