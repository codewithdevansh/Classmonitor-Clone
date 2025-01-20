import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}> 
      <Text style ={styles.footertext}>Congratulations! on Actively Participating in Your Child's Education!
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
    height: 360,
      flex: 1,
      alignItems: 'left',
      backgroundColor: '#E45381',
      margintop: -100
},
    footertext: {
      fontSize: 25,
      textAlign: 'left',
      color: 'black',
      padding: 20,
}
})
export default Footer