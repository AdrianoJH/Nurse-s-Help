import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { Header } from '../../../Components/header/index';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';
import { RadioButton } from 'react-native-paper'
import { PagamentoStyle } from './pagamentoStyle';


export function Pagamento({ navigation }) {
    const [checked, setChecked] = React.useState('null');
    const [dado, setDado] = React.useState('');
    const [op1, setOp1] = React.useState('Cartão de crédito');
    const [op2, setop2] = React.useState('Pix');

    return (
        <View style={PagamentoStyle.container}>
            <Header txt='Pagamento' require={require('../../img/pagamento.png')} />
            <View style={PagamentoStyle.radio}>
                <RadioButton
                    color='#0C008C'
                    uncheckedColor='#0C008C'
                    value='um'
                    status={checked === 'um' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('um')} style={PagamentoStyle.radioBtn}
                />
                <Text style={PagamentoStyle.txtRadio}> {op1} </Text>
                <Image style={PagamentoStyle.imgCred} source={require('../../img/cred.png')} />
                
            </View>
            <View style={PagamentoStyle.boxInput}>
                <TextInput style={PagamentoStyle.input} placeholder='Nome no Cartão' placeholderTextColor='#808080'/>
                <TextInput style={PagamentoStyle.input} placeholder='Número do Cartão' placeholderTextColor='#808080' />
            </View>
            <View style={PagamentoStyle.boxInput2}>
                <TextInput style={PagamentoStyle.input2} placeholder='MM/AA' placeholderTextColor='#808080' />
                <TextInput style={PagamentoStyle.input2} placeholder='CVC/CVV' placeholderTextColor='#808080' />
            </View>
            <TouchableOpacity style={PagamentoStyle.btnConfirm} onPress={() => verifica ()} >
                <Text style={PagamentoStyle.txtBtn}>
                    Confirmar
                </Text>
            </TouchableOpacity>
            <View style={PagamentoStyle.radio2}>
                    <RadioButton
                        color='#0C008C'
                        uncheckedColor='#0C008C'
                        value='dois'
                        status={checked === 'dois' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('dois')}
                    />
                    <Text style={PagamentoStyle.txtRadio}> {op2} </Text>
                    <Image style={PagamentoStyle.imgQr} source={require('../../img/qrcode.png')} />
                </View>

            <NavigationTabBar navigation={navigation} />
        </View>
    );

    function verifica () {
        if (checked == 'um' ) {
            setDado(()=>{navigation.navigate('Confirmacao')});

        } else if ( checked == 'dois') {
            setDado(()=>{navigation.navigate('Confirmacao')});
        }
    }        
}