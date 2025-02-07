import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureDetector,Gesture } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const{height: SCREEN_HEIGHT} = Dimensions.get('window')
const BottomSheet = () => {
    const translateY=useSharedValue(0)

   const gesture=Gesture.Pan().onUpdate((event) => {
    translateY.value=event.translationY
   });

   const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
        transform:[{translateY:translateY.value}]
    }
   })

  return (
    <GestureDetector gesture={gesture}>
    <Animated.View style={[styles.bottomContainer,rBottomSheetStyle]}>
      <View style={styles.line}/>
    </Animated.View>
    </GestureDetector>
  )
}



const styles = StyleSheet.create({
    bottomContainer:{
        height:SCREEN_HEIGHT,
        width:'100%',
        backgroundColor:'white',
        position:'absolute',
        top:SCREEN_HEIGHT/2,
        borderRadius:25,
    },
    line:{
        height:4,
        width:75,
        backgroundColor:'black',
        alignSelf:'center',
        marginVertical:15,
        borderRadius:2,
    }

})

export default BottomSheet