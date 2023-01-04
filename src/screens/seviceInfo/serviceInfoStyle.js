import { StyleSheet } from 'react-native';

export const ServiceInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    box: {
        flex: 2
    },

    txt: {
        textAlign: 'center',
        fontSize: 19,
        marginTop: 50,
        color: '#0C008C',
    },

    box2: {
        marginLeft: 70,
        marginBottom: 170
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,

    },

    txtRadio: {
        fontSize: 19,
        color: '#0C008C',
    },

    btnRadio: {
        width: 160,
        height: 40,
        marginLeft: 130,
        marginBottom: 80,
        borderRadius: 20,
        backgroundColor: '#0C008C',
    },

    txtBtn: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 14,
        color: '#FFFF'
        

    }
});
