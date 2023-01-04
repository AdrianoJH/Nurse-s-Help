import React from "react";
import { StyleSheet } from 'react-native';

export const RegisterStyle = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#B0C4DE",
    },

    imgProfile: {
        width: 130,
        height: 130,
        borderColor: '#0C008C',
        borderWidth: 3,
        borderRadius: 65,

    },

    btnProfile: {
        top: 20,
        width: 150,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#0C008C',

    },

    txtBtnProfile: {
        top: 7,
        textAlign: 'center',
        fontSize: 12,
        color: '#FFFF',
    },

    txt: {
        top: -15,
        color: "#0C008C",
        fontSize: 22,
    },
    box1: {
        marginTop: 100,
        alignItems: "center"
    },
    box2: {
        padding: 25,
    },
    box3: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    box4: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    txtInput: {
        width: "100%",
        backgroundColor: "#FFFF",
        fontSize: 20,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    txtInput2: {
        width: "40%",
        backgroundColor: "#FFFF",
        fontSize: 20,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    btnText: {
        color: "#FFFF",
        fontSize: 18,
    },
    btnBack: {
        width: 120,
        height: 45,
        paddingLeft: 35,
        paddingTop: 12,
        backgroundColor: "#0C008C",
        borderTopRightRadius: 30,
    },

    btnCadastrar: {
        width: 130,
        height: 45,
        paddingLeft: 23,
        paddingTop: 12,
        backgroundColor: "#0C008C",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    btnNext: {
        width: 120,
        height: 45,
        paddingLeft: 35,
        paddingTop: 12,
        backgroundColor: "#0C008C",
        borderTopLeftRadius: 30,
    }

});