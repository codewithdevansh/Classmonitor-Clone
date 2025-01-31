// Community.js
import { View, Text } from 'react-native';
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
      <ScrollView>
        <View>
          <CommunityHeader navigation={navigation} />
          <CommunityMiddle navigation={navigation} />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Community;