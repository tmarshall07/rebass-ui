import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import { Input as _Input } from '@rebass/forms/styled-components';
const Input = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(_Input, _extends({}, props, {
  ref: ref,
  sx: {
    borderRadius: 3,
    borderColor: 'transparent',
    bg: 'gray5',
    p: '0.9em',
    color: 'gray80',
    ...(props.sx || {})
  }
})));
Input.displayName = 'Input';
export default Input;
//# sourceMappingURL=Input.js.map