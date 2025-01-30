import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Account = () => {
  return (
    <ScrollView > 
      <View style={{flexDirection:'column', alignItems:'center'}}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.user}>
          <Image
            source={require('../assets/avatar.png')}
            style={{ width: '100%', height: '100%', marginLeft: 10, marginTop: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', marginTop: 15 }}>
          Devansh
        </Text>
        <Text style={{ color: 'white' }}>
          +91-0000000000
        </Text>

        <TouchableOpacity style={{ width: '80%', backgroundColor: 'red', height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white', fontWeight: '600' }}>
            Buy Learning Kits
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>  
        <TouchableOpacity style={{width:'100%', height:79, justifyContent:'center',backgroundColor:'white' }}> 
          <View style={{flexDirection:'row'}}>
          <Image
                    source={require('../assets/manageprofile.png')}
                    style={{ width: 20, height: 20, marginTop:28,marginLeft:15 }}
                  />
                  <View style={{flexDirection:'column'}}>
          <Text style={styles.text}>Manage Profile</Text>
          <Text style={styles.subtext}>Change user information</Text>
          </View>
          </View>
          <View style={{backgroundColor:'grey',height:1,marginLeft:55,width:'78%',marginTop:'auto'}}></View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%', height:79, justifyContent:'center',backgroundColor:'white' }}> 
          <View style={{flexDirection:'row'}}>
          <Image
                    source={require('../assets/manageprofile.png')}
                    style={{ width: 20, height: 20, marginTop:28,marginLeft:15 }}
                  />
                  <View style={{flexDirection:'column'}}>
          <Text style={styles.text}>Manage Profile</Text>
          <Text style={styles.subtext}>Change user information</Text>
          </View>
          </View>
          <View style={{backgroundColor:'grey',height:1,marginLeft:55,width:'78%',marginTop:'auto'}}></View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%', height:79, justifyContent:'center',backgroundColor:'white' }}> 
          <View style={{flexDirection:'row'}}>
          <Image
                    source={require('../assets/manageprofile.png')}
                    style={{ width: 20, height: 20, marginTop:28,marginLeft:15 }}
                  />
                  <View style={{flexDirection:'column'}}>
          <Text style={styles.text}>Manage Profile</Text>
          <Text style={styles.subtext}>Change user information</Text>
          </View>
          </View>
          <View style={{backgroundColor:'grey',height:1,marginLeft:55,width:'78%',marginTop:'auto'}}></View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%', height:79, justifyContent:'center',backgroundColor:'white' }}> 
          <View style={{flexDirection:'row'}}>
          <Image
                    source={require('../assets/manageprofile.png')}
                    style={{ width: 20, height: 20, marginTop:28,marginLeft:15 }}
                  />
                  <View style={{flexDirection:'column'}}>
          <Text style={styles.text}>Manage Profile</Text>
          <Text style={styles.subtext}>Change user information</Text>
          </View>
          </View>
          <View style={{backgroundColor:'grey',height:1,marginLeft:55,width:'78%',marginTop:'auto'}}></View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%', height:79, justifyContent:'center',backgroundColor:'white' }}> 
          <View style={{flexDirection:'row'}}>
          <Image
                    source={require('../assets/manageprofile.png')}
                    style={{ width: 20, height: 20, marginTop:28,marginLeft:15 }}
                  />
                  <View style={{flexDirection:'column'}}>
          <Text style={styles.text}>Manage Profile</Text>
          <Text style={styles.subtext}>Change user information</Text>
          </View>
          </View>
          <View style={{backgroundColor:'grey',height:1,marginLeft:55,width:'78%',marginTop:'auto'}}></View>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  text:{
   marginTop:20,
    marginLeft:20,
    fontSize:15,
    fontWeight:'bold'
  },
  subtext:{
    marginLeft:20,
    fontSize:10,
    fontWeight:'300'
  },

  container1: {
    backgroundColor: 'purple',
    height: 500,
    width: '100%',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flexDirection: 'column',
    alignItems: 'center',

  },
  user: {
    height: 150,
    width: 150,
    marginTop: 90

  },
  container2:{
    height:400,
    width:'80%',
    backgroundColor:'white',
    marginTop:-100,
    borderRadius:10,
    elevation:20

  }

})



export default Account