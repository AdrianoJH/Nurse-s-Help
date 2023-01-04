import React from 'react';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Header } from '../../../Components/header/index';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';
import { PrestadoresStyle } from './prestadoresStyle';
import { CardPrestadores } from '../../../Components/cardPrestadores/index';
import { dataPrestador } from '../../../data/prestador';
import { dataPrestador2 } from '../../../data/prestador';
import { dataPrestador3 } from '../../../data/prestador';
import  Avaliation  from '../../../Components/avaliation/index';
import Icon from 'react-native-vector-icons/Feather';


export function Prestadores({ navigation }) {

    return (
        <View style={PrestadoresStyle.container}>
            <Header txt='Prestadores' require={require('../../img/icon-profile.png')} />
            <View style={PrestadoresStyle.boxFilter}>
                <Image style={PrestadoresStyle.imgFilter} source={require('../../img/filter.png')} />
                <Text style={PrestadoresStyle.txtFilter}>
                    Filtrar
                </Text>
                <Text style={PrestadoresStyle.txtOrder}>
                    Ordenar por
                </Text>
                <Image style={PrestadoresStyle.imgOrder} source={require('../../img/down.png')} />
            
            </View>
            <Image style={PrestadoresStyle.imgProfile} source={require('../../img/profile.png')} />
            <View style={PrestadoresStyle.box}>
                <FlatList
                    data={dataPrestador}
                    keyExtractor={itens => itens.prest}
                    numColumns={1}
                    renderItem={(itens) => (
                        <CardPrestadores object={itens.item} />
                    )}
                    
                />
                
                <Avaliation />

                <View style={PrestadoresStyle.btnBox}>
                    <TouchableOpacity style={PrestadoresStyle.btnAgendar} onPress={() => { navigation.navigate('Agendamento') }}>
                        <Text style={PrestadoresStyle.txtBtnAgendar}>Agendar</Text>
                    </TouchableOpacity>
                    <Text style={PrestadoresStyle.saibaMais} onPress={() => {  navigation.navigate('SaibaMais')}}>
                        Saiba mais
                    </Text>
                    <Icon name='chevrons-right' style={PrestadoresStyle.icon} />
                </View>

            </View>
            <Image style={PrestadoresStyle.imgProfile2} source={require('../../img/profile.png')} />
            <View style={PrestadoresStyle.box2}>
                <FlatList
                    data={dataPrestador2}
                    keyExtractor={itens => itens.prest2}
                    numColumns={1}
                    renderItem={(itens) => (
                        <CardPrestadores object={itens.item} />
                    )}
                />
                <Avaliation />
                <View style={PrestadoresStyle.btnBox}>
                    <TouchableOpacity style={PrestadoresStyle.btnAgendar} onPress={() => { navigation.navigate('Agendamento') }}>
                        <Text style={PrestadoresStyle.txtBtnAgendar}>Agendar</Text>
                    </TouchableOpacity>
                    <Text style={PrestadoresStyle.saibaMais} onPress={() => {  navigation.navigate('SaibaMais') }}>
                        Saiba mais
                    </Text>
                    <Icon name='chevrons-right' style={PrestadoresStyle.icon} />
                </View>

            </View>
            <Image style={PrestadoresStyle.imgProfile3} source={require('../../img/profile.png')} />
            <View style={PrestadoresStyle.box3}>
                <FlatList
                    data={dataPrestador3}
                    keyExtractor={itens => itens.prest3}
                    numColumns={1}
                    renderItem={(itens) => (
                        <CardPrestadores object={itens.item} />
                    )}
                />
                <Avaliation />
                <View style={PrestadoresStyle.btnBox}>
                    <TouchableOpacity style={PrestadoresStyle.btnAgendar} onPress={() => { navigation.navigate('Agendamento') }}>
                        <Text style={PrestadoresStyle.txtBtnAgendar}>Agendar</Text>
                    </TouchableOpacity>
                    <Text style={PrestadoresStyle.saibaMais} onPress={() => {  navigation.navigate('SaibaMais') }}>
                        Saiba mais
                    </Text>
                    <Icon name='chevrons-right' style={PrestadoresStyle.icon} />

                </View>

            </View>
            <NavigationTabBar navigation={navigation} />
        </View>
    )
}