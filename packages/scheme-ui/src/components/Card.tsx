import React from 'react';
import { BoxProps } from 'rebass';
import Box from './Box';

export type CardProps = BoxProps & {
  boxShadow?: 'small' | 'large';
};

const Card = (props: CardProps) => {
  const { boxShadow = 'large' } = props;
  return (
    <Box
      p={[3, 4]}
      bg="bg-0"
      color="text"
      {...props}
      sx={{
        boxShadow,
        borderRadius: 10,
        ...(props.sx || {}),
      }}
    />
  );
};

export default Card;
