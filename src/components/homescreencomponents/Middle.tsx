import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';
type middleProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Middle'>;
};
const MiddleComponent = ({navigation}: middleProps) => {
  const [selectedButton, setSelectedButton] = useState<string>('All'); // Default selected button

  // Function to handle button press
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
    if (buttonName === 'All') {
      navigation.navigate('MainTabs'); // Navigate on "All" button press
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button1,
          selectedButton === 'All' && styles.buttonSelected, // Apply selected style if 'All' is selected
        ]}
        onPress={() => handleButtonPress('All')}>
        <Text style={styles.alltext}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.alltext}>0-3 Years</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.alltext}>3-6 Years</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.alltext}>6-8 Years</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E2F0F9',
  },
  button1: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: 60
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: 82,
  },
  alltext: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonSelected: {
    backgroundColor: 'red', // Change to the desired selected color
  },
});

export default MiddleComponent;