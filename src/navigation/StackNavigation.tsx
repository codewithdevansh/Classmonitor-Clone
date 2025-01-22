import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';

export type RootStackParamList = {
  Header: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation(): JSX.Element {
  return (
    
      <Stack.Navigator initialRouteName="Header">
        <Stack.Screen name="Header" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
   
  );
}

export default StackNavigation;
