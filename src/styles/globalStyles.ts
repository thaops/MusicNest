import { Platform, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilys } from "../constants/fontFamily";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.bgColor,
        paddingTop: Platform.OS === 'ios'? 42:42,
        paddingLeft:16,
        paddingRight:16
    },
    row:{
    flexDirection:"row",
    alignItems:"center"
    },

    text:{
        fontSize:16,
        color:colors.text,
        fontFamily: fontFamilys.regular
    },
    seaction:{
        paddingBottom:16
    },
    inbutSection:{
        backgroundColor: colors.gray,
        padding:10,
        borderRadius:8
    },
    tag:{
        padding:12,
        borderRadius:10
    },
    play:{
            justifyContent: 'center',
            alignItems: 'center',
            height: 69,
            width: 69,
            borderRadius: 50,
            backgroundColor: colors.decs,
            borderWidth:1,
            borderColor:colors.violet
        
    }
})