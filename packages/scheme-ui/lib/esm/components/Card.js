function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Box from './Box';

const Card = props => {
  const {
    boxShadow = 'large'
  } = props;
  return /*#__PURE__*/React.createElement(Box, _extends({
    p: [3, 4],
    bg: "bg-0",
    color: "text"
  }, props, {
    sx: {
      boxShadow,
      borderRadius: 10,
      ...(props.sx || {})
    }
  }));
};

export default Card;
//# sourceMappingURL=Card.js.map