import React, { PropsWithChildren } from 'react';
import { H1, H2, H3, H4, H5, P, A } from '@tannerjs/tailwind-base';
import { theme } from './index';

export type ButtonProps = ThemeButtonProps<typeof theme.button>;
export const Button = (props: PropsWithRef<ButtonProps>) => <BaseButton theme={theme.button} {...props} />;