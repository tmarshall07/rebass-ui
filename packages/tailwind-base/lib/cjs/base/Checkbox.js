"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var classes = "\n  cursor-pointer\n  w-6 h-6\n";
var Checkbox = /*#__PURE__*/(0, _react.forwardRef)(function (_ref) {
  var label = _ref.label,
    checked = _ref.checked,
    onChange = _ref.onChange,
    inputProps = _ref.inputProps,
    labelProps = _ref.labelProps;
  return /*#__PURE__*/_react["default"].createElement("label", (0, _extends2["default"])({
    className: "flex gap-2 cursor-pointer group"
  }, labelProps), /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, inputProps, {
    className: (0, _utils.merge)(classes, inputProps === null || inputProps === void 0 ? void 0 : inputProps.className)
  })), label);
});
Checkbox.displayName = 'Checkbox';
var _default = exports["default"] = Checkbox;
//# sourceMappingURL=Checkbox.js.map