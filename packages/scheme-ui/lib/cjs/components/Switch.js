"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("@rebass/forms/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Switch = function Switch(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      disabled = props.disabled,
      checked = props.checked;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Switch, _extends({
    sx: {
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
    }
  }, props));
};

var _default = Switch;
exports["default"] = _default;
//# sourceMappingURL=Switch.js.map