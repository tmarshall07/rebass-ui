"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));

var _Box = _interopRequireDefault(require("./Box"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Update the scroll to show more items as the user arrows up or down
 *
 * @param {HTMLElement} el
 * @param {number} index
 */
var updateScroll = function updateScroll(el, index) {
  var parent = el;

  if (parent !== null && parent !== void 0 && parent.children) {
    var child = parent.children[index];

    if (child) {
      var childOffsetTop = child.offsetTop;
      var parentScrollTop = parent.scrollTop;
      var parentHeight = parent.offsetHeight;
      var childHeight = child.offsetHeight;

      if (childOffsetTop + childHeight > parentHeight + parentScrollTop) {
        var scrollToY = childOffsetTop + childHeight - parentHeight;
        parent.scrollTo(0, scrollToY);
      } else if (childOffsetTop < parentScrollTop) {
        parent.scrollTo(0, childOffsetTop);
      }
    }
  }
};

var Autocomplete = function Autocomplete(props) {
  var value = props.value,
      placeholder = props.placeholder,
      _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      _props$menuProps = props.menuProps,
      menuProps = _props$menuProps === void 0 ? {} : _props$menuProps,
      _props$inputProps = props.inputProps,
      inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
      onChange = props.onChange,
      onSelect = props.onSelect,
      keyExtractor = props.keyExtractor,
      renderItem = props.renderItem;
  var menuRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuVisible = _useState2[0],
      setMenuVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedIndex = _useState4[0],
      setFocusedIndex = _useState4[1]; // Handle using arrows to scroll up and down


  (0, _react.useEffect)(function () {
    updateScroll(menuRef.current, focusedIndex);
  }, [focusedIndex]);
  var containerRef = (0, _react.useRef)();
  (0, _useClickOutside["default"])(containerRef, function () {
    return setMenuVisible(false);
  });

  var handleSelect = function handleSelect(item) {
    setMenuVisible(false);
    onSelect(item);
  };

  var handleFocus = function handleFocus(e) {
    var _inputProps$onFocus;

    setMenuVisible(true);
    (_inputProps$onFocus = inputProps.onFocus) === null || _inputProps$onFocus === void 0 ? void 0 : _inputProps$onFocus.call(inputProps, e);
  };

  var handleKeyDown = function handleKeyDown(e) {
    var newFocusedIndex = focusedIndex;

    switch (e.key) {
      case 'ArrowUp':
        // Up
        e.preventDefault();
        if (!(focusedIndex - 1 < 0)) newFocusedIndex -= 1;
        break;

      case 'ArrowDown':
        // Down
        e.preventDefault();
        if (!(focusedIndex + 1 >= items.length)) newFocusedIndex += 1;
        break;

      case 'Enter':
        // Enter
        e.preventDefault();
        handleSelect(items[focusedIndex]);
        break;

      default:
        break;
    }

    setFocusedIndex(newFocusedIndex);
  };

  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      position: 'relative'
    },
    ref: containerRef
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown
  }, inputProps)), menuVisible && !!items.length && /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
    ref: menuRef
  }, menuProps, {
    sx: _objectSpread({
      position: 'absolute',
      bg: 'bg-2',
      maxHeight: 300,
      width: '100%',
      overflow: 'auto',
      zIndex: 2,
      marginTop: 1,
      borderRadius: 5,
      boxShadow: 'large',
      borderStyle: 'solid',
      borderColor: 'gray5',
      borderWidth: 1
    }, (menuProps === null || menuProps === void 0 ? void 0 : menuProps.sx) || {})
  }), items.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      onClick: function onClick() {
        return handleSelect(item);
      },
      key: keyExtractor(item)
    }, renderItem(item, i === focusedIndex));
  })));
};

var _default = Autocomplete;
exports["default"] = _default;
//# sourceMappingURL=Autocomplete.js.map