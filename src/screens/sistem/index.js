import React from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { SistemStyle } from './sitemStyle';
import { CardService } from '../../../Components/cardService/index';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index'
import { dataScreens } from '../../../data/index'
import Icon from 'react-native-vector-icons/Feather';

export function HomeSistem({ navigation }) {

    return (
        <View style={SistemStyle.container}>
            <View style={SistemStyle.box1}>
                <Image style={SistemStyle.imgProfile} source={require('../../img/profile.png')} />
                <Text style={SistemStyle.txtBox1}>Olá, Usuário</Text>
                <Text style={SistemStyle.txt2Box1}>Seja bem-vindo!</Text>
                <Icon name = 'plus-circle' style = {SistemStyle.icon}/>    
            </View>
            <View style={SistemStyle.box2} >
                <Text style={SistemStyle.txtBox2}>O que você precisa?</Text>
                <TextInput style={SistemStyle.txtInput} />
                <Text style={SistemStyle.txt}>Ou</Text>
                <Text style={SistemStyle.txtBox2}>Clique no serviço abaixo</Text>
            </View>
            <View style={SistemStyle.box3}>
                <FlatList data={dataScreens} keyExtractor={itens => itens.content} numColumns={2} renderItem={(itens) => (
                    <TouchableOpacity onPress={() => { navigation.navigate(itens.item.screen) }}>
                        <CardService object={itens.item} />
                    </TouchableOpacity>
                )} />
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>
    );
};
