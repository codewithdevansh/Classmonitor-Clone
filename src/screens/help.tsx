// Help.js
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';

type HelpProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Help'>;
};

const Help = ({ navigation }: HelpProps) => {
  return (
    <View style={{ backgroundColor: 'white', height: 1000 }}>
      <View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={{ width: 25, height: 25, marginLeft: 10, marginTop: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 120, marginTop: 10 }}>Contact Us</Text>
        </View>
        {/* Rest of the Help screen code */}
      </View>
    </View>
  );
};

export default Help;