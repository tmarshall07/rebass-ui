import React, { PropsWithRef } from 'react';
import { BaseBox, Flex as BaseFlex, BoxProps } from '@tannerjs/tailwind-base';

export const Box = (props: PropsWithRef<BoxProps>) => <BaseBox {...props} />;
export const Flex = (props: PropsWithRef<BoxProps>) => <BaseFlex {...props} />;
