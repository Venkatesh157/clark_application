import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductItem from '../src/components/ProductItem/ProductItem';

describe('ProductItem', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    description: 'description',
    price: 19.99,
    image: 'https://example.com/test_product.jpg',
    category: 'category',
    rating: {
      rate: 5.0,
      count: 120,
    },
  };

  it('renders product title and price correctly', () => {
    const {getByText} = render(
      <ProductItem product={product} onProductClick={() => {}} />,
    );
    const titleElement = getByText('Test Product');
    const priceElement = getByText('Price: $ 19.99');

    expect(titleElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });

  it('calls onProductClick when clicked', () => {
    const onProductClickMock = jest.fn();
    const {queryByText} = render(
      <ProductItem product={product} onProductClick={onProductClickMock} />,
    );
    const containerElement = queryByText('Test Product');

    fireEvent.press(containerElement);

    expect(onProductClickMock).toHaveBeenCalledTimes(1);
    expect(onProductClickMock).toHaveBeenCalledWith(product);
  });
});
