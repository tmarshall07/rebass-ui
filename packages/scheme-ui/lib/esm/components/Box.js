import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { Box as RebassBox, Flex as RebassFlex } from 'rebass/styled-components';
export const Box = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(RebassBox, _extends({
    color: "text"
  }, props, {
    ref: ref
  }));
});
Box.displayName = 'Box';
export const Flex = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(RebassFlex, _extends({
  color: "text"
}, props, {
  ref: ref
})));
Flex.displayName = 'Flex';
export default Box;
//# sourceMappingURL=Box.js.map