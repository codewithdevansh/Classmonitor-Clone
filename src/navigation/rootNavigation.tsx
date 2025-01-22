import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Login from '../screens/Login';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main Tab Navigator */}
      <RootStack.Screen name="MainTabs" component={Tabs} />

      {/* Stack Screens */}
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
