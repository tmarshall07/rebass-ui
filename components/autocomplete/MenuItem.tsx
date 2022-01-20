import React from 'react';
import { SxProps } from 'rebass';
import { P } from '../Text';

interface Props {
  onSelect: (item: any) => void;
  text: string;
  sx?: SxProps;
}

const MenuItem = (props: Props) => {
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

export default MenuItem;
