import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MiddleComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
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
});

export default MiddleComponent;