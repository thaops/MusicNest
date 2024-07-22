import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    children?: ReactNode,
    justify?:
    |"center" 
    | "flex-start" 
    | "flex-end" 
    | "space-between" 
    | "space-around" 
    | "space-evenly" 
    | undefined,
    onPress?: () => void,
    styles?: StyleProp<ViewStyle>;
}

const RowComponent = (props: Props) => {
    const { children,justify, onPress,styles } = props;
    const locaStyle = [globalStyles.row,
        {
            justifyContent: justify ?? 'center',
        }, 
        styles
        ];
    return onPress?(
        <TouchableOpacity style={locaStyle} onPress={onPress? () => onPress : undefined}>
            {children}
        </TouchableOpacity>
    ): (
        <View style={locaStyle}>
            {children}
        </View>
    );
}

export default RowComponent;

const styles = StyleSheet.create({});
