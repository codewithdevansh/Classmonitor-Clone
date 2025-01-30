import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import Tabs2 from './Tabs2';
import Viewkits from '../screens/Viewkits';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Adminhome from '../screens/Adminhome'
import Help from '../screens/Help'

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  HomeScreen: undefined;
  Middle:undefined;
  HomeScreen2:undefined;
  MainTabs2:undefined;
  Viewkits:undefined;
  Learningkits:undefined;
  Adminhome:undefined;
  CommunityHeader:undefined;
  Help:undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <GestureHandlerRootView>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs (Main Application Screens) */}
        <RootStack.Screen name="MainTabs" component={Tabs} />

        {/* Stack Screens */}
        <RootStack.Screen name="Login" component={Login} />

        <RootStack.Screen name="MainTabs2" component={Tabs2} />

        <RootStack.Screen name="Viewkits" component={Viewkits} />

        <RootStack.Screen name="Help" component={Help} />
        
         
      </RootStack.Navigator>
      </GestureHandlerRootView>
   
  );
};

export default RootNavigation;
