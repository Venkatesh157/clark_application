import React from 'react';
import {TextInput} from 'react-native';
import {SearchProps} from './Search.entity';
import useStyles from './Search.styles';

function Search({value, onChange}: SearchProps) {
  const styles = useStyles();

  return (
    <TextInput
      value={value}
      onChange={onChange}
      placeholder="Search Products"
      style={styles.input}
    />
  );
}

export default Search;
