function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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