import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Community = () => {
  const [showHeader, setShowHeader] = React.useState(false)
  return (
    <View>
      <Text>Community</Text>
    </View>
  )
}

export default Community