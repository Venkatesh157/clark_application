import React from 'react';
import {render} from '@testing-library/react-native';
import Search from '../src/components/Search/Search';

describe('Search', () => {
  it('renders the input correctly', () => {
    const {getByPlaceholderText} = render(
      <Search value="" onChange={() => {}} />,
    );
    const inputElement = getByPlaceholderText('Search Products');

    expect(inputElement).toBeTruthy();
  });

  it('displays the correct value in the input', () => {
    const {getByPlaceholderText} = render(
      <Search value="test value" onChange={() => {}} />,
    );
    const inputElement = getByPlaceholderText('Search Products');

    expect(inputElement.props.value).toBe('test value');
  });
});
