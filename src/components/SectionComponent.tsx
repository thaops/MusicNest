import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Props {
    children?: ReactNode,
}
const SectionComponent = (props:Props) => {
    const {children} = props
  return (
    <View style={[globalStyles.seaction]}>
      {children}
    </View>
  )
}

export default SectionComponent

const styles = StyleSheet.create({})