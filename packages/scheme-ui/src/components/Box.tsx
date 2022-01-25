import React, { forwardRef } from 'react';
import { BoxProps as _BoxProps, Box as RebassBox, Flex as RebassFlex, FlexProps } from 'rebass/styled-components';

export type BoxProps = _BoxProps;

export const Box = forwardRef((props: BoxProps, ref) => {
  return <RebassBox color="text" {...props} ref={ref} />;
});

Box.displayName = 'Box';

export const Flex = forwardRef((props: FlexProps, ref) => <RebassFlex color="text" {...props} ref={ref} />);

Flex.displayName = 'Flex';

export default Box;
