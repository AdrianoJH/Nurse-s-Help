import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationTabBarStyle } from './navigationTabBarStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

export function NavigationTabBar( { navigation } ) {
    return (
        <View style = { NavigationTabBarStyle.container}>
            <View style = {NavigationTabBarStyle.box1}>
                <TouchableOpacity style = {NavigationTabBarStyle.icon} onPress = {() => {navigation.navigate('HomeSistem')}}>
                    <Icon name='home' style = {[{fontSize: 35, color: '#0C008C'}]} />
                </TouchableOpacity>
                <TouchableOpacity style = {NavigationTabBarStyle.icon} onPress = {() => {navigation.navigate('')}}>
                    <Icon name='search' style = {[{fontSize: 35, color: '#0C008C'}]} />
                </TouchableOpacity>
                <TouchableOpacity style = {NavigationTabBarStyle.icon} onPress = {() => {navigation.navigate('')}}>
                    <Icon name='question-circle-o' style = {[{fontSize: 35, color: '#0C008C'}]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}