import { View, Text,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Middle from '../components/Middle'
import Learningkits from '../components/Learningkits'
import SkillBoosters from '../components/SkillBoosters'
import LiveClasses from '../components/LiveClasses'
import RecordedClasses from '../components/RecordedClasses'
import Play from '../components/Play'
import Footer from '../components/Footer'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView style={styles.container}>
    <ScrollView>
    <View>
      <Header/>
      <Middle/>
      <Learningkits/>
      <SkillBoosters/>
      <LiveClasses/>
      <RecordedClasses/>
      <Play/>
      <Footer/>
    </View>
    </ScrollView>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen