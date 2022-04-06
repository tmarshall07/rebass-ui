"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Text = require("./Text");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var AutocompleteMenuItem = function AutocompleteMenuItem(props) {
  var onSelect = props.onSelect,
      text = props.text,
      focused = props.focused,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx;
  return /*#__PURE__*/_react["default"].createElement(_Text.P, {
    p: 2,
    sx: _objectSpread(_objectSpread({
      cursor: 'pointer',
      ':hover': {
        bg: 'gray10'
      }
    }, focused ? {
      bg: 'gray10'
    } : {}), {
      sx: sx
    }),
    onClick: onSelect
  }, text);
};

var _default = AutocompleteMenuItem;
exports["default"] = _default;
//# sourceMappingURL=AutocompleteMenuItem.js.map