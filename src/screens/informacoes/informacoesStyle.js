import { StyleSheet } from 'react-native';

export const InformacoesStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    box: {
        width: 315,
        height: 350,
        marginTop: 65,
        marginLeft: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFF',
        borderWidth: 2,
        borderColor: '#0C008C',
        borderRadius: 25

    },

    btnInfo: {
        width: 160,
        height: 40,
        marginLeft: 130,
        marginTop: 70,
        marginBottom: 100,
        borderRadius: 20,
        backgroundColor: '#0C008C',
    },

    txtBtn: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 14,
        color: '#FFFF'
        

    },

    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#0C008C',
    },

    txt: {
        width:280,
        textAlign: 'center',
        fontSize: 14,
        color: '#0C008C',
    }
    
});