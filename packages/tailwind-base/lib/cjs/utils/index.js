"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _tailwindMerge = require("tailwind-merge");
var merge = function merge() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return (0, _tailwindMerge.twMerge)((0, _clsx["default"])(values));
};
exports.merge = merge;
//# sourceMappingURL=index.js.map