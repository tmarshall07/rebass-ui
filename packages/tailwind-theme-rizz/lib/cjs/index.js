"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  theme: true
};
exports.theme = void 0;
var _button = require("./classes/button");
var _classes = require("./classes");
Object.keys(_classes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _classes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _classes[key];
    }
  });
});
var _Button = require("./Button");
Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});
var theme = {
  button: _button.buttonTheme
};
exports.theme = theme;
//# sourceMappingURL=index.js.map