import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { CountryPicker } from "react-native-country-codes-picker";
import { useNavigation } from '@react-navigation/native';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
};


const Login = ({ navigation }: LoginScreenProps) => {
 
  const [number, onChangeNumber] = React.useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const handleContinue = () => {
    if (number.length === 10 && !isNaN(Number(number))) {
      navigation.navigate('Verify', { mobileNumber: number });
    } else {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number.');
    }
  };




  return (

    
    <View style={styles.container}>
      <Text style={styles.headertext}>Welcome to ClassMonitor!</Text>
      <Text style={styles.subtext}>Enter your mobile number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.input1}>
        <Text style={{
          color: 'black',
          fontSize: 15,
          paddingLeft: 30
        }}>

        </Text>
      </TouchableOpacity><CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }} lang={''} />

      <TouchableOpacity style={{ marginLeft: 30, marginTop: 550 }}
        onPress={() => navigation.navigate('MainTabs')}>
        <Text style={{ color: 'red' }}>Back to Home</Text></TouchableOpacity>
      <TouchableOpacity
        style={{
          marginLeft: 260,
          marginTop: -33,
          backgroundColor: 'red',
          width: 125,
          height: 47,
          borderRadius: 10,
          justifyContent: 'center'
        }}
        onPress={handleContinue}>
        <Text
          style={{
            color: 'black',
            marginLeft: 18
          }}>Continue</Text>
        <Image source={require('../../assets/right.png')}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: 10,
            right: 10,
          }} />
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#E2F0F9',



  },
  headertext: {
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 15,
    marginTop: 70,
    marginLeft: 30,
  },
  subtext: {
    fontSize: 17,
    marginTop: 3,
    marginLeft: 30,
  },
  input: {
    backgroundColor: 'white',
    width: 260,
    height: 45,
    borderRadius: 5,
    marginLeft: 130,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 10

  },
  input1: {
    marginTop: -45,
    marginLeft: 30,
    width: 80,
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 5,

  },
})

export default Login