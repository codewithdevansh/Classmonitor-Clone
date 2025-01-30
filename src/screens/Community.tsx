import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import CommunityHeader from '../components/communitycomponents/CommunityHeader'
import CommunityMiddle from '../components/communitycomponents/CommunityMiddle'
const Community = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);
  
  return (
    <GestureHandlerRootView>
   <ScrollView>
    <View>
      <CommunityHeader navigation={navigation}/>
      <CommunityMiddle/>
      </View>
   </ScrollView>
   </GestureHandlerRootView>
  )
}

export default Community