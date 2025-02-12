import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={{flex:1, padding:20, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontWeight:'bold', fontSize:25}}>Notifications</Text>
      
      <Text>You have no notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})