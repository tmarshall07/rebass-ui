import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { merge } from '../utils';
export const BaseButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    cn = '',
    className,
    disabled,
    rounded = false,
    variant,
    theme,
    color,
    ...rest
  } = props;
  const classes = theme[variant]?.colors[color] || [];
  if (rounded) classes.push('rounded-full');
  const classNames = merge(classes, className, cn);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    className: classNames,
    ref: ref
  }, rest));
});
BaseButton.displayName = 'BaseButton';
//# sourceMappingURL=Button.js.map