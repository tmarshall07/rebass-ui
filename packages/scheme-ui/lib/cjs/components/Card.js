"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./Box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Card = function Card(props) {
  var _props$boxShadow = props.boxShadow,
      boxShadow = _props$boxShadow === void 0 ? 'large' : _props$boxShadow;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], (0, _extends2["default"])({
    p: [3, 4],
    bg: "bg-0",
    color: "text"
  }, props, {
    sx: _objectSpread({
      boxShadow: boxShadow,
      borderRadius: 10
    }, props.sx || {})
  }));
};

var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=Card.js.map