import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/rootNavigation'; // Import the type for the navigation parameter
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CommunityStack from '../navigation/CommunityStack'; // Import the nested stack navigator
import PlayScreen from '../screens/PlayScreen';
import Account from '../screens/Account';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AccountStack from './AccountStack';
import CustomAlert from '../components/CustomAlert'; // Import the custom alert component

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    setAlertVisible(false);
    // Navigate to the login screen
    navigation.navigate('Login');
  };

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
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/pencil1.png')} style={styles.page1} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CommunityStack"
          component={CommunityStack} // Use the nested stack navigator
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/users.png')} style={styles.page1} />
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Play"
          component={PlayScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/youtube.png')} style={styles.page1} />
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/user.png')} style={styles.page1} />
              </View>
            ),
            headerShown: false,
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  setAlertVisible(true);
                }}
                delayLongPress={undefined} // Ensure delayLongPress is either a number or undefined
              />
            ),
          }}
        />
      </Tab.Navigator>
        visible={alertVisible}
        visible={setAlertVisible}
        onClose={() => setAlertVisible(false)}
        onLogin={handleLogin}
      /{'>'}
    </>
  );
};

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
    marginLeft: -15,
  },
});

export default Tabs;

function setAlertVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}
