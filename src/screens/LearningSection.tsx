import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '../components/homescreencomponents/BottomSheet'

const LearningSection = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={{flex:1, backgroundColor:'purple', justifyContent:'center', alignItems:'center'}}>
      <StatusBar style="light"/>
      <BottomSheet/>
    </View>
    </GestureHandlerRootView>
  )
}

export default LearningSection