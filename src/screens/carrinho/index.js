import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header } from '../../../Components/header/index';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';
import { CarrinhoStyle } from './carrinhoStyle';


export function Carrinho({ navigation }) {

    return (
        <View style={CarrinhoStyle.container}>
            <Header txt='Carrinho' require={require('../../img/carrinho.png')} />
            <View style={CarrinhoStyle.box}>
                <Text style={CarrinhoStyle.title}>
                    Procedimento:
                </Text>
                <Text style={CarrinhoStyle.title}>
                    Retirada de Pontos
                </Text>
                <Text style={CarrinhoStyle.txt}>
                    Prestador: Adriano Rodrigues
                </Text>
                <Text style={CarrinhoStyle.txt}>
                    Data: 30/01/2023
                </Text>
                <Text style={CarrinhoStyle.txt}>
                    Horário: 10:00hrs
                </Text>
                <Text style={CarrinhoStyle.txt}>
                    Valor: R$100,00
                </Text>
            </View>
            <TouchableOpacity style={CarrinhoStyle.btnPagar} onPress={() => { navigation.navigate('Pagamento') }}>
                <Text style={CarrinhoStyle.txtBtn}>
                    Pagar
                </Text>
            </TouchableOpacity>

            <NavigationTabBar navigation={navigation} />
        </View>
    )
}