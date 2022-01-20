import React, { forwardRef } from 'react';
import {
  BoxProps,
  Box as RebassBox,
  Flex as RebassFlex,
  FlexProps,
} from 'rebass/styled-components';

export const Box = forwardRef((props: BoxProps, ref) => {
  return <RebassBox {...props} ref={ref} />;
});

export const Flex = forwardRef((props: FlexProps, ref) => (
  <RebassFlex {...props} ref={ref} />
));

export default Box;
