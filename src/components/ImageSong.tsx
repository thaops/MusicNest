import { View, Text, Image } from 'react-native'
import React from 'react'


const ImageSong = () => {
    const UrlImageSong = 'https://firebasestorage.googleapis.com/v0/b/realtimedatabase-231d9.appspot.com/o/Rectangle%2012.png?alt=media&token=2a32c0ae-a41e-420c-8c4d-cce4e1c1d8e7'
  return (
    <View style={{flex:1, justifyContent:'center',alignItems: 'center'}}>
    <Image source={{uri: UrlImageSong}}
    style={{ width:'100%',height:380}}/>
    </View>

  )
}

export default ImageSong