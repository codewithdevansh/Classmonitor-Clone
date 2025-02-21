import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, forwardRef, useState, useImperativeHandle } from 'react';
import { GestureDetector, Gesture, ScrollView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Collapsible from 'react-native-collapsible';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT; // Fully expanded
const MIN_TRANSLATE_Y = -SCREEN_HEIGHT / 1.87; // Initial collapsed position

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(({ children }, ref) => {
  const translateY = useSharedValue(MIN_TRANSLATE_Y); // Start at min position
  const context = useSharedValue({ y: 0 });
  const [collapsed, setCollapsed] = useState(true);

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50, stiffness: 200 });
  }, []);

  useImperativeHandle(ref, () => ({
    scrollTo: (destination: number) => scrollTo(destination),
    isActive: () => translateY.value !== MIN_TRANSLATE_Y,
  }));

  useEffect(() => {
    scrollTo(MIN_TRANSLATE_Y);
  }, [scrollTo]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      let newTranslateY = event.translationY + context.value.y;
      translateY.value = Math.max(newTranslateY, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value < -SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y); // Expand fully
      } else {
        scrollTo(MIN_TRANSLATE_Y); // Collapse back
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <ScrollView scrollEnabled={false}>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>PlayGroup Learning Kit</Text>
            <Text>Age Group - 1-2.5 Years</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image
                source={require('../../assets/learningkitimage.png')}
                style={{
                  borderRadius: 20,
                  width: 390,
                  height: 200,
                }}
              />
            </View>
            <View style={{ flexDirection: 'column', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Curriculum</Text>
              <Text style={{ marginTop: 10, fontSize: 15 }}>
                This Curriculum Planner is designed for sequential learning. Activities are arranged to ensure
                systematic progression of concepts and skills. This is the most efficient way to approach the kit.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.dropdown} onPress={toggleCollapsed}>
            <Text style={styles.headerText}>{collapsed ? 'Show More' : 'Show Less'}
            </Text>
            <Text style={styles.text}>This unit focuses on the introduction to categories like Birds and Animals alongwith the development of Literacy Skills and Numeracy Skills.</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View style={styles.collapsedContent}>
              <Text>Additional Learning Materials</Text>
            </View>
          </Collapsible>
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  bottomContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    height: 4,
    width: 75,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  dropdownHeader: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collapsedContent: {
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderBottomEndRadius:15,
    borderBottomStartRadius:15,
    width: '95%',
    alignSelf: 'center',
    height:200,
    marginBottom: 20,
  
  },
  text:{
    fontSize:14,
    
    padding:8
  }
});

export default BottomSheet;
