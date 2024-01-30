"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _tailwindBase = require("@tannerjs/tailwind-base");
var _index = require("./index");
var Button = function Button(props) {
  return /*#__PURE__*/_react["default"].createElement(_tailwindBase.BaseButton, (0, _extends2["default"])({
    theme: _index.theme.button
  }, props));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map