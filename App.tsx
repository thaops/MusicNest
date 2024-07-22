import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import MusicPlayer from './src/tasks/MusicPlayer'

const App = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={{ flex: 1 }}>
        <MusicPlayer />
      </View>
    </>
  )
}

export default App
