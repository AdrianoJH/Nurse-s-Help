import { StyleSheet } from 'react-native';

export const AvaliationStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

      },
      textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
      },
      buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
      ratingBarStyle: {
        flexDirection: 'row',
        left: 40,
        top: -30,

      },
      starImageStyle: {
        width: 23,
        height: 23,
        resizeMode: 'cover',
      },
  
});