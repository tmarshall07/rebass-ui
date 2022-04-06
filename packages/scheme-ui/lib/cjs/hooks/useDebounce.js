"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _debouncer = _interopRequireDefault(require("../class/debouncer"));

// Hook
function useDebounce(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  // State and setters for debounced value
  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  var debouncer = (0, _react.useRef)(new _debouncer["default"](value, delay));
  (0, _react.useEffect)(function () {
    debouncer.current.setValue(value, function () {
      setDebouncedValue(value);
    });
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

var _default = useDebounce;
exports["default"] = _default;
//# sourceMappingURL=useDebounce.js.map