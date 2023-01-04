import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { LoginStyle } from "./loginStyle";


export function Login({ navigation }) {
    
    return (
        <View style={LoginStyle.container}>
            <View style={LoginStyle.box1}>
                <Image style={LoginStyle.img} source={require('../../img/nurses-logo.png')} />
                <TextInput
                    style={LoginStyle.txtInput}
                    placeholder="Email"
                    placeholderTextColor='#808080'
                
                />
                <TextInput
                    style={LoginStyle.txtInput}
                    placeholder="Senha" 
                    placeholderTextColor='#808080'
                />
                <Text style={LoginStyle.link1}>Esqueci minha senha</Text>
                <TouchableOpacity style={LoginStyle.btn1} onPress={() => { navigation.navigate('HomeSistem') }}>
                    <Text style={LoginStyle.txtBtn1}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={LoginStyle.btn2} onPress={() => { navigation.navigate('Register') }}>
                    <Text style={LoginStyle.txtBtn2}>Cadastrar-me</Text>
                </TouchableOpacity>
            </View>
            <View style={LoginStyle.box2}>
                <Text style={LoginStyle.link2}>Se você é profissional?</Text>
                <TouchableOpacity style={LoginStyle.btn3} >
                    <Text style={LoginStyle.txtBtn3}>Clique aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

