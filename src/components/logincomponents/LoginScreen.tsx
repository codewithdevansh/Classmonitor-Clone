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
  const [countryCode, setCountryCode] = useState('+91');  // Default to India

  const handleContinue = async () => {
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

      <View style={styles.phoneInputContainer}>
        {/* Country Code Selector */}
        <TouchableOpacity onPress={() => setShow(true)} style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>{countryCode}</Text>
        </TouchableOpacity>

        {/* Mobile Number Input */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />
      </View>

      {/* Country Picker Modal */}
      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        lang="en"
      />

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ color: 'red' }}>Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
        <Image source={require('../../assets/right.png')} style={styles.continueIcon} />
      </TouchableOpacity>
    </View>
  );
};

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
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  countryCodeContainer: {
    backgroundColor: 'white',
    width: 80,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  countryCodeText: {
    color: 'black',
    fontSize: 15,
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 45,
    borderRadius: 5,
    paddingLeft: 10,
  },
  backButton: {
    marginLeft: 30,
    marginTop: 550,
  },
  continueButton: {
    marginLeft: 260,
    marginTop: -33,
    backgroundColor: 'red',
    width: 125,
    height: 47,
    borderRadius: 10,
    justifyContent: 'center',
  },
  continueText: {
    color: 'black',
    marginLeft: 18,
  },
  continueIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default Login;
