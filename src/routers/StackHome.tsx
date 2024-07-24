import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListSong from '../tasks/ListSong';
import HomeScreen from '../homes/HomeScreen';

const Stack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListSong" component={ListSong} />
    </Stack.Navigator>
  );
};

export default StackHome;
