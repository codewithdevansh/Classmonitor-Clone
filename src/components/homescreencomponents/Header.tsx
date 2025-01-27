import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';


type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const Header = ({ navigation }: HeaderProps) => {
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
        <Image
          source={require('../../assets/headerimage.png')}
          style={styles.headerimage}
        />
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
    backgroundColor: '#ff4081',
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
  headerimage: {
    width: 350,
    height: '50%',
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    maxWidth: 350,
    maxHeight: 200,
  },
});

export default Header;
