import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilys } from '../constants/fontFamily'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../constants/colors'

interface Props{
    text?:string,
    size?:number,
    font?:string,
    color?:string,
    styles?: StyleProp<ViewStyle>;
    flex?:number,
    
}
const TextComponent = (props:Props) => {
    const{text,size,font,color, styles,flex} = props
  return (
    <Text style={[globalStyles.text,{fontFamily:font?? fontFamilys.regular,color:color??colors.decs, fontSize: size?? 16,
      flex:flex ?? 1,
    }, styles] }>
      {text}
    </Text>
  )
}

export default TextComponent

const styles = StyleSheet.create({})