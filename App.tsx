import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RootNavigation, { RootStackParamList } from './src/navigation/rootNavigation';
import Intro from './src/screens/Intro';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UiProvider } from './src/context/uiContext';

type AppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'App'>;
};

const App = ({navigation}:AppProps) => {

  
  return (
  <UiProvider>
      <NavigationContainer>
    
        <RootNavigation />
      
      </NavigationContainer>
  </UiProvider>
  );
};

export default App;
