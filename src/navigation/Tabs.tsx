import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CommunityStack from '../navigation/CommunityStack';
import PlayScreen from '../screens/PlayScreen';
import Notification from '../screens/Notification';
import AccountStack from './AccountStack';
import CustomAlert from '../components/CustomAlert';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
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
                {focused && <Text style={styles.tabLabel}>Learn</Text>}
              </Animatable.View>
            ),
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
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => setAlertVisible(true)}
              />
            ),
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
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => setAlertVisible(true)}
              />
            ),
          }}
        />
      </Tab.Navigator>

      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </>
  );
};

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
    marginTop:-29
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

export default Tabs;
