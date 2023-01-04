import React from "react";
import { Text, View } from 'react-native';
import { CardPrestadoresStyle } from "./cardPrestadoresStyle";


export function CardPrestadores(list) {

    let prest1 = list.object
    let prest2 = list.object
    let prest3 = list.object

    return (
        <View style={CardPrestadoresStyle.container}>
            <Text style={CardPrestadoresStyle.name1}>
                {prest1.name1}
            </Text>
            <Text style={CardPrestadoresStyle.worker1}>
                {prest1.worker1}
            </Text>
            <Text style={CardPrestadoresStyle.distance1}>
                {prest1.distance1}
            </Text>
            <Text style={CardPrestadoresStyle.value1}>
                {prest1.value1}
            </Text>

            <Text style={CardPrestadoresStyle.name2}>
                {prest2.name2}
            </Text>
            <Text style={CardPrestadoresStyle.worker2}>
                {prest2.worker2}
            </Text>
            <Text style={CardPrestadoresStyle.distance2}>
                {prest2.distance2}
            </Text>
            <Text style={CardPrestadoresStyle.value2}>
                {prest2.value2}
            </Text>

            <Text style={CardPrestadoresStyle.name3}>
                {prest3.name3}
            </Text>
            <Text style={CardPrestadoresStyle.worker3}>
                {prest3.worker3}
            </Text>
            <Text style={CardPrestadoresStyle.distance3}>
                {prest3.distance3}
            </Text>
            <Text style={CardPrestadoresStyle.value3}>
                {prest3.value3}
            </Text>

           
        </View>
    )
}