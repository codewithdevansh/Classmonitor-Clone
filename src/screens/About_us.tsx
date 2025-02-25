import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type LearningSectionProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LearningSection'>;
}

const About_us = ({ navigation }: LearningSectionProps) => {
    return (
        <SafeAreaView>
        <ScrollView style={{ flexDirection: 'column' }}>
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

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/internet.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 24, fontWeight:'bold' }}>Website</Text>
                        <Text style={{ fontSize: 13, marginLeft: 20,  }}>www.classmonitor.com</Text> </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/facebook.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 24, fontWeight:'bold' }}>Facebook</Text>
                        <Text style={{ fontSize: 13, marginLeft: 20,  }}>Classmonitor</Text> </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/instagram.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 24, fontWeight:'bold' }}>Instagram</Text>
                        <Text style={{ fontSize: 13, marginLeft: 20,  }}>getclassmonitor</Text> </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/youtube1.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 24, fontWeight:'bold' }}>Youtube</Text>
                        <Text style={{ fontSize: 13, marginLeft: 20,  }}>@GetClassMonitor</Text> </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/pinterest.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 24, fontWeight:'bold' }}>Pinterest</Text>
                        <Text style={{ fontSize: 13, marginLeft: 20,  }}>@GetClassMonitor</Text> </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/linkedin.png')} style={{ width: 25, height: 25, marginTop: 32, marginLeft: 34 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 24, fontWeight:'bold' }}>Linkedin</Text>
                        <Text style={{ fontSize: 13, marginLeft: 20,  }}>ClassMonitor</Text> </View>
                </TouchableOpacity>

                <View style={{ height: 1, width: '83%', backgroundColor: 'lightgrey', marginLeft: 34, marginTop: 30 }}></View>

                <Text style={{marginLeft:34, fontWeight:'bold', marginTop:25, fontSize:18}}>Data</Text>

                <Text style={{marginLeft:34, marginTop:12, fontSize:16}}>If you would like your data deleted or would like access to the personal data ClassMonitor holds about you, please contact us at</Text>
                <Text style={{marginLeft:34,  fontSize:16,color:'blue'}}>support@classmonitor.com</Text>

                <TouchableOpacity style={{width:'80%', height:10, alignSelf:'center', borderColor:'red'}}>
                    <Text style={{color:'red', fontSize:16, alignSelf:'center'}}>Delete Account</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default About_us