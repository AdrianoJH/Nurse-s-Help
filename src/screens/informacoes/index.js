import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../../Components/header/index';
import { InformacoesStyle } from './informacoesStyle';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';

export function Informacoes ( { navigation } ) {

    return (
        <View style={InformacoesStyle.container}>
        <Header txt='Informações' require = { require('../../img/info.png')}/>
        <View style={InformacoesStyle.box}>
            <Text style={InformacoesStyle.title} >Retirada de Pontos </Text>
            <Text style={InformacoesStyle.txt} >
                É um procedimento realizado após cirurgias,
                conforme a orientação do cirurgião responsável.
             </Text>
             <Text style={InformacoesStyle.title}>Informações Pré-Pedido</Text>
             <Text style={InformacoesStyle.txt}>
             É necessário possuir a Prescrição Médica. 
             Deve disponibilizar solução fisiológica, gazes e micropore.
             </Text>
             <Text style={InformacoesStyle.title}>Tempo Estimado</Text>
             <Text style={InformacoesStyle.txt}>Em torno de 30 minutos.</Text>
             <Text style={InformacoesStyle.title}>Média de Valor</Text>
             <Text style={InformacoesStyle.txt}>Em torno de R$50,00 à R$100,00</Text>

        </View>
        <TouchableOpacity style={InformacoesStyle.btnInfo} onPress={()=>{navigation.navigate('Prestadores')}} >
                <Text style={InformacoesStyle.txtBtn} > Agendar </Text>
            </TouchableOpacity>
        <NavigationTabBar navigation={navigation} />
    </View>

    );
};