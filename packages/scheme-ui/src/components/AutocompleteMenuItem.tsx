import React from 'react';
import { SxProps } from 'rebass';
import { P } from './Text';

interface Props {
  text: string;
  onSelect?: (item: any) => void;
  sx?: SxProps;
  focused?: boolean;
}

const AutocompleteMenuItem = (props: Props) => {
  const { onSelect, text, focused, sx = {} } = props;
  return (
    <P
      p={2}
      sx={{
        cursor: 'pointer',
        ':hover': {
          bg: 'gray10',
        },
        ...(focused
          ? {
              bg: 'gray10',
            }
          : {}),
        ...{ sx },
      }}
      onClick={onSelect}
    >
      {text}
    </P>
  );
};

export default AutocompleteMenuItem;
