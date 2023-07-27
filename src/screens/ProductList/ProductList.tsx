import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  NativeSyntheticEvent,
  RefreshControl,
  TextInputChangeEventData,
  View,
} from 'react-native';
import Search from '../../components/Search/Search';
import {ProductType} from '../../entity/product.type';
import useProduct from '../../hooks/useProduct';
import ProductItem from '../../components/ProductItem/ProductItem';
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent';

function ProductList({navigation}: {navigation: any}) {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const {products, loading, retry} = useProduct();

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }, [searchText, products]);

  if (loading) {
    return <ActivityIndicator />;
  }

  const handleRefresh = () => {
    retry();
    setSearchText('');
  };

  const handleSearchChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearchText(e.nativeEvent.text);
  };

  return (
    <View>
      <Search value={searchText} onChange={handleSearchChange} />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
        renderItem={({item}) => (
          <ProductItem
            product={item}
            onProductClick={(product: ProductType) =>
              navigation.navigate('Product Detail', {product})
            }
          />
        )}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  );
}

export default ProductList;
