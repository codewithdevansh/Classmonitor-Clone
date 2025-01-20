import { View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigation/Tabs'
const App = () => {
  return (
    <NavigationContainer>
    <Tabs />
     
    </NavigationContainer>
  )
}

export default App