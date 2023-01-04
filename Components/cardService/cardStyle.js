import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
    container:{
        width: 160,
        height: 110,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#0C008C",
        margin: 12.10,
    },
    txt:{
        fontSize: 16,
        paddingTop: 7,
        color: "#0C008C"
    },
    img:{
       height: 40,
       width: 40,
    }
})