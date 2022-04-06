"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/**
 * A react hook that fires the callback when clicking outside of the referenced element
 *
 * @param {Object} ref - react reference object with a `current` property
 * @param {Function} callback - a callback function that fires when clicking outside the element
 */
var useOutsideClick = function useOutsideClick(ref, callback) {
  var handleClick = function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClick);
    return function () {
      // Cleanup
      document.removeEventListener('click', handleClick);
    };
  });
};

var _default = useOutsideClick;
exports["default"] = _default;
//# sourceMappingURL=useClickOutside.js.map