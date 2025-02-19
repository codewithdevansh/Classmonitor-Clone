import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, forwardRef } from 'react'
import { GestureDetector, Gesture, ScrollView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT; // Fully expanded
const MIN_TRANSLATE_Y = -SCREEN_HEIGHT /1.87; // Initial collapsed position

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(({ children }, ref) => {
  const translateY = useSharedValue(MIN_TRANSLATE_Y); // Start at min position

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50, stiffness: 200 });
  }, []);

  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      let newTranslateY = event.translationY + context.value.y;
      // Restrict downward movement
      translateY.value = Math.max(newTranslateY, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      // Expand to full screen if past threshold, otherwise reset
      if (translateY.value < -SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y); // Expand fully
      } else {
        scrollTo(MIN_TRANSLATE_Y); // Collapse back
      }
    });

  useEffect(() => {
    scrollTo(MIN_TRANSLATE_Y);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

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
    top: SCREEN_HEIGHT ,
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
});

export default BottomSheet;
