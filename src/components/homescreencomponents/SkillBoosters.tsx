// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react'

// const SkillBoosters = () => {
//  return (
//      <View style={styles.container}>
//        <Image
//          source={require('../assets/rocket.png')}
//          style={styles.LearningKitsLogo}
//        />
//        <Text style={styles.lktext}>Skill Boosters</Text>
//        <Text style={styles.lkstext}>
//          Devlop 21st century skills with our expert curated skill booster kits
//        </Text>
//        <View>
//          <TouchableOpacity style={styles.lkbutton}>
//        <Image 
//          source={require('../assets/learningkitimage.png')}
//          style={styles.lkimage} />
//          <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
//          <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
//          <Image source={require('../assets/right.png')} style={styles.right} />
//          </TouchableOpacity>
         
//        </View>
//        <TouchableOpacity style={styles.viewbutton}>
//                <Text style={styles.viewtext}>View All Learning Kits</Text>
//                <Image source={require('../assets/next.png')} style={styles.next} />
//              </TouchableOpacity>
//      </View>
//    );
//  };
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: '#E2F0F9',
//    },
   
//    LearningKitsLogo: {
//      width: '25%',
//      height: undefined,
//      aspectRatio: 1,
//      resizeMode: 'contain',
//      maxWidth: 150, // Optional: Set a max width
//    },
//    lktext: {
//      fontSize: 22,
//      fontWeight: 'bold',
//      textAlign: 'center',
//      marginBottom: 20,
//      color: '#7627BE',
     
//    },
//    lkstext: {
//      fontSize: 18,
//      textAlign: 'center',
//      marginHorizontal: 20,
//      marginBottom: 20,
//      marginTop: -10
//    },
//    lkbutton: {
//      backgroundColor: 'white',
//      borderRadius: 20,
//      padding: 10,
//      height: 350,
//      width: 350,
//      justifyContent: 'center'
//    },
//    lkimagetext: {
//      fontSize: 15,
//      fontWeight: 'bold',
//      textAlign: 'left',
//      marginTop: 15,
     
//    },
//    lkimage: {
//      borderRadius: 20,
//      width: 330,
//      height: 270,
//      padding: 10,
//      marginTop: -15
   
//    },
//    lkimagestext: {
//      fontSize: 14,
//      textAlign: 'left',
//      marginTop: 5,
 
//    },
//    right: {
//      width: 28,
//      height: 28,
//      resizeMode: 'contain',
//      marginLeft: 290,
//      marginTop: -40,
//      alignItems: 'right',
//    },
//    viewbutton: {
//      backgroundColor: 'white',
//      borderRadius: 20,
//      padding: 10,
//      marginTop: 20,
//      marginBottom: 20,
//      width: 250,
//      justifyContent: 'center',
//      height: 40,
//    },
//    viewtext: {
//      fontSize: 14,
//      textAlign: 'center',
//      marginRight: 70,
//      color: 'red',
//      fontWeight: 'bold',
   
//    },
//    next: {
//      width: 20,
//      height: 20,
//      resizeMode: 'contain',
//      marginLeft: 190,
//      marginTop: -20,
//      color: 'red',
//    },
 
//  });
 
// export default SkillBoosters


import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootNavigation';

type LearningkitsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Learningkits'>;
};

const Learningkits = ({navigation} : LearningkitsProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/rocket.png')}
        style={styles.LearningKitsLogo}
      />
      <Text style={styles.lktext}>Skill Boosters</Text>
      <Text style={styles.lkstext}>
      Devlop 21st century skills with our expert curated skill booster kits
      </Text>

      <ScrollView horizontal={true} style={styles.horizon} showsHorizontalScrollIndicator={false}>
        <View style={styles.lkbuttonContainer}>
          <TouchableOpacity style={styles.lkbutton}>
            <Image 
              source={require('../../assets/learningkitimage.png')}
              style={styles.lkimage} 
            />
            <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
            <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
            <Image source={require('../../assets/right.png')} style={styles.right} />
          </TouchableOpacity>
        </View>

        <View style={styles.lkbuttonContainer}>
          <TouchableOpacity style={styles.lkbutton}>
            <Image 
              source={require('../../assets/learningkitimage.png')}
              style={styles.lkimage} 
            />
            <Text style={styles.lkimagetext}>PlayGroup Learning Kit</Text>
            <Text style={styles.lkimagestext}>Age 1-2.5 years</Text>
            <Image source={require('../../assets/right.png')} style={styles.right} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.viewbutton}
      onPress={() => navigation.navigate('Viewkits')}>
        <Text style={styles.viewtext}>View all booster Kits</Text>
        <Image source={require('../../assets/next.png')} style={styles.next} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2F0F9',
    paddingTop: 0,
    paddingBottom:25 // Adjusted for better alignment
  },
  LearningKitsLogo: {
    width: '25%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    maxWidth: 150,
  },
  lktext: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#7627BE',
  },
  lkstext: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: -10,
  },
  horizon: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  lkbuttonContainer: {
    marginRight: 20, // Space between horizontal components
  },
  lkbutton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    height: 350,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center', // Centering content
  },
  lkimage: {
    borderRadius: 20,
    width: 330,
    height: 270,
    marginTop: -15,
  },
  lkimagetext: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 15,
    alignSelf: 'flex-start', // Align text to the left
  },
  lkimagestext: {
    fontSize: 14,
    textAlign: 'left',
    marginTop: 5,
    alignSelf: 'flex-start', // Align text to the left
  },
  right: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  viewbutton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between text and icon
  },
  viewtext: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  next: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Learningkits;
