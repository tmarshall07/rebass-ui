import React, { PropsWithRef } from 'react';
import { BaseBox, BoxProps } from './Box';
import { merge } from '../utils';

const defaultClasses = ['rounded-lg', 'border-solid'];

export const BaseCard = (props: PropsWithRef<BoxProps>) => (
  <BaseBox ref={props.ref} {...props} cn={merge(defaultClasses, props.cn)} />
);

export default BaseCard;
