"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.Box = void 0;
var _react = _interopRequireDefault(require("react"));
var _tailwindBase = require("@tannerjs/tailwind-base");
var Box = exports.Box = function Box(props) {
  return /*#__PURE__*/_react["default"].createElement(_tailwindBase.BaseBox, props);
};
var Flex = exports.Flex = function Flex(props) {
  return /*#__PURE__*/_react["default"].createElement(_tailwindBase.Flex, props);
};
//# sourceMappingURL=Box.js.map