import React from 'react';
import {View, Text} from 'react-native';
import useStyles from './EmptyComponent.styles';

function EmptyComponent() {
  const styles = useStyles();

  return (
    <View style={styles.emptyContainer}>
      <Text>No Product Found!</Text>
    </View>
  );
}

export default EmptyComponent;
