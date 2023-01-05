import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';
import { SaibaMaisStyle } from './saibaMaisStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';


export function SaibaMais({ navigation }) {
   
   
    

    return (
        <View style={SaibaMaisStyle.container}>
             <View style={SaibaMaisStyle.header1}>
                <TouchableOpacity style={SaibaMaisStyle.btnIcon} >
                    <Icon name='chevron-left' style={SaibaMaisStyle.icon} />
                </TouchableOpacity>
                <Text style={SaibaMaisStyle.txtHeader1}>Usuário</Text>
                <Image style={SaibaMaisStyle.imgIcon} source={require('../../img/profile.png')} />
            </View>
            <View style={SaibaMaisStyle.header2}>
                <Image style={SaibaMaisStyle.imgHeader} source={require('../../img/profile.png')} />
                <Text style={SaibaMaisStyle.txtHeader}>Adriano Rodrigues  </Text>
                <Text style={SaibaMaisStyle.txtHeader2}>Enfermeiro      COREN: 12345  </Text>

            </View>
            
            <View style={SaibaMaisStyle.box}>
                <Text style={SaibaMaisStyle.title}>
                    Formação
                </Text>
                <Text style={SaibaMaisStyle.txt}>
                    Universidade Federal do Paraná (UFPR)
                    Graduação em 2015
                </Text>
                <Text style={SaibaMaisStyle.title}>
                    Especialidades
                </Text>
                <Text style={SaibaMaisStyle.txt}>
                    Universidade Federal do Paraná(UFPR)
                    Pós Graduação em Estratégia de Saúde da Família
                    Graduação em 2020
                </Text>
                <Text style={SaibaMaisStyle.title}>
                    Experiências
                </Text>
                <Text style={SaibaMaisStyle.txt}>
                    Enfermeiro Emergencialista
                    Hospital Nossa Senhora Das Graças
                    de março de 2016 á 2019.
                    Enfermeiro ESF 
                    Prefeitura Municipal de Curitiba
                    de março de 2019- atualmente
                </Text>
                <Text style={SaibaMaisStyle.title}>
                   Avaliações:
                </Text>
            </View>
            <View style={SaibaMaisStyle.box2}>
            <Image style={SaibaMaisStyle.img} source={require('../../img/profile.png')} />
            <Text style={SaibaMaisStyle.txtBox2}>
                Precisei de atendimento, fiz uma círurgia, e Adriano realizou os curativos,
                foi muito pontual e muito profissional,
                recomendo muito.
            </Text>
            <Text style={SaibaMaisStyle.titleBox2}>
                Maria Machado, 60 anos.
            </Text>
            </View>

            <NavigationTabBar navigation={navigation} />
        </View>
    )
}