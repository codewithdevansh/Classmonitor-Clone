import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';



type LearningSectionProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LearningSection'>;
}

const Notification_Settings = ({navigation}: LearningSectionProps) => {
  return (
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/back.png')}
                                style={{ width: 25, height: 25, marginLeft: 20, marginTop: 20 }}
                            />
                        </TouchableOpacity>
      <Text style={{marginTop:21, alignItems:'center', marginLeft:78, fontSize:20}}>Notification Settings</Text>
    </View>

    <View style={{flexDirection:'row', marginTop:15}}>
        <Image source={require('../assets/notification.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
        <View style={{flexDirection:'column'}}>
            <Text style={{fontWeight:'700', marginTop:'25', marginLeft:'35'}}>Turn off Notification</Text>
            <Text style={{marginLeft:'35'}}>Activate all Notification</Text>
        </View>
    </View>
    </View>
  )
}

export default Notification_Settings