import { StyleSheet } from 'react-native';

export const CarrinhoStyle = StyleSheet.create({


    box: {
        display: 'flex',
        width: 320,
        height: 240,
        marginLeft: 45,
        marginTop: 120,
        borderRadius: 30,
        backgroundColor: '#B0C4DE',
       
        
    },

    title: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 18,
        lineHeight: 10,
        fontWeight: 'bold',
        color: '#0C008C'
    },

    txt: {
        marginLeft: 15,
        marginTop: 30,
        lineHeight: 5,
        fontSize: 16,
        
        color: '#0C008C'
    },

        btnPagar: {
            width: 160,
            height: 40,
            marginLeft: 130,
            marginTop: 110,
            marginBottom: 115,
            borderRadius: 20,
            backgroundColor: '#0C008C',

        },

        txtBtn: {
            textAlign: 'center',
            marginTop: 8,
            fontSize: 14,
            color: '#FFFF'
            
    
        },

});