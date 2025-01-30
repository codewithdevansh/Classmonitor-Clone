import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Account = () => {
  return (
    <ScrollView >
      <View style={{ flexDirection: 'column', alignItems: 'center',backgroundColor:'#e4f3f9' }}>
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
          <TouchableOpacity style={{ width: '100%', height: 79, justifyContent: 'center', backgroundColor: 'white',borderTopLeftRadius:25,borderTopRightRadius:25 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/manageprofile.png')}
                style={{ width: 20, height: 20, marginTop: 28, marginLeft: 15 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>Manage Profile</Text>
                <Text style={styles.subtext}>Change user information</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'grey', height: 1, marginLeft: 55, width: '78%', marginTop: 'auto' }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '100%', height: 79, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/password.png')}
                style={{ width: 20, height: 20, marginTop: 28, marginLeft: 15 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>Change Password</Text>
                <Text style={styles.subtext}>set new password</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'grey', height: 1, marginLeft: 55, width: '78%', marginTop: 'auto' }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '100%', height: 79, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/notification.png')}
                style={{ width: 20, height: 20, marginTop: 28, marginLeft: 15 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>Notification</Text>
                <Text style={styles.subtext}>Opt-in for notification</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'grey', height: 1, marginLeft: 55, width: '78%', marginTop: 'auto' }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '100%', height: 79, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/contact.png')}
                style={{ width: 20, height: 20, marginTop: 28, marginLeft: 15 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>Contact Us</Text>
                <Text style={styles.subtext}>Reach us</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'grey', height: 1, marginLeft: 55, width: '78%', marginTop: 'auto' }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '100%', height: 79, justifyContent: 'center', backgroundColor: 'white',borderBottomLeftRadius:25,borderBottomRightRadius:25 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/person.png')}
                style={{ width: 20, height: 20, marginTop: 28, marginLeft: 15 }}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>About Us</Text>
                <Text style={styles.subtext}>Know more about us</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'grey', height: 1, marginLeft: 55, width: '78%', marginTop: 'auto' }}></View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column', height:300,width:'100%', paddingTop:40,alignItems:'center'}}>
          <View style={{flexDirection:'row', marginLeft:15}}>
            <TouchableOpacity style={{width: 35, height: 35, marginRight:40}}>
        <Image
                  source={require('../assets/instagram.png')}
                  style={{ width: 35, height: 35, marginRight:40  }}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{width: 35, height: 35, marginRight:40}}>
                <Image
                  source={require('../assets/youtube1.png')}
                  style={{ width: 35, height: 35, marginRight:40}}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{width: 35, height: 35, marginRight:40}}>
                <Image
                  source={require('../assets/facebook.png')}
                  style={{ width: 35, height: 35,marginRight:40 }}
                />
                </TouchableOpacity>
                <TouchableOpacity style={{width: 35, height: 35, marginRight:40}}>
                <Image
                  source={require('../assets/linkedin.png')}
                  style={{ width: 35, height: 35, marginRight:40 }}
                />
                </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity style={{height:40,  flexDirection:'row', marginTop:40}}>
            <Image
                      source={require('../assets/logout.png')}
                      style={{ width: 25, height: 25, marginLeft: 10, marginTop: 10 }}
                    />
                    <Text style={{marginTop:12,marginLeft:10}}>
                      Logout
                    </Text>
                    </TouchableOpacity>
          </View>
          <Text style={{paddingTop:40, fontWeight:'300'}}> V - 5.1.6</Text>
          <Text style={{fontWeight:'300'}}> Crafted with love in India</Text>

        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },
  subtext: {
    marginLeft: 20,
    fontSize: 10,
    fontWeight: '300'
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
  container2: {
    height: 400,
    width: '80%',
    backgroundColor: 'white',
    marginTop: -100,
    borderRadius: 25,
    elevation: 20

  }

})



export default Account