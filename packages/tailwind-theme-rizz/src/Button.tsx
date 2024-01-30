import React, { PropsWithRef } from 'react';
import { BaseButton, ThemeButtonProps } from '@tannerjs/tailwind-base';
import { theme } from './index';

export type ButtonProps = ThemeButtonProps<typeof theme.button>;

export const Button = (props: PropsWithRef<ButtonProps>) => {
  return <BaseButton theme={theme.button} {...props} />;
};
