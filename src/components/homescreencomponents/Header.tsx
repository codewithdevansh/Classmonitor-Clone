import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState, useContext} from 'react';
import {UiContext} from '../../context/uiContext';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/rootNavigation';

const {width} = Dimensions.get('window'); // Get screen width

type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const Header = ({navigation}: HeaderProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const image = [
    require('../../assets/headerimage.png'),
    require('../../assets/headerimage.png'),
    require('../../assets/headerimage.png'),
  ];
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://10.0.2.2:5000/api/images') // Fetch images from backend
      .then(response => response.json())
      .then(data => setImages(data.images))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const nextIndex = (activeIndex + 1) % images.length;
        scrollViewRef.current.scrollTo({x: nextIndex * width, animated: true});
        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Track scroll event
  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FAD1D1', '#F8B4B4', '#FDB5B5']}
        style={[{height: 450, alignItems: 'flex-start'}, styles.container]}>
        <Image
          source={{uri: 'http://10.0.2.2:5000/public/logo.png'}}
          style={styles.logo}
        />

        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.HeaderText}>
          Explore the world of fun learning!
        </Text>

        {/* ScrollView for Auto-Scrolling Images */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.horizon}>
          {images.map((img, index) => (
            <Image key={index} source={{uri: img}} style={styles.headerimage} />
          ))}
        </ScrollView>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginTop: 10,
  },
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
    position: 'absolute',
    right: 20,
    top: 10,
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
  horizon: {
    marginTop: 20,
  },
  headerimage: {
    width: width * 0.97, // Full screen width for smooth scrolling
    height: 240,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 7,
    height: 7,
  },
});

export default Header;
