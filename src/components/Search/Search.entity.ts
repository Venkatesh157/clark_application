import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

export type SearchProps = {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
