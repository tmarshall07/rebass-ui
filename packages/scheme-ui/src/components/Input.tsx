import React, { forwardRef } from 'react';
import { Input as _Input, InputProps } from '@rebass/forms/styled-components';

const Input = forwardRef((props: InputProps, ref) => (
  <_Input
    {...props}
    ref={ref}
    sx={{
      borderRadius: 3,
      borderColor: 'transparent',
      bg: 'gray5',
      p: '0.9em',
      color: 'gray80',
      ...(props.sx || {}),
    }}
  />
));

Input.displayName = 'Input';

export default Input;
