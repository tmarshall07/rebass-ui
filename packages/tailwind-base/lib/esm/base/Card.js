import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { BaseBox } from './Box';
import { merge } from '../utils';
const defaultClasses = ['rounded-lg', 'border-solid'];
export const BaseCard = props => /*#__PURE__*/React.createElement(BaseBox, _extends({
  ref: props.ref
}, props, {
  cn: merge(defaultClasses, props.cn)
}));
export default BaseCard;
//# sourceMappingURL=Card.js.map