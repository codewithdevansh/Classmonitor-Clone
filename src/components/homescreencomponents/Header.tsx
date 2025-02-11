import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';


type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const Header = ({ navigation }: HeaderProps) => {

    const scrollViewRef = useRef<ScrollView>(null);
    const [scrollDirection, setScrollDirection] = useState<'forward' | 'backward'>('forward');
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (scrollViewRef.current) {
          if (scrollDirection === 'forward') {
            scrollViewRef.current.scrollToEnd({ animated: true });
            setScrollDirection('backward');
          } else {
            scrollViewRef.current.scrollTo({ x: 0, animated: true });
            setScrollDirection('forward');
          }
        }
      }, 3000); // Adjust the interval as needed
  
      return () => clearInterval(interval);
    }, [scrollDirection]);
  
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#FAD1D1', '#F8B4B4', '#FDB5B5']}
        style={[{ height: 450, alignItems: 'flex-start' }, styles.container]}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 35, height: 35, marginLeft: 10, marginTop: 10 }}
        />
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Explore the world of fun learning!</Text>
        <ScrollView
        horizontal={true}
        style={styles.horizon}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <Image
          source={require('../../assets/headerimage.png')}
          style={styles.headerimage}
        />
        <Image
          source={require('../../assets/headerimage.png')}
          style={styles.headerimage}
        />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: 270,
    marginTop: -40,
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
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 20,
    marginTop: 5,
    maxWidth: 350,
    maxHeight: 250,
    borderRadius:40,
  },
});

export default Header;
