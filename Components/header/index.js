import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HeaderStyle } from './headerStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function Header(props) {
   
   
    return (
        <View>
            <View style={HeaderStyle.box1}>
                <TouchableOpacity style={HeaderStyle.btnIcon} >
                    <Icon name='chevron-left' style={HeaderStyle.icon} />
                </TouchableOpacity>
                <Text style={HeaderStyle.txtBox1}>Usuário</Text>
                <Image style={HeaderStyle.imgIcon} source={require('../../src/img/profile.png')} />
            </View>
            <View style={HeaderStyle.box2}>
                <Image style={HeaderStyle.img} source={props.require} />
                <Text style={HeaderStyle.txt}> {props.txt} </Text>

            </View>


        </View>
    );

   
};