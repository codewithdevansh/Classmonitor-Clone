// CommunityStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearningSection from '../screens/LearningSection';
import Help4 from '../screens/Help4';

const Stack = createNativeStackNavigator();

const LearningSectionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LearningSection" component={LearningSection} />
      <Stack.Screen name="Help4" component={Help4} />
    </Stack.Navigator>
  );
};

export default LearningSectionStack;