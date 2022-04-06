import React, { forwardRef } from 'react';
import { Box as RebassBox, Flex as RebassFlex } from 'rebass/styled-components';
export const Box = forwardRef((props, ref) => {
  return <RebassBox color="text" {...props} ref={ref} />;
});
Box.displayName = 'Box';
export const Flex = forwardRef((props, ref) => <RebassFlex color="text" {...props} ref={ref} />);
Flex.displayName = 'Flex';
export default Box;
//# sourceMappingURL=Box.js.map