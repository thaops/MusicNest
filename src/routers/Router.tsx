import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicPlayer from '../tasks/MusicPlayer';
import BottomTab from './BottomTab';
import ListSong from '../tasks/ListSong';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      <Stack.Screen name="ListSong" component={ListSong} />
      
    </Stack.Navigator>
  );
};

export default Router;
