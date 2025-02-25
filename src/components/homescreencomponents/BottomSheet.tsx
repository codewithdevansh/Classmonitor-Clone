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
        <ScrollView >
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
          <View style={styles.dropdownContainer}>
            <TouchableOpacity style={[styles.dropdown, !collapsed && styles.expandedDropdown]} onPress={toggleCollapsed}>
             <View style={{ flexDirection: 'row', }}>
             <View style={{height:35, width:70, backgroundColor:'red', marginTop:-22, borderTopLeftRadius:5, borderBottomStartRadius:10, borderBottomEndRadius:10, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontWeight:'600', fontSize:13}}>Unit -1</Text>
              </View>
              <View style={{height:8, width:3, backgroundColor:'darkred', marginTop:-22, marginLeft:-2, borderTopEndRadius:2}}></View>
             </View>
              <Text style={styles.headerText}>{collapsed ? 'Show More' : 'Show Less'}</Text>
              <Text style={styles.text}>
                This unit focuses on the introduction to categories like Birds and Animals along with the development of Literacy Skills and Numeracy Skills.
              </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View style={styles.collapsedContent}>

                <TouchableOpacity style={{ flexDirection: 'row' }} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>


              </View>
            </Collapsible>
          </View>
        

          <View style={styles.dropdownContainer1}>
            <TouchableOpacity style={[styles.dropdown, !collapsed && styles.expandedDropdown]} onPress={toggleCollapsed}>
             <View style={{ flexDirection: 'row', }}>
             <View style={{height:35, width:70, backgroundColor:'red', marginTop:-22, borderTopLeftRadius:5, borderBottomStartRadius:10, borderBottomEndRadius:10, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontWeight:'600', fontSize:13}}>Unit -1</Text>
              </View>
              <View style={{height:8, width:3, backgroundColor:'darkred', marginTop:-22, marginLeft:-2, borderTopEndRadius:2}}></View>
             </View>
              <Text style={styles.headerText}>{collapsed ? 'Show More' : 'Show Less'}</Text>
              <Text style={styles.text}>
                This unit focuses on the introduction to categories like Birds and Animals along with the development of Literacy Skills and Numeracy Skills.
              </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View style={styles.collapsedContent}>

                <TouchableOpacity style={{ flexDirection: 'row' }} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>


              </View>
            </Collapsible>
          </View>

          <View style={styles.dropdownContainer1}>
            <TouchableOpacity style={[styles.dropdown, !collapsed && styles.expandedDropdown]} onPress={toggleCollapsed}>
             <View style={{ flexDirection: 'row', }}>
             <View style={{height:35, width:70, backgroundColor:'red', marginTop:-22, borderTopLeftRadius:5, borderBottomStartRadius:10, borderBottomEndRadius:10, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontWeight:'600', fontSize:13}}>Unit -1</Text>
              </View>
              <View style={{height:8, width:3, backgroundColor:'darkred', marginTop:-22, marginLeft:-2, borderTopEndRadius:2}}></View>
             </View>
              <Text style={styles.headerText}>{collapsed ? 'Show More' : 'Show Less'}</Text>
              <Text style={styles.text}>
                This unit focuses on the introduction to categories like Birds and Animals along with the development of Literacy Skills and Numeracy Skills.
              </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View style={styles.collapsedContent}>

                <TouchableOpacity style={{ flexDirection: 'row' }} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>


              </View>
            </Collapsible>
          </View>

          <View style={styles.dropdownContainer1}>
            <TouchableOpacity style={[styles.dropdown, !collapsed && styles.expandedDropdown]} onPress={toggleCollapsed}>
             <View style={{ flexDirection: 'row', }}>
             <View style={{height:35, width:70, backgroundColor:'red', marginTop:-22, borderTopLeftRadius:5, borderBottomStartRadius:10, borderBottomEndRadius:10, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontWeight:'600', fontSize:13}}>Unit -1</Text>
              </View>
              <View style={{height:8, width:3, backgroundColor:'darkred', marginTop:-22, marginLeft:-2, borderTopEndRadius:2}}></View>
             </View>
              <Text style={styles.headerText}>{collapsed ? 'Show More' : 'Show Less'}</Text>
              <Text style={styles.text}>
                This unit focuses on the introduction to categories like Birds and Animals along with the development of Literacy Skills and Numeracy Skills.
              </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
              <View style={styles.collapsedContent}>

                <TouchableOpacity style={{ flexDirection: 'row' }} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row' , marginTop:15}} >
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Image source={require('../../assets/check.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                    <View style={{ height: 120, width: 2, backgroundColor: 'grey', marginTop: 7 }}></View>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Walk Around The Letter</Text>
                    <Text style={{ color: 'grey' }}>English</Text>
                    <View style={{ flexDirection: 'row', }}>
                      <View style={{ height: 20, width: 70, backgroundColor: 'lightgrey', marginTop: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={require('../../assets/time.png')} style={{ height: 12, width: 12, borderRadius: 10, }} />
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>15 mins</Text>
                      </View>
                      <View style={{ height: 20, width: 85, backgroundColor: 'lightblue', marginLeft: 10, marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: 'darkblue' }}>ACTIVITY</Text>
                      </View>
                    </View>
                    <View style={{ height: 2, width: 290, backgroundColor: 'grey', marginTop: 80 }}></View>
                  </View>
                  <View>
                    <Image source={require('../../assets/instagram.png')} style={{ height: 75, width: 75, marginLeft: -70, marginTop: -5 }} />
                  </View>
                </TouchableOpacity>


              </View>
            </Collapsible>
          </View>

          
          <View style={{backgroundColor:'purple', height:50, width:'100%', flexDirection:'column'}}>
                <Text>Explore Curriculum by Category</Text>
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

  text: {
    fontSize: 14,

    padding: 8
  },
  dropdownContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    overflow: 'hidden', // Ensures smooth expansion
    marginBottom: 10,
    height: 1000
  },
  dropdownContainer1: {
    width: '95%',
    alignSelf: 'center',
    overflow: 'hidden', // Ensures smooth expansion
    height: 1000,
    marginTop:-800
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'column',

  },
  expandedDropdown: {
    borderBottomLeftRadius: 0, // Remove bottom radius when expanded
    borderBottomRightRadius: 0,
    width: '90%',
    alignSelf: 'center',

  },
  collapsedContent: {
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderBottomLeftRadius: 15, // Ensure smooth connection
    borderBottomRightRadius: 15,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10

  },
});

export default BottomSheet;
