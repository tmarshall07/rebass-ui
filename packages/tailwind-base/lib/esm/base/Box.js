import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { merge } from '../utils';
export const BaseBox = /*#__PURE__*/forwardRef((props, ref) => {
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
BaseBox.displayName = 'BaseBox';
export const Flex = props => /*#__PURE__*/React.createElement(BaseBox, _extends({
  ref: props.ref
}, props, {
  cn: merge('flex', props.cn)
}));
//# sourceMappingURL=Box.js.map