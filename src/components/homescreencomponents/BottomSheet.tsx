import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureDetector, Gesture, ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const BottomSheet = () => {
  const translateY = useSharedValue(0)

  const gesture = Gesture.Pan().onUpdate((event) => {
    translateY.value = event.translationY
  });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <ScrollView>
          <View style={{ paddingTop: 0, paddingLeft: 15, flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>PlayGroup Learning kit</Text>
            <Text>Age Group - 1-2.5 Years</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image
                source={require('../../assets/learningkitimage.png')}
                style={{
                  borderRadius: 20,
                  width: 390,
                  height: 200,
                  }}
              />
            </View>
            <View style={{ flexDirection: 'column', marginTop: 20 ,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:25}}>
                  Curriculum
            </Text>
            <Text style={{marginTop:10, fontSize:15}}>
              This Curriculum Planner is designed for sequential learning. Activities are arranged to ensure systematic progression of concepts and skills. This is the most efficient way to approach the kit.
            </Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  )
}



const styles = StyleSheet.create({
  bottomContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 2,
    borderRadius: 25,
  },
  line: {
    height: 4,
    width: 75,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  }

})

export default BottomSheet