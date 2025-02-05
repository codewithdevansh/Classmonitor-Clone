import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { CountryPicker } from "react-native-country-codes-picker";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import LoginScreen from '../components/logincomponents/LoginScreen'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type LoginProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};


const Login = ({ navigation }: LoginProps) => {
 
  const [number, onChangeNumber] = React.useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');



  return (
    <GestureHandlerRootView>
      <LoginScreen navigation={navigation} />
    </GestureHandlerRootView>


  )
}



export default Login