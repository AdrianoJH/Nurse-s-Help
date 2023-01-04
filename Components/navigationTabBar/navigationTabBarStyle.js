import { StyleSheet } from 'react-native';

export const NavigationTabBarStyle = StyleSheet.create({
    container:{
        height: 60,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#B0C4DE",
        alignItems: 'center'
    },
    box1:{
        marginTop: 13,
        width: "95%",
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon:{
        paddingLeft: 25,
        paddingRight: 35
    }
})