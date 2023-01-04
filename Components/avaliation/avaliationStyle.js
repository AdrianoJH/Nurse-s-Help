import { StyleSheet } from 'react-native';

export const AvaliationStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

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
        left: 45,
  

      },
      starImageStyle: {
        width: 23,
        height: 23,
        resizeMode: 'cover',
      },
  
});