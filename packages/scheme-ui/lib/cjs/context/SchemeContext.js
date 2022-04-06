"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemeProvider = SchemeProvider;
exports.useSchemeContext = exports.getSchemeSettings = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var SCHEMES = ['light', 'dark'];
var PREFERS_COLOR_SCHEME = '(prefers-color-scheme: dark)';
var STORAGE_KEYS;

(function (STORAGE_KEYS) {
  STORAGE_KEYS["mode"] = "settings:dark:mode";
  STORAGE_KEYS["value"] = "settings:dark:value";
})(STORAGE_KEYS || (STORAGE_KEYS = {}));

var getSchemeSettings = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([localStorage.getItem(STORAGE_KEYS['mode']), localStorage.getItem(STORAGE_KEYS['value'])]);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSchemeSettings() {
    return _ref.apply(this, arguments);
  };
}();

exports.getSchemeSettings = getSchemeSettings;

// The useLightDarkScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
function useLightDarkScheme() {
  var _useState = (0, _react.useState)('light'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      systemScheme = _useState2[0],
      setSystemScheme = _useState2[1];

  var _useState3 = (0, _react.useState)('light'),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      scheme = _useState4[0],
      setScheme = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      auto = _useState6[0],
      setAuto = _useState6[1]; // Set whether we should be using the device scheme or user's scheme


  var handleSetAuto = function handleSetAuto(isAuto) {
    if (isAuto) {
      void localStorage.setItem(STORAGE_KEYS['mode'], 'auto');
    } else {
      void localStorage.setItem(STORAGE_KEYS['mode'], 'user');
    }

    setAuto(isAuto);
  }; // Set the current scheme


  var handleSetScheme = function handleSetScheme(scheme) {
    void localStorage.setItem(STORAGE_KEYS['value'], scheme);
    setScheme(scheme);
  }; // Get initial stored user preference


  var getUserPreference = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _yield$getSchemeSetti, _yield$getSchemeSetti2, state, userScheme;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getSchemeSettings();

            case 2:
              _yield$getSchemeSetti = _context2.sent;
              _yield$getSchemeSetti2 = (0, _slicedToArray2["default"])(_yield$getSchemeSetti, 2);
              state = _yield$getSchemeSetti2[0];
              userScheme = _yield$getSchemeSetti2[1];

              if (state === 'user') {
                if (userScheme && userScheme !== scheme) setScheme(userScheme);
                setAuto(false);
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getUserPreference() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var updateSchemes = function updateSchemes(event) {
      var newColorScheme = event.matches ? 'dark' : 'light';
      setSystemScheme(newColorScheme);
    };

    void getUserPreference();
    window.matchMedia(PREFERS_COLOR_SCHEME).addEventListener('change', updateSchemes);
    var scheme = window.matchMedia(PREFERS_COLOR_SCHEME) ? 'dark' : 'light';
    setSystemScheme(scheme);
    return function () {
      window.matchMedia(PREFERS_COLOR_SCHEME).removeEventListener('change', updateSchemes);
    };
  }, []);
  return {
    scheme: auto ? systemScheme : scheme,
    userScheme: scheme,
    auto: auto,
    setScheme: handleSetScheme,
    setAuto: handleSetAuto
  };
}

var SchemeContext = /*#__PURE__*/_react["default"].createContext({
  colors: null,
  scheme: 'light'
});

function SchemeProvider(_ref3) {
  var _ref3$theme = _ref3.theme,
      theme = _ref3$theme === void 0 ? {} : _ref3$theme,
      _ref3$scheme = _ref3.scheme,
      scheme = _ref3$scheme === void 0 ? '' : _ref3$scheme,
      _ref3$colorSchemes = _ref3.colorSchemes,
      colorSchemes = _ref3$colorSchemes === void 0 ? {} : _ref3$colorSchemes,
      children = _ref3.children;
  // Get current light / dark scheme
  var colorScheme = useLightDarkScheme(); // Use passed scheme if it exists, otherwise use light / dark, otherwise use first available scheme

  var colors = colorSchemes[scheme] || colorSchemes[colorScheme.scheme] || colorSchemes[Object.keys(colorSchemes)[0]];
  return /*#__PURE__*/_react["default"].createElement(SchemeContext.Provider, {
    value: _objectSpread(_objectSpread({}, colorScheme), {}, {
      colors: colors
    })
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, theme), {}, {
      colors: colors
    })
  }, children));
}

var useSchemeContext = function useSchemeContext() {
  return (0, _react.useContext)(SchemeContext);
};

exports.useSchemeContext = useSchemeContext;
//# sourceMappingURL=SchemeContext.js.map