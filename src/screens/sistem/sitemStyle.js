import { StyleSheet } from 'react-native';

export const SistemStyle = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor: '#ffff'
    },
    box1:{
        zIndex: 1,
        width: "100%",
        position: "absolute",
        backgroundColor: "#B0C4DE",
        height: 120,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#DCDCDC",
        flexDirection: 'row',
    },

    imgProfile: {
        width: 50,
        height: 50,
        marginTop: 35,
        marginLeft: 30,
        borderRadius: 25,
        borderColor: '#0C008C',
        borderWidth: 2,

    },

    txtBox1:{
        marginLeft: 10,
        marginTop: 30,
        fontSize: 25,
        color: "#0C008C",
    },
    txt2Box1:{
        marginLeft: -145,
        marginTop: 60,
        fontSize: 15,
        color: "#0C008C",
    },
    icon:{
        color: "#0C008C",
        fontSize: 35,
        marginLeft: 140,
        marginTop: 40   
    },
    box2:{
        backgroundColor: "#F0F8FF",
        height: 310,
        borderBottomRightRadius: 50,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderColor: "#DCDCDC",
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 115
    },

    txtBox2: {
        fontSize: 20,
        color: "#0C008C",

    },

    box3:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 15,
    },
    txt:{
        color: "#0C008C",
        fontSize: 22,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    txtInput:{
        backgroundColor: "white",
        fontSize: 20,
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        width: "85%",
        borderColor: "#0C008C",
        borderWidth: 2,
        borderRadius: 25,
        marginTop: 10,
    }
})