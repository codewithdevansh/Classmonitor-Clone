import { View, Text, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';

type IntroProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Intro'>;
};



const Intro = ({navigation}:IntroProps) => {
     useEffect(() => {
        setTimeout(() =>{
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainTabs', params: { screen: 'HomeScreen' } }],
          });
    }, 200);
     
    }, []);
    
  return (
    <View style ={{flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:'red', height:'100%',width:'100%', padding:10}}>
        <Image source = {require('../assets/logo.png')}
        style ={{height:25,width:25,padding:10}} />
      <Text style ={{fontSize:25, color:'white',fontWeight:'bold', marginLeft:10}}>ClassMonitor</Text>
    </View>
  )
}

export default Intro