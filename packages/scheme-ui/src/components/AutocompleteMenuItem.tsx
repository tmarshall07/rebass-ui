import React from 'react';
import { SxProps } from 'rebass';
import { P } from './Text';
import { Item } from './Autocomplete';

interface Props {
  onSelect: (item: Item) => void;
  text: string;
  sx?: SxProps;
}

const AutocompleteMenuItem = (props: Props) => {
  const { onSelect, text, sx = {} } = props;
  return (
    <P
      p={2}
      sx={{
        cursor: 'pointer',
        ':hover': {
          bg: 'gray10',
        },
        ...{ sx },
      }}
      onClick={onSelect}
    >
      {text}
    </P>
  );
};

export default AutocompleteMenuItem;
