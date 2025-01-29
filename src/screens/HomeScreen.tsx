import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/homescreencomponents/Header';
import Middle from '../components/homescreencomponents/Middle';
import Learningkits from '../components/homescreencomponents/Learningkits';
import SkillBoosters from '../components/homescreencomponents/SkillBoosters';
import LiveClasses from '../components/homescreencomponents/LiveClasses';
import RecordedClasses from '../components/homescreencomponents/RecordedClasses';
import Play from '../components/homescreencomponents/Play';
import Footer from '../components/homescreencomponents/Footer';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigation/rootNavigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        
          <Header navigation={navigation} />
          <Middle navigation={navigation} />
          <Learningkits navigation={navigation} />
          <SkillBoosters />
          <LiveClasses />
          <RecordedClasses />
          <Play />
          <Footer />
        
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
