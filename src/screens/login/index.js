import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { auth } from "../../services/firebase/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoginStyle } from "./loginStyle";


export function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signInUser(){
        await signInWithEmailAndPassword(auth, email, password)
        .then(() =>{
            {
                alert("Bem vindo!!")
                navigation.navigate('HomeSistem');
            }
        }).catch(error => alert(error));
    }
    
    
    return (
        <View style={LoginStyle.container}>
            <View style={LoginStyle.box1}>
                <Image style={LoginStyle.img} source={require('../../img/nurses-logo.png')} />
                <TextInput
                    style={LoginStyle.txtInput}
                    placeholder="Email"
                    placeholderTextColor='#808080'
                    value={email}
                    onChangeText={value => setEmail(value)}
                
                />
                <TextInput
                    style={LoginStyle.txtInput}
                    placeholder="Senha" 
                    placeholderTextColor='#808080'
                    value={password}
                    onChangeText={value => setPassword(value)}
                    maxLength={20}
                    secureTextEntry={true}
                />
                <Text style={LoginStyle.link1}>Esqueci minha senha</Text>
                <TouchableOpacity style={LoginStyle.btn1} onPress={() => signInUser ()}>
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

