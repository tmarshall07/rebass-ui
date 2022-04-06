"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("@rebass/forms/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Switch = function Switch(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      disabled = props.disabled,
      checked = props.checked;
  return <_styledComponents.Switch sx={{
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
  }} {...props} />;
};

var _default = Switch;
exports["default"] = _default;
//# sourceMappingURL=Switch.js.map