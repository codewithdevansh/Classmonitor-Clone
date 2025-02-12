import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import HomeScreen2 from "../screens/HomeScreen2";
import Community from "../screens/Community";
import PlayScreen from "../screens/PlayScreen";
import Account from "../screens/Account";
import { StyleSheet, Text } from "react-native";
import { View, Image } from "react-native";
import CommunityStack from "./CommunityStack";
import AccountStack from "./AccountStack";
import LoginStack from "./LoginStack";
import * as Animatable from 'react-native-animatable';
const Tab = createBottomTabNavigator();



const Tabs2 = () => {

    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            <Tab.Screen
                name="HomeScreen2"
                component={LoginStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Animatable.View
                            animation={focused ? "fadeInLeft" : "fadeIn"}
                            duration={300}
                            style={[styles.iconContainer, focused && styles.focusedTab]}
                        >
                            <Image
                                source={require('../assets/pencil1.png')}
                                style={[styles.icon, focused && styles.focusedIcon]}
                            />
                            {focused && <Text style={styles.tabLabel}>Home</Text>}
                        </Animatable.View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="CommunityStack"
                component={CommunityStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Animatable.View
                            animation={focused ? "fadeInLeft" : "fadeIn"}
                            duration={300}
                            style={[styles.iconContainer, focused && styles.focusedTab]}
                        >
                            <Image
                                source={require('../assets/users.png')}
                                style={[styles.icon, focused && styles.focusedIcon]}
                            />
                            {focused && <Text style={styles.tabLabel}>Community</Text>}
                        </Animatable.View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Play"
                component={PlayScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Animatable.View
                            animation={focused ? "fadeInLeft" : "fadeIn"}
                            duration={300}
                            style={[styles.iconContainer, focused && styles.focusedTab]}
                        >
                            <Image
                                source={require('../assets/youtube.png')}
                                style={[styles.icon, focused && styles.focusedIcon]}
                            />
                            {focused && <Text style={styles.tabLabel}>Play</Text>}
                        </Animatable.View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Play2"
                component={PlayScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Animatable.View
                            animation={focused ? "fadeInLeft" : "fadeIn"}
                            duration={300}
                            style={[styles.iconContainer, focused && styles.focusedTab]}
                        >
                            <Image
                                source={require('../assets/youtube.png')}
                                style={[styles.icon, focused && styles.focusedIcon]}
                            />
                            {focused && <Text style={styles.tabLabel}>Play</Text>}
                        </Animatable.View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Animatable.View
                            animation={focused ? "fadeInLeft" : "fadeIn"}
                            duration={300}
                            style={[styles.iconContainer, focused && styles.focusedTab]}
                        >
                            <Image
                                source={require('../assets/user.png')}
                                style={[styles.icon, focused && styles.focusedIcon]}
                            />
                            {focused && <Text style={styles.tabLabel}>Account</Text>}
                        </Animatable.View>
                    ),
                    headerShown: false,
              
            
          }}
        />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 50, // Increased height to keep everything inside
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 95,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: -29
    },
    focusedTab: {
        backgroundColor: 'black',
        marginTop: -29,
        borderRadius: 100,


    },
    icon: {
        width: 15,
        height: 15,
        tintColor: 'black',
    },
    focusedIcon: {
        tintColor: 'white',
    },
    tabLabel: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 8, // Space between icon and text
    },
});
export default Tabs2;