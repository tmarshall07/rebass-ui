"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Debouncer = /*#__PURE__*/function () {
  function Debouncer() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    (0, _classCallCheck2["default"])(this, Debouncer);
    this.value = initialValue;
    this.delay = delay;
    this.timeout = null;
  }

  (0, _createClass2["default"])(Debouncer, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(newValue, callback) {
      var _this = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.value = newValue;
        callback(newValue);
      }, this.delay);
    }
  }]);
  return Debouncer;
}();

var _default = Debouncer;
exports["default"] = _default;
//# sourceMappingURL=debouncer.js.map