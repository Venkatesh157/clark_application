import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import useStyles from './ProductDetail.styles';

function ProductDetail({route}: {route: any}) {
  const styles = useStyles();
  const {product} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.chipContainer}>
        <Text style={styles.chip}>{product.category}</Text>
      </View>
      <View style={styles.priceRatingContainer}>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>{product.rating.rate} ★</Text>
      </View>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

export default ProductDetail;
