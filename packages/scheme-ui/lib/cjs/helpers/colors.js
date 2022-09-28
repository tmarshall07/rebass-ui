"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultColors = void 0;
exports.validateColor = validateColor;

var _polished = require("polished");

var defaultColors = {
  text: '#282C30',
  gray5: (0, _polished.darken)(0.05, '#F8F8F8')
};
exports.defaultColors = defaultColors;

function validateColor(strColor) {
  // Guard invalid colors
  try {
    (0, _polished.parseToRgb)(strColor);
  } catch (e) {
    return null;
  }

  return strColor;
}
//# sourceMappingURL=colors.js.map