"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checkbox;

var _react = _interopRequireDefault(require("react"));

var _forms = require("@rebass/forms");

var _colors = _interopRequireDefault(require("../helpers/colors"));

var _Box = _interopRequireDefault(require("./Box"));

var _useColors = _interopRequireDefault(require("../hooks/useColors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Checkbox(props) {
  var checked = props.checked,
      sx = props.sx,
      label = props.label,
      _props$labelSx = props.labelSx,
      labelSx = _props$labelSx === void 0 ? {} : _props$labelSx,
      _props$color = props.color,
      colorProp = _props$color === void 0 ? 'text' : _props$color;
  var colors = (0, _useColors["default"])();
  var colorsMap = colors || _colors["default"];
  var color = colorsMap[colorProp] || colorProp;
  var checkbox = <_Box.default // NOTE: The absolute positioning of the checkbox element causes it to be placed below the overflow container
  // PR filed with the rebassjs repo
  sx={{
    input: {
      position: 'fixed'
    },
    'svg path': {
      color: checked ? color : colors.text
    }
  }}>
      <_forms.Checkbox {...props} sx={_objectSpread({
      ':focus': {
        color: color
      }
    }, sx)} />
    </_Box.default>;
  return <>
      <_forms.Label sx={_objectSpread({
      display: 'flex',
      alignItems: 'center'
    }, labelSx)}>
        {checkbox}
        {label}
      </_forms.Label>
    </>;
}
//# sourceMappingURL=Checkbox.js.map