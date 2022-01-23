import React from 'react';
import { Switch as _Switch, SwitchProps as _SwitchProps } from '@rebass/forms/styled-components';

export type SwitchProps = _SwitchProps & {
  color?: 'string';
};

const Switch = (props: SwitchProps) => {
  const { color = 'primary', disabled, checked } = props;
  return (
    <_Switch
      sx={{
        borderColor: checked ? color : 'gray10',
        opacity: disabled ? 0.5 : 1,
        '> div': {
          backgroundColor: 'bg-0',
          borderColor: checked ? color : 'gray20',
        },
        '&[aria-checked=false]': {
          bg: 'gray5',
        },
        '&[aria-checked=true]': {
          bg: color,
        },
      }}
      {...props}
    />
  );
};

export default Switch;
