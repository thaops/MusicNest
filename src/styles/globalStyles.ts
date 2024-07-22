import { Platform, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilys } from "../constants/fontFamily";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.bgColor,
        paddingTop: Platform.OS === 'ios'? 42:42,
        paddingLeft:23,
        paddingRight:23
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
    }
})