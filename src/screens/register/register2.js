import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import  Icon  from "react-native-vector-icons/FontAwesome"
import { RegisterStyle2 } from './registerStyle2';


export function Register2 ({ navigation }) {
    return (
        <View style={RegisterStyle2.container}>
        <View style={RegisterStyle2.box1}>
            <Icon name="home" style={RegisterStyle2.icon}/>
            <Text style={RegisterStyle2.txt}> Dados Residenciais </Text>
        </View>
        <View style={RegisterStyle2.box2}>
            <TextInput placeholder="Endereço" placeholderTextColor='#808080' style={RegisterStyle2.txtInput}/>
            <TextInput placeholder="Bairro" placeholderTextColor='#808080' style={RegisterStyle2.txtInput}/>
            <TextInput placeholder="CEP" placeholderTextColor='#808080' style={RegisterStyle2.txtInput}/>
            <TextInput placeholder="Estado" placeholderTextColor='#808080' style={RegisterStyle2.txtInput}/>
            <TextInput placeholder="Telefone" placeholderTextColor='#808080' style={RegisterStyle2.txtInput}/>
        </View>
        <View style={RegisterStyle2.box3}>
            <TouchableOpacity style={RegisterStyle2.btnBack} onPress={()=>{navigation.goBack()}}>
                <Text style={RegisterStyle2.btnText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={RegisterStyle2.btnNext} onPress={()=>{navigation.navigate("Login")}}>
                <Text style={RegisterStyle2.btnText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}