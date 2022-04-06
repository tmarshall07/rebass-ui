function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Button from './Button';
export default function IconButton(props) {
  const {
    icon,
    sx,
    round,
    iconSize = 24,
    onClick,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    onClick: onClick,
    sx: {
      fontSize: iconSize,
      width: '1.75em',
      height: '1.75em',
      padding: 0,
      ...(round ? {
        borderRadius: 50
      } : {}),
      ...sx
    }
  }), icon);
}
//# sourceMappingURL=IconButton.js.map