import { View, Text, StatusBar,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '../components/homescreencomponents/BottomSheet'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/rootNavigation'

type LearningSectionProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LearningSection'>;
}

const LearningSection = ({navigation}: LearningSectionProps) => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={{flex:1, backgroundColor:'purple', }}>
      <StatusBar style="light"/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                          source={require('../assets/back.png')}
                          style={{ width: 25, height: 25, marginLeft: 20, marginTop: 20 }}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.help}
                            onPress={() => navigation.navigate('Help4')}>
                            <Image source={require('../assets/headphones.png')}
                              style={{ height: 17, width: 17, marginRight: 10 }} />
                            <Text style={{fontWeight:'bold',color:'black'}}>Help</Text>
                          </TouchableOpacity>
                          <Image 
                                        source={require('../assets/learningkitimage.png')}
                                        style={styles.lkimage} 
                                      />
      <BottomSheet/>
    </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({

  help: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 10,
    flexDirection: 'row',
    height: 30,
    width: 80,
    marginLeft: 300,
    marginTop: -25
  },
  lkimage: {
    borderRadius: 20,
    width: 390,
    height: 310,
    marginTop: 40,
    marginLeft: 10,
  },
})

export default LearningSection