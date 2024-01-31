"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BaseCard = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Box = require("./Box");
var _utils = require("../utils");
var defaultClasses = ['rounded-lg', 'border-solid'];
var BaseCard = exports.BaseCard = function BaseCard(props) {
  return /*#__PURE__*/_react["default"].createElement(_Box.BaseBox, (0, _extends2["default"])({
    ref: props.ref
  }, props, {
    cn: (0, _utils.merge)(defaultClasses, props.cn)
  }));
};
var _default = exports["default"] = BaseCard;
//# sourceMappingURL=Card.js.map