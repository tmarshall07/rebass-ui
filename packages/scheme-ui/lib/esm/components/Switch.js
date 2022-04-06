function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Switch as _Switch } from '@rebass/forms/styled-components';

const Switch = props => {
  const {
    color = 'primary',
    disabled,
    checked
  } = props;
  return /*#__PURE__*/React.createElement(_Switch, _extends({
    sx: {
      borderColor: checked ? color : 'gray10',
      opacity: disabled ? 0.5 : 1,
      '> div': {
        backgroundColor: 'bg-0',
        borderColor: checked ? color : 'gray20'
      },
      '&[aria-checked=false]': {
        bg: 'gray5'
      },
      '&[aria-checked=true]': {
        bg: color
      }
    }
  }, props));
};

export default Switch;
//# sourceMappingURL=Switch.js.map