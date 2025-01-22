import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Middle from '../components/Middle';
import Learningkits from '../components/Learningkits';
import SkillBoosters from '../components/SkillBoosters';
import LiveClasses from '../components/LiveClasses';
import RecordedClasses from '../components/RecordedClasses';
import Play from '../components/Play';
import Footer from '../components/Footer';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigation/StackNavigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Header'>;

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
        <View>
          <Header navigation={navigation} />
          <Middle />
          <Learningkits />
          <SkillBoosters />
          <LiveClasses />
          <RecordedClasses />
          <Play />
          <Footer />
        </View>
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
