import { View, Text, Image } from 'react-native'
import React from 'react'

const UrlImageSet = 'https://firebasestorage.googleapis.com/v0/b/realtimedatabase-231d9.appspot.com/o/Rectangle%2012.png?alt=media&token=2a32c0ae-a41e-420c-8c4d-cce4e1c1d8e7'

interface Props{
  UrlImageSong?: string,
  width?:string,
  height?:number
}
const ImageSong = (props:Props) => {
  const {UrlImageSong,width,height} = props
  return (
    <View style={{flex:1, justifyContent:'center',alignItems: 'center'}}>
    <Image source={{uri: UrlImageSong?UrlImageSong:UrlImageSet}}
    style={{ width:width?width:'100%',height:height?height:380}}/>
    </View>

  )
}

export default ImageSong