import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { merge } from '../utils';
const classes = `
  cursor-pointer
  w-6 h-6
`;
const Checkbox = /*#__PURE__*/forwardRef(({
  label,
  checked,
  onChange,
  inputProps,
  labelProps
}) => {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: "flex gap-2 cursor-pointer group"
  }, labelProps), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, inputProps, {
    className: merge(classes, inputProps?.className)
  })), label);
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map