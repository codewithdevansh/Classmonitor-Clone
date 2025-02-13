// CommunityStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearningSection from '../screens/LearningSection';


const Stack = createNativeStackNavigator();

const LearningSectionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LearningSection" component={LearningSection} />
    </Stack.Navigator>
  );
};

export default LearningSectionStack;