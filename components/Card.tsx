import React from 'react';
import { BoxProps } from 'rebass';
import Box from './Box';

const Card = (props: BoxProps) => (
  <Box
    p={[3, 4]}
    bg="white"
    {...props}
    sx={{
      boxShadow: 'large',
      borderRadius: 10,
      ...(props.sx || {}),
    }}
  />
);

export default Card;