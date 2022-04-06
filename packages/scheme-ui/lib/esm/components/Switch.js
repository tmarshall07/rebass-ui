import _extends from "@babel/runtime/helpers/extends";
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