"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("../../base/Button");
var _index = require("./index");
var Button = function Button(props) {
  return /*#__PURE__*/_react["default"].createElement(_Button.BaseButton, (0, _extends2["default"])({
    theme: _index.theme
  }, props));
};
var test = function test() {
  return /*#__PURE__*/_react["default"].createElement(Button, {
    variant: "default"
  }, "Hello");
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=Button.js.map