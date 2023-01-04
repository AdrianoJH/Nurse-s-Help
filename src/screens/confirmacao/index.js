import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header } from '../../../Components/header/index';
import { ConfirmacaoStyle } from './confirmacaoStyle';


export function Confirmacao() {

    return (
        <View style={ConfirmacaoStyle.container}>
            <Header txt='Confirmacao' require={require('../../img/check.png')} />
            <Text style={ConfirmacaoStyle.title}>
                O pagamento foi confirmado.
            </Text>
            <View style={ConfirmacaoStyle.box}>
                <Text style={ConfirmacaoStyle.txt}>
                    Procedimento: Retirada de Pontos
                </Text>
                <Text style={ConfirmacaoStyle.txt}>
                    Prestador: Adriano Rodrigues
                </Text>
                <Text style={ConfirmacaoStyle.txt}>
                    Data: 30/01/2023
                </Text>
                <Text style={ConfirmacaoStyle.txt}>
                    Horário: 10:00hrs
                </Text>
                <Text style={ConfirmacaoStyle.txt}>
                    Valor: R$100,00
                </Text>
                <Text style={ConfirmacaoStyle.txt}>
                    Pagamento: Cartão de crédito
                </Text>
            </View>
            <Text style={ConfirmacaoStyle.txt2}>
                Aguarde o procedimento.
                Não esqueça de avaliar o profissional, após o procedimento.
            </Text>
           
        </View>
    )
}