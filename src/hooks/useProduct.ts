import {useCallback, useEffect, useState} from 'react';
import {ProductType} from '../entity/product.type';

function useProduct() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const retry = () => {
    fetchProducts();
  };

  return {products, loading, retry};
}

export default useProduct;
