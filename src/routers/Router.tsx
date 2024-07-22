import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../homes/HomeScreen';
import MusicPlayer from '../tasks/MusicPlayer';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
    </Stack.Navigator>
  );
};

export default Router;
