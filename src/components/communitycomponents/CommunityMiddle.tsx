import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const communitymiddle = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.alltext}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.alltext}>Top</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.alltext}>Learn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.alltext}>My Wall</Text>
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
    elevation:100
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: 82,
    elevation:100
  },
  alltext: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default communitymiddle;