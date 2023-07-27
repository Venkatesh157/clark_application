import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    chipContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 10,
    },
    chip: {
      backgroundColor: '#f1f1f1',
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 50,
      marginRight: 10,
      marginBottom: 10,
    },
    priceRatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },
    rating: {
      backgroundColor: '#ffd700',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 5,
      color: '#fff',
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
    },
  });

export default useStyles;
