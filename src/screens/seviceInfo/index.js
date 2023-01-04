import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../../Components/header/index';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';
import { ServiceInfoStyle } from './serviceInfoStyle';
import { RadioButton } from 'react-native-paper'



export function ServiceMedicamentos({ navigation }) {


    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Medicamentos' require={require('../../img/icons/icon1.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};

export function ServiceAvaliacao({ navigation }) {
    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Avaliação' require={require('../../img/icons/icon2.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};

export function ServiceHigieneCuidado({ navigation }) {
    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Higiene e Cuidado' require={require('../../img/icons/icon3.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};

export function ServiceOrientação({ navigation }) {
    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Orientação' require={require('../../img/icons/icon4.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};

export function ServiceSondagem({ navigation }) {
    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Sondagem' require={require('../../img/icons/icon5.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};

export function ServiceCurativo({ navigation }) {

    const [checked, setChecked] = React.useState('null');
    const [dado, setDado] = React.useState('');
    const [op1, setOp1] = React.useState('Retirada de Pontos');
    const [op2, setop2] = React.useState('Curativo Simples');
    const [op3, setop3] = React.useState('Curativo Cirúrgico');
    const [op4, setop4] = React.useState('Curativo Médico/Grande');

    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Curativos' require={require('../../img/icons/icon6.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text style={ServiceInfoStyle.txt}>Qual tipo de procedimento?</Text>
            </View>
            <View style={ServiceInfoStyle.box2}>
                <View style={ServiceInfoStyle.radio}>
                    <RadioButton
                        color='#0C008C'
                        uncheckedColor='#0C008C'
                        value='um'
                        status={checked === 'um' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('um')} style={ServiceInfoStyle.radioBtn}
                    />
                    <Text style={ServiceInfoStyle.txtRadio}> {op1} </Text>
                </View>
                <View style={ServiceInfoStyle.radio}>
                    <RadioButton
                        color='#0C008C'
                        uncheckedColor='#0C008C'
                        value='dois'
                        status={checked === 'dois' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('dois')}
                    />
                    <Text style={ServiceInfoStyle.txtRadio}> {op2} </Text>
                </View>
                <View style={ServiceInfoStyle.radio}>
                    <RadioButton
                        color='#0C008C'
                        uncheckedColor='#0C008C'
                        value='tres'
                        status={checked === 'tres' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('tres')}
                    />
                    <Text style={ServiceInfoStyle.txtRadio}> {op3} </Text>
                </View>
                <View style={ServiceInfoStyle.radio}>
                    <RadioButton
                        color='#0C008C'
                        uncheckedColor='#0C008C'
                        value='quatro'
                        status={checked === 'quatro' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('quatro')}
                    />
                    <Text style={ServiceInfoStyle.txtRadio}> {op4} </Text>
                </View>
            </View>
            <TouchableOpacity style={ServiceInfoStyle.btnRadio} onPress={() => verifica ()} >
                <Text style={ServiceInfoStyle.txtBtn} > Próximo </Text>
            </TouchableOpacity>

            <NavigationTabBar navigation={navigation} />
        </View>

    );

    function verifica () {
        if (checked == 'um' ) {
            setDado(()=>{navigation.navigate('Informacoes')});

        } else if ( checked == 'dois') {
            setDado(()=>{navigation.navigate('Informacoes')});
          
        } else if ( checked == 'tres') {
            setDado(()=>{navigation.navigate('Informacoes')});

        } else if ( checked == 'quatro') {
            setDado(()=>{navigation.navigate('Informacoes')});
        }
    }
};

export function ServiceCuidadores({ navigation }) {
    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Cuidadores' require={require('../../img/icons/icon7.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};


export function ServiceOstomia({ navigation }) {
    return (
        <View style={ServiceInfoStyle.container}>
            <Header txt='Ostomias' require={require('../../img/icons/icon8.png')} />
            <View style={ServiceInfoStyle.box}>
                <Text>Em construçao...</Text>
            </View>
            <NavigationTabBar navigation={navigation} />
        </View>

    );
};
