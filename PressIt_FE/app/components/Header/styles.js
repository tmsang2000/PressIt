import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contain: {
        height: 45,
        display: flex,
        flexDirection: 'row'
    },
    contentLeft: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: 60
    },
    contentRight: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: 60
    },  
    contentCenter: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});