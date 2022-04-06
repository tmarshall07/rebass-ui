import _extends from "@babel/runtime/helpers/extends";
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