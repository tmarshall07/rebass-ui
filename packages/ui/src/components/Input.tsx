import React from 'react';
import { Input as _Input, InputProps } from '@rebass/forms/styled-components';

const Input = (props: InputProps) => (
  <_Input
    {...props}
    sx={{
      borderRadius: 3,
      borderColor: 'transparent',
      bg: 'gray5',
      p: '0.9em',
      color: 'gray80',
      ...(props.sx || {}),
    }}
  />
);

export default Input;
