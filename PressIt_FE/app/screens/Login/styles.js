import { StyleSheet } from "react-native";
import * as Utils from "@utils";

export default StyleSheet.create({
    contain: {
        paddingHorizontal: 20,
        // paddingBottom: 100,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        // width: '80%',
        // height: 100,
    },
    img: {
        width: Utils.scaleWithPixel(180),
        height: Utils.scaleWithPixel(180),
        borderRadius: Utils.scaleWithPixel(180) / 2
    },
    textInput: {
        marginTop: 10, 
        width: '80%', 
        height: 50, 
        borderRadius: 100, 
        borderWidth: 1, 
        borderStyle: 'dashed',
        paddingHorizontal: 20,
    }
});