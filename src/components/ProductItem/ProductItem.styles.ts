import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      marginVertical: 4,
      marginHorizontal: 8,
    },
    textContainer: {
      flex: 1,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    price: {
      marginTop: 4,
      fontSize: 16,
      color: '#555',
    },
  });

export default useStyles;
