import React, { PropsWithRef } from 'react';
import { BaseCard, BoxProps } from '@tannerjs/tailwind-base';

export const Card = (props: PropsWithRef<BoxProps>) => <BaseCard {...props} />;
