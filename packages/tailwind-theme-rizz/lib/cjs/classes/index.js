"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _background = require("./background");
Object.keys(_background).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _background[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _background[key];
    }
  });
});
var _button = require("./button");
Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _button[key];
    }
  });
});
var _text = require("./text");
Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _text[key];
    }
  });
});
//# sourceMappingURL=index.js.map