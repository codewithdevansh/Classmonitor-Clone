import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  HomeScreen: undefined;
  Middle:undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs (Main Application Screens) */}
        <RootStack.Screen name="MainTabs" component={Tabs} />

        {/* Stack Screens */}
        <RootStack.Screen name="Login" component={Login} />
         
      </RootStack.Navigator>
   
  );
};

export default RootNavigation;
