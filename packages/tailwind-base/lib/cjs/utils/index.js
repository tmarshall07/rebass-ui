"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = exports.getDefaultVariant = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _clsx = _interopRequireDefault(require("clsx"));
var _tailwindMerge = require("tailwind-merge");
var getDefaultVariant = exports.getDefaultVariant = function getDefaultVariant(theme, variant, color) {
  var _themeVariant;
  var classes = [];
  // const classes = theme[variant || '']?.colors[color || ''] || [];
  var themeVariant = theme[variant || ''];
  if (!themeVariant) {
    // Get first variant as default
    themeVariant = theme[Object.keys(theme || {})[0]];
  }
  var colorVariant = (_themeVariant = themeVariant) === null || _themeVariant === void 0 ? void 0 : _themeVariant.colors[color || ''];
  if (!colorVariant) {
    var _themeVariant2, _themeVariant3;
    // Get first color as default
    classes.push.apply(classes, (0, _toConsumableArray2["default"])(((_themeVariant2 = themeVariant) === null || _themeVariant2 === void 0 ? void 0 : _themeVariant2.colors[Object.keys(((_themeVariant3 = themeVariant) === null || _themeVariant3 === void 0 ? void 0 : _themeVariant3.colors) || {})[0]]) || []));
  } else {
    classes.push.apply(classes, (0, _toConsumableArray2["default"])(colorVariant));
  }
  return classes;
};
var merge = exports.merge = function merge() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return (0, _tailwindMerge.twMerge)((0, _clsx["default"])(values));
};
//# sourceMappingURL=index.js.map