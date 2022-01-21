import React from 'react';
import { BoxProps } from 'rebass';
import Box from './Box';

const Card = (props: BoxProps) => (
  <Box
    p={[3, 4]}
    bg="bg-0"
    color="text"
    {...props}
    sx={{
      boxShadow: 'large',
      borderRadius: 10,
      ...(props.sx || {}),
    }}
  />
);

export default Card;
