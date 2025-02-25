import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';



type LearningSectionProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LearningSection'>;
}

const Notification_Settings = ({navigation}: LearningSectionProps) => {
  return (
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/back.png')}
                                style={{ width: 25, height: 25, marginLeft: 20, marginTop: 20 }}
                            />
                        </TouchableOpacity>
      <Text>Notification_Settings</Text>
    </View>
  )
}

export default Notification_Settings