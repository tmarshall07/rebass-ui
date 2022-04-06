"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _useColors = _interopRequireDefault(require("../hooks/useColors"));

var _polished = require("polished");

var _colors = require("../helpers/colors");

var _styledComponents = require("rebass/styled-components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var TRANSPARENCY_HOVER = 0.95;
var TRANSPARENCY_ACTIVE = 0.92;

var outline = function outline(color) {
  return {
    bg: 'transparent',
    color: color,
    border: "1px solid ".concat((0, _polished.transparentize)(0.75, color)),
    ':hover': {
      bg: color ? (0, _polished.transparentize)(TRANSPARENCY_HOVER, color) : (0, _polished.transparentize)(TRANSPARENCY_HOVER, 'black')
    },
    ':active': {
      bg: color ? (0, _polished.transparentize)(TRANSPARENCY_ACTIVE, color) : (0, _polished.transparentize)(TRANSPARENCY_ACTIVE, 'black')
    }
  };
};

var transparent = function transparent(color) {
  return {
    bg: 'transparent',
    boxShadow: 'none',
    color: color,
    ':hover': {
      bg: color ? (0, _polished.transparentize)(TRANSPARENCY_HOVER, color) : (0, _polished.transparentize)(TRANSPARENCY_HOVER, 'black')
    },
    ':active': {
      bg: color ? (0, _polished.transparentize)(TRANSPARENCY_ACTIVE, color) : (0, _polished.transparentize)(TRANSPARENCY_ACTIVE, 'black')
    }
  };
};

var disabledSx = function disabledSx(bg) {
  var styles = {
    opacity: 0.5,
    cursor: 'initial',
    bg: bg
  };
  return _objectSpread(_objectSpread({}, styles), {}, {
    ':focus,:active,:hover': _objectSpread({}, styles)
  });
}; // eslint-disable-next-line complexity


function Button(props) {
  var _variants$variant, _variants$variant2;

  var _props$color = props.color,
      colorProp = _props$color === void 0 ? 'text' : _props$color,
      _props$bg = props.bg,
      bgProp = _props$bg === void 0 ? 'gray5' : _props$bg,
      _props$variants = props.variants,
      variantsProps = _props$variants === void 0 ? {} : _props$variants,
      children = props.children,
      sx = props.sx,
      startIcon = props.startIcon,
      variant = props.variant,
      endIcon = props.endIcon,
      disabledSxProp = props.disabledSx,
      _props$disabled = props.disabled,
      disabledProp = _props$disabled === void 0 ? false : _props$disabled,
      _props$enabled = props.enabled,
      enabled = _props$enabled === void 0 ? true : _props$enabled;
  var colors = (0, _useColors["default"])();
  var colorsMap = colors || _colors.defaultColors;

  var color = colorsMap[colorProp] || (0, _colors.validateColor)(colorProp) || _colors.defaultColors.text;

  var bg = colorsMap[bgProp] || (0, _colors.validateColor)(bgProp) || _colors.defaultColors.gray5;

  var variants = _objectSpread({
    outline: outline,
    transparent: transparent
  }, variantsProps);

  var isDisabled = !enabled || disabledProp;
  var disabledStyles = disabledSxProp || disabledSx;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, (0, _extends2["default"])({
    disabled: isDisabled,
    variant: variant,
    px: "1em",
    py: "0.5em"
  }, props, {
    sx: _objectSpread(_objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: color,
      bg: bg
    }, sx), {}, {
      ':focus': _objectSpread({
        outline: 'none'
      }, (sx === null || sx === void 0 ? void 0 : sx[':focus']) || {}),
      ':hover': _objectSpread({
        bg: (0, _polished.darken)(0.05, bg)
      }, (sx === null || sx === void 0 ? void 0 : sx[':hover']) || {}),
      ':active': _objectSpread({
        bg: (0, _polished.darken)(0.1, bg)
      }, (sx === null || sx === void 0 ? void 0 : sx[':active']) || {})
    }, isDisabled ? disabledStyles(bg) : {}), (_variants$variant = (_variants$variant2 = variants[variant]) === null || _variants$variant2 === void 0 ? void 0 : _variants$variant2.call(variants, color)) !== null && _variants$variant !== void 0 ? _variants$variant : {})
  }), startIcon && /*#__PURE__*/_react["default"].createElement(_styledComponents.Flex, {
    mr: 2,
    alignItems: "center"
  }, startIcon), children, endIcon && /*#__PURE__*/_react["default"].createElement(_styledComponents.Flex, {
    ml: 2,
    alignItems: "center"
  }, endIcon));
}
//# sourceMappingURL=Button.js.map