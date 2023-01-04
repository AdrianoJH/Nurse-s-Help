import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header } from '../../../Components/header/index';
import { NavigationTabBar } from '../../../Components/navigationTabBar/index';
import { AgendamentoStyle } from './agendamentoStyle';
import DatePicker from 'react-native-modern-datepicker';



export function Agendamento({ navigation }) {
    const [selectedDate, setSelectedDate] = useState('');
    
    return (
        <View style={AgendamentoStyle.container}>
            <Header txt='Agendamento' require={require('../../img/icon-calendar.png')} />
            <View style={AgendamentoStyle.box}>
                <DatePicker 
                    options={{                      
                        textHeaderColor: '#0C008C',
                        textDefaultColor: '#0C008C',
                        selectedTextColor: '#fff',
                        mainColor: '#0C008C',
                        textSecondaryColor: '#0C008C',
                    }}
                    current="2023-01-03"               
                    mode="datepicker"
                    minuteInterval={5}
                    onSelectedChange={date => setSelectedDate(date)}
                    
                />
            </View>
            <TouchableOpacity style={AgendamentoStyle.btnConfirm}  onPress={()=>{navigation.navigate('Carrinho')}}>
                <Text style={AgendamentoStyle.txtBtn}>
                    Confirmar
                </Text>
            </TouchableOpacity>

            <NavigationTabBar navigation={navigation} />
        </View>
    )
}