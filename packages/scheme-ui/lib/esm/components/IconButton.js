import _extends from "@babel/runtime/helpers/extends";
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