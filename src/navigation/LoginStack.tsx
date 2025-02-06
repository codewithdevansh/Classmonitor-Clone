// CommunityStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Verify from '../screens/Verify';
import HomeScreen2 from '../screens/HomeScreen2';
import Help3 from '../screens/Help3';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Help3" component={Help3} />
          </Stack.Navigator>
  );
};

export default LoginStack;