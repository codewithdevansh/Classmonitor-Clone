import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';

type ViewkitsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Viewkits'>;
};
const Viewkits = ({navigation} : ViewkitsProps) => {
  return (
    
        <View>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}
                    style={{alignSelf:'center'}}>
        <Image source ={(require('../assets/close.png'))}
        style={styles.closeimg}/>
        </TouchableOpacity>
      <Text style={{color:'white', fontSize:18, fontWeight:'bold', alignSelf:'center', marginLeft:110}}>Learning Kits</Text>
      </View>
      <ScrollView>
        <View style={styles.lkbuttonContainer}>
                  <TouchableOpacity style={styles.lkbutton}>
                    <Image 
                      source={require('../assets/learningkitimage.png')}
                      style={styles.lkimage} 
                    />
                    <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
                    <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
                    <Image source={require('../assets/right.png')} style={styles.right} />
                  </TouchableOpacity>
                </View>
                <View style={styles.lkbuttonContainer}>
                  <TouchableOpacity style={styles.lkbutton}>
                    <Image 
                      source={require('../assets/learningkitimage.png')}
                      style={styles.lkimage} 
                    />
                    <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
                    <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
                    <Image source={require('../assets/right.png')} style={styles.right} />
                  </TouchableOpacity>
                </View>
                <View style={styles.lkbuttonContainer}>
                  <TouchableOpacity style={styles.lkbutton}>
                    <Image 
                      source={require('../assets/learningkitimage.png')}
                      style={styles.lkimage} 
                    />
                    <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
                    <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
                    <Image source={require('../assets/right.png')} style={styles.right} />
                  </TouchableOpacity>
                </View>
                <View style={styles.lkbuttonContainer}>
                  <TouchableOpacity style={styles.lkbutton}>
                    <Image 
                      source={require('../assets/learningkitimage.png')}
                      style={styles.lkimage} 
                    />
                    <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
                    <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
                    <Image source={require('../assets/right.png')} style={styles.right} />
                  </TouchableOpacity>
                </View>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

    headercontainer:{
        flexDirection: 'row',
        height:60,
        backgroundColor:'purple'
    },

    closeimg:{
                height:20,
                width:20,
                marginLeft:20,
                alignSelf:'center'
    },
    lkbuttonContainer: {
        alignSelf:'center',
        paddingTop:15,
        paddingBottom:5
         // Space between horizontal components
      },
      lkbutton: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        height: 350,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center', // Centering content
      },
      lkimage: {
        borderRadius: 20,
        width: 330,
        height: 270,
        marginTop: -15,
      },
      lkimagetext: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 15,
        alignSelf: 'flex-start', // Align text to the left
      },
      lkimagestext: {
        fontSize: 14,
        textAlign: 'left',
        marginTop: 5,
        alignSelf: 'flex-start', // Align text to the left
      },
      right: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
})
export default Viewkits