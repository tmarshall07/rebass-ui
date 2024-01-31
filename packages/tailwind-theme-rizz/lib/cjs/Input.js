"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _tailwindBase = require("@tannerjs/tailwind-base");
var _theme = require("./theme");
var Input = exports.Input = function Input(props) {
  return /*#__PURE__*/_react["default"].createElement(_tailwindBase.BaseInput, (0, _extends2["default"])({
    theme: _theme.theme.input
  }, props));
};
//# sourceMappingURL=Input.js.map