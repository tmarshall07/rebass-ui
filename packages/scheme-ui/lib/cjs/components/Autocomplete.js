"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));

var _Box = _interopRequireDefault(require("./Box"));

var _Input = _interopRequireDefault(require("./Input"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      menuVisible = _useState2[0],
      setMenuVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown
  }, inputProps)), menuVisible && !!items.length && /*#__PURE__*/_react["default"].createElement(_Box["default"], (0, _extends2["default"])({
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