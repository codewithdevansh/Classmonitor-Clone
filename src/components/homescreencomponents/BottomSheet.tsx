import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, forwardRef, useState } from 'react';
import { GestureDetector, Gesture, ScrollView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { List } from 'react-native-paper';

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
      translateY.value = Math.max(newTranslateY, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
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

            {/* Dropdown Component */}
            <DropdownComponent />
          </View>
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  );
});

const DropdownComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <List.Accordion
        title="Unit - 1"
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item
          title="Colour The Same Animals"
          description="EVS - 10 mins ACTIVITY"
          left={() => <List.Icon icon="paw" />}
        />
        <List.Item
          title="Letters And Sounds"
          description="English - 20 mins ACTIVITY"
          left={() => <List.Icon icon="alphabetical" />}
        />
        <List.Item
          title="Number pairing"
          description="Math - 15 mins ASSESSMENT"
          left={() => <List.Icon icon="numeric" />}
        />
      </List.Accordion>
    </View>
  );
};

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
  dropdownContent: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default BottomSheet;