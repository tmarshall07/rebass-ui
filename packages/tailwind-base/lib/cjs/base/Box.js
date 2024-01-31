"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.BaseBox = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _excluded = ["cn", "className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var BaseBox = exports.BaseBox = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _props$cn = props.cn,
    cn = _props$cn === void 0 ? '' : _props$cn,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var classNames = (0, _utils.merge)(cn, className);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
BaseBox.displayName = 'BaseBox';
var Flex = exports.Flex = function Flex(props) {
  return /*#__PURE__*/_react["default"].createElement(BaseBox, (0, _extends2["default"])({
    ref: props.ref
  }, props, {
    cn: (0, _utils.merge)('flex', props.cn)
  }));
};
//# sourceMappingURL=Box.js.map