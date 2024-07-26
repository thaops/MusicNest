import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Props{
  title?:string,
  back?:boolean,
  right?:ReactNode,
  children: ReactNode
}
const ContainerComponent = (props:Props) => {
  const {title,back,right,children} = props
  return (
    <ScrollView style={[globalStyles.container]}>
      {children}
    </ScrollView>
  )
}

export default ContainerComponent