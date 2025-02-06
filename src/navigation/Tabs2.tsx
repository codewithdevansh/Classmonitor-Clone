import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen2 from "../screens/HomeScreen2";
import Community from "../screens/Community";
import PlayScreen from "../screens/PlayScreen";
import Account from "../screens/Account";
import { StyleSheet } from "react-native";
import { View,Image } from "react-native";
import CommunityStack from "./CommunityStack";
import AccountStack from "./AccountStack";
import LoginStack from "./LoginStack";
const Tab = createBottomTabNavigator();

const Tabs2   = () => {
    return(
        <Tab.Navigator
               screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                  position: 'absolute',
                  bottom: 25,
                  left: 20,
                  right: 20,
                  elevation: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: 15,
                  height: 45,
                  ...styles.shadow
                }
            }}
            >
            <Tab.Screen name="HomeScreen2" component={LoginStack}
            options = {{ 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                         <Image source={require('../assets/pencil1.png')}style={styles.page1}/>
                    </View>
                )
                }}  />
            <Tab.Screen 
            name="Community" 
            component={CommunityStack}
            options = {{ 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                         <Image source={require('../assets/users.png')}style={styles.page1}/>
                    </View>
                )
                }}/>
                 <Tab.Screen name="Play" component={PlayScreen}options = {{ 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                         <Image source={require('../assets/youtube.png')}style={styles.page1}/>
                    </View>
                )
                }}/>
            <Tab.Screen name="Play2" component={PlayScreen}options = {{ 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                         <Image source={require('../assets/youtube.png')}style={styles.page1}/>
                    </View>
                )
                }}/>
            <Tab.Screen name="Account" component={AccountStack}options = {{ 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                         <Image source={require('../assets/user.png')}style={styles.page1}/>
                    </View>
                )
                }}/>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    },
    page1: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: 'black',
        justifyContent: 'center',
        marginTop: -15,
        marginLeft: -15

        
    }
  });
export default Tabs2;