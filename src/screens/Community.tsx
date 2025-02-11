// Community.js
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import CommunityHeader from '../components/communitycomponents/CommunityHeader';
import CommunityMiddle from '../components/communitycomponents/CommunityMiddle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/rootNavigation';

type CommunityNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Community'>;

const Community = () => {
  const navigation = useNavigation<CommunityNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView>
      <CommunityHeader navigation={navigation} />
      <ScrollView>
        <View>

          <CommunityMiddle navigation={navigation} />
          
          <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <Image
                source={require('../assets/avatar.png')} // Replace with actual profile picture
                style={styles.profilePic}
              />
              <View>
                <Text style={styles.profileName}>Ritu Bharti & Yatendra Kain</Text>
                <Text style={styles.profileTag}>#nursery</Text>
              </View>
            </View>

            {/* Caption */}
            <Text style={styles.caption}>
              My child enjoyed a lot while pasting...
            </Text>

            {/* Image Display */}
            <Image
              source={require('../assets/random.png')}
              style={styles.postImage}
            />

            {/* Activity Section */}
            <View style={styles.activitySection}>
              <View style={styles.assessmentTag}>
                <Text style={styles.assessmentText}>ASSESSMENT</Text>
              </View>
              <Text style={styles.activityTitle}>
                Transportation - How Many Can Sit?
              </Text>
              <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.buttonText}>ACTIVITY</Text>
              </TouchableOpacity>
            </View>

            {/* Comment Section */}
            <View style={styles.commentSection}>
              <Text style={styles.comment}>
                <Text style={styles.commenter}>ClassMonitor Expert</Text> Nice going... Keep up the good work 😊
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <Image
                source={require('../assets/avatar.png')} // Replace with actual profile picture
                style={styles.profilePic}
              />
              <View>
                <Text style={styles.profileName}>Ritu Bharti & Yatendra Kain</Text>
                <Text style={styles.profileTag}>#nursery</Text>
              </View>
            </View>

            {/* Caption */}
            <Text style={styles.caption}>
              My child enjoyed a lot while pasting...
            </Text>

            {/* Image Display */}
            <Image
              source={require('../assets/random.png')}
              style={styles.postImage}
            />

            {/* Activity Section */}
            <View style={styles.activitySection}>
              <View style={styles.assessmentTag}>
                <Text style={styles.assessmentText}>ASSESSMENT</Text>
              </View>
              <Text style={styles.activityTitle}>
                Transportation - How Many Can Sit?
              </Text>
              <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.buttonText}>ACTIVITY</Text>
              </TouchableOpacity>
            </View>

            {/* Comment Section */}
            <View style={styles.commentSection}>
              <Text style={styles.comment}>
                <Text style={styles.commenter}>ClassMonitor Expert</Text> Nice going... Keep up the good work 😊
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <Image
                source={require('../assets/avatar.png')} // Replace with actual profile picture
                style={styles.profilePic}
              />
              <View>
                <Text style={styles.profileName}>Ritu Bharti & Yatendra Kain</Text>
                <Text style={styles.profileTag}>#nursery</Text>
              </View>
            </View>

            {/* Caption */}
            <Text style={styles.caption}>
              My child enjoyed a lot while pasting...
            </Text>

            {/* Image Display */}
            <Image
              source={require('../assets/random.png')}
              style={styles.postImage}
            />

            {/* Activity Section */}
            <View style={styles.activitySection}>
              <View style={styles.assessmentTag}>
                <Text style={styles.assessmentText}>ASSESSMENT</Text>
              </View>
              <Text style={styles.activityTitle}>
                Transportation - How Many Can Sit?
              </Text>
              <TouchableOpacity style={styles.activityButton}>
                <Text style={styles.buttonText}>ACTIVITY</Text>
              </TouchableOpacity>
            </View>

            {/* Comment Section */}
            <View style={styles.commentSection}>
              <Text style={styles.comment}>
                <Text style={styles.commenter}>ClassMonitor Expert</Text> Nice going... Keep up the good work 😊
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    margin: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profileTag: {
    fontSize: 12,
    color: "#777",
  },
  caption: {
    fontSize: 14,
    marginBottom: 8,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  activitySection: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  assessmentTag: {
    backgroundColor: "#EAF7E8",
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  assessmentText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 4,
  },
  activityButton: {
    backgroundColor: "#FF6F61",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  commentSection: {
    marginTop: 10,
  },
  comment: {
    fontSize: 14,
  },
  commenter: {
    fontWeight: "bold",
  },
});

export default Community;