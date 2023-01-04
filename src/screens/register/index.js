import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RegisterStyle } from './registerStyle';




export function Register({ navigation }) {
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');
   

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={RegisterStyle.container}>
            <View style={RegisterStyle.box1}>
                <Text style={RegisterStyle.txt}>Insira seus dados e foto</Text>
                <Text style={RegisterStyle.txt}>de identificação</Text>
                {image && <Image style={RegisterStyle.imgProfile} source={{ uri: image }} />}
                <TouchableOpacity style={RegisterStyle.btnProfile} onPress={pickImage}>
                    <Text style={RegisterStyle.txtBtnProfile}>Escolha uma imagem</Text>
                </TouchableOpacity>
            </View>
            <View style={RegisterStyle.box2}>
                <TextInput
                    style={RegisterStyle.txtInput}
                    placeholder='Nome'
                    placeholderTextColor='#808080'
                />
                <TextInput
                    style={RegisterStyle.txtInput}
                    placeholder='Email'
                    placeholderTextColor='#808080'
                   
                />
                <TextInput
                    style={RegisterStyle.txtInput}
                    placeholder='Senha'
                    placeholderTextColor='#808080'
                    
                />
                <TextInput
                    style={RegisterStyle.txtInput}
                    placeholder='Repita a senha'
                    placeholderTextColor='#808080'
                
                />
                <View style={RegisterStyle.box3}>
                    <TextInput style={RegisterStyle.txtInput2} placeholder='DN' placeholderTextColor='#808080' />
                    <TextInput style={RegisterStyle.txtInput2} placeholder='Sexo' placeholderTextColor='#808080' />
                </View>
            </View>
            <View style={RegisterStyle.box4}>
                <TouchableOpacity style={RegisterStyle.btnBack} onPress={() => { navigation.goBack() }}>
                    <Text style={RegisterStyle.btnText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => checkPassword()} style={RegisterStyle.btnCadastrar}>
                <Text style={RegisterStyle.btnText}>Cadastrar</Text></TouchableOpacity>
                <TouchableOpacity style={RegisterStyle.btnNext} onPress={() => { navigation.navigate('Register2') }}>
                    <Text style={RegisterStyle.btnText}>Próximo</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
};
