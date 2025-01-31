import { View, Text } from 'react-native'
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
      navigation.navigate('MainTabs');
    }, 2000);
     
    }, []);
    
  return (
    <View>
      <Text>Intro</Text>
    </View>
  )
}

export default Intro