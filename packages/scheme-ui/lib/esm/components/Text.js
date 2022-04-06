function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Text as _Text } from 'rebass/styled-components';
const base = {
  color: 'gray90'
};
export const P = props => /*#__PURE__*/React.createElement(_Text, _extends({
  as: "p"
}, base, props));
export const A = props => /*#__PURE__*/React.createElement(_Text, _extends({
  as: "a",
  fontSize: 16,
  fontWeight: 400
}, base, props));
export const H4 = props => /*#__PURE__*/React.createElement(_Text, _extends({
  as: "h4"
}, base, props));
export const H3 = props => /*#__PURE__*/React.createElement(_Text, _extends({
  as: "h3"
}, base, props));
export const H2 = props => /*#__PURE__*/React.createElement(_Text, _extends({
  as: "h2"
}, base, props));
export const H1 = props => /*#__PURE__*/React.createElement(_Text, _extends({
  as: "h1",
  fontWeight: 700
}, base, props));
export const Text = props => /*#__PURE__*/React.createElement(_Text, _extends({}, base, props));
//# sourceMappingURL=Text.js.map