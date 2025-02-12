import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';

type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const Header = ({ navigation }: HeaderProps) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 350, animated: true });

        setTimeout(() => {
          scrollViewRef.current?.scrollTo({ x: 0, animated: false });
        }, 1000); 
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#FAD1D1', '#F8B4B4', '#FDB5B5']}
        style={[{ height: 450, alignItems: 'flex-start' }, styles.container]}
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Explore the world of fun learning!</Text>

        {/* ScrollView for Auto-Scrolling Images */}
        <ScrollView
          horizontal
          style={styles.horizon}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          pagingEnabled
        >
          <Image source={require('../../assets/headerimage.png')} style={styles.headerimage} />
          <Image source={require('../../assets/headerimage.png')} style={styles.headerimage} />
          <Image source={require('../../assets/headerimage.png')} style={styles.headerimage} />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginTop: 10,
  },
  HeaderText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 30,
    padding: 10,
  },
  loginbutton: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    width: 100,
    position: 'absolute',
    right: 20,
    top: 10,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    backgroundColor: '#AFD6EF',
  },
  horizon: {
    marginTop: 20,
  },
  headerimage: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
    marginHorizontal: 20,
    borderRadius: 40,
  },
});

export default Header;
