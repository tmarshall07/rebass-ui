import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { BaseButton } from '../../base/Button';
import { theme } from './index';
const Button = props => {
  return /*#__PURE__*/React.createElement(BaseButton, _extends({
    theme: theme
  }, props));
};
const test = () => {
  return /*#__PURE__*/React.createElement(Button, {
    variant: "default"
  }, "Hello");
};
export default Button;
//# sourceMappingURL=Button.js.map