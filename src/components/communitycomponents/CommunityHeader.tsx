import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const CommunityHeader = () => {
  return (
    <View style={styles.container}> 
        <View style={styles.container1}>
      <Text style={styles.title}>Community</Text>
      <TouchableOpacity style={styles.help}>
        <Text style={styles.helpText}>Help</Text>
      </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.container2}>
        <TouchableOpacity style={styles.box} >
            <Image source={require('../../assets/art.png')}
                style={styles.image}
             />
            <Text style={{color:'black', fontWeight:'bold', marginTop:6,paddingLeft:9}}>ART AND CRAFT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} >
            <Image source={require('../../assets/art.png')}
                style={styles.image}
             />
            <Text style={{color:'black', fontWeight:'bold', marginTop:6,paddingLeft:9}}>ART AND CRAFT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} >
            <Image source={require('../../assets/art.png')}
                style={styles.image}
             />
            <Text style={{color:'black', fontWeight:'bold', marginTop:6,paddingLeft:9}}>ART AND CRAFT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} >
            <Image source={require('../../assets/art.png')}
                style={styles.image}
             />
            <Text style={{color:'black', fontWeight:'bold', marginTop:6,paddingLeft:9}}>ART AND CRAFT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} >
            <Image source={require('../../assets/art.png')}
                style={styles.image}
             />
            <Text style={{color:'black', fontWeight:'bold', marginTop:6,paddingLeft:9}}>ART AND CRAFT</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
    container:{
            flexDirection:'column'
    },
  container1: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Spread items to the ends
    alignItems: 'center', // Vertically align items
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: 'purple',
    fontSize: 25,
    fontWeight: 'bold',
  },
  help: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 10,
  },
  helpText: {
    fontWeight: 'bold',
    color: 'black',
  },
  container2:{
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Spread items to the ends
    alignItems: 'center', // Vertically align items
    paddingTop: 22,
    paddingLeft:10,
    backgroundColor: 'white',

  },
  box:{
    width:140,
    height:100,
    elevation:20,
    backgroundColor:'#ea9efc',
    borderRadius:15,
    marginRight:15

  },
  image:{
    width:60,
    height:60,
    marginLeft:31,
    marginTop:8
  }
});

export default CommunityHeader;
