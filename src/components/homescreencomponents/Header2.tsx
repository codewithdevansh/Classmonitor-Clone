import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';


type Header2Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen2'>;
};

const Header2 = ({ navigation }: Header2Props) => {
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
        <TouchableOpacity style={styles.help}
              onPress={() => navigation.navigate('Help3')}>
                <Image source={require('../../assets/headphones.png')}
                style={{height:17,width:17, marginRight:10}} />
                <Text style={styles.helpText}>Help</Text>
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
  headerimage: {
    width: 350,
    height: '800%',
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    maxWidth: 350,
    maxHeight: 250,
    borderRadius:50,
  },
  help: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 10,
    flexDirection:'row',
    height:30,
    width:80,
    marginLeft:300,
    marginTop:-32
  },
  helpText: {
    fontWeight: 'bold',
    color: 'black',
  
  },
});

export default Header2;
