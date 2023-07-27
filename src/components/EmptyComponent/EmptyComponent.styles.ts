import {StyleSheet} from 'react-native';

const useStyles = () =>
  StyleSheet.create({
    emptyContainer: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default useStyles;
