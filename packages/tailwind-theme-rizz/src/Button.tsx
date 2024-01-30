import React, { PropsWithRef } from 'react';
import { BaseButton, ThemeButtonProps } from '@tannerjs/tailwind-base';
import { theme } from './index';

export type ButtonProps = ThemeButtonProps<typeof theme.button>;

const Button = (props: PropsWithRef<ButtonProps>) => {
  return <BaseButton theme={theme} {...props} />;
};

const test = () => {
  return <Button variant="default">Hello</Button>
}

export default Button;