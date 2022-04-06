import React from 'react';
import Box from './Box';

const Card = props => {
  const {
    boxShadow = 'large'
  } = props;
  return <Box p={[3, 4]} bg="bg-0" color="text" {...props} sx={{
    boxShadow,
    borderRadius: 10,
    ...(props.sx || {})
  }} />;
};

export default Card;
//# sourceMappingURL=Card.js.map