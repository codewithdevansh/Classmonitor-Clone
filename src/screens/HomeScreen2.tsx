import { View, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header2 from '../components/homescreencomponents/Header2';
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
import Age from '../components/homescreencomponents/Age'; // Import the Age component

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen2'>;

const HomeScreen2 = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selectedButton, setSelectedButton] = useState<string>('All'); // State to manage selected button

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <Header2 navigation={navigation} />
        <Middle
          navigation={navigation}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton} // Pass the state and setter to Middle
        />
        {selectedButton === 'All' ? (
          <>
            <Learningkits navigation={navigation} />
            <SkillBoosters navigation={navigation} />
            <LiveClasses navigation={navigation} />
            <RecordedClasses navigation={navigation} />
            <Play />
          </>
        ) : (
          <Age /> // Render the Age component when any other button is selected
        )}
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

export default HomeScreen2;