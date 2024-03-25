import React from 'react'
import { TouchableOpacity } from 'react-native'
import RegularText from '../Texts/RegularText'

const Button = ({ btnStyles, onPress, textStyles, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full items-center rounded-[20px] bg-primary p-5 ${btnStyles}`}
    >
      <RegularText textStyles={textStyles}>{children}</RegularText>
    </TouchableOpacity>
  )
}

export default Button
