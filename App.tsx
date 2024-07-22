import { View, StatusBar } from 'react-native';
import React from 'react';
import Router from './src/routers/Router';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
