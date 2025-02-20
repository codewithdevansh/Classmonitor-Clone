import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';
import { CommonActions } from '@react-navigation/native';
import LoginStack from '../navigation/LoginStack';

// type VerifyProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'Verify'>;
//   route: { params: { mobileNumber: string } };
// };

// const Verify = ({ navigation, route }: VerifyProps) => {
//   const [otp, setOtp] = useState('');

//   const handleVerify = () => {
//     if (otp.length === 4 && !isNaN(Number(otp))) {
//       // Assuming the correct OTP is '1234' for demonstration purposes
//       if (otp === '1234') {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'MainTabs2', params: { screen: 'HomeScreen2' } }],
//         });
//       } else {
//         Alert.alert('Invalid OTP', 'The OTP you entered is incorrect.');
//       }
//     } else {
//       Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP.');
//     }
//   };
type VerifyProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Verify'>;
  route: { params: { mobileNumber: string, otp: string } };  // Receive OTP
};

const Verify = ({ navigation, route }: VerifyProps) => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.length === 4 && !isNaN(Number(otp))) {
      if (otp === route.params.otp) {  // ✅ Compare entered OTP with sent OTP
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs2', params: { screen: 'HomeScreen2' } }],
        });
      } else {
        Alert.alert('Invalid OTP', 'The OTP you entered is incorrect.');
      }
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP.');
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/back.png')}
          style={{ width: 25, height: 25, marginLeft: 10, marginTop: 10 }}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Verify Mobile</Text>
        <Text style={styles.subtitle}>Enter OTP sent to your mobile number +91</Text>
        <Text style={styles.mobileNumber}>{route.params.mobileNumber}</Text>
        <Text style={styles.otpLabel}>One time password</Text>
        <TextInput
          style={styles.otpInput}
          onChangeText={setOtp}
          value={otp}
          placeholder="OTP"
          keyboardType="numeric"
        />
        <Text style={styles.timer}>Time: 00</Text>
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
          <Image
            source={require('../assets/right.png')}
            style={styles.verifyButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flexDirection: 'column',
    padding: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 25,
  },
  mobileNumber: {
    color: 'red',
  },
  otpLabel: {
    marginTop: 25,
    fontSize: 18,
  },
  otpInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 8,
  },
  timer: {
    marginTop: 100,
  },
  verifyButton: {
    marginLeft: 230,
    marginTop: 20,
    backgroundColor: 'red',
    width: 125,
    height: 47,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  verifyButtonText: {
    color: 'white',
    marginLeft: 18,
  },
  verifyButtonImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default Verify;