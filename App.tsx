import { View, StatusBar } from 'react-native';
import React from 'react';
import Router from './src/routers/Router';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
