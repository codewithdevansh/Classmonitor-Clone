// CommunityStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from '../screens/Community';
import Help2 from '../screens/Help2';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Help2" component={Help2} />
    </Stack.Navigator>
  );
};

export default AccountStack;