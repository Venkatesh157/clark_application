import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {ProductItemProps} from './ProductItem.entity';
import useStyles from './ProductItem.styles';

function ProductItem({product, onProductClick}: ProductItemProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={() => onProductClick(product)}>
      <View style={styles.container}>
        <Image source={{uri: product.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>Price: $ {product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;
