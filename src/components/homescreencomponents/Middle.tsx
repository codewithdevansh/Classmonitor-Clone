import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';

type MiddleProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Middle'>;
  selectedButton: string;
  setSelectedButton: (buttonName: string) => void;
};

const Middle = ({ navigation, selectedButton, setSelectedButton }: MiddleProps) => {
  // Function to handle button press
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName); // Update the state in HomeScreen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button1,
          selectedButton === 'All' && styles.buttonSelected,
        ]}
        onPress={() => handleButtonPress('All')}>
        <Text style={styles.alltext}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === '03years' && styles.buttonSelected,
        ]}
        onPress={() => handleButtonPress('03years')}>
        <Text style={styles.alltext}>0-3 Years</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === '36years' && styles.buttonSelected,
        ]}
        onPress={() => handleButtonPress('36years')}>
        <Text style={styles.alltext}>3-6 Years</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === '68years' && styles.buttonSelected,
        ]}
        onPress={() => handleButtonPress('68years')}>
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
    width: 60,
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

export default Middle;