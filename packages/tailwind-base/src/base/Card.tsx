import React, { PropsWithRef } from 'react';
import Box, { BoxProps } from './Box';
import { merge } from '../utils';

const defaultClasses = ['rounded-lg', 'border-solid'];

const Card = (props: PropsWithRef<BoxProps>) => <Box ref={props.ref} {...props} cn={merge(defaultClasses, props.cn)} />;

export default Card;
