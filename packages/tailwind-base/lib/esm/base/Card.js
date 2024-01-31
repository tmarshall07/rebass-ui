import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Box from './Box';
import { merge } from '../utils';
const defaultClasses = ['rounded-lg', 'border-solid'];
const Card = props => /*#__PURE__*/React.createElement(Box, _extends({
  ref: props.ref
}, props, {
  cn: merge(defaultClasses, props.cn)
}));
export default Card;
//# sourceMappingURL=Card.js.map