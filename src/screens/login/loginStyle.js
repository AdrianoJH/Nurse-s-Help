import React from "react";
import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create({

    container: {
        flex: 1,
        padding:25,
        paddingTop: 45,
        backgroundColor: '#B0C4DE',
        height: '100%',
    },

    box1: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    box2: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    img: {
        marginTop: 60,
        marginBottom: 25,
        marginRight: 30,
        height: 100,
        width: 310
    },

    txtInput: {
        width: '100%',
        backgroundColor: '#FFFF',
        fontSize: 20,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,

    },

    link1: {
        width: '100%',
        color: '#0C008C',
        fontSize: 17,
        textAlign: 'right',
        marginTop: 10,
        marginBottom: 50,

    },

    link2: {
        color: '#0C008C',
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 8,

    },

    btn1: {
        width: '100%',
        backgroundColor: '#0C008C',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        marginBottom: 20,

    },

    txtBtn1: {
        color: '#FFFF',
        fontSize: 20,

    },

    btn2: {
        width: '80%',
        backgroundColor: '#FFFF',
        borderColor: '#0C008C',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        padding: 10,
        marginBottom: 120,

    },

    txtBtn2: {
        color: '#0C008C',
        fontSize: 18,

    },

    btn3: {
        width: '50%',
        backgroundColor: '#FFFF',
        borderColor: '#0C008C',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        padding: 5,

    },

    txtBtn3: {
        color: '#0C008C',
        fontSize: 18,
    }



});