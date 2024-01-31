import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { merge } from '../utils';
const Box = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn = '',
    className,
    ...rest
  } = props;
  const classNames = merge(cn, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: classNames
  }, rest));
});
Box.displayName = 'Box';
export const Flex = props => /*#__PURE__*/React.createElement(Box, _extends({
  ref: props.ref
}, props, {
  cn: merge('flex', props.cn)
}));
export default Box;
//# sourceMappingURL=Box.js.map