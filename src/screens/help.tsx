import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Help = () => {
  return (
    <View style={{backgroundColor:'white',height:1000}}>
    <View style={{flexDirection:'column',backgroundColor:'white'}}>
    <View style={{flexDirection:'row',}}>
      <TouchableOpacity>
      <Image
                source={require('../assets/back.png')}
                style={{ width: 25, height: 25, marginLeft: 10, marginTop: 10 }}
              />
              </TouchableOpacity>
      <Text style={{fontSize:15,fontWeight:'bold', marginLeft:120,marginTop:10}} >Contact Us</Text>
    </View>
    <View style={{padding:10, marginTop:30,flexDirection:'column'}}>
      <TouchableOpacity style={{borderWidth:1, backgroundColor:'white', width:'100%',height:80, borderColor:'lightgrey',borderRadius:10, justifyContent:'center'}}>
      <Image
                source={require('../assets/question-mark.png')}
                style={{ width: 25, height: 25, marginLeft:20, marginTop:10  }}
              />
              <View style={{flexDirection:'column', marginLeft:70,marginTop:-35}}>
                <Text style={{color:'grey'}}>Have Questions</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Read our FAQs</Text>
              </View>
      </TouchableOpacity>
    </View>
    <View style={{padding:10, marginTop:10,flexDirection:'column'}}>
      <TouchableOpacity style={{borderWidth:1, backgroundColor:'white', width:'100%',height:80, borderColor:'lightgrey',borderRadius:10, justifyContent:'center'}}>
      <Image
                source={require('../assets/youtube1.png')}
                style={{ width: 25, height: 25, marginLeft:20, marginTop:10  }}
              />
              <View style={{flexDirection:'column', marginLeft:70,marginTop:-35}}>
                <Text style={{color:'grey'}}>Watch Video</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>How to use app</Text>
              </View>
      </TouchableOpacity>
    </View>
    <View style={{padding:10, marginTop:10,flexDirection:'column'}}>
      <TouchableOpacity style={{borderWidth:1, backgroundColor:'white', width:'100%',height:80, borderColor:'lightgrey',borderRadius:10, justifyContent:'center'}}>
      <Image
                source={require('../assets/social.png')}
                style={{ width: 25, height: 25, marginLeft:20, marginTop:10  }}
              />
              <View style={{flexDirection:'column', marginLeft:70,marginTop:-35}}>
                <Text style={{color:'grey'}}>WhatsApp Us</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>9174-477-447</Text>
              </View>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}

export default Help