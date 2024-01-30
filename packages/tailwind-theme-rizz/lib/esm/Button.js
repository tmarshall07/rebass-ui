import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { BaseButton } from '@tannerjs/tailwind-base';
import { theme } from './index';
const Button = props => {
  return /*#__PURE__*/React.createElement(BaseButton, _extends({
    theme: theme.button
  }, props));
};

// const test = () => {
//   return <Button variant="default">Hello</Button>;
// };

export default Button;
//# sourceMappingURL=Button.js.map