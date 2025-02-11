import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CommunityStack from '../navigation/CommunityStack';
import PlayScreen from '../screens/PlayScreen';
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
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 45,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Animatable.View 
                animation={focused ? "bounceIn" : "fadeIn"} 
                duration={500} 
                style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
              >
                <Image source={require('../assets/pencil1.png')} style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'black',marginBottom:17, }} />
                
              </Animatable.View>
            ),
          }}
        />
        <Tab.Screen
          name="CommunityStack"
          component={CommunityStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Animatable.View animation={focused ? "zoomIn" : "fadeIn"} duration={500}>
                <Animatable.Text> </Animatable.Text>
                <Image source={require('../assets/users.png')} style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'black' ,marginBottom:17,}} />
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
              <Animatable.View animation={focused ? "pulse" : "fadeIn"} duration={500}>
                <Image source={require('../assets/youtube.png')} style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'black',}} />
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
              <Animatable.View animation={focused ? "shake" : "fadeIn"} duration={500}>
                <Image source={require('../assets/user.png')} style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'black' }} />
              </Animatable.View>
            ),
            headerShown: false,
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  setAlertVisible(true);
                }}
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

export default Tabs;
