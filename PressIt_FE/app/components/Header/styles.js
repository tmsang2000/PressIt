import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contain: {
        height: 45,
        display: 'flex',
        flexDirection: 'row'
    },
    contentLeft: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: 60
    },
    contentRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 20,
        height: '100%',
    },
    contentCenter: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});