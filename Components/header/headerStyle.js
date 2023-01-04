import { StyleSheet } from 'react-native';

export const HeaderStyle = StyleSheet.create({
    container: {
        height: "100%",
    },

    box1: {
        zIndex: 1,
        width: 410,
        position: "absolute",
        backgroundColor: "#B0C4DE",
        height: 120,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#DCDCDC",
        flexDirection: 'row',
        padding: 30,
        paddingTop: 35
    },

    icon: {
        fontSize: 22,
        color: '#0C008C',
        marginTop: 10,
    },

    txtBox1: {
        marginLeft: 200,
        marginTop: 10,
        fontSize: 22,
        color: "#0C008C",
    },

    imgIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#0C008C',
        borderWidth: 2,
    },

    box2: {
        backgroundColor: "#F0F8FF",
        height: 230,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#DCDCDC",
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 100,
        flexDirection: 'row'
    },
    img: {
        height: 40,
        width: 40,

    },
    txt: {
        marginLeft: 5,
        fontSize: 23,
        color: "#0C008C",
    },


})