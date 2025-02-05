import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';

type VerifyProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Verify'>;
}

const Verify = ({ navigation }: VerifyProps) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image
                    source={require('../assets/back.png')}
                    style={{ width: 25, height: 25, marginLeft: 10, marginTop: 10 }}
                />
            </TouchableOpacity>
            <View style = {{flexDirection:'column'}}>
                <View style ={{padding:25}}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Verify Mobile</Text>
                <Text style={{marginTop:25}}>Enter OTP sent to your mobile number +91</Text>
                <Text style={{color:'red'}}>0000000000</Text>
                <Text style={{marginTop:25, fontSize:18}}>One time password</Text>
                <View>

                </View>
                <Text style={{marginTop:100}}>Time:00</Text>

                <TouchableOpacity
                        style={{
                          marginLeft: 230,
                          marginTop: 420,
                          backgroundColor: 'red',
                          width: 125,
                          height: 47,
                          borderRadius: 10,
                          justifyContent: 'center'
                        }}
                        onPress={() => navigation.navigate('MainTabs')}>
                        <Text
                          style={{
                            color: 'White',
                            marginLeft: 18
                          }}>Verify</Text>
                        <Image source={require('../assets/right.png')}
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                          }} />
                      </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default Verify