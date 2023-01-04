import { StyleSheet } from 'react-native';

export const RegisterStyle2 = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#9FB3C8",
    },
    box1:{
        marginTop: 140,
        alignItems:"center"
    },
    box2:{
        padding: 25,
    },
    box3:{
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "flex-end"
    },
    icon:{
        fontSize: 50,
        marginBottom: 10,
        color:"#0C008C",
    },
    txt:{
        color:"#0C008C",
        fontSize: 28,
    },
    txtInput:{
        width:"100%",
        backgroundColor:"#EFFCF6",
        fontSize: 20,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    txtInput2:{
        width:"40%",
        backgroundColor:"#EFFCF6",
        fontSize: 20,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },

    btnText:{
        color: "#EFFCF6",
        fontSize: 18,
    },

    btnBack:{
        width: 120,
        height: 45,
        paddingLeft: 35,
        paddingTop: 12,
        backgroundColor: "#0C008C",
        borderTopRightRadius: 30,
    },

    btnNext:{
        width: 120,
        height: 45,
        paddingLeft: 17,
        paddingTop: 12,
        backgroundColor: "#0C008C",
        borderTopLeftRadius: 30,
    }
})