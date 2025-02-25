import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';

type LearningSectionProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LearningSection'>;
}

const About_us = ({ navigation }: LearningSectionProps) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'purple', height: 160 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/back.png')}
                        style={{ width: 25, height: 25, marginLeft: 20, marginTop: 20 }}
                    />
                </TouchableOpacity>
                <Text style={{ alignItems: 'center', marginLeft: 80, marginTop: 20, fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                    About ClassMonitor
                </Text>
            </View>
            <Image
                source={require('../assets/logo.png')}
                style={{ width: 80, height: 80, marginLeft: 30, marginTop: -40 }} />
            <Text style={{ marginLeft: 28, marginTop: 15, fontSize: 20, fontWeight: 'bold' }}> ClassMonitor</Text>
            <View style={{ height: 1, width: '83%', backgroundColor: 'lightgrey', marginLeft: 34, marginTop: 25 }}></View>

            <View style={{flexDirection:'column'}}>

                

            </View>

        </View>
    )
}

export default About_us