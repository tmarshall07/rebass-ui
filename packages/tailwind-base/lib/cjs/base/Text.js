"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.A = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _excluded = ["cn", "theme", "variant", "color", "className"],
  _excluded2 = ["cn", "theme", "variant", "color", "className"],
  _excluded3 = ["cn", "theme", "variant", "color", "className"],
  _excluded4 = ["cn", "theme", "variant", "color", "className"],
  _excluded5 = ["cn", "theme", "variant", "color", "className"],
  _excluded6 = ["cn", "theme", "variant", "color", "className"],
  _excluded7 = ["cn", "theme", "variant", "color", "className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var getClassesFromProps = function getClassesFromProps(props) {
  var theme = props.theme,
    variant = props.variant,
    color = props.color,
    cn = props.cn,
    className = props.className;
  var classes = (0, _utils.getDefaultVariant)(theme, variant, color);
  return (0, _utils.merge)(classes, cn, className);
};
var H1 = exports.H1 = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("h1", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
H1.displayName = 'H1';
var H2 = exports.H2 = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded2);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("h2", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
H2.displayName = 'H2';
var H3 = exports.H3 = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded3);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("h3", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
H3.displayName = 'H3';
var H4 = exports.H4 = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded4);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("h4", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
H4.displayName = 'H4';
var H5 = exports.H5 = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded5);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("h5", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
H5.displayName = 'H5';
var P = exports.P = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded6);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("p", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
P.displayName = 'P';
var A = exports.A = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var cn = props.cn,
    theme = props.theme,
    variant = props.variant,
    color = props.color,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded7);
  var classNames = getClassesFromProps({
    theme: theme,
    variant: variant,
    color: color,
    cn: cn,
    className: className
  });
  return /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({
    ref: ref,
    className: classNames
  }, rest));
});
A.displayName = 'A';
//# sourceMappingURL=Text.js.map