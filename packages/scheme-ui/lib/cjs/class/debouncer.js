"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Debouncer = /*#__PURE__*/function () {
  function Debouncer() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    _classCallCheck(this, Debouncer);

    this.value = initialValue;
    this.delay = delay;
    this.timeout = null;
  }

  _createClass(Debouncer, [{
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