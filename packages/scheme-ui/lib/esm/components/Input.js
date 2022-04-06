function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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