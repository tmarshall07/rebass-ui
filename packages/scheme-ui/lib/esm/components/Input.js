import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Input as _Input } from '@rebass/forms/styled-components';

const Input = props => /*#__PURE__*/React.createElement(_Input, _extends({}, props, {
  sx: {
    borderRadius: 3,
    borderColor: 'transparent',
    bg: 'gray5',
    p: '0.9em',
    color: 'gray80',
    ...(props.sx || {})
  }
}));

export default Input;
//# sourceMappingURL=Input.js.map