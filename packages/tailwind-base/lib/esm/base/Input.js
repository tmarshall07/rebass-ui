import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { getDefaultVariant, merge } from '../utils';
export const BaseInput = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn = '',
    className,
    variant,
    theme,
    color,
    ...rest
  } = props;
  const classes = getDefaultVariant(theme, variant, color);
  const classNames = merge(classes, cn, className);
  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    className: classNames,
    ref: ref
  }, rest));
});
BaseInput.displayName = 'BaseInput';
//# sourceMappingURL=Input.js.map