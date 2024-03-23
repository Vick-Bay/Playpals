import React from 'react'
import FastImage from 'react-native-fast-image'

const CachedImage = ({ source, style }) => {
  // If the source is a string (URL), use it directly. Otherwise, assume it's an object with a uri property.
  const imageSource = typeof source === 'string' ? { uri: source } : source

  return <FastImage source={imageSource} style={style} />
}

export default CachedImage
