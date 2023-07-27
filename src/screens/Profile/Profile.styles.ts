import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 10,
      borderRadius: 75,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#333',
    },
    image: {
      width: 150,
      height: 150,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
      color: '#555',
    },
    link: {
      fontSize: 18,
      color: '#007bff',
      textDecorationLine: 'underline',
    },
  });

export default useStyles;
