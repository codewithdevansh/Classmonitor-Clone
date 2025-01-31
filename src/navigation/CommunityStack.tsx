// CommunityStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from '../screens/Community';
import Help from '../screens/Help';

const Stack = createNativeStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

export default CommunityStack;