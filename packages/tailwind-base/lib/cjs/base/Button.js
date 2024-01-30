"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseButton = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _excluded = ["cn", "className", "disabled", "rounded", "variant", "theme", "color"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var BaseButton = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _theme$variant;
  var _props$cn = props.cn,
    cn = _props$cn === void 0 ? '' : _props$cn,
    className = props.className,
    disabled = props.disabled,
    _props$rounded = props.rounded,
    rounded = _props$rounded === void 0 ? false : _props$rounded,
    variant = props.variant,
    theme = props.theme,
    color = props.color,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var classes = ((_theme$variant = theme[variant]) === null || _theme$variant === void 0 ? void 0 : _theme$variant.colors[color]) || [];
  if (rounded) classes.push('rounded-full');
  var classNames = (0, _utils.merge)(classes, className, cn);
  return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    disabled: disabled,
    className: classNames,
    ref: ref
  }, rest));
});
exports.BaseButton = BaseButton;
BaseButton.displayName = 'BaseButton';
//# sourceMappingURL=Button.js.map