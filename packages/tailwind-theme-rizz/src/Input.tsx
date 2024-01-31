import React, { PropsWithRef } from 'react';
import { BaseInput, ThemeInputProps } from '@tannerjs/tailwind-base';
import { theme } from './theme';

export type InputProps = ThemeInputProps<typeof theme.input>;
export const Input = (props: PropsWithRef<InputProps>) => <BaseInput theme={theme.input} {...props} />;
